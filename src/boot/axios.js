import Vue from 'vue'
import axios from 'axios'
import { LocalStorage } from 'quasar'

axios.defaults.headers.common.Authorization = 'Bearer ' + LocalStorage.getItem('token')

Vue.prototype.$axios = axios
