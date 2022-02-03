import styled from "styled-components";

/**
 * Block for the album artwork
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const Artwork = (props) => {

    // JSX py-6 px-6
    return(
        <ArtworkContainer className="px-4 pt-4 pb-3">

            {/*Show a default image if none was supplied*/}
            { props.data.image_url
                ? <Image src={props.data.image_url} alt={`Artwork for ${props.data.name}`} />
                : <Image src={'/artwork.png'} alt='Artwork missing' />
            }
        </ArtworkContainer>
    )
}

export default Artwork

// Styles
const ArtworkContainer = styled.div`
  background: linear-gradient(270deg, rgb(0, 0, 0) 0%, rgb(15, 26, 15) 100%);
  //width: 100%;

  //width:100px;
  //height:100px;
`;

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  filter: grayscale(100%);
`;