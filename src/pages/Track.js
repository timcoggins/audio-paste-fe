import { useState, useRef } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import WavePlayer from "../components/WavePlayer";
import TrackInformation from "../components/TrackInformation";
import Artwork from "../components/Artwork";
import AddComment from "../components/AddComment";
import Comments from "../components/Comments";

import API_URL from "../assets/api_url";

/**
 * Track page
 * Takes an id from query params called ?track=
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const Track = (props) => {

    // Data store
    const [data, setData] = useState()

    // Ref to the audio player
    const wavesurfer = useRef(null);

    /**
     * Setup React Query to get data from the api
     */
    const { isLoading, refetch } = useQuery('getTrack', () => axios.get(`${API_URL}/tracks/${props.id}`), {
        onSuccess: (res) => {
            setData(res.data)
            console.log(res.data)
        }
    })

    // JSX
    return (
        <>
            {/*Check to see if we have data*/}
            { isLoading === false && data !== undefined &&
                <>
                    {/*Load the wave component*/}
                    <WavePlayer file={`${API_URL}/uploads/${props.id}`} data={data} wavesurfer={wavesurfer}/>

                    {/*Blocks for artwork and track information*/}
                    <div className={'columns is-gapless m-0 p-0'}>
                        <div className={'column'}>
                            <Artwork data={data}/>
                        </div>
                        <div className={'column'}>
                            <TrackInformation data={data}/>
                        </div>
                    </div>

                    {/*Comments*/}
                    <AddComment id={props.id} refetch={refetch}/>
                    <Comments data={data} wavesurfer={wavesurfer}/>
                </>
            }
        </>
    )
}

export default Track