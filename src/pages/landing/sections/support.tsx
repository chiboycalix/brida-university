import { Button } from "../../../components";
import SupportImg from '../../../assets/support.png'
import './styles/support.scss';


const Support = () => {
  return (
    <div className="support__wrapper">
      <div className='support__left'>
        <img src={SupportImg} alt="SupportImg" />
      </div>
      <div>
        <div className='support__right'>
          <h1>Supported by premium software</h1>
          <p>Make it easier for all students to do learning through digital media with existing media making it easier for students to learn anywhere and anytime.</p>
          <div className='btn__Wrapper'>
            <Button text='Get Started' onClick={() => null} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Support