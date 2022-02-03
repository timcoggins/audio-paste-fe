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
            <NavLink className="navbar-item" to="">
                <h1 className={'title is-4'}>Audio Paste</h1>
            </NavLink>

            {/*Right side buttons, upload, maybe random?*/}
            <span>
                <NavLink className="button is-black" to='upload'>
                    <strong>Upload</strong>
                </NavLink>
            </span>

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