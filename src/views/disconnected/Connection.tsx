import React from "react";
import styled from "styled-components";
import { Header } from "../../components/Header";
import { SubHeader } from "../../components/SubHeader";
import { Navbar, NavbarItem } from "../../components/Navbar";

export function Connection(): JSX.Element {
  const navbarItems: NavbarItem[] = [
    { title: "LOGIN", callback: () => console.log("Hello") },
    { title: "REGISTER", callback: () => console.log("Hello") },
  ];
  return (
    <ConnectionContainer>
      <Header title="TODO" />
      <SubHeader />
      <Navbar items={navbarItems} />
    </ConnectionContainer>
  );
}

const ConnectionContainer = styled.div``;
