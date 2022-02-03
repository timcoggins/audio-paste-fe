import styled from 'styled-components'

/**
 * Displays the block of track information
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const TrackInformation = (props) => {
    
    return(
        <TrackInformationContainer className="px-6 py-6">
            <p>{props.data.notes}</p>
            <hr />
            <p><b>Format:</b> mp3 320kbps</p>
            <p><b>Loudness:</b> -12 LUFS</p>
        </TrackInformationContainer>
    )
}

export default TrackInformation

// Styles
const TrackInformationContainer = styled.div`
    height: 100%;
    min-height: 300px;
`