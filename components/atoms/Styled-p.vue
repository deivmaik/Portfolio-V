<template >
    <div>
        <styled-p>Scroll-down to find out more</styled-p>  
    </div>
</template>
<script>
// Styles 
import styled from 'vue-styled-components'
import { media } from '../../global'

const P = styled.p`
    padding-top: 20%;
    font-weight: 500;
    font-size: 1.6rem;
    color: #4F4E4E;
    text-align: center;
    ${media.desktop}{
        padding-top: 5%;
    }
`
// Script
export default {
    components: {
        'styled-p' : P
    }
}
</script>
