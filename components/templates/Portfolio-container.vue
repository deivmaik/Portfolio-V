<template>
    <wrapper>
        <blank></blank>
        <Portfolio-list/>
    </wrapper>
</template>
<script>
// Styles 
import styled from 'vue-styled-components'
import { media } from '~/global'
import { Container } from '~/pages/index.vue'

const Wrapper = styled(Container)`
    background: #F2F6FF;
    display:flex;
    height: 100vh;

    ${media.desktop}{
    padding: 5% 0 10% 0;
    }

    ${media.wideScreen}{
    padding: 0;
    }
`
const Blank = styled.div`
display:none;
${media.tablet}{
    display:block;
    width: 33%;
}
`
// Script
export default {
    components: {
        'wrapper': Wrapper,
        'blank' : Blank,
    }
}
</script>
