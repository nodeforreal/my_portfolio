import React from "react";
import styled from "styled-components";
import { navLinks } from "../utils/constants";

const SidebarMenu = (props) => {
  return (
    <Wrapper {...props}>
      {navLinks.map(({ label, value, id }) => {
        return (
          <li key={id}>
            <a className="link" href={value}>
              {label}
            </a>
          </li>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;

  .link {
    font-size: 1rem;
    font-weight: 450;
    color: var(--grey);
    letter-spacing: normal;
    text-transform: uppercase;
    position: relative;
  }

  .link:hover {
    color: var(--secondary);
  }
`;

export default SidebarMenu;
