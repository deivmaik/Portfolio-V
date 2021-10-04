<template >
    <wrapper></wrapper>
</template>
<script>
// Styles 
import styled from 'vue-styled-components'

export const divprops = { background: String };
export const Wrapper = styled('div', divprops )`
position: absolute;
width: 6.5rem;
height: 6.5rem;
background: ${props => props.background ? props.background : "#ECECEC"};
border-radius: 4rem;
`
// Script
export default {
    components: {
        'wrapper': Wrapper,
    }
}
</script>
