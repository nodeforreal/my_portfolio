import React from "react";
import { Route, Routes } from "react-router-dom";

import styled from "styled-components";
import {NavBar, Footer, Sidebar} from './components';
import {Home} from './pages';

const App = () => {
  return (
    <Wrapper>
      <NavBar />
      <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  height:100vh;
  width: 100vw;
  overflow-y:scroll;

  position: relative;
  
`;
export default App;
