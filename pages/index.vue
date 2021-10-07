<template>
    <wrapper>
        <Hero/>
        <Portfolio/>
        <Footer/>
    </wrapper>
</template>

<script>
// Styles 
import { injectGlobal } from '../global-styles' 
// injectGlobal doesnt neeed to be called to work with vue
import styled from 'vue-styled-components'
import { media } from '../global'

const Wrapper = styled.div``
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
