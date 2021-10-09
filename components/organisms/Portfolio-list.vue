<template >
    <wrapper>
        <card v-for='item in items' v-bind:key='item.id'>
            <grid>
                <container>
                    <styled-h4  v-bind:content='item.title'></styled-h4>
                    <primary-p v-bind:content='item.job'></primary-p>
                    <secondary-p v-bind:content='item.tools'></secondary-p>
                </container>
                <redirect v-bind:href='item.path' target='_blank'><arrow></arrow></redirect>
            </grid>
        </card> 
    </wrapper>
</template>
<script>
// Styles 
import styled from 'vue-styled-components'
import { media } from '~/global'
import { P } from '../atoms/Styled-p.vue'

const Wrapper = styled.div`
    width: 100%;
        ${media.desktop}{
        width: 66%;
    }
`
const Card = styled.div`
width: 100%;

&:not(:last-child):after{
    content:'';
    display:block;
    background:#4F4E4E;
    height:0.1rem;
    width: 25rem;
    ${media.desktop}{
        width: 50rem;
    }
}
`
const Container = styled.div`
    display:grid;
    grid-row-start: 1;
    grid-column-start: 1;

    grid-row-end: 2;
    grid-column-end: 4;
`

const Grid = styled.div`
    display: grid; 

    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr 1fr 1fr;
`

const StyledP = styled(P)`
    display: none;
    ${media.tablet}{
        display:block;
        margin-top: 6.5%;
        padding-right: 2%;
        color: #5C5B5B;
        border-radius: 1rem;
    }
`
const Redirect = styled.a`
    display:grid;
    grid-row-start: 1;
    grid-column-start: 4;

    grid-row-end: 2;
    grid-column-end: 5;

    margin: 25% 0 0 0;
    padding: 0;
    width: 7.5rem;
    height: 7.5rem;
    border-radius: 10rem;
    transition: all .3s ease-in-out;
    &:hover{
        background: #FCB720;
        border: none;
        box-shadow: 0 0 0.5rem 0.5rem #FAE5B7;
    }
`
const Arrow = styled(ArrowSVG)`
    width: 50%;
    padding: 2.5rem 2rem;
    transition: all .3s ease-in-out;
    &:hover{
        font-weight: 400;
        transform: rotate(-45deg);
    }
`
// Script
import ArrowSVG from '~/assets/svg/arrow.svg'

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
                    path:'https://www.laconstru.com/'
                },
                {
                    id: 2,
                    title: 'laConstru B2B',
                    subtitle:'proptech startup.',
                    job:'frontend development & UI Design ',
                    tools: 'Figma & Next.js (React)',
                    path:'https://dribbble.com/shots/16618106-LaConstru-B2B'
                },
                {
                    id: 3,
                    title: 'swip',
                    subtitle:'personal project',
                    job:'website development & UI Design ',
                    tools: 'Figma & React.js',
                    path:'https://www.miswip.com/',
                    fetured: true
                },
                {
                    id: 4,
                    title: 'portfolio',
                    subtitle:' ',
                    job:'frontend development & UI Design',
                    tools: 'Figma & Nuxt.js (Vue)',
                    path:'https://github.com/deivmaik/Portfolio-V'
                }
            ]
        }
    },
    components: {
        'wrapper': Wrapper,
        'card': Card,
        'grid': Grid,
        'container': Container,
        'styled-p': StyledP,
        'redirect': Redirect,
        'arrow': Arrow
    }
}
</script>
