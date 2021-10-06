<template >
    <container>
        <wrapper background='#E6F1F8'>
            <icon name='linkedin'></icon>
        </wrapper>  
    </container>
</template>
<script>
// Styles 
import styled from 'vue-styled-components'
import { media } from '~/global'

import { Wrapper as Base} from '../atoms/Wrapper.vue'

const Container = styled.div`
    display: grid;
    grid-row-start: 3;
    grid-column-start: 1;
    grid-row-end: 5;
    grid-column-end: 2;
`
const Wrapper = styled(Base)`
    top: 50%;
    left: 2%;

    ${media.regular}{
        top: 40%;
    }

    ${media.tablet}{
        top: 30%;
        left: 10%;
    }

    ${media.desktop}{
        top: 60%;
        left: 5%;
    }
`
// Script
export default {
    components: {
        'container' : Container,
        'wrapper': Wrapper
    }
}
</script>
