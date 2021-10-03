import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Redirect } from "react-router";
import { Header } from "../../components/Header";
import { SubHeader } from "../../components/SubHeader";
import { INavbarItem, Navbar } from "../../components/Navbar";
import authServices from "../../services/auth.services";
import { Footer } from "../../components/Footer";
import taskGroupService from "../../services/taskGroup.service";
import userService from "../../services/user.service";
import ITaskGroup from "../../models/TaskGroup";
import ITask from "../../models/Task";
import { Task } from "../../components/Task";
import { Line } from "../../components/Line";
import taskService from "../../services/task.service";
import { AddIcon, ListMenu, VerticalDots } from "../../assets/icons/icons";
import { Spacer } from "../../components/Spacer";

export function Tasks() {
  const currentUser = authServices.getCurrentUser();
  const [taskGroups, setTaskGroups] = useState<ITaskGroup[]>([]);
  const [currentTaskGroup, setCurrentTaskGroup] = useState(-1);
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [toAddTasks, setToAddTasks] = useState<ITask[]>([]);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [hideFooterButton, setHideFooterButton] = useState(false);

  // GET USER'S TASKGROUPS
  useEffect(() => {
    userService
      .getUserTaskGroups(currentUser.id)
      .then((res) => {
        setTaskGroups(res.data);
        setCurrentTaskGroup(res.data[0].id);
      })
      .catch((err) => {
        console.log("getUserTaskGroups failure : ", err);
      });
  }, [currentUser.id]);

  let navbarItems: INavbarItem[] = [];
  taskGroups.forEach((taskGroup) => {
    navbarItems.push({
      title: taskGroup.title,
      callback: () => setCurrentTaskGroup(taskGroup.id),
    });
  });

  // GET CURRENT TASKGROUP'S TASKS
  useEffect(() => {
    if (currentTaskGroup !== -1)
      taskGroupService
        .getTaskGroupTasks(currentTaskGroup)
        .then((res) => {
          let data = res.data;
          data.sort((a: ITask, b: ITask) => {
            return b.id - a.id;
          });
          setTasks(data);
        })
        .catch((err) => {
          console.log("getTaskGroupTasks failed : ", err);
        });
  }, [currentTaskGroup]);

  // UPDATE TASK
  const changeTaskToDone = (task: ITask) => {
    const payload = {
      done: true,
    };
    taskService
      .updateTask(task.id, payload)
      .then((res) => {
        const tempTasks = tasks.map((taskItem) => {
          if (taskItem.id === task.id) {
            taskItem.done = true;
          }
          return taskItem;
        });
        setTasks(tempTasks);
      })
      .catch((err) => {
        console.log("updateTask failed : ", err);
      });
  };

  // ADD TEMP TASK
  const handleTempTaskAdd = () => {
    const task: ITask = {
      id: (toAddTasks.length + 1) * -1,
      title: "",
      done: false,
    };
    const temp = [...toAddTasks];
    temp.unshift(task);
    setToAddTasks(temp);
  };

  // ADD TASK
  const handleAddTask = (task: ITask) => {
    const payload = {
      title: task.title,
      done: task.done,
    };
    taskService
      .createTask(currentTaskGroup, payload)
      .then((res) => {
        // ADD Task to local array
        const temp = [...tasks];
        temp.unshift(res.data);
        setTasks(temp);
        // DELETE Task from local temp array
        const filtered = toAddTasks.filter((tempTask) => {
          if (tempTask.id !== task.id) return tempTask;
          return false;
        });
        setToAddTasks(filtered);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  /**
   * Handle toggle done task
   * @param task
   */
  const changeTaskToDo = (task: ITask) => {
    const payload = {
      done: false,
    };
    taskService
      .updateTask(task.id, payload)
      .then(() => {
        const tempTasks = tasks.map((taskItem) => {
          if (taskItem.id === task.id) {
            taskItem.done = false;
          }
          return taskItem;
        });
        setTasks(tempTasks);
      })
      .catch((err) => {
        console.log("updateTask failed : ", err);
      });
  };

  const handleLeftMenuOpen = () => {
    setDropdownVisible(!dropdownVisible);
    setHideFooterButton(!hideFooterButton);
  };

  if (!currentUser) {
    return <Redirect to="/" />;
  }
  return (
    <Container>
      <HeaderContainer>
        <Header title="Tasks"></Header>
        <SubHeader />
        <Navbar items={navbarItems} />
      </HeaderContainer>
      <TasksContainer>
        <Spacer height="181px" />
        {toAddTasks.map((task) => {
          return (
            <Task
              key={task.id}
              editMode={true}
              handleAddTask={handleAddTask}
              toggleTask={() => console.log("nop")}
              task={task}
            />
          );
        })}
        {tasks.map((task) => {
          if (!task.done)
            return <Task key={task.id} toggleTask={changeTaskToDone} task={task} />;
          return false;
        })}
        <Spacer height="20px" />
        <Line />
        <Spacer height="20px" />
        {tasks.map((task) => {
          if (task.done)
            return <Task key={task.id} toggleTask={changeTaskToDo} task={task} />;
          return false;
        })}
        <Spacer height="60px" />
      </TasksContainer>
      <Footer
        hideFooterButton={hideFooterButton}
        callback={handleTempTaskAdd}
        icon={<AddIcon />}
      >
        <FooterContainer>
          <DropdownMenu visible={dropdownVisible}>
            {taskGroups.map((group) => {
              if (group.id === currentTaskGroup)
                return (
                  <DropdownButton
                    active={true}
                    onClick={() => setCurrentTaskGroup(group.id)}
                  >
                    {group.title}
                  </DropdownButton>
                );
              return (
                <DropdownButton onClick={() => setCurrentTaskGroup(group.id)}>
                  {group.title}
                </DropdownButton>
              );
            })}
            <Line />
            <DropdownButton>Add a list</DropdownButton>
          </DropdownMenu>
          <IconButton onClick={handleLeftMenuOpen}>
            <ListMenu />
          </IconButton>
          <IconButton>
            <VerticalDots />
          </IconButton>
        </FooterContainer>
      </Footer>
    </Container>
  );
}

const Container = styled.div`
  background-color: #f5f5f6;
  width: 100%;
`;

const TasksContainer = styled.main`
  display: flex;
  flex-direction: column;
`;

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

const IconButton = styled.button`
  border: none;
  background-color: transparent;
  position: relative;

  svg {
    width: 26px;
    height: 26px;
    color: #ffffff;
  }
  :hover {
    cursor: pointer;
  }
`;

type DropDownProps = {
  visible: boolean;
};

const DropdownMenu = styled.div<DropDownProps>`
  display: ${(props) => {
    return props.visible ? "flex" : "none";
  }};
  position: absolute;
  left: 0px;
  bottom: 48px;
  width: 100%;
  flex-direction: column;
  background-color: #5f5fc4;
`;

type DropdownButtonProps = {
  active?: boolean;
};

const DropdownButton = styled.button<DropdownButtonProps>`
  border: none;
  padding: 8px;
  background-color: ${(props) => {
    return props.active ? "#5f5fc4" : "#FFFFFF";
  }};
  /* Text */
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 1px;
  color: ${(props) => {
    return props.active ? "#FFFFFF" : "#000000";
  }};
  :hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;
