import "./Home.scss";
import ScrollDiv from "../../Components/ScrollDiv/ScrollDiv";
import SectionWrapper from "../../Components/SectionWrapper/SectionWrapper";
import RobinIntro from "../../Components/RobinIntro/RobinIntro";
import Contact from "../../Components/Contact/Contact";

function Home() {
  return (
    <>
      <RobinIntro />
      <div className="p-home">
        <div className="c-seperator" />
        <ScrollDiv />
        <SectionWrapper id="about" section={<div className="-page">About</div>} />
        <SectionWrapper id="contact" section={<Contact />} />
      </div>
    </>
  )
}

export default Home;