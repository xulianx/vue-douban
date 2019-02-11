<template>
  <div class="bookView">
    <el-row>
      <imgTitle title="最受关注图书｜虚构类" :items="fictionalBooks">
      </imgTitle>
    </el-row>
    <el-row>
      <imgTitle title="最受关注图书｜非虚构类" :items="NonfictionalBooks">
      </imgTitle>
    </el-row>
    <el-row>
      <imgTitle title="豆瓣纸书" :items="doubanBooks"></imgTitle>
    </el-row>
    <el-row>
      <imgTitle title="发现好书" :items="bookTags" type="onlyString"></imgTitle>
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
    name: 'bookView',
    components: {
      imgTitle,
      typeScan,
      downloadApp
    },
    computed: {
      ...mapState({
        fictionalBooks: state => state.books.fictionalBooks,
        NonfictionalBooks: state => state.books.NonfictionalBooks,
        doubanBooks: state => state.books.doubanBooks,
        findMovies: state => state.movie.findMovies,
        bookTags: state => state.books.bookTags
      })
    },
    created () {
      this.$store.dispatch('getBooks')
    }
  }
</script>

<style scoped>

</style>
