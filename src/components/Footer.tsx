import React from "react";
import styled from "styled-components";

type props = {
  callback: () => unknown;
  icon: JSX.Element;
};
export function Footer(props: props) {
  return (
    <Container>
      <Box>
        <Button onClick={props.callback}>{props.icon}</Button>
      </Box>
    </Container>
  );
}

const Container = styled.footer`
  /* position: fixed;
  bottom: 0; */
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Box = styled.div`
  position: relative;
  height: 48px;
  background-color: #5f5fc4;
`;
const Button = styled.button`
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
