
import FirstSection from './sections/first';
import CrossImage from './sections/cross-image';
import Feature from './sections/feature';
import './landing.scss';

const Landing = () => {
  return (
    <div className='landing__wrapper'>
     <FirstSection />
     <CrossImage />
     <Feature />
    </div>
  )
}

export default Landing