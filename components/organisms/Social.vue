<template >
    <wrapper>
        <styled-a href='https://www.linkedin.com/in/michaelbiz/' target="_blank"><linkedin></linkedin></styled-a>
        <styled-a href='https://dribbble.com/deivmaik' target="_blank"><dribbble></dribbble></styled-a>
        <styled-a href='https://github.com/deivmaik' target="_blank"><github></github></styled-a>
    </wrapper>
</template>
<script>
// Styles 
import styled from 'vue-styled-components'
import { media } from '~/global'

const Wrapper = styled.div`
padding: 10% 0;
display: flex;
justify-content: center;
align-items: center;
${media.desktop}{
    padding: 5% 0;
}
`
const styledA = styled.a`
    text-decoration: none;
    margin: 0 2rem;
`

const Linkedin = styled(LinkedinSVG)`
    transition: all .3s ease-in-out;
    &:hover {
        fill: #E6F1F8;
    }
`
const Dribbble = styled(DribbbleVG)`
    transition: all .3s ease-in-out;
    &:hover {
        fill: #FCEBF1;
    }
`
const Github = styled(GithubSVG)`
    transition: all .3s ease-in-out;
    &:hover {
        fill: #ECECEC;
    }
`
// Script
import GithubSVG from '~/assets/svg/github.svg'
import DribbbleVG  from '~/assets/svg/dribbble.svg'
import LinkedinSVG  from '~/assets/svg/linkedIn.svg'


export default {
    components: {
        'github' : Github,
        'dribbble' : Dribbble,
        'linkedin': Linkedin,
        'wrapper': Wrapper,
        'styled-a' : styledA
    }
};
</script>
