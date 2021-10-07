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
    
    
`

const StyledP = styled(P)`
    
    ${media.tablet}{
        padding-top: 5%;
    }

    ${media.desktop}{
        padding-top: 0;
    }

    ${media.wideScreen}{
        padding-top: 5%;
    }
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