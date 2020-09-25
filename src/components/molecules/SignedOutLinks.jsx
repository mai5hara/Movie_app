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
        font-family: Gill sans;
        margin: 0;
        padding: 0;
        list-style: none;
        display: flex;
        vertical-align: middle;
        line-height: 4rem;
    `
}

const SignedOutLinks = () => {
    return (
        <ul css={Styles.navlink}>
            <Lists><NavLink to="/signin" css={Styles.linkto}>Log in</NavLink></Lists>
            <Lists><NavLink to="/signup" css={Styles.linkto}>Sign up</NavLink></Lists>
        </ul>
    )
}

export default SignedOutLinks;