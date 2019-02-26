import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    coin: [{
      symbol: 'CNY',      
      name: 'CNY 人民币',
      img: require('../../assert/image/flag_CHN.png'),
      model: '0.151057',
      name_chinese: '人民币',
      value_usd: 0.151057
    }, {
      symbol: 'BTC',
      name: 'BTC 比特币',
      img: require('../../assert/image/btc.png'),
      model: '3426.24',
      name_chinese: '比特币',
      value_usd: 3426.24
    }, {
      symbol: 'USDT',
      name: 'USDT 泰达币',
      img: require('../../assert/image/usdt.png'),
      model: '1',
      name_chinese: '泰达币',
      value_usd: 1
    }, {
      symbol: 'EOS',
      name: 'EOS 柚子',
      img: require('../../assert/image/eos.png'),
      model: '2.26',
      name_chinese: '柚子',
      value_usd: 2.26
    }, {
      symbol: 'ETH',
      name: 'ETH 以太坊',
      img: require('../../assert/image/eth.png'),
      model: '104.2',
      name_chinese: '以太坊',
      value_usd: 104.2
    }, {
      symbol: 'ETC',
      name: 'ETC 以太经典',
      img: require('../../assert/image/etc.png'),
      model: '3.8648',
      name_chinese: '以太经典',
      value_usd: 3.8648
    }],

    coinStore: [{
      symbol: 'CNY',      
      name: 'CNY 人民币',
      img: require('../../assert/image/flag_CHN.png'),
      model: '0.151057',
      name_chinese: '人民币',
      value_usd: 0.151057
    }, {
      symbol: 'USDT',
      name: 'USDT 泰达币',
      img: require('../../assert/image/usdt.png'),
      model: '1',
      name_chinese: '泰达币',
      value_usd: 1
    }, {
      symbol: 'BNB',
      name: 'BNB 币安币',
      img: require('../../assert/image/bnb.jpg'),
      model: '10.74',
      name_chinese: '币安币',
      value_usd: 10.74
    }, {
      symbol: 'HT',
      name: 'HT 火币全球积分',
      img: require('../../assert/image/ht.jpg'),
      model: '1.2',
      name_chinese: '火币全球积分',
      value_usd: 1.2
    }, {
      symbol: 'BTC',
      name: 'BTC 比特币',
      img: require('../../assert/image/btc.png'),
      model: '3928.82',
      name_chinese: '比特币',
      value_usd: 3928.82
    }, {
      symbol: 'BCH',
      name: 'BCH 比特现金',
      img: require('../../assert/image/bch.jpg'),
      model: '140.71',
      name_chinese: '比特现金',
      value_usd: 140.71
    }, {
      symbol: 'EOS',
      name: 'EOS 柚子',
      img: require('../../assert/image/eos.png'),
      model: '3.6',
      name_chinese: '柚子',
      value_usd: 3.6
    }, {
      symbol: 'LTC',
      name: 'LTC 莱特币',
      img: require('../../assert/image/ltc.jpg'),
      model: '47.53',
      name_chinese: '莱特币',
      value_usd: 47.53
    }, {
      symbol: 'ONT',
      name: 'ONT 本体',
      img: require('../../assert/image/ont.jpg'),
      model: '0.6688',
      name_chinese: '本体',
      value_usd: 0.6688
    }, {
      symbol: 'ETH',
      name: 'ETH 以太坊',
      img: require('../../assert/image/eth.png'),
      model: '143.6',
      name_chinese: '以太坊',
      value_usd: 143.6
    }, {
      symbol: 'ETC',
      name: 'ETC 以太经典',
      img: require('../../assert/image/etc.png'),
      model: '4.49',
      name_chinese: '以太经典',
      value_usd: 4.49
    }]
  },
  actions: {
    deleteCoin ({commit}, params) {
      console.log('params', params)
      commit('delete', params)
    },
    addCoin ({commit}, params) {
      // console.log('add', params)
      commit('add', params)
    },
    updataCoin ({commit}, params) {
      // console.log('updata', params)
      commit('updata', params)
    }
  },
  mutations: {
    delete (state, {payload: {name}}) {
      console.log('11', name)
      let { coinStore } = state
      if (name) {
        for (var i = 0; i < coinStore.length; i++) {
          if (coinStore[i].name === name) {
            coinStore.splice(i, 1)
          }
        }
      }
    },
    add (state, {payload}) {
      let {name: {name, id, img}} = payload
      // console.log('22', name)
      let record = state.coinStore.find(n => n.name === name)
      if (!record) {
        state.coinStore.push({
          name: name,
          img: img
        })
      }
    },
    updata (state, {payload}) {
      let a = {
        BTC: 3928.82,
        ETH: 143.6,
        EOS: 3.6,
        USDT: 1,
        ETC: 4.49,
        CNY: 0.151057,
        LTC: 47.53,
        BNB: 10.74,
        ONT: 0.6688,
        HT: 1.2,
        BCH: 140.71
      }
      let {symbol, value} = payload
      if (symbol) {
        for (var i = 0; i < state.coinStore.length; i++) {
          if (state.coinStore[i].symbol !== symbol) {
            let model = state.coinStore[i].model
            model = value
            if (symbol !== 'USDT') {
              state.coinStore[i].model = Number(model) * a[symbol] / state.coinStore[i].value_usd
              state.coinStore[i].model = state.coinStore[i].model.toFixed(8)
            } else {
              state.coinStore[i].model = value / state.coinStore[i].value_usd
              state.coinStore[i].model = state.coinStore[i].model.toFixed(8)
              // console.log("cc",state.coinStore[i].model)
            }
          } else {
            state.coinStore[i].model = value
          }
        }
      }
      
    }
  }
})

export default store
