<template>
  <div class="counter-warp">
    <div v-for="item in coin" :key="item.index">
      <div class="coin">
        <div class="logo_left">
          <img :src="item.img" alt="">
        </div>
        <div class="content">
          <span>1&nbsp;{{item.name}}&nbsp;=&nbsp;{{item.value_usd}}&nbsp;USDT</span>
        </div>
        <div class="name_right">
          <span>{{item.name_chinese}}</span>
        </div>
      </div>
    </div>
    <button @click="smitData()">刷新当前汇率</button>
    <div v-for="coin in Crate" :key="coin.index">
      <div class="coin">
        <div class="content">
          <span>&nbsp;<span class="i_width">{{coin[0]}}</span>&nbsp;=&nbsp;{{coin[1]}}&nbsp;</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Use Vuex
import store from './../index/store'
import { get } from '@/http/api.js'

export default {
  data () {
    return {
      Crate: []
    }
  },
  mounted () {
    this.smitData()
  },
  computed: {
    coin () {
      return store.state.coinStore
    }
  },
  methods: {
    increment () {
      store.commit('increment')
    },
    decrement () {
      store.commit('decrement')
    },
    smitData(){
      let opt = {
        url: '/rate',
        data: {
          rate: ''
        }
      }
      get(opt).then((response) => {
        console.log('response', response)
        if (response) { this.calData(response) }
      })
      
    },
    calData ( {payload} ) {
      let data = payload.data
      console.log(data)
      let Rate = []
      // let date = []
      for (let i = 0; i < data.length; i++) {
        console.log("dara",data[i])
        Rate.push([
          data[i].name,
          data[i].last
        ])
        // date.push(formatDate(rate[i]))
      }
      this.Crate = Rate
      // this.date = date
      console.log('arr', Rate)
    }
  }
}
</script>

<style lang="scss">
.counter-warp {
  text-align: center;
  margin-top: 10px;
}
.home {
  display: inline-block;
  margin: 100px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}
.coin{
  display: flex;
  flex-direction: row;
  text-align: center;
  vertical-align: middle;
}
.logo_left {
  margin-right: 5px;
  img{
  width: 23px;
  height: 23px;
  }
}
.name_right{
  vertical-align: middle;
  float: right;
  position: absolute;
  right: 10px;
  font-size: 15px;
  color: grey;
}
.i_width{
  display: inline-block;
  width: 75px;
  text-align: left;
  margin-left: 10px;
}
</style>
