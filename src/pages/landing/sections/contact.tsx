import ContactLeftImg from '../../../assets/contact-left-img.png';
import ContactRightImg from '../../../assets/contact-sec-img.png';
import './styles/contact.scss';

const Contact = () => {
  return (
    <div className="contact__wrapper">
      <div className='contact__left'>
        <img src={ContactLeftImg} alt="ContactLeftImg" />
      </div>
      <div>
        <div className='contact__right'>
          <h1>Steps that you can follow to register </h1>
          <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
          <div className='img__Wrapper'>
          <img src={ContactRightImg} alt="ContactRightImg" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact