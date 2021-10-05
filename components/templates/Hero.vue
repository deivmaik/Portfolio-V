<template>
    <wrapper>
        <Secondary v-bind:content='name' />
        <Github/>
        <LinkedIn/>
        <Styled-h1 v-bind:content='dev'/>
        <Dribbble/>
        <Styled-p/>
    </wrapper>
</template>
<script>
// Styles 
import styled from 'vue-styled-components'
import { media } from '../../global'

export const Wrapper = styled.section`
    padding: 0 2rem;

    ${media.desktop}{
        padding: 0 8rem;
    }
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
    }
}
</script>
