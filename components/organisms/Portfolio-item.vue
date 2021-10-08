<template >
    <wrapper>
        <Title-subtitle/>
    </wrapper>
</template>
<script>
// Styles 
import styled from 'vue-styled-components'
import { media } from '~/global'

const Wrapper = styled.div`

`

// Script
export default {
    data() {
        return {
        }
    },
    components: {
        'wrapper': Wrapper,
    }
}
</script>
