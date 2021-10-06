<template>
    <quaternary stroke>{{content}}</quaternary>
</template>
<script>
// Styles 
import styled from 'vue-styled-components'
import { media } from '~/global'

import { Styledh3 } from '../atoms/Styled-h3.vue'

const Quaternary = styled(Styledh3)`
    padding-bottom: 30%;
    ${media.desktop}{
        padding-bottom: 10%;
    }
`
// Script
export default {
    components: {
        'quaternary' : Quaternary
    },
    props: {
        // data props
        content : String,
        default: 'text'
    }
}
</script>
