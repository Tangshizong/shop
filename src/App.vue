<template>
  <div id="app">
    <router-view />
    <!-- 底部导航路由 -->
    <div class="nav">
      <router-link tag="div" to="/home">
        <p class="iconfont icon-zhuye-weixuanzhong"></p>
        <span>主页</span>
      </router-link>
      <router-link tag="div" to="/assort">
        <p class="iconfont icon-fenlei"></p>
        <span>分类</span>
      </router-link>
      <router-link tag="div" to="/cart">
        <p class="iconfont icon-gouwuche"></p>
        <span>购物车</span>
      </router-link>
      <router-link tag="div" to="/user">
        <p class="iconfont icon-wode"></p>
        <span>我的</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='scss'>
html,body,#app{
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
}
$theme-color: #2694ab;
.nav{
  width: 100%;
  height: 49px;
  border-top: 1px solid #ccc;
  color: #2c2c2c;
  text-align: center;
  font-size: 12px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  z-index: 1000;
  background-color: #fff;
  bottom: 0;
  left: 0;
  .iconfont{
    font-size: 20px;
    line-height: 30px;
  }
  .router-link-active{
    color: #2694ab;
  }
}
.layout{
    width: 100%;
    position: absolute;
    top: 44px;
    bottom: 0px;
    left: 0;
    overflow: hidden;
}
</style>