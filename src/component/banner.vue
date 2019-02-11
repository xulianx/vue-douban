<template>
    <div class="banner">
      <el-row>
        <el-col :span="9" :offset="2" class="mytitle">聊聊你的观影感受</el-col>
        <el-col :span="9" :offset="4" style="margin-top: 5%;">
          <el-button type="success" plain style="float: left">极速下载</el-button>
          <el-button plain style="float: left">打开</el-button>
        </el-col>
      </el-row>
    </div>
</template>

<script>
    export default {
      name: 'banner'
    }
</script>

<style lang="scss" scoped>
  .banner {
    background: url('../assets/promotion_bg.jpg') no-repeat;
    height: 8rem;
    background-size: 100%;
    .mytitle {
      font-size: 1.7em;
      color: #2CA532;
      line-height: 6rem;
    }
  }
</style>
