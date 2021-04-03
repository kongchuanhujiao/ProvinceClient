<template>
  <q-page class="q-pa-md">
    <q-btn-group outline>
      <q-btn outline color="blue" v-for="s in subject" :key="s[1]" :label="s[0]" @click="fetchMarket(s[1])"/>
    </q-btn-group>

    <q-list>
      <q-item v-for="q in data" :key="q.id" clickable class="text-justify">

        <q-item-section class="text text-weight-regular text-grey-9">
          {{ q.topic.question }}
        </q-item-section>
        <q-btn label="添加" style="width: 80px"></q-btn>
      </q-item>
    </q-list>

  </q-page>
</template>

<script>
export default {
  name: 'WendaMarket',
  data () {
    return {
      subject: [
        ['语文', 1],
        ['数学', 2],
        ['英语', 3],
        ['物理', 4],
        ['历史', 5],
        ['化学', 6],
        ['生物', 7],
        ['地理', 8],
        ['政治', 9],
        ['其他', 10]
      ],
      data: [{ id: 0, status: 0, topic: { question: [], target: 0 } }]
    }
  },
  methods: {
    fetchMarket (id) {
      this.$axios.get(`/apis/wenda/markets?subject=${id}`).then(res => {
        this.data = res.data.data
      })
    }
  },
  mounted () {
    this.fetchMarket(1)
  }
}
</script>

<style scoped>

</style>
