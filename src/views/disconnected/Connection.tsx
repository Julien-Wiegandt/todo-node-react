import React, { useState } from "react";
import styled from "styled-components";
import { Header } from "../../components/Header";
import { SubHeader } from "../../components/SubHeader";
import { Navbar, INavbarItem } from "../../components/Navbar";
import { Login } from "./Login";
import { Register } from "./Register";
import { Redirect } from "react-router";
import authServices from "../../services/auth.services";

export function Connection(): JSX.Element {
  const currentUser = authServices.getCurrentUser();
  const [isLogin, setIsLogin] = useState(true);
  const navbarItems: INavbarItem[] = [
    { title: "LOGIN", callback: () => setIsLogin(true) },
    { title: "REGISTER", callback: () => setIsLogin(false) },
  ];

  if (currentUser) {
    return <Redirect to="/tasks/" />;
  }
  return (
    <ConnectionContainer>
      <Header title="TODO" />
      <SubHeader />
      <Navbar items={navbarItems} />
      {isLogin ? <Login /> : <Register />}
    </ConnectionContainer>
  );
}

const ConnectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
