import { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
// import Wavesurfer from 'react-wavesurfer';
import WaveSurfer from 'wavesurfer.js'
import debounce from "../utils/debouce";

/**
 * Component which shows the main window thing
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */

const WavePlayer = (props) => {

    const waveformRef = useRef(null);
    //const wavesurfer = useRef(null);


    useEffect(() => {

        // Options for wavesurfer
        const options = {
            cursorColor: '#000000',
            hideScrollbar: true,
            progressColor: '#ffc988',
            waveColor: '#ffffff',
            barHeight: 2,
            barWidth: 1,
            barGap: 1,
            //barRadius: 1,
            responsive: true,
            normalize: true,
            //splitChannels: true,
        }

        props.wavesurfer.current = WaveSurfer.create({
            container: waveformRef.current,
            ...options,
        });

        props.wavesurfer.current.load(props.file);

        return () => props.wavesurfer.current.destroy();

    }, []);

    //

    // State to store wavesurfer playback status
    const [playing, setPlaying] = useState();

    // Toggles playback
    const togglePlay = () => {
        if(playing) props.wavesurfer.current.pause()
        else props.wavesurfer.current.play()
        setPlaying(props.wavesurfer.current.isPlaying())
    }

    const PlayTimestamp = () => {
        props.wavesurfer.current.play([111])
        //const time =
        //wavesurfer.current.play()
    }

    const returnedFunction = debounce(function() {
        togglePlay()
        console.log(playing)
    }, 250);

    // Allows the user the play and pause with the spacebar
    useEffect(() => {
        window.addEventListener('keydown', (e) => {

            if (e.keyCode === 32 && e.target === document.body) {
                e.preventDefault();
                returnedFunction()
            }
        });
    }, [])

    // JSX time!
    return(
        <TrackContainer>
            <WavePlayerContainer>

                {/*Controls for the player and the track name/artist*/}
                <Controls>
                    { !playing && <PlayButton onClick={() => togglePlay()}><i className="material-icons md-48">play_arrow</i></PlayButton> }
                    { playing && <PlayButton onClick={() => togglePlay()}><i className="material-icons md-48">pause</i></PlayButton> }
                    <Title>
                        <p><span>{props.data.artist}</span></p>
                        <h2><span>{props.data.name}</span></h2>
                    </Title>
                </Controls>

                {/*Waveplayer instance*/}
                <WaveSurferContainer>
                      <div ref={waveformRef} />
                </WaveSurferContainer>

                {/*Download Button*/}
                <div className={'has-text-centered'}>
                    {/*<button className='button mt-3 ml-3 is-black'>*/}
                    {/*    <strong>Download</strong>*/}
                    {/*</button>*/}

                    <button className='button mt-3 ml-3 is-black' onClick={PlayTimestamp}>
                        <strong>Copy Link</strong>
                    </button>

                    <button className='button mt-3 ml-3 is-black' onClick={PlayTimestamp}>
                        <strong>Next Comment</strong>
                    </button>
                </div>

            </WavePlayerContainer>

        </TrackContainer>
    )
}

export default WavePlayer;


// Styles

const WavePlayerContainer = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const TrackContainer = styled.div`
    display: flex;
    padding: 20px;
    background: rgb(238, 174, 202);
    background: linear-gradient(270deg, rgb(23, 59, 24) 0%, rgb(16, 162, 162) 100%);
    min-height: 500px;
    @media only screen and (max-width: 700px) {
      min-height: 70vh; //movile maybe?
    }
`;

const Controls = styled.div`
    display:flex;
    place-items: center;
`

const PlayButton = styled.button`
    color: white;
    background: #000000;
    height: 80px;
    width: 80px;
    border-radius: 50%;
    border: #1e1e1e 1px solid;
    
    &:hover {
      background: #282828;
    }
`

const Title = styled.div`
    margin-left: 20px;
    color: white;
    span {
        background: #221b24;
        padding: 1px 5px;
    }
    p {
        color: white;
        font-size: 16px;
        margin: 5px 0;
    }
    h2 {
        color: white;
        font-size: 24px;
        margin: 5px 0;
    }
`

const WaveSurferContainer = styled.div`
    margin: 00px;
`