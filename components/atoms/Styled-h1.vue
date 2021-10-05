<template>
    <styled-h1 primary >{{content}}</styled-h1>
</template>
<script>
// Styles 
import styled from 'vue-styled-components'
import { media } from '../../global'

// A child component needs to explicitly declare the props it expects to receive
export const Styledh1 = styled.h1`
    font-size: 5.5rem;
    line-height: 120%;
    text-align: right;
    font-weight: bold;
    color: #000000;

    ${media.desktop}{
        font-size: 12rem;
        line-height: 18rem;
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
