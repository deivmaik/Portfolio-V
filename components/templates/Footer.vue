<template >
    <wrapper>
        <Footer-title v-bind:content='title'/>
        <Footer-subtitle v-bind:content='subtitle'/>
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
            subtitle: 'contact@michaeljuarez.me',
            end: 'design & code by Michael Juarez'
        }
    },
    components: {
        'wrapper': Wrapper,
    }
}
</script>
