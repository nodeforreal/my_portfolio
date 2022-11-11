import React, { useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { motion, useAnimationControls } from "framer-motion";
import styled from "styled-components";
import { useSelector } from "react-redux";
import TagList from "./TagList";
import SocialMedia from "./SocialMedia";
import AnimateAppSection from "./AnimateAppSection";
import { FiArrowRight } from "react-icons/fi";
import ProjectCards from "./ProjectCards";

const Work = () => {
  const { tempProjects, isLoading } = useSelector((state) => state.projects);

  if (isLoading) {
    return null;
  }

  return (
    <Wrapper className="full-page section-grid" id="work">
      <SocialMedia />
      <AnimateAppSection className="work-section app-section">
        <h2 className="app-section-title">Portfolio</h2>
        <TagList className="categories-wrapper" />

          <ProjectCards projects={tempProjects} cardCount={4} />
  
        <div className="btn-wrapper">
          <Link
            to="/all-projects"
            className="btn secondary-btn all-projects-btn"
            onClick={() => window.scrollTo({ top: 0 })}
          >
            view all <FiArrowRight className="icon" />
          </Link>
        </div>
      </AnimateAppSection>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: var(--white);

  .categories-wrapper {
    padding: 0 1rem;
  }

  .btn-wrapper {
    display: flex;
  }

  .all-projects-btn {
    display: flex;
    margin: 1.5rem auto;
    align-content: center;
    column-gap: 0.6rem;
  }
`;

export default Work;
