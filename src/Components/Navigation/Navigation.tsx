import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "../../Assets/logo.svg";
import * as Go from "react-icons/go";
import "./Navigation.scss"
import LanguageSelector from "../Language/LanguageSelector";
import { useLanguageContext } from "../Language/LanguageProvider";
import { mobile, scrollSetter } from "../../util";

function Navigation() {
  const [overlay, setOverlay] = useState<boolean>(false);
  const overlaySetter = () => setOverlay(!overlay);
  const location = useLocation();
  const navigate = useNavigate();
  const { dict } = useLanguageContext();

  const logoClick = () => {
    if (location.pathname === "/") document.querySelector("body")?.scrollIntoView({ behavior: "smooth", block: "start" });
    else navigate("/");
  }

  return (
    <div className="c-nav">
      <div className={overlay ? "c-navOverlay active" : "c-navOverlay"} onClick={overlaySetter}>
        <ul className="c-navLinkList">

        </ul>
      </div>
      <header className="c-navHeader">
        <img src={Logo} alt="logo" onClick={logoClick} />
        <div className="c-navLinkWrapper">
          <button onClick={logoClick}>Home</button>
          {
            location.pathname === "/" ?
              <>
                <button onClick={() => scrollSetter("#testimonials")}>{dict.navigation.testimonials}</button>
                <button onClick={() => scrollSetter("#about")}>{dict.navigation.about}</button>
                <button onClick={() => scrollSetter("#contact")}>Contact</button>
              </>
              : null
          }
        </div>
        <Go.GoThreeBars className="c-navHam" onClick={overlaySetter} />
        <div className="c-navOptions">
          <LanguageSelector />
          { mobile ? <button className="-cta">Download</button> : <Link to="/sign-up" className="-cta">{dict.navigation.signup}</Link>  }
        </div>
      </header>
    </div>
  )
}

export default Navigation;
