<template>
  <div class="register">
    <div>
      <router-link to="/">取消</router-link>
      <h1 class="title">登录豆瓣</h1>
    </div>
    <el-form ref="loginForm" :model="loginForm">
      <el-form-item>
        <el-input class="accout" v-model.trim="loginForm.account" placeholder="账户名/邮箱"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input class="accout" v-model.trim="loginForm.password" type="password" placeholder="密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="success" round>登录豆瓣</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: 'loginView',
    data () {
      return {
        loginForm: {
          account: '',
          password: ''
        }
      }
    }
  }
</script>
<style lang="scss">
  .register {
    input {
      height: 50px!important;
      line-height: 50px;
    }
    button {
      width: 100%;
      margin: 10px auto;
      padding: 15px!important;
    }
  }
</style>
<style lang="scss" scoped>
  .register {
    .title {
      text-align: center;
      color: #42bd56;
      margin: 30px auto;
      font-size: 3.2em;
    }
    form {
      padding: 10px 20px;
      .accout {
        height: 50px;
      }
    }
  }
</style>
