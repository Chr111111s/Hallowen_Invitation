import BackgroundAudio from '../components/BackgroundAudio.jsx'
import Countdown from '../components/Countdown.jsx'
import DressCode from '../components/DressCode.jsx'
import EventDetails from '../components/EventDetails.jsx'
import GiftNote from '../components/GiftNote.jsx'
import GrainOverlay from '../components/GrainOverlay.jsx'
import Hero from '../components/Hero.jsx'
import InviteFooter from '../components/InviteFooter.jsx'
import RsvpSection from '../components/RsvpSection.jsx'
import Starfield from '../components/Starfield.jsx'

function Home() {
  return (
    <>
      <GrainOverlay />
      <Starfield />
      <BackgroundAudio />
      <div className="page">
        <Hero />
        <EventDetails />
        <Countdown />
        <DressCode />
        <RsvpSection />
        <GiftNote />
        <InviteFooter />
      </div>
    </>
  )
}

export default Home
