import yvanDev from "../assets/yvanDev.png";
import cvpdf from "../assets/cvPdf.pdf";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import blue1 from "../assets/blue1.svg";
import { Mail, Linkedin, Github,Facebook ,MessageCircle,DownloadCloud ,} from "lucide-react";
import Footer from "../components/footer"

const Home = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "frontEnd developer",
        "backEnd developer",
        "fullStack developer",
        "ui/ux Designer",
      ],
      typeSpeed: 10,
      backSpeed: 10,
      backDelay: 1000,
      loop: true,
      showCursor: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <>
      <div
        className="element-home">
        <div className="container-type-code">
          <h5 className="title-nam">salut moi c'est </h5>
          <span className="yvanName">yvan wafo</span>
          <div className="typed-change">
            je suis: <span id="je-suis" ref={typedRef}></span>
          </div>
        </div>
        <div
          className="container-type-img">
          <div className="after-img">
            <img
              className="img-home"
              src={yvanDev}
              alt=""
              sizes=""
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <div
        className="home-network"

      >
        <a href="mailto:bukamyvan0@gmail.com" className="follow">
          <Mail size={30} className="follow-icon" />
        </a>
        <a href="https://linkedin.com/in/yvan-wafo-067513304/" className="follow">
          <Linkedin size={30} className="follow-icon" />
        </a>
        <a href="https://github.com/yvannDev/" className="follow">
          <Github size={30} className="follow-icon" />
        </a>
        <a href="https://wa.me/+237651847325/" className="follow">
          <MessageCircle   size={30} className="follow-icon" style={{transform: "rotate(-80deg)"}} />
        </a>
      </div>

      <div
        className="info-home"
      >
        <img className="svgWhite-img" src={blue1} alt="mon svg" />
        <div className="sub-info-home">
          <a href={cvpdf} className="cv-download" download="cvpdf.pdf">
            telecharger mon cv
            <DownloadCloud size={35} className="follow-icon" />
          </a>
        </div>
      </div>

      <Footer/>
    </>
  );
};

export default Home;
