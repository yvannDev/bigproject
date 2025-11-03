import re from "../assets/re.png";
import dulans from "../assets/dulans.png";
import iaes1 from "../assets/iaes1.png";
import Nextfolio from "./Nextfolio";

const Portfolio = () => {
  return (
    <>
      <div className="blogtitlePortf">
        <h1 className="title-folio">mes differents projets realisés</h1>
      </div>

      <div className="web-dev-folio">
        <div className="content-portfolio">
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
        </div>
        <div className="content-portfolio">
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
        </div>
        <div className="content-portfolio">
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
        </div>
      </div>

      <Nextfolio
        Portfolio={Portfolio}
        title={"graphique design et web design"}
      />
    </>
  );
};

export default Portfolio;
