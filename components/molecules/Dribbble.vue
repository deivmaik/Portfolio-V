<template >
    <wrapper background='#FCEBF1'>
        <icon name='dribbble'></icon>
    </wrapper>
</template>
<script>
// Styles 
import styled from 'vue-styled-components'
import { Wrapper as Base} from '../atoms/Wrapper.vue'

const Wrapper = styled(Base)`
top: 30rem
`
// Script
export default {
    components: {
        'wrapper': Wrapper,
    }
}
</script>
