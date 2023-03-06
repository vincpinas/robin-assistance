import { useEffect, useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
import Lottie from "lottie-web";
import "./RobinIntro.scss";
import wave from "../../Assets/waves/wave.svg";
import wave2 from "../../Assets/waves/wave2.svg";
import wave3 from "../../Assets/waves/wave3.svg";
import wave4 from "../../Assets/waves/wave4.svg";

function RobinIntro() {
  let NavTL: GSAPTimeline;
  let SunTL: GSAPTimeline;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    NavTL = gsap.timeline({
      scrollTrigger: {
        trigger: ".c-robinintro",
        start: "center top",
        toggleActions: "play none pause reverse",
      },
    })
      .fromTo(".c-nav__cta", { background: "#024798", delay: 0, }, {
        background: "#ff7f50",
        delay: 0,
      }, 1)

    SunTL = gsap.timeline({
      scrollTrigger: {
        trigger: ".c-robinintro",
        scrub: true,
        start: "top top",
        end: "+=80%"
      },
    })
      .fromTo(".c-robinintro__sun", {
        yPercent: -250,
        scale: 5,
      }, {
        yPercent: 0,
        scale: 1.5,
      })


    const instance = Lottie.loadAnimation({
      container: document.querySelector(".c-robinintro__sun")!,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "./Assets/lottie/sun-icon.json"
    })

    return () => {
      NavTL.kill();
      SunTL.kill();
      instance.destroy();
    }
  }, [])

  return (
    <div className="c-robinintro -page">
      <div className="c-robinintro__sun"></div>
      <div className="c-robinintro__ocean">
        <span className="c-robinintro__wave -fourth" style={{ background: `url(${wave4}) repeat-x` }} />
        <span className="c-robinintro__wave -third" style={{ background: `url(${wave3}) repeat-x` }} />
        <span className="c-robinintro__wave -second" style={{ background: `url(${wave2}) repeat-x` }} />
        <span className="c-robinintro__wave -first" style={{ background: `url(${wave}) repeat-x` }} />
      </div>
    </div>
  )
}

export default RobinIntro