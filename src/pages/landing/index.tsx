
import FirstSection from './sections/first';
import CrossImage from './sections/cross-image';
import Feature from './sections/feature';
import './landing.scss';
import Analytics from './sections/analytics';

const Landing = () => {
  return (
    <div className='landing__wrapper'>
     <FirstSection />
     <CrossImage />
     <Feature />
     <Analytics />
    </div>
  )
}

export default Landing