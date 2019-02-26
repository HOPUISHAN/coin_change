<template>
   <div>
    <selected :selectedNum='0' :nameT='coin' :change="myvalue" v-model="myvalue"></selected>
    <!-- <div class="list" v-for="(item,index) in coinStore" :key="index">
      <card :name='item.name' :logo='item.img' :value="item.model" :symbol="item.symbol"></card>
    </div> -->
    <card :coinStore="coinStore" :handleInput="handleInput" :deleteCoin="deleteCoin"></card>
    <!-- <button @click="submitData ()">ok</button> -->
  </div>
</template>

<script>
import card from '@/components/card'
import selected from '@/components/selected'
import store from './store'
// import { mapActions } from 'vuex'

export default {
  store,
  data () {
    return {
      myvalue: '123',
      coinStore:store.state.coinStore
    }
  },

  components: {
    card,
    selected
  },
  mounted () {
    // console.log(store.state)
  },

  methods: {
    // ...mapActions(['deleteCoin']),
    coin_name (index) {
      return store.state.coin[index].name
    },
    deleteCoin (name) {
      this.$store.dispatch({
        type: 'deleteCoin',
        payload: {
          name
        }
      })
    },
    handleInput ($event,index) {
      // this.$refs('change', change);
      let symbol = store.state.coinStore[index].symbol
      this.changeItem($event.target.value, symbol)
      
    },
    changeItem (value, symbol) {
      // console.log('value',value)
      this.$store.dispatch({
        type: 'updataCoin',
        payload: {
          value,
          symbol
        }
      })
    }

  },
  watch: {
  },

  created () {
    // 调用应用实例的方法获取全局数据
  },
  computed: {
    coin () {
      return store.state.coin
    },
    // coinStore () {
    //   return store.state.coinStore
    // }
  }
}
</script>

<style scoped>
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}

.usermotto {
  margin-top: 150px;
}

.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}

.counter {
  display: inline-block;
  margin: 10px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}
button{
  background: green;
}
</style>
