import styled from "styled-components";
import { motion } from "framer-motion";
import Card from "./Card";

const ProjectCards = ({ projects, cardCount }) => {
  return (
    <Wrapper
      style={{ position: "relative" }}
      initial={{ top: 100 }}
      animate={{ top: 0, opacity: 1 }}
      // whileInView={{ top: 0 }}
      exit={{ top: 100, opacity: 0 }}
    >
      {projects.slice(0, cardCount).map((card) => {
        return <Card key={card._id} {...card} />;
      })}
    </Wrapper>
  );
};

const Wrapper = styled(motion.div)`
  max-width: 1080px;
  margin: 3rem auto 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  position: relative;
`;

export default ProjectCards;
