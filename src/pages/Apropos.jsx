import yvanDev from "../assets/yvanDev.png";
import { Link } from "react-router-dom";

const Apropos = () => {
  return (
    <div className="container_about">
      <div className="picture-about">
        <img src={yvanDev} alt="" className="about-img" />
      </div>
      <div className="info-about">
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
      </div>
    </div>
  );
};

export default Apropos;
