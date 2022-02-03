/**
 * Basic Footer Component
 * @returns {JSX.Element}
 * @constructor
 */
const Footer = () => {

    // JSX
    return (
        <footer className="footer">
            <div className="content has-text-centered">
                <p>
                    <strong>Audio Paste</strong> by <a href="/">Tim Coggins</a>. The source code is
                    licensed <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. Something about copyright
                </p>
            </div>
        </footer>
    )
}

export default Footer