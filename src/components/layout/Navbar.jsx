import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

const Navbar = ({ auth, profile }) => {
  const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />;
  return (
    <nav>
      <div>
        <Link to="/">Movie Buff</Link>
        {auth.isLoaded && links}
      </div>
    </nav>
  );
};

export default Navbar;
