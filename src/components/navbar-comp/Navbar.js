import React from 'react';

const navRoutes = [
  {
    name: 'Home',
    param: '/',
  },
  {
    name: 'Teams',
    param: '/teams',
  },
  {
    name: 'Add team',
    param: '/teams/new',
  },

  {
    name: 'Charts',
    param: '/charts',
  },
];

const Navbar = () => {
  console.log('navbar');

  return (
    <nav>
      <ul>
        {navRoutes.map(({ name, param }) => (
          <li key={param}>
            <a href={`${param}`}>{name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
