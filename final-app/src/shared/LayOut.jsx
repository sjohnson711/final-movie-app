import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import styled from "styled-components";

const Body = styled.div`
  min-height: 100vh;
  
  font-family: monospace;
  background-color: black;
  color: white;
  flex-direction: column;
  display: flex;

  }
`;

const Main = styled.main`
  flex: 1;
  display: flex;
  align-items: center;
  justify-context: center;
  text-align: center;
  margin: auto;
`;

export default function LayOut() {
  return (
    <Body>
      <NavBar />
      <h1 style={{ fontSize: "25px", textAlign: "center" }}>How are you</h1>
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </Body>
  );
}
