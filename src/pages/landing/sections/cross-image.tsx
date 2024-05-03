import './styles/cross-image.scss';
import CrossBannerImage from '../../../assets/cross-image.png';

const CrossImage = () => {
  return (
    <div className='crossImage__wrapper'>
      <img src={CrossBannerImage} alt={CrossBannerImage} />
    </div>
  )
}

export default CrossImage