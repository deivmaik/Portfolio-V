<template >
    <wrapper>
        <card v-for='item in items' v-bind:key='item.id'>
            <flex>
                <styled-h4  v-bind:content='item.title'></styled-h4>
                <styled-p >{{item.subtitle}}</styled-p>
            </flex>
            <primary-p v-bind:content='item.job'></primary-p>
            <secondary-p v-bind:content='item.tools'></secondary-p>
        </card> 
    </wrapper>
</template>
<script>
// Styles 
import styled from 'vue-styled-components'
import { media } from '~/global'
import { Container } from '~/pages/index.vue'
import { P } from '../atoms/Styled-p.vue'

const Wrapper = styled(Container)`
    background: #F2F6FF;
`
const Card = styled.div`
&:not(:last-child):after{
    content:'';
    display:block;
    background:#4F4E4E;
    height:0.1rem;
    width: 25rem;
    ${media.desktop}{
        width: 75rem;
    }
}
`
const Flex = styled.div`
    display: flex;
`

const StyledP = styled(P)`
    display: none;
    ${media.tablet}{
        display:block;
        margin-top: 6.5%;
        margin-left: 2%;
        color: #5C5B5B;
        border-radius: 1rem;
    }
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
                    path:'/',
                    fetured: true
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
        'styled-p': StyledP,
    }
}
</script>
