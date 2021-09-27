import React, { useState } from "react";
import styled from "styled-components";
import { Redirect } from "react-router";
import { Header } from "../../components/Header";
import { SubHeader } from "../../components/SubHeader";
import { INavbarItem, Navbar } from "../../components/Navbar";
import authServices from "../../services/auth.services";
import { Footer } from "../../components/Footer";
import { ReactComponent as AddIcon } from "../../assets/icons/plus-lg.svg";

export function Tasks(): JSX.Element {
  const currentUser = authServices.getCurrentUser();
  const [currentTaskGroup, setCurrentTaskGroup] = useState(0);
  const navbarItems: INavbarItem[] = [
    { title: "GROUP 1", callback: () => setCurrentTaskGroup(0) },
    { title: "GROUP 2", callback: () => setCurrentTaskGroup(1) },
    { title: "GROUP 3", callback: () => setCurrentTaskGroup(2) },
  ];

  if (!currentUser) {
    return <Redirect to="/" />;
  }
  return (
    <Container>
      <Header title="Tasks"></Header>
      <SubHeader />
      <Navbar items={navbarItems} />
      <TasksContainer>
        <p>Tasks</p>
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
