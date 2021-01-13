<template>
  <q-page class="flex flex-center"
          style="background: url('https://v.campus.qq.com/static/cloudCourse/pc-bg.png') center center / cover no-repeat">
    <div class="text-h1 text-weight-bolder text-white" style="position: absolute;left: 8%;">欢迎登录</div>
    <q-form
      class="q-pa-lg q-gutter-md text-center bg-white shadow-1"
      style="position: absolute;right: 8%;max-width: 380px;width: 100%;border-radius: 16px"
      @submit="login"
    >

      <q-input
        outlined clearable autofocus
        label="用户名"
        v-model="account"
        @blur="completeInput"
        :rules="[
          val => !!val || '用户名不能为空',
          val => val.length <= 14 || '用户名有误'
        ]"
      >
        <template v-slot:prepend>
          <q-icon name="account_circle"/>
        </template>
      </q-input>

      <q-input
        outlined
        type="tel"
        label="验证码"
        v-model="code"
        :rules="[
          val => !!val || '验证码不能为空',
          val => val.length <= 4 || '验证码有误'
        ]"
      >
        <template v-slot:prepend>
          <q-icon name="code"/>
        </template>
      </q-input>

      <q-btn
        outline rounded
        type="submit"
        size="lg"
        class="q-px-xl"
        color="primary"
        label="登录"
      ></q-btn>
    </q-form>

  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      account: '',
      code: ''
    }
  },
  methods: {
    completeInput () {
      if (!this.account || this.account.length > 14) {
        return
      }

      this.$axios.post('apis/accounts/code', { id: this.account }).then(res => {
        if (res.data.status === 1) {
          this.$q.notify({
            message: '验证码发送失败：' + res.data.message,
            position: 'top-right'
          })
          return
        }

        this.$q.notify({
          message: '验证码发送成功，请注意查收',
          position: 'top-right'
        })
      })
    },
    login () {
      this.$axios.post('apis/accounts/login', {
        id: this.account,
        code: this.code
      }).then(res => {
        if (res.data.status === 1) {
          this.$q.notify({
            message: '登录失败：' + res.data.message,
            position: 'top-right'
          })
          return
        }

        this.$q.notify({
          message: '登录成功，正在为您跳转...',
          position: 'top-right'
        })
      })
    }
  }
}
</script>
