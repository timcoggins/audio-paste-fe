import { useRef, useState } from 'react';
import axios from "axios";
import styled from "styled-components";
import API_URL from "../assets/api_url";
import Hero from "../components/Hero";
import 'bulma/css/bulma.min.css';

/**
 * Page for uploading a track
 * @returns {JSX.Element}
 * @constructor
 */
const Upload = () => {

    // Declare state variables
    const [formSubmitted, setFormSubmitted] = useState(false)
    const [selectedFile, setSelectedFile] = useState();
    const [uploadProgress, setUploadProgress] = useState(0);
    const [resData, setResData] = useState();

    // Refs to manage the inputs
    const nameRef = useRef()
    const artistRef = useRef()
    const notesRef = useRef()
    const imageRef = useRef()
    const colorRef = useRef()
    const passwordRef = useRef()

    /**
     * Manages when a user select a file
     * @param event
     */
    const changeHandler = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    /**
     * Manages when the user uploads a file
     * @param e
     */
    const handleSubmit = (e) => {
        // Prevent default page reload
        e.preventDefault()

        // Check the form data TODO finish this
        if(nameRef.current.value === '') return;
        if(artistRef.current.value === '') return;

        // Function for the progress bar
        const config = {
            onUploadProgress: function(progressEvent) {
                let percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total)
                setUploadProgress(percentCompleted)
            }
        }

        // Create a new form data object
        let data = new FormData()
        data.append('file', selectedFile)
        data.append('name', nameRef.current.value)
        data.append('artist', artistRef.current.value)
        data.append('notes', notesRef.current.value)
        data.append('image_url', imageRef.current.value)
        //data.append('color', colorRef.current.value)
        data.append('password', passwordRef.current.value)

        // Send the data TODO do error checking a return info to user
        axios.post(`${API_URL}/tracks/file-upload`, data, config)
            .then(res => {
                setResData(res.data)
                setFormSubmitted(true)
            })
            .catch(err => console.log(err))

    }

    return(<>

        <Hero title={'Upload'} subtitle={'Share your music'} />
        { !formSubmitted && <section className={'columns mt-4 is-gapless'}>

            {/*Left Column  */}
            <div className={'column'}>

                {/*Choose a file input*/}
                <Sidebar>
                    <div className="file is-centered is-boxed is-black has-name is-large">
                        <label className="file-label">

                            {/*File Input*/}
                            <input className="file-input" type="file" name="resume" onChange={changeHandler} />

                            {/*Icon and Text*/}
                            <span className="file-cta">
                                <span className="icon is-center p-5">
                                    <i className="material-icons md-48">cloud_upload</i>
                                </span>
                                <span className="file-label is-size-5">
                                    Choose a file
                                </span>
                            </span>

                            {/*Shows the files name*/}
                            <span className="file-name is-size-5 has-text-centered">
                                {selectedFile !== undefined
                                    ? <>{ selectedFile.name }</>
                                    : <>No file selected</>}
                            </span>
                        </label>
                    </div>
                </Sidebar>
            </div>


            {/*Right Column*/}
            <div className={'column mx-4'}>

                {/*Track Name Input*/}
                <div className="field">
                    <label className="label">Name</label>
                    <div className="control">
                        <input className="input" type="text" placeholder="" ref={nameRef} />
                    </div>
                </div>

                {/*Track Artist Input*/}
                <div className="field">
                    <label className="label">Artist</label>
                    <div className="control">
                        <input className="input" type="text" placeholder="" ref={artistRef} />
                    </div>
                </div>

                {/*Track Image*/}
                <div className="field">
                    <label className="label">Image URL</label>
                    <div className="control">
                        <input className="input" type="text" placeholder="" ref={imageRef} />
                    </div>
                </div>

                {/*Track Notes Input*/}
                <div className="field">
                    <label className="label">Notes</label>
                    <div className="control">
                        <textarea className="textarea" placeholder="e.g. Hello world" ref={notesRef} />
                    </div>
                </div>

                {/*Keep this track private? checkbox*/}
                <div className={'has-text-centered mb-5'}>
                    <label className="checkbox my-4">
                        <input type="checkbox" /> Keep this track private <a href='/'>Learn more</a>
                    </label>
                </div>

                {/*Access Password Input*/}
                <div className="field">
                    <label className="label">Access Password (optional)</label>
                    <div className="control">
                        <input className="input" type="password" placeholder="" ref={passwordRef} />
                    </div>
                </div>

            </div>
        </section>}

        {/*Upload Button*/}
        { !formSubmitted && <div className={'has-text-centered mb-6 notification'}>
            <label className="checkbox mb-6 is-vcentered">
                <input type="checkbox" /> I agree to the <a href="/">terms and conditions</a>
            </label>
            <button className="button is-large is-black" onClick={handleSubmit}>Upload</button>
        </div>
        }

        {/*If the form was submitted*/}
        { formSubmitted && <div className="p-3">

            {/*Progress bar for the upload*/}
            <div className="field mt-5">
                <label className="label">Upload Progress</label>
                <div className="control my-4 has-text-centered">
                    <progress className="progress is-black" value={uploadProgress} max="100">{uploadProgress}%</progress>
                    {uploadProgress}%
                </div>
            </div>

            {/*Once the server has responded with the data, give the link to the user*/}
            { resData && <div>
                <label className="label mt-6">Link to audio</label>
                <a href={`http://localhost:3000/track/?track=${resData.token}`}>http://localhost:3000/?track={resData.token}</a></div>}
        </div>}
    </>)
}

export default Upload

// Styles
const Sidebar = styled.div`
  display: grid;
  place-items: center;
  //height: 400px;
  margin: 50px 0;
`;