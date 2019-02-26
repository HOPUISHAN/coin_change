<template>
  <div>
    <div class="label" v-for="(item,index) in coinStore" :key="index">
      <div class="logo">
        <image :src='item.img' alt="" />
      </div>
      <div class="right">
        <div class="name">
          <h5>{{item.name}}<span class="sm"></span></h5>
        </div>
        <div class="number">
          <div class="input">
            <input type="digit" :value='item.model' @input="handleInput($event,index)">
          </div>
          <div class="cancel">
            <icon type="cancel" size="20" @click="deleteCoin(item.name)"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from '../pages/index/store'
export default {
  name: 'card',
  // model: {
  //   prop: 'value1',
  //   event: 'change'
  // },
  props: {
    coinStore: Array,
    handleInput:Function,
    deleteCoin:Function,
  },
  data () {
    return {
      change: ""
      // index: this.index
    }
  },
  computed: {
  },
  mounted () {
    // console.log('12',this.coinStore)
  },
  methods: {
    
  }
}
</script>

<style>
input{
  border: 1px solid rgb(223, 220, 220);
  padding-left: 5px;
}
.label{
  padding: 5px;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid rgb(207, 204, 204);
}
.logo{
  padding: 5px;
}
.logo image{
    width: 55px;
    height: 55px;
  }
.right{
  display: flex;
  flex-direction: column;
  width: 100%;
}
.sm{
  font-size: 15px;
}
.number{
  display: flex;
  flex-direction: row;
}
.cancel{
  float: right;
  right: 0;
  margin-left: 30px;
  cursor: pointer;
}
</style>
