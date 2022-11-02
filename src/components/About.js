import React from "react";
import styled from "styled-components";
import AnimateAppSection from "./AnimateAppSection";
import SocialMedia from "./SocialMedia";
import aboutBackground from "../assets/images/about-background.png";

const About = () => {
  return (
    <Wrapper className="full-page section-grid section-bg-img" id="about">
      <SocialMedia />
      <AnimateAppSection className="app-section">
        <h2 className="app-section-title">About</h2>
        <section className="about-content">
          <p>
            My name is Kaliyamoorthy, based in India, Tamil Nadu. I am a
            self-taught full stack developer, who is passionate to design and
            build beautiful, responsive modern websites and web applications. I
            enjoy coding and designing because of the satisfaction I get by
            overcoming challenges. My goal is to create esthetic websites, which
            are fast, easy to use, built by
          </p>
          <p>
            the best practices and pleasant for the users. Interested to work
            together with creative and ambitious people in the entire web
            development spectrum, but would like to learn and refining my skills
            mostly in the front-end and back-end development.
          </p>
        </section>
        <div className="download-btn-wrapper">
          <button className="btn primary-btn">Download CV</button>
        </div>
      </AnimateAppSection>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: var(--white);
  background-image: url(${aboutBackground});
  background-repeat: no-repeat;
  background-size: 100% auto;

  .about-content {
    max-width: 560px;
    padding: 0 1rem;

    p {
      margin: 0;
    }
  }

  .download-btn-wrapper {
    display: flex;
    button {
      margin: 2rem auto;
    }
  }
`;

export default About;
