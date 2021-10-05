import React, { useState } from "react";
import styled from "styled-components";
import { TextInput } from "../../components/TextInput";
import { Spacer } from "../../components/Spacer";
import { Footer } from "../../components/Footer";
import authServices from "../../services/auth.services";
import { CheckIconLg } from "../../assets/icons/icons";
import { useHistory } from "react-router";

export function Register(): JSX.Element {
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password1Error, setPassword1Error] = useState("");
  const [password2Error, setPassword2Error] = useState("");

  const history = useHistory();
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
            setEmailError("");
            setPassword1Error("");
            setPassword2Error("");
            history.go(0);
          })
          .catch(() => {
            console.log("Register failure");
          });
      } else {
        setPassword2Error("Passwords don't match.");
      }
    } else {
      if (!email && !password1) {
        setEmailError("empty email");
        setPassword1Error("empty password");
      } else if (!email) {
        setEmailError("empty email");
        setPassword1Error("");
        setPassword2Error("");
      } else if (!password1) {
        setEmailError("");
        setPassword1Error("empty password");
        setPassword2Error("");
      } else if (!password2) {
        setEmailError("");
        setPassword1Error("");
        setPassword2Error("empty password");
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
          error={emailError}
        />
        <Spacer height="10%" />
        <TextInput
          value={password1}
          onChange={(e) => setPassword1(e.target.value)}
          placeholder="password"
          type="password"
          error={password1Error}
        />
        <Spacer height="10%" />
        <TextInput
          value={password2}
          onChange={(e) => setPassword2(e.target.value)}
          placeholder="confirm password"
          error={password2Error}
          type="password"
        />
        <Spacer height="20%" />
      </Container>
      <Footer callback={handleRegister} icon={<CheckIconLg />} />
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
