<template>
    <secondary stroke>{{content}}</secondary>
</template>
<script>
// Styles 
import styled from 'vue-styled-components'
import { media } from '../../global'

import { Styledh2 } from '../atoms/Styled-h2.vue'

const Secondary = styled(Styledh2)`
    padding-top: 10rem;
    margin: 0;
    display:gid;
    grid-row-start: 1;
    grid-column-start: 1;
    grid-row-end: 2;
    grid-column-end: 4;
    
    ${media.tablet}{
        padding-top: 5rem;
    }

    ${media.desktop}{
        padding-top: 5rem;
        font-size: 10rem;
        line-height: 12rem; 
    }

    ${media.wideScreen}{
        padding-top: 15rem;
        font-size: 12rem;
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
