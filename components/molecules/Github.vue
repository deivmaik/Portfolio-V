<template >
    <wrapper background>
        <icon name='github'></icon>
    </wrapper>
</template>s
<script>
// Styles 
import styled from 'vue-styled-components'
import { Wrapper as Base} from '../atoms/Wrapper.vue'

const Wrapper = styled(Base)`
top: 40rem
`
// Script
export default {
    components: {
        'wrapper': Wrapper,
    }
}
</script>
