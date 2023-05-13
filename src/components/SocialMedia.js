import React from "react";
import styled from "styled-components";
import { SiGithub } from "react-icons/si";
import { RiLinkedinFill } from "react-icons/ri";
import { FaTelegramPlane } from 'react-icons/fa'

const SocialMedia = ({ className }) => {
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
        href="/not-available"
        className="link"
        rel="noreferrer"
      >
        <RiLinkedinFill className="icon" />
      </a>
      <a
        href="https://t.me/keeforever"
        className="link"
        target="_blank"
        rel="noreferrer"
      >
        <FaTelegramPlane className="icon" />
      </a>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: calc(100vh - var(--nav-height));
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
