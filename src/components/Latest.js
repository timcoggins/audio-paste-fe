import { useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import API_URL from "../assets/api_url";



/**
 * Used on the home page to show the latest 10 tracks
 * @returns {JSX.Element}
 * @constructor
 */
const Latest = () => {

    // Stores the data from the server
    const [data, setData] = useState()

    /**
     * Setup React Query to get data from the api
     */
    const { isLoading } = useQuery('getAllTracks', () => axios.get(`${API_URL}/tracks/`), {
        onSuccess: (res) => {
            setData(res.data)
        }
    })

    // JSX
    return (<LatestContainer>

        {/*If the data has loaded from the server, map through the results*/}
        { !isLoading && data.map((item, index) => {

            // Calculate the date
            const datePosted = new Date(parseInt(item.created_at))
//
            // JSX
            return (

                <Track key={index}>
                    <ArtworkSmall src={`${item.image_url}`} />
                    <TrackRightInfo>
                        <span>
                            <TrackName><Link to={`/track/?track=${item.token}`}><strong>{item.name}</strong></Link></TrackName>
                            <TrackArtist>by {item.artist}</TrackArtist>
                        </span>
                        <TrackDate>{datePosted.toDateString()}</TrackDate>
                    </TrackRightInfo>
                </Track>

            )
        })}
        </LatestContainer>)

}

export default Latest

const LatestContainer = styled.div`


`;

const ArtworkSmall = styled.img`
  object-fit: cover;
  width:100px;
  height:100px;
  filter: grayscale(100%);
`

const Track = styled.div`
    display: flex;
    color: black;

      //div:nth-child(odd) {
      //  background: #ffffff;
      //}
      //
      //div:nth-child(even) {
      //  background: #f6f8f6;
      //}
  
`

const TrackRightInfo = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`

const TrackName = styled.h6`
    font-size: 1em;
    padding: 20px 10px 0 10px;
    margin: 0;
    display: flex;
    i {
      margin-right: 10px
    }
`

const TrackArtist = styled.p`
    font-size: 0.9em;
    padding-left: 10px;
    padding-bottom: 10px;
`

const TrackDate = styled.p`
    text-align: right;
    color: darkgray;
    font-size: 0.8em;
    padding-top: 20px;
    margin: 0 10px;
`