import { useEffect } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./RobinIntro.scss";
import wave from "../../Assets/waves/wave.svg";
import wave2 from "../../Assets/waves/wave2.svg";
import wave3 from "../../Assets/waves/wave3.svg";
import logo from "../../Assets/logo_big.svg";
import gsap from "gsap";
import { SlowMo } from "gsap/EasePack";

function RobinIntro() {
  let LogoTL: GSAPTimeline;
  let RobinTL: GSAPTimeline;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    LogoTL = gsap.timeline({
      scrollTrigger: {
        trigger: ".c-robinintro",
        start: "center top",
        toggleActions: "play none pause reverse",
      },
    })
      .fromTo(".c-nav__logo", { opacity: 0 }, {
        opacity: 1,
      }, 1)
      .fromTo(".c-nav__cta", { background: "#024798" }, {
        background: "#ff7f50",
      }, 1)

    const jump_top = 200;
    const jump_bottom = 600;
    const jump_length = 100;

    RobinTL = gsap.timeline({
      scrollTrigger: {
        trigger: ".c-robinintro",
        toggleActions: "play reset reset reset",
      },
    })
      .fromTo(".c-robinintro__logo", { yPercent: jump_bottom, xPercent: -jump_length }, {
        yPercent: jump_top,
        xPercent: 0,
        duration: 2.5,
        ease: SlowMo.ease.config(1.5, 0.5)
      })
      .fromTo(".c-robinintro__logo", { yPercent: jump_top, xPercent: 0 }, {
        yPercent: jump_bottom,
        xPercent: jump_length,
        duration: 1,
        ease: SlowMo.ease.config(1, 0.5)
      })


    return () => {
      LogoTL.clear();
      LogoTL.kill();
      RobinTL.clear();
      RobinTL.kill();
    }
  }, [])

  return (
    <div className="c-robinintro -page">
      <img className="c-robinintro__logo" src={logo} alt="" />
      <div className="c-robinintro__ocean">
        <span className="c-robinintro__wave" style={{background: `url(${wave2}) repeat-x`}} />
        <span className="c-robinintro__wave" style={{background: `url(${wave3}) repeat-x`}} />
        <span className="c-robinintro__wave" style={{background: `url(${wave}) repeat-x`}} />
      </div>
    </div>
  )
}

export default RobinIntro