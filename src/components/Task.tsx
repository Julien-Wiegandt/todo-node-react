import React, { FormEvent, useState } from "react";
import styled from "styled-components";
import { CheckIcon, CircleIcon } from "../assets/icons/icons";
import ITask from "../models/Task";

type props = {
  task: ITask;
  toggleTask: (task: ITask) => unknown;
  editMode?: boolean;
  handleAddTask?: (task: ITask) => unknown;
};

export function Task(props: props) {
  const [title, setTitle] = useState(props.task.title);

  const handleAddTask = (e: FormEvent) => {
    e.preventDefault();
    props.task.title = title;
    props.handleAddTask && props.handleAddTask(props.task);
  };
  return (
    <Container>
      {/* <Spacer width="5%" /> */}
      <Button onClick={() => props.toggleTask(props.task)}>
        {props.task.done ? <CheckIcon /> : <CircleIcon />}
      </Button>
      {/* <Spacer width="20px" /> */}
      {props.editMode ? (
        <form onSubmit={(event) => handleAddTask(event)}>
          <Input
            type="text"
            autoFocus
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </form>
      ) : (
        <Title done={props.task.done}>{props.task.title}</Title>
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 5px;
  overflow: hidden;
`;

const Button = styled.button`
  border: none;
  background-color: transparent;
  :hover {
    cursor: pointer;
  }
`;

type StylePorps = {
  done: boolean;
};

/**
 * @todo : Bug avec les tres long titre d'un seul mot
 */
const Title = styled.p<StylePorps>`
  ${(props) => {
    return props.done && "text-decoration-line: line-through";
  }};
  margin: 0;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: #18227c;
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid #18227c;
  margin: 0;
  height: 21px;
  background-color: transparent;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: #18227c;

  :focus {
    outline: 0;
  }
`;
