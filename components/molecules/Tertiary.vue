<template>
    <tertiary>{{content}}</tertiary>
</template>
<script>
// Styles 
import styled from 'vue-styled-components'
import { media } from '~/global'

import { Styledh3 } from '../atoms/Styled-h3.vue'

const Tertiary = styled(Styledh3)`
    padding-top: 30%;
    ${media.desktop}{
        padding-top: 10%;
    }
`
// Script
export default {
    components: {
        'tertiary' : Tertiary
    },
    props: {
        // data props
        content : String,
        default: 'text'
    }
}
</script>
