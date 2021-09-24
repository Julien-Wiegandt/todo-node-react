import React, { useState } from "react";
import styled from "styled-components";
import { TextInput } from "../../components/TextInput";
import { Spacer } from "../../components/Spacer";
import { Footer } from "../../components/Footer";

export function Register(): JSX.Element {
  const [email, setEmail] = useState();
  const [password1, setPassword1] = useState();
  const [password2, setPassword2] = useState();
  return (
    <>
      <Container>
        <TextInput
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
        />
        <Spacer height="10%" />
        <TextInput
          value={password1}
          onChange={(e) => setPassword1(e.target.value)}
          placeholder="password"
        />
        <Spacer height="10%" />
        <TextInput
          value={password2}
          onChange={(e) => setPassword2(e.target.value)}
          placeholder="confirm password"
        />
        <Spacer height="20%" />
      </Container>
      <Footer callback={() => console.log("Click !")} />
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: #f5f5f6;
`;
