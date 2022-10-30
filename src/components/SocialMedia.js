import React from "react";
import styled from "styled-components";
import { SiGithub } from "react-icons/si";
import { RiLinkedinFill } from "react-icons/ri";

const SocialMedia = ({className}) => {
  return (
    <Wrapper className={className}>
      <a
        href="https://github.com/keeforever"
        className="link"
        target="_blank"
        rel="noreferrer"
      >
        <SiGithub className="icon" />
      </a>
      <a
        href="https://github.com/keeforever"
        className="link"
        target="_blank"
        rel="noreferrer"
      >
        <RiLinkedinFill className="icon" />
      </a>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
  padding: 0 1rem;
  display: flex;
  row-gap: 0.8rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 760px) {
    display: none;
  }
  
  .link {
    width: 2.4rem;
    height: 2.4rem;
    border: 0.0625rem solid var(--lightGrey);
    background-color: var(--white);
    border-radius: 50%;
    display: inline-grid;
    place-items: center;
    transition: var(--transition);
  }

  .icon {
    width: 14px;
    height: 14px;
  }

  .link:hover {
    background-color: var(--secondary);
    .icon {
      color: var(--white);
    }
  }
`;

export default SocialMedia;
