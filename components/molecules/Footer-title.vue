<template>
    <styled-h2>{{content}}</styled-h2>
</template>
<script>
// Styles 
import styled from 'vue-styled-components'
import { media } from '~/global'
import { Styledh2 as Base} from '../atoms/Styled-h2.vue'

 const Styledh2 = styled(Base)`
    padding: 10rem 4rem 2.5rem 4rem;
    text-align: center;
    font-style: normal;
    font-weight: 600;
    font-size: 7.5rem;
    line-height: 120px;
    color: #FFFFFF;

    ${media.desktop}{
        padding-top: 15rem;
    }

    ${media.wideScreen}{
        padding-top: 25rem;
        padding-bottom: 10rem;
        font-size: 10rem;
    }
`
// Script
export default {
    components: {
        'styled-h2' : Styledh2
    },
    props: {
        // data props
        content : String,
        default: 'text'
    }
}
</script>