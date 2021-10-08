<template >
    <styled-p start >{{content}}</styled-p>  
</template>
<script>
// Styles 
import styled from 'vue-styled-components'
import { media } from '~/global'
import { P } from '../atoms/Styled-p.vue'

const styledP = styled(P)`
margin-top: 10%;

${media.desktop}{
    margin-top: 2%;
    font-size: 1.8rem;
}

${media.wideScreen}{
    font-size: 2.2rem;
}
`
// Script
export default {
    components: {
        'styled-p' : styledP
    },
    props: {
        content : String,
        default: 'text'
    }
}
</script>
