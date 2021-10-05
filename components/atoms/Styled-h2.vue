<template>
    <styled-h2></styled-h2>
</template>
<script>
// Styles 
import styled from 'vue-styled-components'

// A child component needs to explicitly declare the props it expects to receive
export const h2props = { stroke: Boolean };
export const Styledh2 = styled('h2', h2props )`
    font-size: 5.5rem;
    line-height: 120%;
    text-align: ${props => props.stroke ? 'left' : 'right'};
    font-weight: ${props => props.stroke ? '600' : 'bold'};
    color: ${props => props.stroke ? 'transparent' : '#000000'};
    -webkit-text-stroke: ${props => props.stroke ? '0.1rem #000000' : 'none'};
    text-shadow: none;
`
// Script
export default {
    components: {
        'styled-h2' : Styledh2
    }
}
</script>
