<template>
    <styled-h3></styled-h3>
</template>
<script>
// Styles 
import styled from 'vue-styled-components'
import { media } from '~/global'
// A child component needs to explicitly declare the props it expects to receive
export const h3props = { stroke: Boolean };
export const Styledh3 = styled('h3', h3props )`
    margin: 0;
    padding:0;
    font-size: 5rem;
     ${media.desktop}{
        font-size: 7.5rem
    }
    ${media.wideScreen}{
    font-size: 10rem
    }
    font-weight: ${props => props.stroke ? '500' : '600'};
    color: ${props => props.stroke ? 'transparent' : '#000000'};
    -webkit-text-stroke: ${props => props.stroke ? '0.1rem #000000' : 'none'};
    text-shadow: none;
`
// Script
export default {
    components: {
        'styled-h3' : Styledh3
    }
}
</script>
