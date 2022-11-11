import { motion, useAnimationControls } from "framer-motion";
import { useEffect } from "react";
import styled from "styled-components";
import Card from "./Card";

const ProjectCards = ({ projects, cardCount }) => {
  const controls = useAnimationControls();

  useEffect(() => {
    controls.start({ top: [0, 200, 0], opacity: [1, 0, 1] });
  });

  return (
    <Wrapper
      initial={{ top: 100 }}
      style={{ position: "relative" }}
      animate={controls}
      whileInView={{ top: 0 }}
    >
      {projects
        .slice(0, cardCount === "all" ? projects.length : cardCount)
        .map((card) => {
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
