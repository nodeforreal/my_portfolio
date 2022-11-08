import styled from "styled-components";
import imageUrlBuilder from "@sanity/image-url";
import { AiFillEye } from "react-icons/ai";
import { SiGithub } from "react-icons/si";
import { motion, useAnimationControls } from "framer-motion";
import sanityClient from "../client";
import React from "react";

const Card = ({ title, description, tag, img, live, repo }) => {
  const liveBtn = useAnimationControls();
  const repoBtn = useAnimationControls();
  const builder = imageUrlBuilder(sanityClient);

  function urlFor(source) {
    return builder.image(source);
  }

  return (
    <Wrapper>
      <div className="project-image">
        <img
          src={urlFor(img).width(1440).height(1024).url()}
          alt=""
          className="img"
          loading="lazy"
        />
        <div className="card-btns">
          <motion.a
            href={live}
            target="_blank"
            rel="noreferrer"
            className="card-btn"
            animate={liveBtn}
            onHoverStart={() => liveBtn.start({ scale: 0.8 })}
            onHoverEnd={() => liveBtn.start({ scale: [0.8, 0.4, 1] })}
            transition={{ duration: 0.2 }}
          >
            <AiFillEye className="icon" />
          </motion.a>
          <motion.a
            href={repo}
            target="_blank"
            rel="noreferrer"
            className="card-btn"
            animate={repoBtn}
            onHoverStart={() => repoBtn.start({ scale: 0.8 })}
            onHoverEnd={() => repoBtn.start({ scale: [0.8, 0.4, 1] })}
            transition={{ duration: 0.2 }}
          >
            <SiGithub className="icon" />
          </motion.a>
        </div>
        <button className="category-tag">{tag}</button>
      </div>
      <h5 className="title text-center">{title}</h5>
      <p className="description">{description}</p>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  margin: 2rem;
  width: 270px;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: var(--secondary);
  cursor: pointer;

  @media (max-width: 992px) and (min-width: 560px) {
    margin: 1rem;
  }

  @media screen and (max-width: 560px) {
    margin: 1rem 0;
  }

  .project-image {
    width: 100%;
    position: relative;

    img {
      height: 100%;
      border-radius: 0.5rem;
    }
  }

  .card-btns {
    width: 100%;
    height: calc(100% + 0.0625rem);
    border-radius: 0.5rem;
    background-color: rgba(0, 0, 0, 0.5);

    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 1.5rem;

    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    opacity: 0;
    transition: all 0.3s linear;
  }
  .card-btns:hover {
    opacity: 1;
  }

  .card-btn {
    width: 48px;
    height: 48px;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 100%;

    display: grid;
    place-content: center;

    transition: all 0.3s ease-out;

    .icon {
      width: 24px;
      height: 24px;
      color: var(--white);
    }
  }

  .category-tag {
    padding: 0.7rem 1.1rem;
    background-color: var(--white);
    border-radius: 1.2rem;
    font-size: 13px;
    font-weight: 500;
    line-height: auto;
    color: var(--grey);
    text-transform: capitalize;

    position: absolute;
    top: 100%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .title {
    margin-top: 1.8rem;
    margin-bottom: 0.8rem;
    font-size: 1rem;
    letter-spacing: normal;
    color: var(--white);
  }

  .description {
    margin: 0;
    line-height: 1.4;
    color: var(--white);
  }
`;

export default React.memo(Card);
