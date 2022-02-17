import React from "react";
// import Dashboard from "../pages/Dashboard";
import { useNavigate } from "react-router-dom";
import {
  Section,
  Para,
  CredentialsContainer,
  Input,
  Button,
  Heading,
  Container,
} from "../css/loginstyle";

const Login = () => {
  const navigate = useNavigate();
  return (
    <Section class="main-container">
      <Container>
        <Heading>Login</Heading>
        <Para>login to virtual world.</Para>
        <CredentialsContainer class="inner-container">
          <Input
            class="Inp"
            type="text"
            placeholder="username or Email"
          ></Input>
          <Input
            class="Inp"
            type="password"
            placeholder="enter your password"
          ></Input>
        </CredentialsContainer>
        <Button
          onClick={() => {
            navigate("/Dashboard");
          }}
        >
          Login
        </Button>
      </Container>
    </Section>
  );
};
export default Login;
