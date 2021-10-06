<template>
    <wrapper>
        <Tertiary v-bind:content='title'></Tertiary>
        <Quaternary v-bind:content='subtitle'></Quaternary>
    </wrapper>
</template>
<script>
// Styles 
import styled from 'vue-styled-components'
import { Container } from '~/pages/index.vue'

const Wrapper = styled(Container)`
    background: #F2F6FF;
`
// Script
export default {
    data() {
        return {
            title: 'featured',
            subtitle: 'projects',
        }
    },
    components: {
        'wrapper': Wrapper,
    }
}
</script>
