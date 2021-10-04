<template>
    <styled-h2 primary >{{content}}</styled-h2>
</template>
<script>
// Styles 
import styled from 'vue-styled-components'

// A child component needs to explicitly declare the props it expects to receive
export const h2props = { primary: Boolean };
export const Styledh2 = styled('h2', h2props )`
    font-size: 5.5rem;
    line-height: 120%;
    text-align: ${props => props.primary ? 'right' : 'left'};
    font-weight: ${props => props.primary ? '600' : 'bold'};
    color: ${props => props.primary ? '#000000' : 'transparent'};
`
// Script
export default {
    components: {
        'styled-h2' : Styledh2
    },
    props: {
        // data props
        content : String,
        default: 'text'
    }
}
</script>
