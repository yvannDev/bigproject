import d1 from "../assets/d1.png";
import d2 from "../assets/d2.png";
import std from "../assets/std.png";
import mtn from "../assets/MTN.JPEG";

const Nextfolio = ({ Portfolio, title }) => {
  return (
    <>
      <div className="import-folio">
        {Portfolio}
        <div className="container-folio-blog">
          <h1 className="title-name-design">{title}</h1>

          <div className="web-design-andgraphique">
            <div className="info-wd-gd">
              <h4 className="title-info-wd">appropos du projet</h4>
              <div className="p1folio">
                <p>
                  Ce projet met en avant des compétences en développement et en
                  design, avec une attention particulière portée à la qualité,
                  la performance et l'innovation. Chaque détail a été
                  soigneusement pensé pour répondre aux besoins spécifiques des
                  utilisateurs.
                </p>
              </div>
            </div>
            <div className="info-wd-wd">
              <div className="crad-hover">
                <img
                  src={d1}
                  alt="design"
                  className="design-img"
                  loading="lazy"
                />
              </div>
              <div className="crad-hover">
                <img
                  src={d2}
                  alt="design"
                  className="design-img"
                  loading="lazy"
                />
              </div>
              <div className="crad-hover">
                <img
                  src={std}
                  alt="design"
                  className="design-img"
                  loading="lazy"
                />
              </div>
              <div className="crad-hover">
                <img
                  src={mtn}
                  alt="design"
                  className="design-img"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nextfolio;
