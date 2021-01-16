<template>
  <q-layout
    view="lHh Lpr lFf"
    class="flex"
    style="flex-flow: column; align-items: center"
  >
    <q-header
      class="flex bg-white"
      style="flex-flow: column; align-items: center"
    >
      <q-toolbar
        class="text-primary"
        style="max-width: 1333px"
      >
        <q-btn
          flat dense round
          icon="menu"
          aria-label="菜单"
        >
          <q-menu>
            <q-list style="width: 150px">

              <q-item
                clickable exact
                v-for="i in menu"
                :key="i.name"
                :to="i.to"
              >
                <q-item-section avatar>
                  <q-avatar
                    :icon="i.icon"
                    size="md"
                    :color="i.bg"
                    text-color="white"
                  />
                </q-item-section>
                <q-item-section>{{ i.name }}</q-item-section>
              </q-item>

            </q-list>
          </q-menu>
        </q-btn>

        <q-toolbar-title
          class="text-center text-black text-weight-bold"
        >
          {{ title }}
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container style="max-width: 1333px;width: 100%;">
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
