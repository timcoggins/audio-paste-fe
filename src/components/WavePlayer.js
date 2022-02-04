import { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
// import * as WaveSurfer from 'wavesurfer.js/dist/wavesurfer'
// import * as CursorPlugin from 'wavesurfer.js/plugin/wavesurfer.cursor'
import debounce from "../utils/debouce";

/**
 * Component which shows the main window thing
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */

const WavePlayer = (props) => {

    const waveformRef = useRef(null);

    // State to store wavesurfer playback status
    const [playing, setPlaying] = useState();
    const [lastSeek, setLastSeek] = useState(0);
    const [markerInfo, setMarkerInfo] = useState(0);


    useEffect(() => {

        // Options for wavesurfer
        const options = {
            cursorColor: '#FFFFFF',
            hideScrollbar: true,
            progressColor: '#ffc988',
            waveColor: '#92ffc1',
            barHeight: 1,
            height: 256,
            barWidth: 1,
            barGap: 1,
            //barRadius: 1,
            responsive: true,
            normalize: true,
            //splitChannels: true,
        }

        // Create the wavesufer if it feels like loading today...
        // eslint-disable-next-line no-undef
        props.wavesurfer.current = WaveSurfer.create({
            container: waveformRef.current,
            ...options,
            plugins: [
                // eslint-disable-next-line no-undef
                // WaveSurfer.cursor.create({
                //     showTime: true,
                //     opacity: 1,
                //     customShowTimeStyle: {
                //         'background-color': '#000',
                //         color: '#fff',
                //         padding: '2px',
                //         'font-size': '10px'
                //     }
                // })
                // eslint-disable-next-line no-undef
                WaveSurfer.markers.create({
                    // markers: [
                    //     {
                    //         time: 5.5,
                    //         label: "V1",
                    //         color: '#ff990a'
                    //     },
                    //     {
                    //         time: 10,
                    //         label: "V2",
                    //         color: '#00ffcc',
                    //         position: 'top'
                    //     }
                    // ]
                })
            ]
        });

        // Load the file
        props.wavesurfer.current.load(props.file);

        // Fires when the user seeks
        props.wavesurfer.current.on("seek", function(time) {
            setLastSeek(time)
        });

        // Fires when the users plays
        props.wavesurfer.current.on('play', function () {
            setPlaying(true)
        });

        // Fires when the user pauses
        props.wavesurfer.current.on('pause', function () {
            setPlaying(false)
        });

        props.data.comments.map(item => {
            props.wavesurfer.current.addMarker({
                time: item.timestamp,
                label: item.comment,
                color: '#ffc988',
                position: 'bottom'
            })
            console.log(item)
        })

        // Fires when the users plays
        props.wavesurfer.current.on('marker-click', function (data) {
            setMarkerInfo(data)
            props.wavesurfer.current.play()
        });

        // Cleanup
        return () => props.wavesurfer.current.destroy();

    }, []);


    const clearMarkers = () => {
        console.log(props.wavesurfer.current)
        props.wavesurfer.current.clearMarkers()
    }

    const playFromLastSeek = () => {
        props.wavesurfer.current.seekTo(lastSeek)
        props.wavesurfer.current.play()
    }

    // Debounced function for the spacebar
    const returnedFunction = debounce(function() {
        props.wavesurfer.current.playPause()
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
                    { !playing && <PlayButton onClick={() => props.wavesurfer.current.playPause()}><i className="material-icons md-48">play_arrow</i></PlayButton> }
                    { playing && <PlayButton onClick={() => props.wavesurfer.current.playPause()}><i className="material-icons md-48">pause</i></PlayButton> }
                    <Title>
                        <p><span>{props.data.artist}</span></p>
                        <h2><span>{props.data.name}</span></h2>
                    </Title>
                </Controls>

                {/*Waveplayer instance*/}
                <WaveSurferContainer>
                      <div ref={waveformRef} />
                    {/* <div className='mt-6 has-text-centered'>*/}
                    {/*    { markerInfo !== null && <> { markerInfo.label } </> }*/}
                    {/*</div>*/}
                </WaveSurferContainer>

                {/*Download Button*/}
                <div className={'has-text-centered'}>
                    {/*<button className='button mt-3 ml-3 is-black'>*/}
                    {/*    <strong>Download</strong>*/}
                    {/*</button>*/}

                    <button className='button mt-3 ml-3 is-black' onClick={clearMarkers}>
                        <strong>Copy Link</strong>
                    </button>

                    <button className='button mt-3 ml-3 is-black' onClick={playFromLastSeek}>
                        <strong>Replay</strong>
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
  color: white;
`

const TrackContainer = styled.div`
    display: flex;
    padding: 20px;
    background: rgb(238, 174, 202);
    background: linear-gradient(270deg, rgb(23, 59, 24) 0%, rgb(16, 162, 162) 100%);
    min-height: 500px;
    @media only screen and (max-width: 700px) {
      min-height: 80vh; //movile maybe?
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