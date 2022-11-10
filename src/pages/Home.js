import React from "react";
import styled from "styled-components";
import { Hero, Work, Skill, About, Contact } from "../components";

const Home = () => {
  return (
    <Wrapper>
      <Hero />
      <Work />
      <Skill />
      <About />
      <Contact />
    </Wrapper>
  );
};

const Wrapper = styled.section``;
export default Home;
