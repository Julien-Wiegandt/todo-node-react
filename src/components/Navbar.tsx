import React, { useState } from "react";
import styled from "styled-components";

export interface NavbarItem {
  title: string;
  callback: () => unknown;
}

type props = {
  items: NavbarItem[];
};
export function Navbar(props: props): JSX.Element {
  const [active, setActive] = useState(0);
  return (
    <NavbarContainer>
      {props.items.map((item, index) => {
        return (
          <NavbarItem
            onClick={() => {
              item.callback();
              setActive(index);
            }}
          >
            {item.title}
            <ItemLine active={index === active} />
          </NavbarItem>
        );
      })}
    </NavbarContainer>
  );
}

const NavbarContainer = styled.nav`
  overflow: auto;
  white-space: nowrap;
  height: 56px;
  background-color: #5f5fc4;
`;

const NavbarItem = styled.button`
  /* display: inline-block; */
  position: relative;
  height: 100%;
  width: 50%;
  background-color: #5f5fc4;
  border: none;
  padding: 0;
  /* Text */
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 23px;
  color: #ffffff;
  letter-spacing: 1px;
  /* Other */
  :hover {
    cursor: pointer;
  }
`;
type LineProps = {
  active: boolean;
};
const ItemLine = styled.div<LineProps>`
  display: ${(props) => {
    return props.active ? "block" : "none";
  }};
  position: absolute;
  bottom: 0;
  height: 4px;
  width: 100%;
  background-color: #18227c;
`;
