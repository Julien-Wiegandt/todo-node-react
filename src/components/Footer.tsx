import React from "react";
import styled from "styled-components";

type props = {
  children?: JSX.Element;
  callback: () => unknown;
  icon: JSX.Element;
  hideFooterButton?: boolean;
};
export function Footer(props: props) {
  return (
    <Container>
      <Box>
        <Button visible={!props.hideFooterButton} onClick={props.callback}>
          {props.icon}
        </Button>
        {props.children}
      </Box>
    </Container>
  );
}

const Container = styled.footer`
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Box = styled.div`
  position: relative;
  height: 48px;
  background-color: #5f5fc4;
`;

type ButtonProps = {
  visible?: boolean;
};
const Button = styled.button<ButtonProps>`
  display: ${(props) => {
    return props.visible ? "block" : "none";
  }};
  position: absolute;
  left: calc(50% - 28px);
  top: -28px;
  height: 56px;
  width: 56px;
  border: none;
  padding: none;
  border-radius: 50%;
  background-color: #18227c;
  padding-top: 5px;
  :hover {
    cursor: pointer;
  }
  :active {
  }
  svg {
    height: 26px;
    width: 26px;
    color: #ffffff;
  }
`;
