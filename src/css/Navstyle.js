import styled from "styled-components";

export const Navcontainer = styled.div`
  display: flex;
  width: 100%;
  padding: 0px 200px 0px 0px;
  flex-direction: row-reverse;
  justify-content: space-between;
  height: 70px;
  background: linear-gradient(45deg, #2196f3, #31f1cd);
  .logo {
    height: 20px;
    width: 20px;
  }
  .searchbar {
    display: flex;
    justify-content: center;
    height: 35px;
    border: solid grey 0.5 px;
    border-radius: 20px;
    width: 200px;
    margin: 15px 20px;
    background-color: rgb(220 231 48);
  }
  .searchhere {
    height: 30px;
    border: none;
    background-color: rgba(0, 0, 0, 0);
    outline: none;
  }
  .btn {
    height: 33px;
    border: none;
    background-color: rgba(0, 0, 0, 0);
    cursor: pointer;
    outline: none;
  }
  .btn:hover {
    opacity: 0.5;
  }
`;
export const Listitems = styled.li`
  list-style: none;
  text-decoration: none;
  .items:hover {
    color: #fdf500db;
  }
`;
export const Link = styled.a`
  text-decoration: none;
  color: #030600ad;
`;
export const Navmenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 400px;
  padding: 25px 0px;
`;