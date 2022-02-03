import { useRef } from "react";
import { useMutation } from "react-query";
import axios from "axios";
import styled from 'styled-components'
import API_URL from "../assets/api_url";

/**
 * Block for adding a comment
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const AddComment = (props) => {

    // Refs for the inputs
    const nameRef = useRef()
    const commentRef = useRef()

    /**
     * Mutation to save a comment
     */
    const addCommentMutation = useMutation(commentMutation => {
            return axios.post(`${API_URL}/tracks/add-comment`, commentMutation, )
        }, {
            onSuccess: (data) => {
                //console.log(data);
                props.refetch();
            },
            onError: (err) => console.log(err)
        }
    )

    /**
     * Handles the submit button
     */
    const addCommentHandler = () => {
        addCommentMutation.mutate({
            token: props.id,
            name: nameRef.current.value,
            comment: commentRef.current.value,
            timestamp: '0',
        });
    }

    // JSX
    return (
        <AddCommentContainer className="px-5 py-6 m-0">

            {/*Name field*/}
            <div className="field m">
                <label className="label is-dark">Name</label>
                <div className="control">
                    <input className="input" type="text" placeholder="e.g Alex Smith" ref={nameRef}/>
                </div>
            </div>

            {/*Comment field*/}
            <div className="field">
                <label className="label is-white">Comment</label>
                <div className="control">
                    <input className="input" type="text" placeholder="e.g Snare is too loud" ref={commentRef}/>
                </div>
            </div>

            {/*Submit Button*/}
            <div className={'has-text-centered'}>
                <button className="button is-black mt-4" onClick={addCommentHandler}>Add Comment</button>
            </div>
        </AddCommentContainer>
    )
}

export default AddComment

// Styles
const AddCommentContainer = styled.div`
  background: #0f8585;
  color: white;
`