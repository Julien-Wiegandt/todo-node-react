import React from "react";
import styled from "styled-components";

type props = {
  title?: string;
};
export function Header(props: props) {
  return <Container>{props.title}</Container>;
}

const Container = styled.header`
  /* Box */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  background-color: #001064;
  /* Text */
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: 3px;
  color: #ffffff;
`;
