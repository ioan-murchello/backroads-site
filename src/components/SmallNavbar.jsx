import { pageLinks } from '../data/pageLinks';

const SmallNavbar = ({ show, toggleShow }) => {
  return (
    <>
      <ul
        className={`nav-links-small ${show ? 'show-links' : ''}`}
        id='nav-links'
      >
        {pageLinks.map((link) => {
          return (
            <li key={link.id}>
              <a href={link.href} className='nav-link' onClick={toggleShow}>
                {' '}
                {link.text}{' '}
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default SmallNavbar;
