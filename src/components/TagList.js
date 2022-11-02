import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { setTag } from "../features/projects/projectsSlice";

let list = [
  "all",
  "html",
  "css",
  "node.js",
  "react",
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
  const { selectedTag } = useSelector((state) => state.projects);
  const dispatch = useDispatch();

  return (
    <Wrapper className={className}>
      {list.map((label, index) => {
        return (
          <button
            key={`${label}${index}`}
            onClick={() => dispatch(setTag(label))}
            className={`category-btn ${label === selectedTag ? "active" : ""}`}
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
