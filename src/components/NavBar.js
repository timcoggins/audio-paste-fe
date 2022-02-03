import styled from 'styled-components'
import { NavLink } from "react-router-dom";

/**
 * Navbar for the website
 * @returns {JSX.Element}
 * @constructor
 */
const NavBar = () => {

    // JSX
    return (<SiteNav>

            {/*Site Name*/}
            <a className="navbar-item" href={'/'}>
                <h1 className={'title is-4'}>Audio Paste</h1>
            </a>

            {/*Right side buttons, upload, maybe random?*/}
            <Right>
                <NavLink className="button is-white ml-4" to='upload'>
                    <strong>About</strong>
                </NavLink>
                <NavLink className="button is-black ml-4" to='upload'>
                    <strong>Login</strong>
                </NavLink>
            </Right>

        </SiteNav>)
}

export default NavBar


// Styles
const SiteNav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
`;

const Right = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    p {
      margin-right: 15px;
      font-size: 1.2em
    }
`