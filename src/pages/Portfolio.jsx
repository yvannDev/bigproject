import re from "../assets/re.png";
import dulans from "../assets/dulans.png";
import iaes1 from "../assets/iaes1.png";
import Nextfolio from "./Nextfolio";
import { motion } from "framer-motion";

const Portfolio = () => {
  return (
    <>
      <motion.div
        className="blogtitlePortf"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="title-folio">mes differents projets realisés</h1>
      </motion.div>

      <motion.div
        className="web-dev-folio"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.04 }}
      >
        <motion.div
          className="content-portfolio"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <div className="card-info-img">
            <img src={re} alt="" className="absolute-img" />

            <div className="info-webfolio">
              <h1 className="dev-name">reservation d'hotel en ligne</h1>
              <div className="phrase-folio">
                <p>
                  Application de gestion d'événements, fonctionnalités avancées
                  et interface utilisateur conviviale.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="content-portfolio"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.06 }}
        >
          <div className="card-info-img">
            <img src={dulans} alt="" className="absolute-img" />

            <div className="info-webfolio">
              <h1 className="dev-name">reservation de plat en ligne</h1>
              <div className="phrase-folio">
                <p>
                  Application de gestion d'événements, fonctionnalités avancées
                  et interface utilisateur conviviale.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="content-portfolio"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.08 }}
        >
          <div className="card-info-img">
            <img src={iaes1} alt="" className="absolute-img" />

            <div className="info-webfolio">
              <h1 className="dev-name">site web vitrine iaes</h1>
              <div className="phrase-folio">
                <p>
                  Application de gestion d'événements, fonctionnalités avancées
                  et interface utilisateur conviviale.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <Nextfolio
        Portfolio={Portfolio}
        title={"graphique design et web design"}
      />
    </>
  );
};

export default Portfolio;
