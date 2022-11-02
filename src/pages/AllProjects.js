import styled from "styled-components";
import { TagList, Card } from "../components";

const AllProjects = () => {
  return (
    <Wrapper className="full-page">
      <h2 className="text-center app-section-title">all projects</h2>
      <TagList />
      <section className="project-cards">{}</section>
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default AllProjects;
