<template >
    <container>
        <a href='https://www.linkedin.com/in/michaelbiz/' target="_blank">
            <wrapper background='#E6F1F8' >
                <icon name='linkedin'></icon>
            </wrapper>
        </a>
    </container>
</template>
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
    display: grid;
    grid-row-start: 3;
    grid-column-start: 1;
    grid-row-end: 5;
    grid-column-end: 2;

    animation: ${Floating} 6s ease-in-out infinite;
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
    transition: all .3s ease-in-out;
    &:hover { 
    box-shadow: 0px 0px 0px 15px #CAEAFE;
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
