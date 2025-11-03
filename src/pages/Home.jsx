import yvanDev from "../assets/yvanDev.png";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
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
        className="element-home">
        <div className="container-type-code">
          <h5 className="title-nam">salut moi c'est </h5>
          <span className="yvanName">yvan wafo</span>
          <div className="typed-change">
            je suis: <span id="je-suis" ref={typedRef}></span>
          </div>
        </div>
        <motion.div
          className="container-type-img"        >
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

      <div
        className="home-network"

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
      </div>

      <div
        className="info-home"
      >
        <img className="svgWhite-img" src={blue1} alt="mon svg" />
        <div className="sub-info-home">
          <a href="#" className="cv-download" download={true}>
            telecharger mon cv
            <DownloadCloud size={35} className="follow-icon" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
