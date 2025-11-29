import github from "../assets/github.png"
import yvanDev from "../assets/yvanDev.png"

const footer=() =>{
  return (
    <div className="footer">
      <div className="link">
        <a href="https://github.com/yvannDev/">
            <img src={github} alt="github" className="icon-footer" loading="lazy"/>
        </a>
      </div>
      <div className="link">
        <a href="">
            <img src={yvanDev} alt="github" className="icon-footer" loading="lazy"/>
        </a>
      </div>
    </div>
  )
}

export default footer