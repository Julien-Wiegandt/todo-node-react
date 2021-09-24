import React from "react";
import styled from "styled-components";
import { ReactComponent as CheckIcon } from "../assets/icons/bi_check.svg";

type props = {
  callback: () => unknown;
};
export function Footer(props: props) {
  return (
    <Container>
      <Box>
        <Button onClick={props.callback}>
          <CheckIcon />
        </Button>
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
`;
