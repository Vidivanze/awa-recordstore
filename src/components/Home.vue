<template>
  <Navbar/>
  <Content/>
</template>

<script>

import Navbar from './Navbar.vue'
import Content from './Content.vue'

export default {
    name: 'Home',

    components: {
      Navbar,
      Content
    },

    props: {
        msg: String
    }
}
</script>

<style>

</style>