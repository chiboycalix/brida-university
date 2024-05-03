import { Button } from '../../../components'
import LangindImg from '../../../assets/landing-img.png';
import './styles/first.scss';

const FirstSection = () => {
  return (
    <div className="first__wrapper">
      <div className="first__left">
        <h1>Gen-z as modern world pillars</h1>
        <p>Cybersecurity is the practice of protecting systems and programs from digital attacks. These cyberattacks.</p>
        <div className='btn__wrapper'>

        <Button text='Get Started' onClick={() => null}/>
        </div>
      </div>
      <div className="first__right">
       <img src={LangindImg} alt={LangindImg} />
      </div>
    </div>
  )
}

export default FirstSection