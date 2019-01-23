<template>
    <div class="homeView">
      <el-row :gutter="10">
        <el-col :span=12>
          <router-link to="/pages/movie">
            <div class="block">影院热映</div>
          </router-link>
        </el-col>
        <el-col :span=12>
          <router-link to="/pages/status">
            <div class="block">欧美新碟榜</div>
          </router-link>
        </el-col>
      </el-row>
      <el-row :gutter="10">
        <el-col :span=12>
          <router-link to="/register">
            <div class="block">注册账号</div>
          </router-link>
        </el-col>
        <el-col :span=12>
          <router-link to="/login">
            <div class="block">登录豆瓣</div>
          </router-link>
        </el-col>
      </el-row>
      <div class="list">
        <list :items="events"></list>
        <InfiniteLoading @infinite="onInfinite" ref="infiniteLoading"></InfiniteLoading>
      </div>
    </div>
</template>

<script>
    import InfiniteLoading from 'vue-infinite-loading'
    import list from '../component/list'
    import { mapState, mapActions } from 'vuex'

    export default {
      name: 'homeView',
      components: { list, InfiniteLoading },
      computed: {
        ...mapState({
          events: state => state.activities.events
        })
      },
      methods: {
        onInfinite: function () {
          setTimeout(() => {
            this.getmoreEvent()
            this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded')
          }, 2000)
        },
        ...mapActions([
          'getmoreEvent'
        ])
      }
    }
</script>

<style lang="scss" scoped>
  .homeView{
    .el-row {
      margin: 10px auto;
    }
    .block {
        border-radius: 5px;
        color: #666666;
        height: 45px;
        line-height: 45px;
        text-align: center;
        background-color: #f5f5f5;
      }
  }

</style>
