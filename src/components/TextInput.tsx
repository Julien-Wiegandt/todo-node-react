import React from "react";
import styled from "styled-components";

type props = {
  placeholder?: string;
  value?: string;
  onChange: (e: any) => unknown;
};

export function TextInput(props: props) {
  return (
    <Input
      type="text"
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
    />
  );
}

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
