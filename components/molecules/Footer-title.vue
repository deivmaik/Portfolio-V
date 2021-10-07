<template>
    <styled-h2>{{content}}</styled-h2>
</template>
<script>
// Styles 
import styled from 'vue-styled-components'
import { media } from '~/global'
import { Styledh2 as Base} from '../atoms/Styled-h2.vue'

 const Styledh2 = styled(Base)`
    padding: 0 4rem;
    text-align: center;
    font-style: normal;
    font-weight: 600;
    font-size: 7.5rem;
    line-height: 150px;
    color: #FFFFFF;

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