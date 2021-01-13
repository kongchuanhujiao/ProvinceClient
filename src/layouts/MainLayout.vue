<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-white">
      <q-toolbar class="text-primary">
        <q-btn
          flat dense round
          icon="menu"
          aria-label="菜单"
        >
          <q-menu>
            <q-list style="min-width: 160px">

              <q-item
                clickable exact
                v-for="i in menu"
                :key="i.name"
                :to="i.to"
              >
                <q-item-section avatar>
                  <q-avatar :icon="i.icon" text-color="white" size="md" :color="i.bg"/>
                </q-item-section>
                <q-item-section>{{ i.name }}</q-item-section>
              </q-item>

            </q-list>
          </q-menu>
        </q-btn>

        <q-toolbar-title class="text-center text-black">{{ title }}</q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MainLayout',
  data () {
    return {
      menu: [
        {
          name: '欢迎',
          icon: 'home',
          bg: 'teal',
          to: '/'
        },
        {
          name: '问答',
          icon: 'mark_chat_read',
          bg: 'green',
          to: '/wenda/home'
        },
        {
          name: '帮帮团',
          icon: 'school',
          bg: 'info',
          to: '/bangbangtuan/home'
        },
        {
          name: '校园云',
          icon: 'cloud_queue',
          bg: 'light-blue',
          to: '/xiaoyuanyun/home'
        }
      ],
      title: this.$route.name
    }
  }
}
</script>
