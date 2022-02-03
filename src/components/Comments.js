import styled from "styled-components";

/**
 * Block which displays a tracks comments
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const Comments = (props) => {

    const playComment = (time) => {
        props.wavesurfer.current.play([time])
    }

    // props.wavesurfer.current.on("seek", function(time) {
    //     console.log(time)
    // });

    // JSX
    return (
        <CommentsContainer>
            {/*Loops through each comment on the track*/}
            { props.data.comments.slice(0).reverse().map((item, index) => {

                // Calculate the date
                const datePosted = new Date(parseInt(item.created_at))



                // JSX
                return (
                    <CommentSingle key={index} onClick={() => playComment(item.timestamp)}>
                        <span>
                            <CommentName><i className="material-icons">play_arrow</i>{item.name}</CommentName>
                            <CommentMessage>{item.timestamp}s - {item.comment}</CommentMessage>
                        </span>
                        <CommentDate>{datePosted.toLocaleString()}</CommentDate>
                    </CommentSingle>
                )
            })}
        </CommentsContainer>
    )
}

export default Comments

// Styles
const CommentsContainer = styled.div`

`;

const CommentSingle = styled.div`
  display: flex;
  justify-content: space-between;
  background: #ffffff;
  padding: 10px 20px;
  border-top: #6a886a 1px solid;
`

const CommentName = styled.h6`
    font-size: 1em;
    padding: 20px 10px 10px 10px;
    margin: 0;
    display: flex;
    i {
      margin-right: 10px
    }
`

const CommentMessage = styled.p`
    font-size: 1em;
    padding-left: 10px;
    padding-bottom: 10px;
`

const CommentDate = styled.p`
    text-align: right;
    color: darkgray;
    font-size: 0.8em;
    padding-top: 20px;
    margin: 0 10px;
`