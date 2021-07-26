<template>
  <div class="header-bar">
      <span class="iconfont icon-dingwei1"></span>
      <div class="select">
          <van-search 
            class="seach"
            v-model="value" 
            placeholder="请输入搜索关键词"
            shape="round"
            background="#2694ab"
            height="10"
            left="haha"
         />
      </div>
      <span class="iconfont icon-gengduo"></span>
      <span class="iconfont icon-wode"></span>
  </div>
</template>

<script>
import Vue from 'vue';
import { Search } from 'vant';

Vue.use(Search);
export default {
    name:'HeaderBar',
    components:{
        Search
    },
    data() {
    return {
      value: '',
    };
  },
}
</script>

<style lang='scss' scoped>

.header-bar{
    position: fixed;
    z-index: 1000;
    top: 0;
    left: 0;
    width: 100%;
    height: 44px;
    background-color: #2694ab;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    box-sizing: border-box;
    .iconfont{
        font-size: 22px;
        padding: 0 5px;
        color: aliceblue;
    }
    .select{
      width: 70%;
      .seach{
        width: 100%;
        height: 30px;
      }
    }
    
}
</style>