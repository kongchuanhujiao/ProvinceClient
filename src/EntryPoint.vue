<template>
  <router-view/>
</template>

<script>
export default {
  name: 'EntryPoint',
  mounted () {
    this.$emit('name', this.$route.name)
    this.$router.beforeEach((to, from, next) => {
      this.$emit('name', to.name)
      next()
    })
  }
}
</script>
