import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";
import "./ScrollDiv.scss";

function ScrollDiv() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.timeline({
      scrollTrigger: {
        trigger: ".c-scrolldiv__wrapper",
        scrub: 1,
        start: "top top",
        end: "+=100%",
      }
    })
      .to(".c-scrolldiv__move", {
        ease: "none",
        xPercent: -100,
        yPercent: 100,
      })
  }, [])


  return (
    <div className="c-scrolldiv__wrapper">
      <div className="c-scrolldiv__move"></div>
      <div className="c-scrolldiv__text">
        <h4>Keep your distance</h4>
        <h1>Staying <br /> Seperate. <br /> Together.</h1>
        <p>Social distancing is hard. The Spaced app helps you <br /> keep your distance and stay safe!</p>
      </div>
      <div className="c-scrolldiv__text -second">
        <h4>How it works</h4>
        <h2>Getting Started is <br /> Fast & Easy</h2>
        <p>Spaced uses Bluetooth to locate and monitor devices/people near you. All you have to do is open the app, adjust your settings and choose a safety radius you are comfortable with and the app does the rest!</p>
      </div>
    </div>
  )
}

export default ScrollDiv