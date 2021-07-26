<template>
  <div id="assort">
    <header-bar />
    <div class="layout">
      <!-- 左侧 -->
      <aside class="left">
        <ul>
          <li v-for="item in categories" :key="item.id">
            <router-link :to="'/assort/categories/'+item.id">{{item.name}}</router-link>
          </li>
        </ul>
      </aside>
      <!-- 右侧 -->
      <section class="right">
        <router-view />
      </section>
    </div>
  </div>
</template>

<script>
import HeaderBar from '../../components/headerBar.vue';
import { mapState } from 'vuex';

export default {
  name:'Assort',
  components:{
    [HeaderBar.name]:HeaderBar,
  },
  computed:{
    ...mapState('goods',['categories'])
  },
  created(){
    //调用vuex内的方法请求数据
    this.$store.dispatch('goods/requestAllGoodsData')
  }
}
</script>

<style lang='scss' scoped>
#assort{
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 49px;
  left: 0;
  .layout{
    display: flex;
  }
}
.left{
  flex: 1;
  height: 100%;
  background-color: antiquewhite;
  ul{
    width: 100%;
    background-color: #f5f5f5;
    li{
      width: 100%;
      height: 40px;
      font-size: 14px;
      line-height: 40px;
      a{
        display: block;
        width: 100%;
        height: 100%;
        padding-left: 10px;
        box-sizing: border-box;
      }
      .router-link-active{
        background-color: #fff;
      }
    }
  }
}
.right{
  flex: 2.5;
  height: 100%;
  background-color: salmon;
}
</style>