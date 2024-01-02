import React from 'react';
import Navigation from './NavLink';

export default function MobileNav(props) {
  const activation = props.activation;
  return (
    <div
      className={`absolute z-20 inset-x-0 top-0 bg-gray-900/90 pt-24 backdrop-blur-md sm:pt-28 md:hidden ${
        activation ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'
      } transition-all duration-300`}
    >
      <div className="p-4 font-campton-medium">
        <Navigation />
      </div>
    </div>
  );
}
