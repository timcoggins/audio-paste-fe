import { useState } from "react";
import { useQuery } from "react-query";
import { NavLink } from "react-router-dom";
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

            let imageURL = 'https://images.unsplash.com/photo-1602848596718-45693ff58c78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1475&q=80';
            if(item.image_url !== '') imageURL = item.image_url;
//
            // JSX
            return (

                <Track key={index}>
                    <ArtworkSmall src={`${imageURL}`} />
                    <TrackRightInfo>
                        <span>
                            <TrackName><NavLink to={`/track/?track=${item.token}`}><strong>{item.name}</strong></NavLink></TrackName>
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