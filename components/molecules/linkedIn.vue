<template >
    <wrapper>
        <icon name='github' background="dribbble"></icon>
    </wrapper>
</template>
<script>
// Styles 
import styled from 'vue-styled-components'

const handleColorType = background => {
  switch (background) {
    case "github":
      return "background: #E6F1F8";
    case "dribbble":
      return "background: #FCEBF1";
    default:
      return "background: #ECECEC";
  }
};

export const Wrapper = styled.div`
width: 8rem;
height: 8rem;
${({ background }) => handleColorType(background)};
border-radius: 4rem;
`
// Script
export default {
    components: {
        'wrapper': Wrapper,
    }
}
</script>
