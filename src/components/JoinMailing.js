import styled from 'styled-components'

/**
 * Component for joining the mailing list
 * @returns {JSX.Element}
 * @constructor
 */
const JoinMailing = () => {

    // JSX
    return (
        <JoinContainer className="notification is-info is-light mb-0">
            {/*<button className="delete"></button>*/}
            <p>Join to receive an email when a new track is released.</p>
            <FormContainer className='mt-4'>
                <input className="input" type="email" placeholder="email@website.com" />
                <button className="button is-info is-outlined ml-2">Join</button>
            </FormContainer>
        </JoinContainer>
    )
}

export default JoinMailing

// Styles
const JoinContainer = styled.div`
  background: #1e331f;
  max-width: 400px;
  margin: 0 auto 0 auto;
  padding: 40px
`

const FormContainer = styled.div`
  display: flex;
`