<template >
    <styled-nav>
        <styled-li v-for='link in links' v-bind:key='link.id'>
            <p>{{link.id}}.</p>
            <router-link :to="link.path">{{ link.text }}</router-link>
        </styled-li>
    </styled-nav>
</template>
<script>
// Styles 
import styled from 'vue-styled-components'
import { media } from '../../global'

const StyledNav = styled.nav`
    display: none;

    ${media.tablet}{
        display: flex;
        padding: 1.5rem 0 ;
        justify-content: center;
        /* font styles */
        font-size: 1.6rem;
        line-height: 175%;
        letter-spacing: 0.5rem;
        color: #727272;

        :before{
            content: '{';
            height: 0.1rem;
            margin: 1.5rem 0;
            font-size: 2rem;
            font-weight: 100;
            color: #727272;
        }
        :after{
            content: '}';
            height: 0.1rem;
            margin: 1.5rem 0;
            font-size: 2rem;
            font-weight: 100;
            color: #727272;
        }
    }
        }
    }
`
const StyledLi = styled.li`
    display: flex;
    align-items: center;
    margin: 0 2rem;
`

// Script
export default {
    data() {
        return {
            links : [
                {
                    id: 0,
                    text:'home',
                    path:'/'
                },
                {
                    id: 1,
                    text:'portfolio',
                    path:'/'
                },
                {
                    id: 2,
                    text:'about',
                    path:'/'
                },
                {
                    id: 3,
                    text:'blog',
                    path:'/'
                },
                {
                    id: 4,
                    text:'contact',
                    path:'/'
                }
            ]
        }
    },
    components: {
        'styled-nav': StyledNav,
        'styled-li': StyledLi,
    }
}
</script>
 