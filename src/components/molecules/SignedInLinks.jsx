/** @jsx jsx */

import { NavLink } from 'react-router-dom';
import { jsx, css } from '@emotion/core'
import styled from '@emotion/styled';

const Lists = styled.li`
    margin-left: 1rem;
    cursor: pointer;
`;

const Styles = {
    linkto: css`
        text-decoration: none;
        color: #fff;
    `,
    navlink: css`
        margin: 0;
        padding: 0;
        list-style: none;
        display: flex;
        vertical-align: middle;
        line-height: 4rem;
    `
}

const SignedInLinks = ({ signOut, profile }) => {
    return (
        <ul css={Styles.navlink}>
            <Lists><NavLink to="/" css={Styles.linkto}>Home</NavLink></Lists>
            <Lists><NavLink to="/mypage" css={Styles.linkto}>My page</NavLink></Lists>
            <Lists>{profile.name}</Lists>
            <Lists><a onClick={signOut}>Log out</a></Lists>
        </ul>
    );
};

export default SignedInLinks;