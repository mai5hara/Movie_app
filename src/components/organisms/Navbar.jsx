/** @jsx jsx */

import { jsx, css } from '@emotion/core'
import { Link } from 'react-router-dom';
import SignedInLinks from '../molecules/SignedInLinks';
import SignedOutLinks from '../molecules/SignedOutLinks';

const Styles = {
  nav: css`
    height: 4rem;
    display: flex;
    margin: 0 2rem;
    justify-content: space-between;
  `,
  navWrap: css`
    display: flex;
  `,
  logo: css`
    text-decoration: none;
    line-height: 4rem;
    vertical-align: middle;
  `,
}

const Navbar = ({ auth, profile, signOut, signIn, signUp }) => {
  const links = auth.uid ? <SignedInLinks signOut={signOut} profile={profile} /> : <SignedOutLinks signIn={signIn} signUp={signUp} auth={auth} />;
  return (
    <nav css={Styles.nav}>
      {/* <div css={Styles.navWrap}> */}
      <Link to="/" css={Styles.logo}>Movie Buff</Link>
      {auth.isLoaded && links}
      {/* </div> */}
    </nav>
  );
};

export default Navbar;
