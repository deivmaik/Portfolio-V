<template >
    <container>
        <wrapper background='#FCEBF1'>
            <icon name='dribbble'></icon>
        </wrapper>
    </container>
</template>
<script>
// Styles 
import styled from 'vue-styled-components'
import { media } from '../../global'

import { Wrapper as Base} from '../atoms/Wrapper.vue'

const Container = styled.div`
    display: grid;
    grid-row-start: 4;
    grid-column-start: 2;
    grid-row-end: 5;
    grid-column-end: 4;
`
const Wrapper = styled(Base)`
    top: 70%;
    right: 30%;

    ${media.regular}{
        top: 55%;
    }

    ${media.tablet}{
        top: 35%;
    }

    ${media.desktop}{
        top: 80%;
    }

    ${media.wideScreen}{
        top: 75%;;
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
