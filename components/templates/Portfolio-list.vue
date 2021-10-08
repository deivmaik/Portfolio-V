<template >
    <wrapper>
        <card v-for='item in items' v-bind:key='item.id'>
            <flex>
                <styled-h4  v-bind:content='item.title'></styled-h4>
                <styled-p v-bind:content='item.subtitle'></styled-p>
            </flex>
            <primary-p v-bind:content='item.job'></primary-p>
            <secondary-p v-bind:content='item.tools'></secondary-p>
        </card> 
    </wrapper>
</template>
<script>
// Styles 
import styled from 'vue-styled-components'
import { Container } from '~/pages/index.vue'

const Wrapper = styled(Container)`
    background: #F2F6FF;
`
const Card = styled.div`
&:after{
    content: '';
    border: 1px solid yellow;
}
`
const Flex = styled.div`
    display: flex;
`
// Script
export default {
    data() {
        return {
            items : [
                {
                    id: 1,
                    title: 'laConstru B2C',
                    subtitle:'proptech startup.',
                    job:'website development & UI Design',
                    tools: 'Figma & React.js',
                    path:'/'
                },
                {
                    id: 2,
                    title: 'laConstru B2B',
                    subtitle:'proptech startup.',
                    job:'frontend development & UI Design ',
                    tools: 'Figma & Next.js (React)',
                    path:'/'
                },
                {
                    id: 3,
                    title: 'swip',
                    subtitle:'personal project',
                    job:'website development & UI Design ',
                    tools: 'Figma & React.js',
                    path:'/'
                },
                {
                    id: 4,
                    title: 'portfolio',
                    subtitle:' ',
                    job:'frontend development & UI Design',
                    tools: 'Figma & Nuxt.js (Vue)',
                    path:'/'
                }
            ]
        }
    },
    components: {
        'wrapper': Wrapper,
        'card': Card,
        'flex': Flex,
    }
}
</script>
