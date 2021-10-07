<template >
    <wrapper>
        <styled-p @click='copy'>{{content}}<clone></clone></styled-p>
    </wrapper>
</template>
<script>
// Styles 
import styled from 'vue-styled-components'
import { media } from '~/global'

import { P } from '../atoms/Styled-p.vue'

const Wrapper = styled.div`
    display:grid;
    justify-content:center;
    
`
const StyledP = styled(P)`
    padding:2rem;
    text-align:center;
    cursor: pointer
    border: 2px solid #656565;
    border-radius: 1rem;
    transition: all .3s ease-in-out;
    &:hover {
        border: 0.2rem solid #fff;
    }
`
const Clone = styled(CloneSVG)`
    margin-left: 1rem;
    width:1.5rem;
    height:1.5rem;
    fill: #656565;
`
// Script
import CloneSVG from '~/assets/svg/clone.svg'

export default {
    components: {
        'wrapper' : Wrapper,
        'styled-p': StyledP,
        'clone' : Clone
    },
    methods:{
        copy(){
            try{
                navigator.clipboard.writeText(this.content);
            }catch(err){
                throw (err)
            }
        }
    },
    props: {
        content : String,
        default: 'text'
    }
}
</script>
 