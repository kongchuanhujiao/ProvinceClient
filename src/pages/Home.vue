<template>
  <q-page>
    <div class="q-pa-md">
      <q-avatar size="80px">
        <img src="https://s3.ax1x.com/2021/02/24/yONh28.png" alt="欢迎">
      </q-avatar>
      <span class="q-ml-md text-h5">您好，欢迎使用！</span>
    </div>

    <q-separator/>

    <div class="q-pa-md">
      <span class="text-h5">功能</span>

      <div class="flex flex-center q-mt-md q-pa-sm bg-grey-2 func">
        <router-link class="text-center q-px-md q-py-sm funcname" v-for="( l, i ) in func" :key="i" :to="l.to">
          <q-avatar size="60px">
            <img :src="l.img" alt="功能">
          </q-avatar>
          <div class="text-subtitle2 text-primary">{{ l.name }}</div>
        </router-link>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      func: [
        {
          name: '问答',
          img: 'https://s3.ax1x.com/2021/02/24/yOUszT.png',
          to: '/wenda/home'
        }
      ]
    }
  }
}
</script>

<style scoped>
.func {
  border-radius: 16px;
}

.funcname {
  text-decoration: none;
}
</style>
