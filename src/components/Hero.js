import styled from "styled-components";

/**
 * Hero for the front page
 * @returns {JSX.Element}
 * @constructor
 */
const Hero = (props) => {

    // JSX
    return (
        <HeroSection className="hero is-black is-medium">
            <div className="hero-body">
                <div className="">
                    <p className="title is-3">
                        { props.title }
                    </p>
                    <p className="subtitle">
                        { props.subtitle }
                    </p>
                </div>
            </div>
        </HeroSection>
    )
}

export default Hero

// Styles
const HeroSection = styled.section`
  display: flex;
  padding: 20px;
  background: linear-gradient(270deg, rgb(23, 59, 24) 0%, rgb(16, 162, 162) 100%);
`