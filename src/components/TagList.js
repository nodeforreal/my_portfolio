import { useState } from "react";
import styled from "styled-components";

let list = [
  "all",
  "HTML",
  "css",
  "node.js",
  "react.js",
  "next.js",
  "express",
  "all",
  "HTML",
  "css",
  "node.js",
  "react.js",
  "next.js",
  "express",
];

const TagList = ({ className }) => {
  const [currentTagList, setTagList] = useState("all");

  return (
    <Wrapper className={className}>
      {list.map((label, index) => {
        return (
          <button
            key={`${label}${index}`}
            onClick={() => setTagList(label)}
            className={`${
              label === currentTagList ? "active" : ""
            } category-btn`}
          >
            {label}
          </button>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;

  .category-btn {
    padding: 0.5rem 1rem;
    border-radius: 1rem;
    background-color: var(--primary);
    font-size: var(--small-text);
    font-weight: 600;
    color: var(--secondary);
    transition: var(--transition);
    text-transform: capitalize;
  }

  .category-btn:hover {
    background-color: var(--secondary);
    color: var(--primary);
  }

  .active {
    background-color: var(--secondary);
    color: var(--primary);
  }
`;
export default TagList;
