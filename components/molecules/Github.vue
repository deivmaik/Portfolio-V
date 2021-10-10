<template >
    <container>
        <a href='https://github.com/deivmaik' target="_blank">
        <wrapper background >
            <icon name='github'></icon>
        </wrapper>
        </a>
    </container>
</template>s
<script>
// Styles 
import styled , { keyframes } from 'vue-styled-components'
import { media } from '~/global'

import { Wrapper as Base} from '../atoms/Wrapper.vue'

export const Floating = keyframes`
    0% {
		transform: translatey(0);
	}
	50% {
		transform: translatey(-2.5rem);
	}
	100% {
		transform: translatey(0);
	}
`;

const Container = styled.div`
    display:grid;
    grid-row-start: 2;
    grid-column-start: 1;
    grid-row-end: 3;
    grid-column-end: 4;

    animation: ${Floating} 6s ease-in-out infinite
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
    transition: all .3s ease-in-out;
    &:hover { 
    box-shadow: 0px 0px 0px 15px #DCDADA;
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