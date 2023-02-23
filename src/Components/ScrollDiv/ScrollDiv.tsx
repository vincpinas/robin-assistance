import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import "./ScrollDiv.scss";

interface scrollDivOpts {
  markers?: boolean;
}

const markerStyle = {
  backgroundColor: "black",
}

function ScrollDiv({ markers, }: scrollDivOpts) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const context = canvasRef.current?.getContext("2d");
  const frameCount = 68;
  const [images, setImages] = useState<any[]>([]);
  const [device] = useState({ frame: 0 });
  let tl: GSAPTimeline;

  const currentFrame = (index: number) => {
    // `./Assets/phone/download (${index}).png`
    if(index < 10) return `./Assets/frames/000${index}.png`;
    else return `./Assets/frames/00${index}.png`;
  };

  function render() {
    if (canvasRef.current && context) {
      canvasRef.current.width = window.innerWidth / 2;
      canvasRef.current.height = window.innerHeight / 1.1;

      context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

      let wrh = images[device.frame].width / images[device.frame].height;
      let width = canvasRef.current.width;
      let height = width / wrh;

      if(height > width) {
        height = canvasRef.current.height;
        width = height * wrh;
      }

      let xOffset = width < canvasRef.current.width ? ((canvasRef.current.width - width) / 2) : 0;
      let yOffset = height < canvasRef.current.height ? ((canvasRef.current.height - height) / 2) : 0;

      context.drawImage(images[device.frame], xOffset, yOffset, width, height);
    }
  }

  useEffect(() => {
    if (canvasRef.current && images) {
      canvasRef.current.width = window.innerWidth / 2;
      canvasRef.current.height = window.innerHeight / 1.1;

      let imageList = [];

      for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.src = currentFrame(i);
        imageList.push(img);
      }

      imageList[0].onload = render;

      if(images.length <= 0) {
        setImages(imageList);
      }

      gsap.registerPlugin(ScrollTrigger);
      tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".c-scrolldiv__wrapper",
          scrub: 1,
          start: "top top",
          end: "+=80%"
        }
      })
        .to(".c-scrolldiv__move", {
          ease: "none",
          xPercent: -100,
          yPercent: 100,
        })
        .to(device, {
          frame: frameCount - 1,
          snap: "frame",
          ease: "none",
          scrollTrigger: {
            scrub: 0.5,
            start: "top top",
            end: "+=80%"
          },
          onUpdate: render
        });
    }

    return () => {
      tl.kill();
    }

  }, [canvasRef.current, images])


  return (
    <div className="c-scrolldiv__wrapper">
      <div className="c-scrolldiv__move" style={markers ? markerStyle : {}}>
        <canvas ref={canvasRef} className="c-scrolldiv__canvas" />
      </div>
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