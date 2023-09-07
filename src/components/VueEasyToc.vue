<template>
  <ul id="vue-easy-toc" v-toc="{ content, heading}"/>
</template>
<script>
export default {
  name: 'VueEasyToc',
  props: {
    content: {
      type: String,
      default: 'body'
    },
    heading: {
      type: String,
      default: 'h1,h2,h3,h4,h5,h6'
    }
  }
}
</script>
<style lang="scss" scoped>
#vue-easy-toc {
  list-style: none;
  background: #F9F9F9;
  border: 1px solid #AAAAAA;
  border-radius: 4px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
  display: table;
  margin: 0 0 1em;
  padding: 10px;
  position: relative;
  width: auto;

  li {
    a {

    }
  }

  ul {
    list-style: none;
  }
}
</style>
