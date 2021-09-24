import React, { useState } from "react";
import styled from "styled-components";
import { TextInput } from "../../components/TextInput";
import { Spacer } from "../../components/Spacer";
import { Footer } from "../../components/Footer";

export function Login(): JSX.Element {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  return (
    <>
      <LoginContainer>
        <TextInput
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
        />
        <Spacer height="10%" />
        <TextInput
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        />
        <Spacer height="20%" />
      </LoginContainer>
      <Footer callback={() => console.log("Click !")} />
    </>
  );
}

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: #f5f5f6;
`;
