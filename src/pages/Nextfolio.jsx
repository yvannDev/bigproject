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
            </div>
            <div className="info-wd-wd">
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nextfolio;
