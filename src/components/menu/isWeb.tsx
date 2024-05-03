import { constants } from '../../constants';
import './isWeb.scss';
import { useWindowWidth } from '@react-hook/window-size'

const IsWebMenu = () => {
  const pageWidth = useWindowWidth();
  const isMobile = pageWidth <= constants.MINI_TABLET;

  return (
    <>
      {!isMobile ? 
      <ul className="links__wrapper-web">
        <li>
          <a href="">Our Program</a>
        </li>
        <li>
          <a href="">Awards</a>
        </li>
        <li>
          <a href="">About Us</a>
        </li>
        <li>
          <a href="">Article</a>
        </li>
        <li>
          <a href="">Contact Us</a>
        </li>
      </ul> 
      : 
      null}

    </>
  )
}

export default IsWebMenu