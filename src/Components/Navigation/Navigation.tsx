import { useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import * as Go from 'react-icons/go';
import './Navigation.scss'
import LanguageSelector from '../Language/LanguageSelector';

function Navigation() {
  const [overlay, setOverlay] = useState<boolean>(false);
  const overlaySetter = () => setOverlay(!overlay);
  const location = useLocation();
  const navigate = useNavigate();

  const scrollSetter = (elem: any) => {
    document.querySelector(elem).scrollIntoView({ behavior: 'smooth', block: 'end' });
  }

  const logoClick = () => {
    if (location.pathname === "/") document.querySelector("#root")?.scrollIntoView({ behavior: 'smooth', block: 'end' });
    else navigate("/");
  }

  return (
    <div className='c-nav'>
      <div className={overlay ? 'c-navOverlay active' : 'c-navOverlay'} onClick={overlaySetter}>
        <ul className='c-navLinkList'>

        </ul>
      </div>
      <header className='c-navHeader'>
        <button className='c-navLogo' onClick={logoClick}>LOGO</button>
        <div className='c-navLinkWrapper'>
          {
            location.pathname === "/" ?
              <>
                <button onClick={() => scrollSetter("#what")}>What is Robin assists?</button>
                <button onClick={() => scrollSetter("#benefits")}>Benefits</button>
                <button onClick={() => scrollSetter("#how")}>How does it work?</button>
                <button onClick={() => scrollSetter("#contact")}>Contact</button>
              </>
              : null
          }
          <Link to='/sign-up'>Sign Up</Link>
        </div>
        <Go.GoThreeBars className='c-navHam' onClick={overlaySetter} />
        <LanguageSelector />
      </header>
    </div>
  )
}

export default Navigation;
