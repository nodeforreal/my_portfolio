import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import styled from "styled-components";
import { navLinks } from "../utils/constants";

const NavMenu = (props) => {
  return (
    <Wrapper {...props}>
      {navLinks.map(({ label, value, id }) => {
        return (
          <li key={id}>
            <Link className="link" to={`/${value}`}>
              {label}
            </Link>
          </li>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.ul`
  display: flex;
  justify-content: center;
  column-gap: 2rem;
  flex: 1;

  @media screen and (max-width: 760px) {
    display: none;
  }

  .link {
    font-size: var(--small-text);
    font-weight: 450;
    color: var(--grey);
    letter-spacing: normal;
    text-transform: uppercase;
    position: relative;
  }

  .link:hover {
    color: var(--secondary);
  }

  .link:hover.link:before {
    content: "";
    width: 0.3rem;
    height: 0.3rem;
    background-color: var(--secondary);
    border-radius: 50%;

    position: absolute;
    left: 50%;
    top: -0.6rem;
    transform: translateX(-50%);
  }
`;

export default NavMenu;
