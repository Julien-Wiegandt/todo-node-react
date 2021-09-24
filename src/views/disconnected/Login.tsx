import React, { useState } from "react";
import styled from "styled-components";
import { TextInput } from "../../components/TextInput";
import { Spacer } from "../../components/Spacer";

export function Login(): JSX.Element {
  const [email, setEmail] = useState();
  return (
    <LoginContainer>
      <TextInput
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email"
      />
      <Spacer height="50px" />
      <TextInput
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="password"
      />
    </LoginContainer>
  );
}

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 96px 0 125px 0;
  background-color: #f5f5f6;
`;
