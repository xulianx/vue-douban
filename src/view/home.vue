<template>
  <div>
    <header-bar></header-bar>
    <router-view></router-view>
  </div>
</template>

<script>
  import headerBar from '../component/headerBar'

  export default {
    name: 'Home',
    components: {
      headerBar
    },
    data () {
      return {
      }
    },
    created () {
    }
  }
</script>
