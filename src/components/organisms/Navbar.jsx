import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from '../molecules/SignedInLinks';
import SignedOutLinks from '../molecules/SignedOutLinks';

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
