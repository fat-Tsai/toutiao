<template>
    <div>
        <!-- 头部 -->
        <div class="login-container">
          <van-nav-bar title="黑马头条" fixed></van-nav-bar>
        </div>
        <!-- 登录表单 -->
        <van-form @submit="onSubmit">
          <van-field
            v-model="form.mobile"
            type="tel"
            label="手机号码"
            placeholder="请输入您的手机号码"
            :rules="rules.mobileRules"
          />
          <van-field
            v-model="form.code"
            type="password"
            label="登录密码"
            placeholder="请输入您的登录密码"
            :rules="rules.codeRules"
          />
          <div style="margin: 16px;">
            <van-button
              round block
              type="info"
              native-type="submit"
              :loading="isLoading"
              :disabled="isLoading"
              loading-text="正在登录..."
              >提交</van-button>
          </div>
        </van-form>
    </div>
</template>

<script>
import { loginAPI } from '@/api/userAPI'
import { mapMutations } from 'vuex'
import { Notify } from 'vant'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'login',
  data() {
    return {
      // 表单内数据
      form: {
        mobile: '',
        code: ''
      },
      // 表单校验规则
      rules: {
        mobileRules: [
          { required: true, message: '请填写手机号码', trigger: 'onBlur' },
          { pattern: /^1\d{10}$/, message: '手机号码格式不正确', trigger: 'onChange' }
        ],
        codeRules: [{ required: true, message: '请填写登陆密码', trigger: 'onBlur' }]
      },
      // 设置按钮状态，防止用户多次点击
      isLoading: false
    }
  },
  methods: {
    ...mapMutations(['updateTokenInfo']),
    async onSubmit() {
      this.isLoading = true
      const { data: res } = await loginAPI(this.form)
      console.log(res)
      if (res.message === 'OK') {
        this.updateTokenInfo(res.data)
        this.isLoading = false
        Notify({
          type: 'success',
          message: '登录成功',
          duration: 2000
        })
        this.$router.push('/')
      }
      if (res.response.data.message === '手机号或验证码不正确') {
        this.isLoading = false
        Notify({
          type: 'warning',
          message: '账号或密码错误',
          duration: 2000
        })
      }
    }
  }
}
</script>

<style lang="less" scoped>
  /deep/ .van-nav-bar__title {
    color: #fff;
    font-size: 14px;
  }
  /deep/ .van-nav-bar__content {
    background: #007bff;
  }
  .login-container {
    padding-top: 46px;
  }
</style>
