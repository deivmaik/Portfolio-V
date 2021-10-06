<template >
    <container>
        <wrapper background>
            <icon name='github'></icon>
        </wrapper>
    </container>
</template>s
<script>
// Styles 
import styled from 'vue-styled-components'
import { media } from '~/global'

import { Wrapper as Base} from '../atoms/Wrapper.vue'

const Container = styled.div`
    display:grid;
    grid-row-start: 2;
    grid-column-start: 1;
    grid-row-end: 3;
    grid-column-end: 4;
`
const Wrapper = styled(Base)`
    top: 30%;
    right: 10%;

    ${media.regular}{
        top: 25%;
    }

    ${media.tablet}{
        top: 15%;
    }

    ${media.desktop}{
        top: 40%;
    }
`
// Script
export default {
    components: {
        'container' : Container,
        'wrapper': Wrapper,
    }
}
</script>
