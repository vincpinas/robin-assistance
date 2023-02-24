import "./LanguageSelector.scss"
import { IoIosArrowDown } from "react-icons/io"
import { FiCheck } from "react-icons/fi"
import { useState } from "react"
import { languages } from "./languages"
import { useLanguageContext } from "./LanguageProvider"
import Cookies from "cookies-js"
import { uniqueId } from "../../util"


function LanguageSelector() {
  const [openList, setOpenList] = useState<boolean>(false);
  // Get current lang from the language context provider.
  const languageList = languages.sort((a, b) => b.status - a.status);
  const { setLang, lang: selectedLang } = useLanguageContext();

  return (
    <div className="c-language">
      <button className="c-language__button -svg" onClick={() => setOpenList(!openList)}>
        {selectedLang.abbreviation}
        <IoIosArrowDown style={openList ? { transform: "rotate(-180deg)" } : {}} />
      </button>
      {openList ?
        <div className="c-language__listWrapper -mt-1">
          <ul className="c-language__list">
            {languageList.map((lang) => {
              let selected = lang.abbreviation === selectedLang.abbreviation ? true : false;
              let classname = "c-language__listItem -noselect";
              if (selected) classname += " -active"
              if (lang.sub) classname += " -sub"
              if (!lang.status) classname += " -unavailable"

              const selectLang = () => {
                if (lang.status && !selected) {
                  setOpenList(false);
                  // Set language in cookies for persistence
                  Cookies.set("lang", JSON.stringify(lang));
                  // Set new lang in context.
                  setLang(lang)
                }
              }

              return (
                <li key={uniqueId()}
                  onClick={selectLang}
                  className={classname}
                >
                  <span>
                    {lang.lang}
                    {selected ? <FiCheck /> : null}
                  </span>
                  {lang.sub ? <sub>{lang.sub}</sub> : null}
                </li>
              )
            })}
          </ul>
        </div>
        : null}
    </div>
  )
}

export default LanguageSelector