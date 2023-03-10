import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import * as Go from "react-icons/go";
import "./Navigation.scss"
import LanguageSelector from "../Language/LanguageSelector";
import { useLanguageContext } from "../Language/LanguageProvider";
import { mobile, scrollSetter } from "../../util";
import AnimatedLogo from "../AnimatedLogo/AnimatedLogo";

interface NavigationProps {
  logoState?: boolean;
}

function Navigation({ logoState }: NavigationProps) {
  const [overlay, setOverlay] = useState<boolean>(false);
  const overlaySetter = (link?: string) => {
    setOverlay(!overlay);
    link ? scrollSetter(link) : null;
  };
  const location = useLocation();
  const navigate = useNavigate();
  const { dict } = useLanguageContext();

  const logoClick = () => {
    if (location.pathname === "/") document.querySelector("body")?.scrollIntoView({ behavior: "smooth", block: "start" });
    else navigate("/");
  }

  const page = (() => {
    if (location.pathname === "/") return "";
    else {
      let temp = location.pathname.replace("-", "");
      temp = temp.replace("/", "-")
      return temp;
    }
  })();

  return (
    <div className={`c-nav ${page}`}>
      <div className={overlay ? "c-navOverlay active" : "c-navOverlay"}>
          <Go.GoThreeBars className="c-navLinkListClose" onClick={() => overlaySetter()} />
        <ul className="c-navLinkList">
          <button onClick={() => { logoClick(); overlaySetter(); }} className="c-navLinkListButton">Home</button>
          {
            location.pathname === "/" ?
              <>
                <button onClick={() => overlaySetter("#about")} className="c-navLinkListButton">{dict.navigation.about}</button>
                <button onClick={() => overlaySetter("#contact")} className="c-navLinkListButton">Contact</button>
              </>
              : null
            }
            <LanguageSelector onClick={() => overlaySetter()} />
            <Link to="/sign-up" className="c-nav__cta -cta" onClick={() => overlaySetter()}>{dict.navigation.signup}</Link>
        </ul>
      </div>
      <header className={`c-navHeader ${page}`}>
        <AnimatedLogo className="c-nav__logo" onClick={logoClick} hidden={logoState ? logoState : false} />
        <div className="c-navLinkWrapper">
          <button onClick={logoClick}>Home</button>
          {
            location.pathname === "/" ?
              <>
                <button onClick={() => scrollSetter("#about")}>{dict.navigation.about}</button>
                <button onClick={() => scrollSetter("#contact")}>Contact</button>
              </>
              : null
          }
        </div>
        <div className="c-navOptions">
          <LanguageSelector />
          {mobile ? <button className="c-nav__cta -cta">Download</button> : <Link to="/sign-up" className="c-nav__cta -cta">{dict.navigation.signup}</Link>}
          <Go.GoThreeBars className="c-navHam" onClick={() => overlaySetter()} />
        </div>
      </header>
    </div>
  )
}

export default Navigation;
