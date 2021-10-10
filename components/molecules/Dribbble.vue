<template >
    <container>
        <a href='https://dribbble.com/deivmaik' target="_blank">
            <wrapper background='#FCEBF1' >
                <icon name='dribbble'></icon>
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
    grid-row-start: 4;
    grid-column-start: 2;
    grid-row-end: 5;
    grid-column-end: 4;

    animation: ${Floating} 6s ease-in-out infinite
    
    ${media.desktop}{
        margin-bottom: 5rem;
    }

    ${media.wideScreen}{
        margin-bottom: 0;
    }
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

    
    transition: all .3s ease-in-out;
    &:hover { 
    box-shadow: 0px 0px 0px 15px #F3D3DE;
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

