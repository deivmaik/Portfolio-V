<template>
    <wrapper>
        <Secondary v-bind:content='name' />
        <Github/>
        <LinkedIn/>
        <Styled-h1 v-bind:content='dev'/>
        <Dribbble/>
        <Scroll-text v-bind:content='arrow'/>
    </wrapper>
</template>
<script>
// Styles 
import styled from 'vue-styled-components'
import { media } from '~/global'

import { Container } from '~/pages/index.vue'

const Wrapper = styled(Container)`
    display: grid; 
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr;
   
    grid-template-rows: auto; 
    grid-auto-rows: auto; 
}
`
// Script
export default {
    data() {
        return {
            name: 'hey! I am Michael',
            dev: 'frontend developer',
            arrow: 'scroll-down to find out more'
        }
    },
    components: {
        'wrapper': Wrapper,
    }
}
</script>
