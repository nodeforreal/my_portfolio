import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import SocialMedia from "./SocialMedia";
import developerImage from "../assets/images/developerColored.png";
import designImg from "../assets/images/design.png";
import frontEndImg from "../assets/images/front-end.png";
import databaseImg from "../assets/images/database.png";
import developerBgBlob from "../assets/images/developer-bg-blob.png";
import heroBackground from '../assets/images/hero-background.png';

const Hero = () => {
  return (
    <Wrapper className="section-grid section-bg-img" id="home">
      <SocialMedia />
      <section className="hero-section app-section">
        <motion.div
          className="hero-intro"
          initial={{ left: "-40%" }}
          whileInView={{ left: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="my-name text-center">Kaliyamoorthy T</h2>
          <h3 className="my-profession text-center">Full-Stack Developer</h3>
          <p className="my-intro text-center">
            Hi, I am Kaliyamoorthy. This is my portfolio site showing what I can
            do as a Full-Stack developer.
          </p>
          <a href="#contact" className="btn primary-btn">
            Let's talk!
          </a>
        </motion.div>
        <div className="hero-image">
          <div className="image-wrapper">
            <img src={developerImage} className="img developer-img" alt="" />
            <motion.img
              src={developerBgBlob}
              className="img developer-bg-blob"
              alt=""
              initial={{ translateX: "-50%", translateY: "-50%", scale: 0 }}
              whileInView={{ translateX: "-50%", translateY: "-50%", scale: 1 }}
              transition={{ duration: 0.5 }}
            />
          </div>
          <motion.div
            className="profession-icons"
            initial={{ scale: 0.4 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <IconCircle img={designImg} className="design-circle" />
            <IconCircle img={frontEndImg} className="front-end-circle" />
            <IconCircle img={databaseImg} className="database-circle" />
          </motion.div>
        </div>
      </section>
    </Wrapper>
  );
};

const IconCircle = ({ img, className }) => {
  return (
    <span className={`${className} grid-center circle`}>
      <img src={img} alt="" />
    </span>
  );
};

const Wrapper = styled.section`
  min-height: calc(100vh - var(--nav-height));
  background-image: url(${heroBackground});
  background-repeat:no-repeat;
  background-size: 100%  auto;

  padding: 2rem 1rem;
  overflow: hidden;

  .hero-section {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    place-self: center;
  }

  .hero-intro {
    display: grid;
    place-content: center;
    place-items: center;
    position: relative;
  }

  .text-center {
    text-align: center;
  }

  .my-name {
    margin-bottom: 0.8rem;
    text-shadow: var(--text-shadow);
  }

  .my-profession {
    font-weight: 400;
    color: var(--brown);
    text-shadow: var(--text-shadow);
  }

  .my-intro {
    letter-spacing: var(--letterSpacing);
    font-weight: 600;
    color: #69799d;
  }

  .hero-image {
    max-width: 560px;
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 1.5rem;
    justify-self: center;

    .image-wrapper {
      position: relative;
    }

    .developer-img {
      image-rendering: crisp-edges;
      justify-self: center;
      position: relative;
      z-index: 2;
    }

    .developer-bg-blob {
      position: absolute;
      left: 50%;
      top: 40%;
      transform: translate(-50%, -50%) scale(0.5);
      z-index: -1;
    }
  }

  .profession-icons {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }

  @media screen and (min-width: 1200px) {
    padding: 0 1.5rem 0 0;

    .hero-intro {
      place-items: start;
    }

    .text-center {
      text-align: left;
    }

    .hero-section {
      grid-template-columns: auto auto;
    }

    .hero-image {
      max-width: none;
      height: 390px;
      grid-template-columns: auto auto;
      img {
        width: 490px;
      }
    }

    .profession-icons {
      flex-direction: column;
    }
  }

  .circle {
    margin: 1.5rem;
    padding: 1.5rem;
    background-color: var(--white);
    box-shadow: 0 0 8px 10px rgba(0, 0, 0, 0.03);
    border-radius: 50%;
  }

  .design-circle {
    width: 6rem;
    height: 6rem;

    img {
      width: 4rem;
      height: 4rem;
    }
  }

  .front-end-circle {
    width: 9rem;
    height: 9rem;

    img {
      width: 5rem;
      height: 5rem;
    }
  }

  .database-circle {
    width: 4.5rem;
    height: 4.5rem;

    img {
      width: 2.5rem;
      height: 2.5rem;
    }
  }
`;

export default Hero;
