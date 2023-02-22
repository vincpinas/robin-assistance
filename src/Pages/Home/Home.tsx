import ScrollDiv from '../../Components/ScrollDiv/ScrollDiv';

function Home() {
  return (
    <div className='p-home'>
      <ScrollDiv />
      <div className="-page"></div>
      <div className="-page" id='what'>What is Robin assists?</div>
      <div className="-page" id='benefits'>Benefits</div>
      <div className="-page" id='how'>How does it work?</div>
      <div className="-page" id='contact'>Contact</div>
    </div>
  )
}

export default Home;