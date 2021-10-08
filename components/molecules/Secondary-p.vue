<template >
    <styled-p normal start >{{content}}</styled-p>  
</template>
<script>
// Styles 
import styled from 'vue-styled-components'
import { P } from '../atoms/Styled-p.vue'

const styledP = styled(P)`
margin-bottom: 5%;

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
