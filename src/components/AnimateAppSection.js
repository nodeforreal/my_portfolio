import { motion } from "framer-motion";

const AnimateAppSection = (props) => {
  return (
    <motion.div
      style={{position:'relative'}}
      initial={{ top: 200}}
      whileInView={{ top: 0 }}
      {...props}
    >
      {props.children}
    </motion.div>
  );
};

export default AnimateAppSection;
