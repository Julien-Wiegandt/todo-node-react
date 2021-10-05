import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { LeftArrowIcon, RightArrowIcon } from "../assets/icons/icons";

export interface INavbarItem {
  id?: number;
  title: string;
  callback: () => unknown;
}

type props = {
  items: INavbarItem[];
  currentTaskGroup?: number;
};
export function Navbar(props: props): JSX.Element {
  const [active, setActive] = useState(0);

  useEffect(() => {
    setActive(props.currentTaskGroup || 0);
  }, [props.currentTaskGroup]);
  return (
    <MainContainer>
      <NavbarContainer>
        {props.items.length > 2 && (
          <LeftArrow
            href={"#" + active}
            onClick={() => {
              props.items[
                active - 1 < 0 ? active + props.items.length - 1 : active - 1
              ].callback();
              setActive(active - 1 < 0 ? active + props.items.length - 1 : active - 1);
            }}
          >
            <LeftArrowIcon />
          </LeftArrow>
        )}
        {props.items.map((item, index) => {
          return (
            <NavbarItem
              key={index}
              id={"" + index}
              onClick={() => {
                item.callback();
                setActive(index);
              }}
              active={index === active}
            >
              {item.title}
              <ItemLine active={index === active} />
            </NavbarItem>
          );
        })}
        {props.items.length > 2 && (
          <RightArrow
            href={"#" + active}
            onClick={() => {
              props.items[
                active + 1 > props.items.length - 1 ? 0 : active + 1
              ].callback();
              setActive(active + 1 > props.items.length - 1 ? 0 : active + 1);
            }}
          >
            <RightArrowIcon />
          </RightArrow>
        )}
      </NavbarContainer>
    </MainContainer>
  );
}
const MainContainer = styled.div`
  position: relative;
`;

const NavbarContainer = styled.nav`
  overflow: auto;
  white-space: nowrap;
  height: 56px;
  background-color: #5f5fc4;
  overflow: hidden;
  scroll-behavior: smooth;
`;

type LineProps = {
  active: boolean;
};

const NavbarItem = styled.button<LineProps>`
  position: relative;
  height: 100%;
  width: 50%;
  background-color: #5f5fc4;
  border: none;
  padding: 0;
  /* Text */
  font-style: normal;
  font-weight: ${(props) => {
    return props.active ? "normal" : "300";
  }};
  font-size: 20px;
  line-height: 23px;
  color: #ffffff;
  letter-spacing: 1px;
  /* Other */
  :hover {
    cursor: pointer;
  }
`;

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

const LeftArrow = styled.a`
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 56px;
  width: 56px;
  z-index: 1;
  svg {
    height: 30px;
    width: 30px;
  }
`;

const RightArrow = styled.a`
  position: absolute;
  right: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 56px;
  width: 56px;
  z-index: 1;
  svg {
    height: 30px;
    width: 30px;
  }
`;
