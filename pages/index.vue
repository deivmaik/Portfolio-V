<template>
    <wrapper id="home">
        <Hero/>
        <Portfolio-title id="portfolio"/>
        <Portfolio-container />
        <Footer id="contact"/>
    </wrapper>
</template>

<script>
// Styles 
import { injectGlobal } from '../global-styles' 
// injectGlobal doesnt neeed to be called to work with vue
import styled from 'vue-styled-components'
import { media } from '../global'

const Wrapper = styled.div`
    font-family: 'Prompt', sans-serif;
`
// Container to be use as container in other templates
export const Container = styled.section`
    padding: 0 2rem;
    ${media.desktop}{
        padding: 0 8rem;
    }
`
// Script
export default {
    components: {
        'wrapper': Wrapper,
    }
}
</script>