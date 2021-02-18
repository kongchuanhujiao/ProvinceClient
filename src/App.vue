<template>
  <q-layout id="q-app" view="hHh lpr fff" class="layout flex bg-grey-2">
    <q-header class="layout flex bg-white">
      <q-toolbar class="limited">
        <q-btn flat round class="text-grey-14" icon="menu" aria-label="菜单">
          <q-menu>
            <q-list>
              <q-item clickable exact v-for="i in menu" :key="i.name" :to="i.to">
                <q-item-section avatar>
                  <q-avatar size="md" :icon="i.icon" :color="i.bg" text-color="white"/>
                </q-item-section>
                <q-item-section>{{ i.name }}</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>

        <q-toolbar-title class="text-black text-weight-bold">{{ title }}</q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container class="limited bg-white">
      <q-ajax-bar color="positive"/>
      <router-view @name="name"/>
    </q-page-container>
  </q-layout>
</template>

<style scoped>
.layout {
  flex-flow: column;
  align-items: center;
}

.limited {
  width: 100%;
  max-width: 1333px;
}
</style>

<script>
export default {
  name: 'App',
  data () {
    return {
      menu: [
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
        }
      ],
      title: '空中与传统互动教学AI'
    }
  },
  methods: {
    name (n) {
      this.title = n
      document.title = n + ' - 空中与传统互动教学AI'
    }
  }
}
</script>
