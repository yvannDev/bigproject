import yvanDev from "../assets/yvanDev.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Apropos = () => {
  return (
    <motion.div
      className="container_about"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="picture-about"
        initial={{ opacity: 0, x: -12 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <img src={yvanDev} alt="" className="about-img" />
      </motion.div>
      <motion.div
        className="info-about"
        initial={{ opacity: 0, x: 12 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.06 }}
      >
        <h1 className="about-titl">yvan wafo 🙌</h1>
        <div className="phrase-p">
          <p>
            Passionné par le développement web, je conçois et réalise des sites
            modernes, performants et adaptés à vos besoins. Avec une solide
            expérience en front-end et une bonne maîtrise des outils de design,
            je vous accompagne dans la création de solutions digitales
            innovantes et sur mesure.
          </p>
        </div>
        <Link to={"/"} className="more-btn">
          {" "}
          🚀 en savoir plus
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default Apropos;
