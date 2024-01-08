import logo from '../images/logo.svg';
import { pageLinks, socialLinks } from '../data/pageLinks';
import SmallNavbar from './SmallNavbar';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [windowWidth, setWindoWidth] = useState(window.innerWidth);

  const toggleShow = () => {
    setShow((prev) => !prev);
  };

  useEffect(() => {
    const onWindowResize = () => {
      setWindoWidth((prev) => { 
        if (prev !== window.innerWidth) { 
          setWindoWidth(window.innerWidth);
          if (window.innerWidth > 992) {
            setShow(false);
          }
        }
      });
      
    };
    if(show){
      document.body.style.overflow = 'hidden'
    }else{
      document.body.style.overflow = '';

    }

    window.addEventListener('resize', onWindowResize);

    return () => {
      window.removeEventListener('resize', onWindowResize);
    };
  }, [windowWidth, setWindoWidth,show]);
 
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <SmallNavbar show={show} toggleShow={toggleShow} />
        <div className='nav-header'>
          <img src={logo} className='nav-logo' alt='backroads' />
          <button
            type='button'
            className='nav-toggle'
            id='nav-toggle'
            onClick={toggleShow}
          >
            {show ? 'X' : <i className='fas fa-bars'></i>}
          </button>
        </div>

        <ul className='nav-links' id='nav-links'>
          {pageLinks.map((link) => {
            return (
              <li key={link.id + 1}>
                <a href={link.href} className='nav-link'>
                  {' '}
                  {link.text}{' '}
                </a>
              </li>
            );
          })}
        </ul>
        <ul className='nav-icons'>
          {socialLinks.map((link) => {
            return (
              <li key={link.id}>
                <a href={link.href} target='_blank' className='nav-icon'>
                  <i className={link.icon}></i>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
