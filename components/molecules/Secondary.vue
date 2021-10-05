<template>
    <secondary stroke>{{content}}</secondary>
</template>
<script>
// Styles 
import styled from 'vue-styled-components'
import { media } from '../../global'

import { Styledh2 } from '../atoms/Styled-h2.vue'

const Secondary = styled(Styledh2)`
    padding-top: 5rem;
    ${media.desktop}{
        padding-top: 0;
        font-size: 12rem;
        line-height: 18rem;
    }
`
// Script
export default {
    components: {
        'secondary' : Secondary
    },
    props: {
        // data props
        content : String,
        default: 'text'
    }
}
</script>
