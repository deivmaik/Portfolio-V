<template>
    <styled-h1 primary >{{content}}</styled-h1>
</template>
<script>
// Styles 
import styled from 'vue-styled-components'
import { media } from '~/global'

// A child component needs to explicitly declare the props it expects to receive
export const Styledh1 = styled.h1`
    display: grid; 
    grid-row-start: 3;
    grid-column-start: 1;
    grid-row-end: 4;
    grid-column-end: 4;

    font-size: 5.5rem;
    line-height: 120%;
    text-align: right;
    font-weight: bold;
    color: #000000;

    ${media.desktop}{
        font-size: 11rem;
        line-height: 12rem; 
    }

    ${media.wideScreen}{
        font-size: 13rem;
    }
`
// Script
export default {
    components: {
        'styled-h1' : Styledh1
    },
    props: {
        // data props
        content : String,
        default: 'text'
    }
}
</script>
