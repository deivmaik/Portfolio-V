<template >
    <styled-p bigger normal start >{{content}}</styled-p>  
</template>
<script>
// Styles 
import styled from 'vue-styled-components'
import { media } from '~/global'
import { P } from '../atoms/Styled-p.vue'

const styledP = styled(P)`
    padding-bottom: 10%;
    ${media.desktop}{
        padding-bottom: 5%;
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
