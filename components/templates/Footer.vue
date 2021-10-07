<template >
    <wrapper>
        <Footer-title v-bind:content='title'/>
        <Copy-text v-bind:content='subtitle'/>
        <Social/>
        <Footer-subtitle v-bind:content='end'/>
    </wrapper>
</template>
<script>
// Styles 
import styled from 'vue-styled-components'
import { Container } from '~/pages/index.vue'

const Wrapper = styled(Container)`
    background: #000;
}
`
// Script
export default {
    data() {
        return {
            title: 'Let’s get in touch',
            subtitle: 'hola@michaeljuarez.me',
            end: 'design & code by Michael Juarez'
        }
    },
    components: {
        'wrapper': Wrapper,
    }
}
</script>
