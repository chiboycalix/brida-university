
import FirstSection from './sections/first';
import CrossImage from './sections/cross-image';
import Feature from './sections/feature';
import './landing.scss';
import Analytics from './sections/analytics';
import PrivateClass from './sections/private-class';
import Support from './sections/support';
import Contact from './sections/contact';
import Banner from './sections/banner';
import ReadOurBlog from './sections/ReadOurBlog';

const Landing = () => {
  return (
    <div className='landing__wrapper'>
     <FirstSection />
     <CrossImage />
     <Feature />
     <Analytics />
     <PrivateClass />
     <Support />
     <Contact />
     <Banner />
     <ReadOurBlog />
    </div>
  )
}

export default Landing