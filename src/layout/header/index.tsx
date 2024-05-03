import React from 'react';
import './header.scss';
import { Button, Logo } from '../../components';

import { useWindowWidth } from '@react-hook/window-size'
import { motion, AnimatePresence } from "framer-motion";
import { Input } from '../../components';
import { constants } from '../../constants';
import IsWebMenu from '../../components/menu/isWeb';
import IsMobileMenu from '../../components/menu/isMobile';

const Header = () => {
  const pageWidth = useWindowWidth();
  const [drawerVisibility, setDrawerVisibility] = React.useState(false)
  const isMobile = pageWidth <= constants.MINI_TABLET;

  const handleMenuClick = () => {
    setDrawerVisibility(!drawerVisibility)
  }
  const handleGetStarted = () => { }
  return (
    <div className='header__wrapper'>
      <div className='logo__wrapper'>
        <Logo />
      </div>
      <IsWebMenu />
      <div className="getstarted_wrapper">
        {isMobile ? <Button text='Menu' onClick={handleMenuClick} /> : <Button text='Get Started' onClick={handleGetStarted} />}
      </div>
      {drawerVisibility ?
        <AnimatePresence mode="popLayout">
          <motion.div className="mobile_navbar__wrapper"
            initial={{ x: -10, opacity: 0, width: 0 }}
            animate={{ x: 0, opacity: 1, width: "70%" }}
            exit={{ x: 10, opacity: 0, width: 0 }}
            transition={{ duration: 0.3 }}>
            <div className='logo__wrapper'>
              <Logo />
            </div>
            <div className='input__wrapper'>
              <Input />
            </div>
            <IsMobileMenu />
          </motion.div>
        </AnimatePresence>
        : null}

    </div>
  )
}

export default Header;