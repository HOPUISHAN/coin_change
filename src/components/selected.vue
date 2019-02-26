<template>
    <div>
        <div class="select">
            <div class="label">
                <picker :value="selectedIndex" :range="coin" range-key="name" @change="bindPickerChange">
                    <view class="picker">
                        <div class="logoT">
                            <img :src='coin[selectedIndex].img' alt="">
                        </div>
                        <div class="right">
                            <div class="name">
                                {{coin[selectedIndex].name}}
                                <span class="select"></span> 
                            </div>
                        </div>
                    </view>
                </picker>
                <div class="num">
                    <div class="number">
                        <input type="digit" placeholder="100" :value="change" :change='change' @input="handleInput">
                        <div class="add">
                            <!-- <button></button> -->
                            <icon type="cancel" size="20" class="add_button" color="green" @click="addCoin(coin[selectedIndex])"/>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
export default {
  name: 'selected',
  props: ['nameT', 'logoT', 'selectedNum', 'change'],
  model: {
    prop: 'value1',
    event: 'change'
  },
  data () {
    return {
      selectedIndex: this.selectedNum,
      coin: this.nameT
    }
  },
  methods: {
    bindPickerChange (e) {
      this.selectedIndex = e.target.value
    },
    addCoin (name) {
      console.log('name',name)
      this.$store.dispatch({
        type: 'addCoin',
        payload: {
          name
        }
      })
    },
    handleInput (e) {
      this.$emit('change', e.target.value)
    }
  }
}
</script>

<style lang="scss">
.label{
  padding: 5px;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid rgb(207, 204, 204);
  // margin: 5px 0;
}
.picker{
    display: flex;
    flex-direction: row;
}
.logoT{
  padding: 5px;
  display: inline;
  img{
    width: 55px;
    height: 55px;
  }
}
.right{
  display: flex;
  flex-direction: column;
  .select{
    position: absolute;
    width: 0;
    height: 0;
    top: 15px;
    margin-left: 115px;
    // margin-bottom: 50px;
    border-top: 10px solid black;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
}
}
.num{
    z-index: 100;
    position: absolute;
    left: 70px;
    top: 35px;
}
.add{
    float: right;
    right: 0;
    margin-left: 30px;
}
.add_button{
    transform:rotate(45deg);
}

</style>