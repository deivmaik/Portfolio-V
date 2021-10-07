<template >
    <styled-p ></styled-p>  
</template>
<script>
// Styles 
import styled from 'vue-styled-components'

export const pprops = { 
    bigger: Boolean,
    normal: Boolean
 };
export const P = styled('p', pprops)`
    margin: 0;
    padding: 0;
    font-weight: 400;
    font-size: ${props => props.bigger ? '2.2rem' : '1.6rem'};
    color: ${props => props.normal ? '#4F4E4E' : '#fff'};
    text-align: center;
`
// Script
export default {
    components: {
        'styled-p' : P
    }
}
</script>
