import "./Home.scss";
import ScrollDiv from "../../Components/ScrollDiv/ScrollDiv";
import SectionWrapper from "../../Components/SectionWrapper/SectionWrapper";
import RobinIntro from "../../Components/RobinIntro/RobinIntro";

function Home() {
  return (
    <>
      <RobinIntro />
      <div className="p-home">
        <div className="c-seperator" />
        <ScrollDiv />
        <SectionWrapper id="testimonials" section={<div className="-page">testimonials</div>} observer />
        <SectionWrapper id="about" section={<div className="-page">about</div>} observer />
        <SectionWrapper id="contact" section={<div className="-page">Contact</div>} observer />
      </div>
    </>
  )
}

export default Home;