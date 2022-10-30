import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>

    
      <p>@2022 KALIYAMOORTHY T</p>
      <p>ALL RIGHTS RESERVED</p>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  height: 6rem;
  background-color: var(--secondary);
  display: grid;
  place-content: center;

  p {
    margin:0;
    font-size: var(--small-text);
    color: var(--white);
    text-align: center;
  }
`;
export default Footer;
