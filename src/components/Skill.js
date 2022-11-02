import React from "react";
import styled from "styled-components";
import { skills } from "../utils/constants";
import SocialMedia from "./SocialMedia";
import AnimateAppSection from "./AnimateAppSection";

const Skill = () => {
  return (
    <Wrapper className="section-grid full-page" id="skill">
      <SocialMedia />
      <AnimateAppSection className="app-section">
        <h2 className="app-section-title">Skills & Experiences</h2>
        <section className="skills-showcase">
          {skills.map((skill, index) => {
            return <span key={`skill${index}`}>{skill}</span>;
          })}
        </section>
      </AnimateAppSection>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .skills-showcase {
    padding: 0 1rem;
    max-width: 590px;
    display: grid;
    grid-template-columns: repeat(5, 62px);
    grid-template-rows: repeat(4, 62px);
    justify-content: center;
    gap: 2rem;

    .icon {
      width: 100%;
      height: 100%;
    }

    @media screen and (max-width: 460px) {
      grid-template-columns: repeat(3, 46px);
      grid-template-rows: repeat(4, 46px);
    }

    @media (max-width: 760px) and (min-width: 460px) {
      grid-template-columns: repeat(4, 56px);
      grid-template-rows: repeat(4, 56px);
    }
  }
`;

export default Skill;
