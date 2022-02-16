import styled from "styled-components";

export const Section = styled.div`
  color: #000;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(321deg, black, #5a5a5a);
  height: 100vh;
  /* width: 100%; */
`;
export const Heading = styled.h1`
  font-family: "Outfit", sans-serif;
  font-weight: 1000px;
  size: 200px;
  color: white;
  font-size: 3rem;
`;
export const Para = styled.p`
  color: red;
  font-family: "Outfit", sans-serif;
  font-size: 25px;
`;
export const CredentialsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space between;
`;
export const Input = styled.input`
  margin: 10px 0px;
  color: whitesmoke;
  width: 300px;
  height: 30px;
  outline: none;
  border: solid red 0.5px;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0);
`;
export const Button = styled.button`
  width: 300px;
  font-size: medium;
  height: 30px;
  cursor: pointer;
  color: white;
  background: linear-gradient(296deg, #e50909, #812929);
  margin-top: 40px;
`;

export const Container = styled.div`
  border-radius: 50px;
  height: 500px;
  border: solid red 0.5 px;
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 10px 20px 90px red;
`;
