import styled from 'styled-components'

/**
 * Component for joining the mailing list
 * @returns {JSX.Element}
 * @constructor
 */
const JoinMailing = () => {

    // JSX
    return (
        <JoinContainer className="px-6 py-6">
            <p>Join to receive an email when a new track is released.</p>
            <FormContainer className='mt-4'>
                <input className="input" type="email" placeholder="email@website.com" />
                <button className="button is-light ml-2">Join</button>
            </FormContainer>
        </JoinContainer>
    )
}

export default JoinMailing

// Styles
const JoinContainer = styled.div`
  //background: #f3f3f3;
`

const FormContainer = styled.div`
  display: flex;
`