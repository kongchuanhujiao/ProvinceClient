import Vue from 'vue'
import { Chart, registerShape, Util } from '@antv/g2'

Vue.prototype.$g2 = {}
Vue.prototype.$g2.Chart = Chart
Vue.prototype.$g2.registerShape = registerShape
Vue.prototype.$g2.Util = Util
