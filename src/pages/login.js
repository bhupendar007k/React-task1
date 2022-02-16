import React from "react";
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
        <Button type="submit">Login</Button>
      </Container>
    </Section>
  );
};
export default Login;
