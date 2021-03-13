<template>
  <q-page>
    <q-list>
      <router-link class="block link" v-for="q in data.questions" :key="q.id" :to="'/wenda/questions/'+q.id">
        <q-item clickable class="text-justify">
          <q-badge class="badge q-mr-xs" :color="badgeColor(q.status)" :label="badgeText(q.status)"/>

          <q-badge outline class="badge q-mx-xs q-mr-sm" :label="badgeClass(q.topic.target)" color="grey-13"/>

          <q-item-section class="text text-weight-regular text-grey-9">
            {{ questionToString(q.topic.question) }}
          </q-item-section>
        </q-item>
      </router-link>
    </q-list>

    <q-btn round class="fixed-bottom-right new" color="primary" icon="add" size="lg"></q-btn>
  </q-page>
</template>

<style scoped>
.link {
  text-decoration: none;
}

.new {
  bottom: 24px;
  right: 24px;
}

.badge {
  height: 24px;
}

.text {
  display: flex;
  overflow: hidden;
  max-height: 60px;
  justify-content: flex-start;
}
</style>

<script>
export default {
  name: 'WendaList',
  data () {
    return {
      data: {
        questions: [{
          id: 0,
          status: 0,
          topic: {
            question: [],
            target: 0
          }
        }],
        groups: []
      }
    }
  },
  methods: {
    load () {
      this.$axios.get('/apis/wenda/questions').then(res => {
        this.data = res.data.data
      }).catch(() => {
        this.$q.notify({
          message: '获取问题列表失败',
          position: 'top-right'
        })
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
    badgeColor (s) {
      switch (s) {
        case 0:
          return 'green-13'
        case 1:
          return 'light-blue-12'
        case 2:
          return 'red-12'
      }
    },
    badgeText (s) {
      switch (s) {
        case 0:
          return '未开始'
        case 1:
          return '答题中'
        case 2:
          return '已结束'
      }
    },
    badgeClass (t) {
      try {
        return this.data.groups[t]
      } catch (e) {
        this.$q.notify({
          message: '获取群名称错误：',
          position: 'top-right'
        })
        console.error('获取群名称错误：', e)
      }
    }
  },
  mounted () {
    this.load()
  }
}
</script>
