<template>
    <wrapper>
        <styled-h2 >{{name}}</styled-h2>
        <styled-h2 primary >{{dev}}</styled-h2>
    </wrapper>
</template>
<script>
// Styles 
import styled from 'vue-styled-components'

export const Wrapper = styled.div`
    padding: 0 2rem;
`
// A child component needs to explicitly declare the props it expects to receive
const h2props = { primary: Boolean };
const Styledh2 = styled('h2', h2props )`
    font-size: 5.5rem;
    line-height: 120%;
    text-align: ${props => props.primary ? 'right' : 'left'};
    font-weight: ${props => props.primary ? '600' : 'bold'};
    color: ${props => props.primary ? '#000000' : 'transparent'};
    -webkit-text-stroke: ${props => props.primary ? 'none' : '0.1rem #000000'};
    text-shadow: none;
`
// Script
export default {
    data() {
        return {
            name: 'hey! I am Michael',
            dev: 'frontend developer',
        }
    },
    components: {
        'wrapper': Wrapper,
        'styled-h2' : Styledh2
    },
    props: {
        // data props
        content : String,
    }
}
</script>
