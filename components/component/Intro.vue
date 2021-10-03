<template lang="">
    <wrapper>
        <name>{{name}}</name>
        <dev>{{title}}</dev>
    </wrapper>
</template>
<script>

// Styles 
import styled from 'vue-styled-components'

export const Wrapper = styled.div`
    padding: 0 2rem;
`

export const Name = styled.h2`
    font-weight: 600;
    font-size: 5.5rem;
    line-height: 120%;
    color: #FFFFFF;
    -webkit-text-stroke: 0.1rem black;
`
export const Dev = styled.h1`
    font-weight: bold;
    font-size: 5.5rem;
    line-height: 120%;
    text-align: right;

`
// Script
export default {
    data() {
        return {
            name: 'hey! I am Michael',
            title: 'frontend developer',
        }
    },
    components: {
        'wrapper': Wrapper,
        'name' : Name,
        'dev' : Dev
    }
}
</script>
