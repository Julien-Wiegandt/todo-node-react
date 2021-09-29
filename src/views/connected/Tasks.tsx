import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Redirect } from "react-router";
import { Header } from "../../components/Header";
import { SubHeader } from "../../components/SubHeader";
import { INavbarItem, Navbar } from "../../components/Navbar";
import authServices from "../../services/auth.services";
import { Footer } from "../../components/Footer";
import { ReactComponent as AddIcon } from "../../assets/icons/plus-lg.svg";
import { Spacer } from "../../components/Spacer";
import taskGroupService from "../../services/taskGroup.service";
import userService from "../../services/user.service";
import ITaskGroup from "../../models/TaskGroup";
import ITask from "../../models/Task";
import { Task } from "../../components/Task";
import { Line } from "../../components/Line";
import taskService from "../../services/task.service";

export function Tasks() {
  const currentUser = authServices.getCurrentUser();
  const [taskGroups, setTaskGroups] = useState<ITaskGroup[]>([]);
  const [currentTaskGroup, setCurrentTaskGroup] = useState(-1);
  const [tasks, setTasks] = useState<ITask[]>([]);

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
  }, []);

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
          setTasks(res.data);
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

  const changeTaskToDo = (task: ITask) => {
    const payload = {
      done: false,
    };
    taskService
      .updateTask(task.id, payload)
      .then((res) => {
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

  if (!currentUser) {
    return <Redirect to="/" />;
  }
  return (
    <Container>
      <Header title="Tasks"></Header>
      <SubHeader />
      <Navbar items={navbarItems} />
      <TasksContainer>
        <Spacer height="20px" />
        {tasks.map((task) => {
          if (!task.done)
            return <Task key={task.id} toggleTask={changeTaskToDone} task={task} />;
        })}
        <Spacer height="20px" />
        <Line />
        <Spacer height="20px" />
        {tasks.map((task) => {
          if (task.done)
            return <Task key={task.id} toggleTask={changeTaskToDo} task={task} />;
        })}
        <Spacer height="100%" />
      </TasksContainer>
      <Footer callback={() => console.log("click")} icon={<AddIcon />} />
    </Container>
  );
}

const Container = styled.div``;

const TasksContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
