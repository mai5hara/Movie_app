/** @jsx jsx */

import { jsx, css } from '@emotion/core'
import { Link } from 'react-router-dom';
// import SearchBar from '../molecules/SearchBar';
import SignedInLinks from '../molecules/SignedInLinks';
import SignedOutLinks from '../molecules/SignedOutLinks';

const Styles = {
  nav: css`
    height: 4rem;
    display: flex;
    padding: 0 2rem;
    justify-content: space-between;
    background-color: #23589e;
    color: #fff;
    position: sticky;
    top: 0;
  `,
  navWrap: css`
    display: flex;
  `,
  logo: css`
    text-decoration: none;
    line-height: 4rem;
    vertical-align: middle;
    color: #fff;
  `,
}

const Navbar = ({ auth, profile, signOut, signIn, signUp }) => {
  const links = auth.uid ? <SignedInLinks signOut={signOut} profile={profile} /> : <SignedOutLinks signIn={signIn} signUp={signUp} auth={auth} />;
  return (
    <nav css={Styles.nav}>
      <Link to="/" css={Styles.logo}>Movie Diary</Link>
      {/* <SearchBar /> */}
      {auth.isLoaded && links}
    </nav>
  );
};

export default Navbar;
