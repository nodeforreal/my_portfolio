import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styled from "styled-components";
import {useSelector} from 'react-redux';t {useSelector} from 'react-redux';mpor
import TagList from "./TagList";
import Card from "./Card";
import SocialMedia from "./SocialMedia";
import AnimateAppSection from "./AnimateAppSection";
import { FiArrowRight } from "react-icons/fi";

const Work = () => {
    {,isLconst Work = () => {
  const {projects, isLoading} = useSelector((state)=>state.projects)
  
  if (isLoading){adig} = ueSelec(statestate.projects)
    return null;
  }

  return (
    <Wrapper className="full-page section-grid" id="work">
      <SocialMedia />
      <AnimateAppSection className="work-section app-section">
        <h2 className="app-section-title">Portfolio</h2>
        <TagList className="categories-wrapper" />
        <motion.div
          className="projects-showcase"
          initial={{ top: 100 }}
          whileInView={{ top: 0 }}
        >
          {projects.map((card) => {
            return <Card key={card._id} {...card} />;
          })}
        </motion.div>
        <div className="btn-wrapper">
          <Link
            to="all-projects"
            className="btn secondary-btn all-projects-btn"
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

  .projects-showcase {
    max-width: 1080px;
    margin: 3rem auto 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    position: relative;
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
