import './styles/private-class.scss';
import PrivateClassImg from '../../../assets/private-class-tutor.png'
import { Button } from '../../../components';

const PrivateClass = () => {
  return (
    <div className="private-class__wrapper">
      <div className='private-class__left'>
        <h1>Specify the time and day of private class</h1>
        <p>Make it easier for all students to do learning through digital media with existing media making it easier for students to learn anywhere and anytime.</p>
        <div className='btn__Wrapper'>
        <Button text='Get Started' onClick={() => null}/>
        </div>
      </div>
      <div>
      <div className='private-class__right'>
        <img src={PrivateClassImg} alt="PrivateClassImg" />
      </div>
      </div>
    </div>
  )
}

export default PrivateClass