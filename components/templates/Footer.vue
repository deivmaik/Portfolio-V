<template >
    <wrapper>
        <Footer-title v-bind:content='title'/>
        <Copy-text v-bind:content='email'/>
        <Social/>
        <Footer-subtitle v-bind:content='copyright'/>
    </wrapper>
</template>
<script>
// Styles 
import styled from 'vue-styled-components'
import { media } from '~/global'
import { Container } from '~/pages/index.vue'

const Wrapper = styled(Container)`
    background: #000;
    height: 100%;
    ${media.tablet}{
        height: auto;
    }
    ${media.desktop}{
        height: 100vh 
    }
}
`
// Script
export default {
    data() {
        return {
            title: 'Let’s get in touch !',
            email: 'hola@michaeljuarez.me',
            copyright: 'design & code by Michael Juarez'
        }
    },
    components: {
        'wrapper': Wrapper,
    }
}
</script>
