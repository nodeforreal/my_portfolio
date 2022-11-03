import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { setTag } from "../features/projects/projectsSlice";
import { tagFilterList } from "../utils/constants";

const TagList = ({ className }) => {
  const { selectedTag } = useSelector((state) => state.projects);
  const dispatch = useDispatch();

  return (
    <Wrapper className={className}>
      {tagFilterList.map(({ label, value }, index) => {
        return (
          <button
            key={`${label}${index}`}
            onClick={() => dispatch(setTag(value))}
            className={`category-btn ${value === selectedTag ? "active" : ""}`}
          >
            {label}
          </button>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  display: flex;
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
    text-transform: none;
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
