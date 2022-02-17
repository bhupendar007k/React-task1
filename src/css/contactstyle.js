import styled from "styled-components";
export const MainContainer = styled.div `
  width: 100%;
  height: 100vh;
  background-color: #ddf1fd;
  display: flex;
  justify-content: center;
  font-family: "Outfit", sans-serif;
  margin:0px;
  padding:0px;
`;
export const Contactform = styled.div `
  width: 400px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  height: 400px;

  margin-top: 50px;
  .heading {
    font-weight: 600px;
    font-size: 60px;
  }
  .Contact-details {
    display: flex;
    justify-content: center;
  }
`;
export const InputArea = styled.input `
  width: 300px;
  height: 35px;
  border-radius: 10px;
  outline: none;
  border: solid darkcyan 1px;
  background-color: rgba(0, 0, 0, 0);
`;
export const Link = styled.a `
  text-decoration: none;
  padding: 16.5px 0px 0px 20px;
  color: grey;
`;
export const Feedback = styled.input `
  width: 300px;
  height: 60px;
  border: solid darkcyan 1px;
  background-color: rgba(0, 0, 0, 0);
  border-radius: 10px;
  outline: none;
`;