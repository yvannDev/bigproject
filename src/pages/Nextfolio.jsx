import d1 from "../assets/d1.png";
import d2 from "../assets/d2.png";
import std from "../assets/std.png";
import mtn from "../assets/MTN.JPEG";
import { motion } from "framer-motion";

const Nextfolio = ({ Portfolio, title }) => {
  return (
    <>
      <motion.div
        className="import-folio"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.18 }}
        transition={{ duration: 0.6 }}
      >
        {Portfolio}
        <div className="container-folio-blog">
          <motion.h1
            className="title-name-design"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            {title}
          </motion.h1>

          <div className="web-design-andgraphique">
            <motion.div
              className="info-wd-gd"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h4 className="title-info-wd">appropos du projet</h4>
              <div className="p1folio">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequuntur commodi quibusdam iusto cupiditate quidem animi
                  aliquam quaerat alias esse obcaecati? Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Consequuntur commodi
                  quibusdam iusto cupiditate quidem animi aliquam quaerat alias
                  esse obcaecati? Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Consequuntur commodi quibusdam iusto
                  cupiditate quidem animi aliquam quaerat alias esse obcaecati?
                </p>
              </div>
            </motion.div>
            <motion.div
              className="info-wd-wd"
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.06 }}
            >
              <div className="crad-hover">
                <img src={d1} alt="design" className="design-img" />
              </div>
              <div className="crad-hover">
                <img src={d2} alt="design" className="design-img" />
              </div>
              <div className="crad-hover">
                <img src={std} alt="design" className="design-img" />
              </div>
              <div className="crad-hover">
                <img src={mtn} alt="design" className="design-img" />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Nextfolio;
