<template>
    <wrapper>
        <Secondary v-bind:content='name' primary/>
        <Github/>
        <LinkedIn/>
        <Primary v-bind:content='dev'/>
        <Dribbble/>
    </wrapper>
</template>
<script>
// Styles 
import styled from 'vue-styled-components'

export const Wrapper = styled.section`
    padding: 0 2rem;
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
