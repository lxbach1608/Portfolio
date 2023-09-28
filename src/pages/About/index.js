import { motion } from "framer-motion";

function About() {
  const routeVariants = {
    initial: {
      y: "100vh",
    },
    final: {
      y: "0vh",
      transition: {
        type: "spring",
        mass: 0.7,
      },
    },
  };
  return (
    <motion.div
      variants={routeVariants}
      initial="initial"
      animate="final"
      id="about"
    >
      <h1 className="heading">
        Assignments section'UI is in processing.... The developer is falling
        asleep now.{<br></br>} I'm sorry for the inconvenience announcement.
        Everything is temporary :((
      </h1>

      <h2 className="heading2">
        You can checkout my assignments of Web Java
        <strong className="highlight"> Week 4:Survey-syntax</strong> in this
        below link: 👇
      </h2>

      <a
        href="https://week4-survey.onrender.com/W4_21110359/"
        className="assignment-btn"
        target="_blank"
      >
        Week 4: Survey-syntax
      </a>
    </motion.div>
  );
}

export default About;
