// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system
import Vue from 'vue'
import Vuex from 'vuex'
// import { get } from '@/http/api.js'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    coinRate: [{
      name: 'CNY',
      img: require('../../assert/image/flag_CHN.png'),
      name_chinese: '人民币',
      value_usd: 0.151057
    }, {
      name: 'USDT',
      img: require('../../assert/image/usdt.png'),
      name_chinese: '泰达币',
      value_usd: 1
    }, {
      name: 'BTC',
      img: require('../../assert/image/btc.png'),
      name_chinese: '比特币',
      value_usd: 3605.69
    }, {
      name: 'EOS',
      img: require('../../assert/image/eos.png'),
      name_chinese: '柚子',
      value_usd: 2.3834
    }, {
      name: 'ETH',
      img: require('../../assert/image/eth.png'),
      name_chinese: '以太坊',
      value_usd: 120.05
    }, {
      name: 'ETC',
      img: require('../../assert/image/etc.png'),
      name_chinese: '以太经典',
      value_usd: 3605.69
    }],
    newslist: []
  },
  mutations: {
    increment: (state) => {
      const obj = state
      obj.count += 1
    },
    decrement: (state) => {
      const obj = state
      obj.count -= 1
    }
  },
  actions: {
  }
})

export default store
