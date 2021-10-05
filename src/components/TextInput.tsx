import React from "react";
import styled from "styled-components";
import { Spacer } from "./Spacer";

type props = {
  placeholder?: string;
  value?: string;
  onChange: (e: any) => unknown;
  error?: string;
  type?: string;
};

export function TextInput(props: props) {
  return (
    <Container>
      <Input
        type={props.type ? props.type : "text"}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      />
      <Spacer height="4px" />
      <Error>{props.error}</Error>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 219px;
  height: 44px;
  border: none;
  padding: 0 10px 0 10px;
  /* Text */
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 23px;
  /* Other */
  input:focus {
    outline: none;
  }
`;

const Error = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: red;
`;
