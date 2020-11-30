import styled from 'styled-components'

export default styled.section`
    margin: 32px auto;
    
    @media screen and (min-width: 1200px) {
        width: 90%;
        column-count: 4;
        column-gap: 10px;
    }
    /* display: grid;
    justify-items: center;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    grid-auto-rows: 225px;
    grid-auto-flow: row dense; */
    
`