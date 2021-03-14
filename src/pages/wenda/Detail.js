export default {
  name: 'WendaDetails',
  data () {
    return {
      data: {
        group_name: '',
        members: [],
        questions: [{
          status: 0,
          topic: {
            target: 0,
            options: [],
            question: [],
            key: ''
          },
          type: 0
        }],
        result: {
          count: 0,
          right: [],
          wrong: [{
            type: '',
            value: []
          }]
        }
      },
      type: ['选择题', '填空题'],
      abc: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'],
      status: 0,
      toggle: [{
        label: '预备作答',
        value: 0
      }, {
        label: '允许作答',
        value: 1
      }, {
        label: '停止作答',
        value: 2
      }],
      proneWrong: '暂无数据',
      chart: {},
      websocket: undefined,
      close: undefined
    }
  },
  methods: {
    load () {
      this.$axios.get('/apis/wenda/questions?id=' + this.$route.params.id).then(res => {
        this.data = res.data.data
        this.status = res.data.data.questions[0].status

        this.switchWebsocket()

        this.histogram(0, 'data-right', [{
          type: '正确人数 ' + this.data.result.right.length,
          value: this.data.result.right.length
        }])
        this.histogram(1, 'data-wrong', [{
          type: '错误人数 ' + (this.data.result.count - this.data.result.right.length),
          value: this.data.result.count - this.data.result.right.length
        }])
        this.histogram(2, 'data-pronewrong', this.wrongDigest())
        this.update()
      })
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
    badgeLabel (s) {
      switch (s) {
        case 0:
          return '未开始'
        case 1:
          return '答题中'
        case 2:
          return '已结束'
      }
    },

    switchStatus () {
      this.$q.dialog({
        title: '更改状态',
        message: '确实更改状态为“' + this.badgeLabel(this.status) + '"吗？',
        cancel: true
      }).onOk(() => {
        this.$axios.put('/apis/wenda/questions/status', {
          id: Number(this.$route.params.id),
          status: this.status
        }).then(res => {
          this.data.questions[0].status = this.status
          this.switchWebsocket()
          this.$q.notify({
            message: '成功更改状态：' + this.badgeLabel(this.status),
            position: 'top-right'
          })
        }).catch(() => {
          this.status = this.data.questions[0].status
          this.$q.notify({
            message: '更改状态失败',
            position: 'top-right'
          })
        })
      }).onCancel(() => {
        this.status = this.data.questions[0].status
      })
    },
    switchWebsocket () {
      switch (this.data.questions[0].status) {
        case 0:
          try {
            this.websocket.close()
            clearInterval(this.close)
          } catch (e) {
          }
          break
        case 1:
          this.websocket = new WebSocket(
            this.address() +
            '/apis/wenda/runtime?id=' +
            this.$route.params.id +
            '&token=' +
            this.$q.localStorage.getItem('token')
          )
          this.websocket.onopen = () => {
            this.close = setInterval(() => {
              try {
                this.websocket.send('keep heart')
              } catch (e) {
              }
            }, 50000)
          }
          this.websocket.onmessage = msg => {
            const data = JSON.parse(msg.data)
            console.log('服务器推送问答数据：', data)
            this.data.result = data.result
            this.update()
          }
          break
        case 2:
          try {
            this.websocket.close()
            clearInterval(this.close)
          } catch (e) {
          }
          break
      }
    },

    histogram (id, elm, data) {
      const chart = new this.$g2.Chart({
        container: elm,
        autoFit: true,
        width: 120,
        height: 120
      })

      chart.data(data)
      chart.scale('sales', { nice: true })
      chart.interval().position('type*value')

      chart.render()
      this.chart[id] = chart
    },
    updateHistogram (id, data) {
      this.chart[id].changeData(data)
    },

    rightRate () {
      const r = this.data.result.right.length / this.data.result.count
      if (isNaN(r)) {
        return 0
      }
      return Math.floor(r * 100)
    },
    wrongRate () {
      return 100 - this.rightRate()
    },
    wrongDigest () {
      const d = this.data.result.wrong
      const r = []
      if (d.length === 0) {
        return [{
          type: '暂无数据',
          value: 0
        }]
      }
      for (let i = 0; i < d.length; i++) {
        r.push({
          type: d[i].type,
          value: d[i].value.length
        })
      }
      r.sort((a, b) => {
        return a.value.length - b.value.length
      })
      r.reverse()
      if (r.length > 0) {
        this.proneWrong = r[0].type
      }
      return r
    },

    update () {
      this.updateHistogram(0, [{
        type: '正确人数 ' + this.data.result.right.length,
        value: this.data.result.right.length
      }])
      this.updateHistogram(1, [{
        type: '错误人数 ' + (this.data.result.count - this.data.result.right.length),
        value: this.data.result.count - this.data.result.right.length
      }])
      this.updateHistogram(2, this.wrongDigest())
    },

    praise () {
      this.$axios.post('/apis/wenda/praise', { id: Number(this.$route.params.id) }).then(res => {
        this.$q.notify({
          message: '表扬成功',
          position: 'top-right'
        })
      }).catch(() => {
        this.$q.notify({
          message: '表扬失败',
          position: 'top-right'
        })
      })
    },

    download () {
      open(
        '/apis/wenda/csv?id=' + this.$route.params.id +
        '&token=' + this.$q.localStorage.getItem('token'), '_blank'
      )
    },

    address () {
      let p = 'wss:'
      if (location.protocol === 'http:') {
        p = 'ws:'
      }
      return p + '//' + location.host
    }
  },
  mounted () {
    this.load()
  }
}
