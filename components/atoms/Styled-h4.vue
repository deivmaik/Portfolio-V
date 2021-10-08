<template>
    <styled-h4>{{content}}</styled-h4>
</template>
<script>
// Styles 
import styled from 'vue-styled-components'
import { media } from '~/global'
// A child component needs to explicitly declare the props it expects to receive
export const Styledh4 = styled.h4`
    margin: 0;
    padding:0;
    font-size: 4rem;
    color: #222222;
    font-weight: 500;
`
// Script
export default {
    components: {
        'styled-h4' : Styledh4
    },
    props: {
        content : String,
        default: 'text'
    }
}
</script>
