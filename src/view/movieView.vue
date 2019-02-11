<template>
    <div class="movieView">
      <el-row>
        <imgTitle title="影院热映" :items="hotMovies">
        </imgTitle>
      </el-row>
      <el-row>
        <imgTitle title="免费在线观影" :items="freeMovies">
        </imgTitle>
      </el-row>
      <el-row>
        <imgTitle title="新片速递" :items="newMovies"></imgTitle>
      </el-row>
      <el-row>
        <imgTitle title="发现好电影" :items="findMovies" type="onlyString"></imgTitle>
      </el-row>
      <el-row>
        <typeScan title="分类浏览" :items="findMovies"></typeScan>
      </el-row>
      <download-app></download-app>
    </div>
</template>

<script>
    import imgTitle from '@/component/imgTitle'
    import typeScan from '@/component/typeScan'
    import downloadApp from '@/component/downloadApp'
    import { mapState } from 'vuex'

    export default {
      name: 'movieView',
      components: {
        imgTitle,
        typeScan,
        downloadApp
      },
      computed: {
        ...mapState({
          hotMovies: state => state.movie.hotMovies,
          freeMovies: state => state.movie.freeMovies,
          newMovies: state => state.movie.newMovies,
          findMovies: state => state.movie.findMovies
        })
      },
      created () {
        this.$store.dispatch('getMovies')
      }
    }
</script>

<style scoped>

</style>
