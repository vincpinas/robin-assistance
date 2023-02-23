import ScrollDiv from '../../Components/ScrollDiv/ScrollDiv';
import SectionWrapper from '../../Components/SectionWrapper/SectionWrapper';

function Home() {
  return (
    <div className='p-home'>
      <ScrollDiv />
      <div className="-page"></div>
      <SectionWrapper id="what" section={<div className="-page">What is Robin assists?</div>} observer />
      <SectionWrapper id="benefits" section={<div className="-page">Benefits</div>} observer />
      <SectionWrapper id="how" section={<div className="-page">How does it work?</div>} observer />
      <SectionWrapper id="contact" section={<div className="-page">Contact</div>} observer />
    </div>
  )
}

export default Home;