<template >
    <wrapper>
        <styled-p>Scroll-down to find out more</styled-p>  
    </wrapper>
</template>
<script>
// Styles 
import styled from 'vue-styled-components'
import { media } from '~/global'

const Wrapper = styled.div`
    display:grid;
    grid-row-start: 5;
    grid-column-start: 1;
    grid-row-end: 6;
    grid-column-end: 4;

    padding-top: 5rem;
    
`

const P = styled.p`
    padding-top: 20%;
    font-weight: 500;
    font-size: 1.6rem;
    color: #4F4E4E;
    text-align: center;

    ${media.tablet}{
        padding-top: 5%;
    }

    ${media.desktop}{
        padding-top: 0;
    }

    ${media.wideScreen}{
        padding-top: 5%;
    }
`
// Script
export default {
    components: {
        'wrapper' : Wrapper,
        'styled-p' : P
    }
}
</script>
