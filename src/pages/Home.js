import Hero from "../components/Hero";
import Latest from "../components/Latest";

/**
 * Home Page
 * @returns {JSX.Element}
 * @constructor
 */
const Home = () => {

    // JSX
    return (
        <>
            <Hero
                title={'A new blog for audio'}
                subtitle={'Share and recieve feedback on tracks and mixed'}
            />
            <Latest />
        </>
    )
}

export default Home