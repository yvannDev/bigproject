import front from "../assets/front.png";
import pen from "../assets/pen.png";
import db from "../assets/db.png";
import MongoDB from "../assets/mongoDB.png";
import white3 from "../assets/white3.svg";
import { motion } from "framer-motion/";

const Servive = () => {
  return (
    <>
      <motion.div
        className="services-content"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="services-and-skill">
          <motion.div
            className="different-service"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="card-im-xl">
              <img src={front} alt="mes service" className="ser-img" />
              <div className="conten-info-service">
                <h1 className="title-name">frontEnd</h1>
                <p>
                  Création d'interfaces web modernes, responsives et
                  performantes avec HTML, CSS, JavaScript et React. Je mets
                  l'accent sur l'expérience utilisateur et l'accessibilité pour
                  garantir des sites attractifs et efficaces.
                </p>
              </div>
            </div>
            <div className="card-im-xl">
              <img src={db} alt="mes service" className="ser-img" />
              <div className="conten-info-service">
                <h1 className="title-name">backEnd</h1>
                <p>
                  Développement de solutions back-end robustes avec Node.js,
                  gestion de bases de données MongoDB pour des applications web
                  dynamiques et sécurisées et fiable.
                </p>
              </div>
            </div>
            <div className="card-im-xl">
              <img src={pen} alt="mes service" className="ser-img" />
              <div className="conten-info-service">
                <h1 className="title-name">ui/ux design</h1>
                <p>
                  Conception de maquettes et prototypes sur Figma et Photoshop.
                  J’optimise l’ergonomie et le design pour offrir une expérience
                  utilisateur intuitive et agréable.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
      <motion.h1
        className="title-skill-sevice"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
      >
        <span>competences techniques et</span> outils
      </motion.h1>
      <motion.div
        className="service-development-and-design container"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
      >
        <div className="service-design-tools">
          <h1 className="title-design">outils de design</h1>
          <div className="service-tools-d">
            <small className="all-name-tools">photoshop 70%</small>
            <span className="level-designph"></span>
            <small className="all-name-tools">figma 50%</small>
            <span className="level-designfg"></span>
          </div>
        </div>
        <div className="service-developement-tools">
          <h1 className="title-dev">outils de developpement</h1>
          <div className="service-dev-d">
            <small className="all-name-dev">html 80%</small>
            <span className="level-designdvht"></span>
            <small className="all-name-tools">css 75%</small>
            <span className="level-designdvcs"></span>

            <small className="all-name-tools">tailwindcss 50%</small>
            <span className="level-designdvtw"></span>

            <small className="all-name-dev">javascript 65%</small>
            <span className="level-designdvjs"></span>
            <small className="all-name-tools">react js 70%</small>
            <span className="level-designdvrj"></span>

            <small className="all-name-tools">node js 55%</small>
            <span className="level-designdvnj"></span>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="servicebdd-tools-service container"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
      >
        <h1 className="title-db">base de données</h1>
        <div className="bdd-toolservice">
          <img src={MongoDB} alt="" className="mongo" />
        </div>
      </motion.div>
      <motion.div
        className="img-import"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
      >
        <img src={white3} alt="" />
      </motion.div>
    </>
  );
};

export default Servive;
