import React, { useState } from 'react';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Navbar from './Navbar';
import logo from './assets/logo.jpg';
import Footer from './Footer';


const MyButton = styled.button`
  padding: 4em;
  background-color: papayawhip;
`;

const LogoContainer = styled.div`
  max-width: 4rem;
  grid-area: logo;
  `;

const StyledImg = styled.img`
  width: 100%;
  border-radius: 30%;
  padding: 40px;
  padding-bottom: 40px;
  `; 

const MainContainer = styled.div`
grid-area: main;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-rows: 7rem repeat(3, 1fr) 10rem;
  grid-template-columns: repeat(5, 1fr);
  grid-template-areas: 
    "logo top top top top"
    "main main main main main"
    "main main main main main"
    "main main main main main"
    "footer footer footer footer footer";
    min-height: 100vh;
    background-color: #DBBEA1;
`;

function App() {

  return (
    <Router>
      <GridContainer>
        <LogoContainer>
          <StyledImg src={logo} alt="Logo" />
        </LogoContainer>
        <Navbar />
        <MainContainer>
        <Switch>
          <Route path="/about">
            <p>About</p>
          </Route>
          <Route path="/portfolio">
            <h3>Portfolio</h3>
          </Route>
          <Route path="/">
          </Route>
        </Switch>
        <h1>Lisa Emilson</h1>
        
        </MainContainer>
        <Footer>
        </Footer>
      </GridContainer>
    </Router>
  );
}


export default App;