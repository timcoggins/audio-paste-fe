import styled from 'styled-components';

const Filter = () => {

    // JSX
    return (
        <FilterBar>
            <i className="material-icons">sort</i>
            <i className="material-icons">history</i>
            <i className="material-icons">explore</i>
            <i className="material-icons">search</i>
        </FilterBar>
    )
}

export default Filter

// Styles
const FilterBar = styled.div`
    color: white;
    background: black;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 10px;
`