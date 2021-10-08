<template >
    <styled-p >{{content}}</styled-p>  
</template>
<script>
// Styles 
import styled from 'vue-styled-components'

export const pprops = { 
    normal: Boolean,
    start: Boolean,
 };
export const P = styled('p', pprops)`
    margin: 0;
    padding: 0;
    font-weight: 400;
    font-size: 1.6rem;
    color: ${props => props.normal ? '#4F4E4E' : '#303841'};
    text-align: ${props => props.start ? 'start' : 'center'};
`
// Script
export default {
    components: {
        'styled-p' : P
    },
    props: {
        content : String,
        default: 'text'
    }
}
</script>
