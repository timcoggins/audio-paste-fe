import styled from 'styled-components'

/**
 * Navbar for the website
 * @returns {JSX.Element}
 * @constructor
 */
const NavBar = () => {

    // JSX
    return (<SiteNav>

            {/*Site Name*/}
            <a className="navbar-item" href="/">
                <h1 className={'title is-4'}>Audio Paste</h1>
            </a>

            {/*Right side buttons, upload, maybe random?*/}
            <span>
                <a className="button is-black" href='/upload'>
                    <strong>Upload</strong>
                </a>
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