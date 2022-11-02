import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { sidebarToggle } from "../features/ui/uiSlice";
import SidebarMenu from "./SidebarMenu";
import { IoClose } from "react-icons/io5";

const Sidebar = () => {
  const dispatch = useDispatch();
  const { isSidebarOpen } = useSelector((state) => state.ui);

  return (
    <Wrapper isSidebarOpen={isSidebarOpen}>
      <div className="close-btn-wrapper">
        <button className="close-btn" onClick={() => dispatch(sidebarToggle())}>
          <IoClose className="icon" />
        </button>
      </div>
      <SidebarMenu />
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  padding: 0 2rem;
  background-color: var(--white);
  width: 80vw;
  height: 100vh;
  position: fixed;
  right: ${({ isSidebarOpen }) => (isSidebarOpen ? "0" : "-80vw")};
  top: 0;
  z-index: 200;
  transition: var(--transition);

  .close-btn-wrapper {
    height: var(--nav-height);
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .close-btn {
    width: 2rem;
    height: 2rem;

    .icon {
      color: var(--secondary);
      width: 2rem;
      height: 2rem;
    }
  }

  @media screen and (max-width: 760px) {
    .sidebar-nav-menu {
      display: flex;
      flex-direction: column;
    }
  }
`;
export default Sidebar;
