import React, { useState } from "react";
import styled from "styled-components";
import { TextInput } from "../../components/TextInput";
import { Spacer } from "../../components/Spacer";
import { Footer } from "../../components/Footer";
import authServices from "../../services/auth.services";
import { useHistory } from "react-router";
import { CheckIconLg } from "../../assets/icons/icons";

export function Login(): JSX.Element {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let history = useHistory();

  const handleLogin = () => {
    if (email && password) {
      authServices
        .login(email, password)
        .then(() => {
          console.log("Login success");
          console.log(authServices.getCurrentUser());
          history.push("/tasks");
        })
        .catch(() => {
          console.log("Login failure");
        });
    }
  };

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
          type="password"
        />
        <Spacer height="20%" />
      </LoginContainer>
      <Footer callback={handleLogin} icon={<CheckIconLg />}></Footer>
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
