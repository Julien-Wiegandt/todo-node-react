import React, { useState } from "react";
import styled from "styled-components";
import { Header } from "../../components/Header";
import { SubHeader } from "../../components/SubHeader";
import { Navbar, NavbarItem } from "../../components/Navbar";
import { Login } from "./Login";

export function Connection(): JSX.Element {
  const [isLogin, setIsLogin] = useState(true);
  const navbarItems: NavbarItem[] = [
    { title: "LOGIN", callback: () => setIsLogin(true) },
    { title: "REGISTER", callback: () => setIsLogin(false) },
  ];
  return (
    <ConnectionContainer>
      <Header title="TODO" />
      <SubHeader />
      <Navbar items={navbarItems} />
      {isLogin ? <Login /> : <p>Register</p>}
    </ConnectionContainer>
  );
}

const ConnectionContainer = styled.div`
  display: block;
`;
