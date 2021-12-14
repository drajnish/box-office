import React from 'react';
import { useLocation } from 'react-router';
// import { Link } from 'react-router-dom';
import { NavList, LinkStyled } from './Navs.styled';

const LINKS = [
  { to: '/', text: 'Home' },
  { to: '/starred', text: 'Starred' },
];

const Navs = () => {
  const location = useLocation();

  return (
    <div>
      <NavList>
        {LINKS.map(item => (
          <li key={item.to}>
            <LinkStyled
              to={item.to}
              className={item.to === location.pathname ? 'active' : ''}
            >
              {item.text}
            </LinkStyled>
            {/* <Link to={item.to}>{item.text}</Link> */}
          </li>
        ))}
      </NavList>
    </div>
  );
};

export default Navs;
