import React from "react";
import styled from "styled-components";

type props = {
  height?: string;
  width?: string;
};
export function Spacer(props: props) {
  return <Container height={props.height} width={props.width} />;
}

const Container = styled.div<props>`
  height: ${(props) => {
    return props.height ? props.height : "0px";
  }};
  width: ${(props) => {
    return props.width ? props.width : "0px";
  }};
`;
