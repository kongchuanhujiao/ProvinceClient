<template>
  <div>
    <q-banner rounded class="bg-grey-1">
      <span>快捷：</span>
      <router-link to="/wenda/list" style="text-decoration: none">
        <q-chip icon="list" size="md" color="primary" text-color="white">问答列表</q-chip>
      </router-link>
      <router-link to="/wenda/new" style="text-decoration: none">
        <q-chip icon="add" size="md" color="primary" text-color="white">新建问答</q-chip>
      </router-link>
      <router-link to="/wenda/markets" style="text-decoration: none">
        <q-chip icon="storefront" size="md" color="primary" text-color="white">问答市场</q-chip>
      </router-link>
    </q-banner>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'Wenda'
}
</script>
