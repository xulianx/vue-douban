<template>
    <div class="register">
      <div>
        <router-link to="/">取消</router-link>
        <h1 class="title">欢迎加入豆瓣</h1>
      </div>
      <form ref="registerForm" :model="registerForm">
        <el-item>
          <el-input class="accout" v-model.trim="registerForm.account" placeholder="账户名"></el-input>
        </el-item>
        <el-item>
          <el-input class="accout" v-model.trim="registerForm.email" type="email" placeholder="邮箱"></el-input>
        </el-item>
        <el-item>
          <el-input class="accout" v-model.trim="registerForm.password" type="password" placeholder="密码"></el-input>
        </el-item>
        <el-item>
          <el-button type="success" round>注册豆瓣</el-button>
        </el-item>
      </form>
    </div>
</template>

<script>
    export default {
      name: 'registerView',
      data () {
        return {
          registerForm: {
            email: '',
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
