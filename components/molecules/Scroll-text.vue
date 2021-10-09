<template >
    <wrapper>
        <styled-p normal >{{content}}</styled-p>  
    </wrapper>
</template>
<script>
// Styles 
import styled , { keyframes } from 'vue-styled-components'
import { media } from '~/global'
import { P } from '../atoms/Styled-p.vue'

export const FadeIn = keyframes`
    from { opacity: 0; } 

     0% {
		opacity: 0;
	}
	50% {
		opacity: 100%;
	}
	100% {
		opacity: 0;
	}
`;

const Wrapper = styled.div`
    display:grid;
    grid-row-start: 5;
    grid-column-start: 1;
    grid-row-end: 6;
    grid-column-end: 4;

    padding-top: 5rem;
    
    ${media.desktop}{
        padding-top: 0%;
    }

    ${media.wideScreen}{
       padding-top: 5rem; 
    }
`

const StyledP = styled(P)`
    padding-top: 20%;

    ${media.tablet}{
        padding-top: 5%;
    }

    ${media.desktop}{
        padding-top: 0%;
    }

    ${media.wideScreen}{
        padding-top: 5%;
    }
    animation: ${FadeIn} 3s ease-in-out infinite;

`
// Script
export default {
    components: {
        'wrapper' : Wrapper,
        'styled-p' : StyledP
    },
    props: {
        // data props
        content : String,
        default: 'text'
    }
}
</script>