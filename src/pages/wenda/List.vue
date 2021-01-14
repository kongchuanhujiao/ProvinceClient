<template>
  <q-page class="flex">
    <q-list>
      <q-item
        clickable
        v-for="q in data.questions"
        :key="q.id"
        class="q-ma-sm text-justify"
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
          color="teal"
          :label="badgeClass(q.target)"
        />
        <q-item-section class="text-weight-bold text-grey-9">{{ questionToString(q.question) }}</q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
export default {
  name: 'List',
  data () {
    return {
      // TODO 从服务器获取数据
      data: {
        questions: [
          {
            id: 17,
            type: 0,
            subject: 1,
            question: '[{"type": "text","data": "宋人蔡绦在《西清诗话》中说:“丹青、 吟咏，妙处相资。”吴龙翰的《野》“高情逸思，画之不足，题以发之。”材料中三人均强调( )"}]',
            creator_id: 'admin',
            target: 772045696,
            status: 0,
            options: '[{"type":"A","body":"绘画艺术的深远意境"},{"type":"B","body":"诗歌的抒情性"},{"type":"C","body":"诗、画具有互补作用"},{"type":"D","body":"诗歌增强了绘画的审美空间"}]',
            key: 'C',
            market: false
          },
          {
            id: 12,
            type: 0,
            subject: 6,
            question: '[{"type": "text","data": "在水中加入下列物质，可使水的电离平衡正向移动，且所得溶液呈酸性的是"}]',
            creator_id: 'admin',
            target: 1049796006,
            status: 0,
            options: '[{"type":"A","body":"NaCl"},{"type":"B","body":"H2SO4"},{"type":"C","body":"Na2CO3"},{"type":"D","body":"NH4Cl"}]',
            key: 'D',
            market: true
          },
          {
            id: 11,
            type: 0,
            subject: 1,
            question: '[{"type": "text","data": "宋人蔡绦在《西清诗话》中说:“丹青、 吟咏，妙处相资。”吴龙翰的《野》“高情逸思，画之不足，题以发之。”材料中三人均强调( )"}]',
            creator_id: 'admin',
            target: 1049796006,
            status: 0,
            options: '[{"type":"A","body":"绘画艺术的深远意境"},{"type":"B","body":"诗歌的抒情性"},{"type":"C","body":"诗、画具有互补作用"},{"type":"D","body":"诗歌增强了绘画的审美空间"}]',
            key: 'C',
            market: true
          },
          {
            id: 10,
            type: 0,
            subject: 1,
            question: '[{"type": "text","data": "选出下列句中没有词类活用现象的一项"}]',
            creator_id: 'admin',
            target: 1049796006,
            status: 0,
            options: '[{"type":"A","body":"《齐谐》者，志怪者也"},{"type":"B","body":"责臣逋慢"},{"type":"C","body":"其视下也，亦若是则已矣"},{"type":"D","body":"眄庭柯以怡颜"}]',
            key: 'B',
            market: true
          },
          {
            id: 9,
            type: 0,
            subject: 6,
            question: '[{"type": "text","data": "用pH试纸测定某无色溶液的pH，正确的是"}]',
            creator_id: 'admin',
            target: 1049796006,
            status: 0,
            options: '[{"type":"A","body":"将pH试纸放入溶液中，观察其颜色变化并于标准比色卡对照"},{"type":"B","body":"用广泛pH试纸测得该无色溶液pH为2.3"},{"type":"C","body":"用干燥、洁净玻璃棒蘸取溶液，滴在pH试纸上，观察其颜色并于标准比色卡对照"},{"type":"D","body":"用干燥、洁净玻璃棒蘸取溶液，滴在湿润的pH试纸上，测量的pH结果一定偏低"}]',
            key: 'C',
            market: true
          },
          {
            id: 8,
            type: 0,
            subject: 1,
            question: '[{"type": "text","data": "下列各句的句式特点与例句相同的一项是（    ）\\n例：而刘夙婴疾病"}]',
            creator_id: 'admin',
            target: 1049796006,
            status: 1,
            options: '[{"type":"A","body":"州司临门，急于星火"},{"type":"B","body":"此小大之辩也"},{"type":"C","body":"渔舟唱晚，响穷彭蠡之滨"},{"type":"D","body":"则告诉不许"}]',
            key: 'A',
            market: true
          },
          {
            id: 7,
            type: 0,
            subject: 2,
            question: '[{"type": "text","data": "椭圆x²/4+y²/a²=1与双曲线x²/a-y²/2=1有共同的渐近线，且过点（2，2）的双曲线标准方程为（）"}]',
            creator_id: 'admin',
            target: 1049796006,
            status: 2,
            options: '[{"type":"A","body":"1"},{"type":"B","body":"√2"},{"type":"C","body":"2"},{"type":"D","body":"3"}]',
            key: 'A',
            market: true
          },
          {
            id: 5,
            type: 0,
            subject: 6,
            question: '[{"type":"text","data":"25°C的下列溶液中，碱性最强的是()"}]',
            creator_id: 'admin',
            target: 1049796006,
            status: 2,
            options: '[{"type":"A","body":"pH = 11 的溶液"},{"type":"B","body":"[OH-] = 0.12mol/L 的溶液"},{"type":"C","body":"1L 中含有 4g NaOH 的溶液"},{"type":"D","body":"[H] = 1x10(-10) mol/L 的溶液"}]',
            key: 'B',
            market: true
          },
          {
            id: 4,
            type: 0,
            subject: 6,
            question: '[{"type": "text","data": "某温度下，在体积固定的密闭容器中发生可逆反应 X(g) + Y(g) ⇌ Z(g) + W(s) ΔH\u003e0 下列叙述正确的是"}]',
            creator_id: 'admin',
            target: 1049796006,
            status: 1,
            options: '[{"type":"A","body":"加入少量 W，逆反应速率增大"},{"type":"B","body":"当容器中气体压强不变时，反应达到平衡"},{"type":"C","body":"平衡后升高温度，平衡逆向移动"},{"type":"D","body":"平衡后加入 X(g)，上述反应的ΔH增大"}]',
            key: 'B',
            market: true
          },
          {
            id: 3,
            type: 0,
            subject: 4,
            question: '[{"type":"text","data":"-\u003e 测 试\\n1. 一质量为m的乘客乘坐竖直电梯下楼， 其位移s与时间t的关系图像如图所示。 乘客所受支持力的大小用FN表示， 速度大小用v表示。 重力加速度大小为g。 以下判断正确的是"},{"type":"img","data":"online.jpg"}]',
            creator_id: 'admin',
            target: 1049796006,
            status: 0,
            options: '[{"type":"A","body":"0~t1 时间内，v增大，FN\u003emg"},{"type":"B","body":"t1~t2 时间内，v减小，FN"},{"type":"C","body":"t2~t3 时间内，v增大，FN"},{"type":"D","body":"t2~t3 时间内，v减小，FN\u003emg"}]',
            key: 'D',
            market: true
          },
          {
            id: 2,
            type: 0,
            subject: 2,
            question: '[{"type":"text","data":"5.某校一个课外学习小组为研究某作物种子的发芽率y和温度x（单位：℃）的关系，在20个不同的温度条件下进行种子发芽实验，由实验数据ii(,)xy(1,2,...,20)i得到下面的散点图： 由此散点图，在10℃至40℃之间，下面四个回归方程类型中最适宜作为发芽率y和温度x的回归方程类型的是"}]',
            creator_id: 'admin',
            target: 1049796006,
            status: 1,
            options: '[{"type":"A","body":"y=a+bx"},{"type":"B","body":"y=a+bx^2"},{"type":"C","body":"y=a+be^x"},{"type":"D","body":"y=a+blnx"}]',
            key: 'D',
            market: true
          },
          {
            id: 1,
            type: 0,
            subject: 10,
            question: '[{"type": "text","data": "欢迎使用在线教育问答统计深度学习分析系统"},{"type": "img","data": "test.jpg"}]',
            creator_id: 'admin',
            target: 772045696,
            status: 2,
            options: '[{"type":"A","body":"y=a+bx"},{"type":"B","body":"y=a+bx^2"},{"type":"C","body":"y=a+be^x"},{"type":"D","body":"y=a+blnx"}]',
            key: 'A',
            market: true
          }
        ],
        groups: {
          532479383: {
            name: '省赛一级目指☆科创',
            mem_count: 4
          },
          772045696: {
            name: '我大意了，没有闪',
            mem_count: 10
          },
          1049796006: {
            name: '高一12班英语群',
            mem_count: 52
          }
        }
      }
    }
  },
  methods: {
    questionToString (str) {
      const q = JSON.parse(str)
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
          return 'positive'
        case 1:
          return 'primary'
        case 2:
          return 'negative'
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
        return this.data.groups[target].name
      } catch (e) {
        console.error('获取群名称错误：', e)
      }
    }
  }
}
</script>

<style scoped>

</style>
