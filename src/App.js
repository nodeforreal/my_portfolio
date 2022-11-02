import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import styled from "styled-components";
import { NavBar, Footer, Sidebar } from "./components";
import { Home, AllProjects, Error } from "./pages";

import { useDispatch } from "react-redux";
import { getAllProjects } from "./features/projects/projectsSlice";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProjects());
  });

  return (
    <Wrapper>
      <NavBar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-projects" element={<AllProjects />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  position: relative;
`;

export default App;
