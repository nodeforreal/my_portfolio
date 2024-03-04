import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import styled from "styled-components";
import { NavBar, Footer, Sidebar } from "./components";
import { Home, AllProjects, Error } from "./pages";

import { useDispatch } from "react-redux";
import { getAllProjects } from "./features/projects/projectsSlice";

import { socket } from './socket';


const App = () => {
  const dispatch = useDispatch();

  const location = useLocation()

  useEffect(() => {
    dispatch(getAllProjects());
  });

  // visitor
  useEffect(() => {
    socket.emit("visitor", `${navigator.userAgent} ${JSON.stringify(location)}`)
  }, [location])


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
