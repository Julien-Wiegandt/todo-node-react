import React, { useState } from "react";
import styled from "styled-components";
import { TextInput } from "../../components/TextInput";
import { Spacer } from "../../components/Spacer";
import { Footer } from "../../components/Footer";
import authServices from "../../services/auth.services";
import { useHistory } from "react-router";

export function Register(): JSX.Element {
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [passwordError, setPasswordError] = useState("");

  let history = useHistory();

  /**
   * @todo Verify REGEX email and password
   */
  const handleRegister = () => {
    if (email && password1 && password2) {
      if (password1 === password2) {
        authServices
          .register(email, password1)
          .then(() => {
            console.log("Register success");
            console.log(authServices.getCurrentUser());
            setPasswordError("");
            history.push("/");
          })
          .catch(() => {
            console.log("Register failure");
          });
      } else {
        setPasswordError("Passwords don't match.");
      }
    }
  };
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
          type="password"
        />
        <Spacer height="10%" />
        <TextInput
          value={password2}
          onChange={(e) => setPassword2(e.target.value)}
          placeholder="confirm password"
          error={passwordError}
          type="password"
        />
        <Spacer height="20%" />
      </Container>
      <Footer callback={handleRegister} />
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
