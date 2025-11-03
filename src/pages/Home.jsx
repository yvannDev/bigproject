import yvanDev from "../assets/yvanDev.png";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { motion } from "framer-motion";
import blue1 from "../assets/blue1.svg";
import { Mail, DownloadCloud } from "lucide-react";

const Home = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "frontEnd developer",
        "backEnd developer",
        "fullStack developer",
      ],
      typeSpeed: 10,
      backSpeed: 10,
      backDelay: 1000,
      loop: true,
      // showCursor: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <>
      <motion.div
        className="element-home"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container-type-code">
          <h5 className="title-nam">salut moi c'est </h5>
          <span className="yvanName">yvan wafo</span>
          <div className="typed-change">
            je suis: <span id="je-suis" ref={typedRef}></span>
          </div>
        </div>
        <motion.div
          className="container-type-img"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.05 }}
        >
          <div className="after-img">
            <img
              className="img-home"
              src={yvanDev}
              alt=""
              sizes=""
              loading="lazy"
            />
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="home-network"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, delay: 0.08 }}
      >
        <a href="" className="follow">
          <Mail size={30} className="follow-icon" />
        </a>
        <a href="" className="follow">
          <Mail size={30} className="follow-icon" />
        </a>
        <a href="" className="follow">
          <Mail size={30} className="follow-icon" />
        </a>
        <a href="" className="follow">
          <Mail size={30} className="follow-icon" />
        </a>
      </motion.div>

      <motion.div
        className="info-home"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, delay: 0.12 }}
      >
        <img className="svgWhite-img" src={blue1} alt="mon svg" />
        <div className="sub-info-home">
          <a href="#" className="cv-download" download={true}>
            telecharger mon cv
            <DownloadCloud size={35} className="follow-icon" />
          </a>
        </div>
      </motion.div>
    </>
  );
};

export default Home;
