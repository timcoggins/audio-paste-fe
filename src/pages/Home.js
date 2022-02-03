import Hero from "../components/Hero";
import Latest from "../components/Latest";
import JoinMailing from "../components/JoinMailing";
import Filter from "../components/Filter";



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
            <Filter />
            <Latest />
            <JoinMailing />
        </>
    )
}

export default Home