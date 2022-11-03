import styled from "styled-components";
import { useSelector } from "react-redux";
import { TagList, Card } from "../components";

const AllProjects = () => {
  const { tempProjects } = useSelector((state) => state.projects);

  return (
    <Wrapper className="full-page">
      <h2 className="text-center app-section-title">all projects</h2>
      <TagList />
      <section className="project-cards">
        {tempProjects.map((project) => {
          return <Card key={project._id} {...project} />;
        })}
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: var(--white);
  
  .project-cards {
    margin-top: 2rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export default AllProjects;
