import React from "react";
import styled from "styled-components";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import NavMenu from "./NavMenu";
import { useDispatch } from "react-redux";
import { sidebarToggle } from "../features/ui/uiSlice";

const NavBar = () => {
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <a href="#home" className="title">portfolio</a>
      <NavMenu />
      <div className="sidebar-btn-wrapper">
        <button
          className="sidebar-btn grid-center"
          onClick={() => dispatch(sidebarToggle())}
        >
          <HiOutlineMenuAlt4 className="icon" />
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  width: 100%;
  height: var(--nav-height);
  padding: 0 2rem;
  border-bottom: 0.0625rem solid rgba(255, 255, 255, 0.7);
  background-color: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(1px);
  display: flex;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;

  .title {
    color: hsl(222, 22%, 60%);
  }

  .sidebar-btn-wrapper {
    display: flex;
    justify-content: end;
    flex-grow: 1;
  }

  .sidebar-btn {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    background-color: var(--secondary);

    .icon {
      width: 1.5rem;
      height: 1.5rem;
      color: var(--white);
    }
  }

  @media screen and (min-width: 760px) {
    .sidebar-btn-wrapper {
      display: none;
    }
  }
`;

export default NavBar;
