import "./Home.scss";
import ScrollDiv from '../../Components/ScrollDiv/ScrollDiv';
import SectionWrapper from '../../Components/SectionWrapper/SectionWrapper';

function Home() {
  return (
    <div className='p-home'>
      <ScrollDiv />
      <SectionWrapper id="testimonials" section={<div className="-page">testimonials</div>} observer />
      <SectionWrapper id="about" section={<div className="-page">about</div>} observer />
      <SectionWrapper id="contact" section={<div className="-page">Contact</div>} observer />
    </div>
  )
}

export default Home;