<template>
  <q-list>
    <router-link
      style="text-decoration: none"

      v-for="q in data.questions"
      :key="q.id"

      :to="'/wenda/questions/'+q.id"
    >
      <q-item
        clickable
        class="q-ma-sm text-justify text-grey-9 text-weight-bold"
      >
        <q-badge
          class="q-ma-xs"
          style="height: 24px"
          :color="badgeColor(q.status)"
          :label="badgeText(q.status)"
        />

        <q-badge
          class="q-ma-xs q-mr-md"
          style="height: 24px"
          outline
          color="grey-14"
          :label="badgeClass(q.target)"
        />

        <q-item-section>
          {{ questionToString(q.question) }}
        </q-item-section>
      </q-item>
    </router-link>
  </q-list>
</template>

<script>
export default {
  name: 'WendaList',
  data () {
    return {
      data: {
        questions: [],
        groups: []
      }
    }
  },
  methods: {
    load () {
      this.$axios.get('/apis/wenda/questions').then(res => {
        if (res.data.status !== 0) {
          console.error('失败')
          return
        }
        this.data = res.data.data
      })
    },

    questionToString (q) {
      let text = ''

      for (let i = 0; i < q.length; i++) {
        if (q[i].type === 'img') {
          text += '[图片]'
          continue
        }
        text += q[i].data
      }

      return text
    },
    badgeColor (status) {
      switch (status) {
        case 0:
          return 'green-13'
        case 1:
          return 'light-blue-12'
        case 2:
          return 'red-12'
      }
    },
    badgeText (status) {
      switch (status) {
        case 0:
          return '未开始'
        case 1:
          return '答题中'
        case 2:
          return '已结束'
      }
    },
    badgeClass (target) {
      try {
        return this.data.groups[target]
      } catch (e) {
        console.error('获取群名称错误：', e)
      }
    }
  },
  mounted () {
    this.load()
  }
}
</script>

<style scoped>

</style>
