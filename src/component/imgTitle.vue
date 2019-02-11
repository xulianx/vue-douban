<template>
    <div class="imgttile">
      <div class="mytitle">
        <h2>{{title}}</h2>
        <span>更多</span>
      </div>
      <el-row>
        <ul class="onlyString" v-if="type === 'onlyString'">
          <li v-for="item in items">
            <a :href="item.href" :style="{ color: item.color}" v-if="!item.line">
              {{item.title}}
            </a>
          </li>
        </ul>
        <ul class="movielist" v-else>
          <li v-for="item in items">
            <router-link :to="{path:'subject/' + item.id}" append>
              <img v-if="item.images" :src="item.images.large" alt="">
              <span class="title">{{item.title}}</span>
              <rating v-if="item.rating" :rating="item.rating"></rating>
            </router-link>
          </li>
        </ul>
      </el-row>
    </div>
</template>

<script>
  import Rating from './Rating'

  export default {
    name: 'imgTitle',
    props: {
      title: {
        type: String,
        default: ''
      },
      items: {
        type: Array,
        default: function () {
          return []
        }
      },
      type: {
        type: String,
        default: ''
      }
    },
    components: {
      Rating
    }
  }
</script>

<style lang="scss" scoped>
  .imgttile {
    .mytitle {
      margin:15px 0px;
      h2 {
        display: inline-block;
      }
      span {
        float: right;
        color: #00b600;
      }
    }
    .movielist {
      white-space: nowrap;
      overflow-x: auto;
      text-align: center;
      padding-bottom: 15px;
      li {
        display: inline-block;
        width: 10rem;
        margin-right: 7px;
        vertical-align: middle;
        img {
          width: 100%;
          height: 15rem;
        }
        .title {
          display: block;
          color: #333;
          font-size: 1.5em;
        }
      }
    }
    .onlyString {
      white-space: nowrap;
      overflow-x: auto;
      padding-bottom: 15px;
      li {
        display: inline-block;
        margin-right: 8px;
        vertical-align: middle;
        border: 1px solid #FFAC2D;
        border-radius: 5px;
        padding: 1.8rem 1rem;
        a {
          font-size: 1.5em;
        }
        &:empty {
          display: block;
          border: 0;
          margin: 0;
          padding: 0;
          height: 0.5rem;
        }
      }
    }
  }
</style>
