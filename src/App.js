import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import styled from "styled-components";
import { NavBar, Footer, Sidebar } from "./components";
import { Home, AllProjects, Error } from "./pages";

import { useDispatch } from "react-redux";
import { getAllProjects } from "./features/projects/projectsSlice";
import TrackVisitor from "./components/TrackVisitor";


const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProjects());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);




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
      <TrackVisitor />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  position: relative;
`;

export default App;
