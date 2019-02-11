<template>
    <div class="SubjectView">
      <banner></banner>
      <h1>电影详情</h1>
      <download-app></download-app>
    </div>
</template>

<script>
    import banner from '@/component/banner'
    import downloadApp from '../component/downloadApp'

    export default {
      name: 'SubjectView',
      components: { banner, downloadApp },
      data () {
        return {
        }
      },
      beforeMount () {
        const id = this.$route.params.id
        const classfiy = this.$route.params.classfiy
        this.$store.dispatch({
          type: 'getMoviesDetail',
          id: id,
          classfiy: classfiy
        })
      }
    }
</script>

<style lang="scss" scoped>

</style>
