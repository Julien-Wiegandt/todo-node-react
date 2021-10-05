import React, { useState } from "react";
import styled from "styled-components";
import { Header } from "../../components/Header";
import { SubHeader } from "../../components/SubHeader";
import { Navbar, INavbarItem } from "../../components/Navbar";
import { Login } from "./Login";
import { Register } from "./Register";

export function Connection(): JSX.Element {
  const [isLogin, setIsLogin] = useState(true);
  const navbarItems: INavbarItem[] = [
    { title: "LOGIN", callback: () => setIsLogin(true) },
    { title: "REGISTER", callback: () => setIsLogin(false) },
  ];

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
  background-color: #f5f5f6;
`;
