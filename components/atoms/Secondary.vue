<template>
    <styled-h2 >{{content}}</styled-h2>
</template>
<script>
// Styles 
import styled from 'vue-styled-components'
import { Styledh2 as Primary} from './Primary.vue'
// A child component needs to explicitly declare the props it expects to receive
const Styledh2 = styled(Primary)`
    -webkit-text-stroke: 0.1rem #000000 ;
    text-shadow: none;
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
