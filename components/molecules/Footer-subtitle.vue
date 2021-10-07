<template >
    <wrapper>
        <styled-p >{{content}}</styled-p>  
    </wrapper>
</template>
<script>
// Styles 
import styled from 'vue-styled-components'
import { media } from '~/global'
import { P } from '../atoms/Styled-p.vue'

const Wrapper = styled.div`  
padding: 0;
`

export const StyledP = styled(P)`
    padding-top: 20%;
    ${media.tablet}{
        padding: 5% 0;
    }

    ${media.desktop}{
        padding: 2% 0 0 0;
    }

    ${media.wideScreen}{
        padding: 5% 0 0 0;
    }
`
// Script
export default {
    components: {
        'wrapper' : Wrapper,
        'styled-p' : StyledP
    },
    props: {
        content : String,
        default: 'text'
    }
}
</script>