<template>
  <div class="goodlist">
      <ul>
          <li v-for="good in newgoods.children" :key="good.id">
              <div class="left">
                  <img src="" alt="">
              </div>
              <div class="right">
                  <h3>{{good.name}}</h3>
              </div>
          </li>
      </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    computed:{
        
        ...mapState('goods',['categories']),
        
        //根据传来的id取得子id
        newgoods(){
            return ( this.categories.find(item=>{
                let id = this.$route.params.id-0
                return item.id == id 
            }))
        },
    },
    methods:{
        getgoodslist(){
                this.$store.dispatch('goods/requestAllGoodsData',item.id)           
            }
    },
    mounted(){
        this.getgoodslist()
    }
}
</script>

<style lang='scss' scoped>
.goodlist{
    width: 100%;
    height: 100%;
    position: relative;
    ul{
        width: 100%;
        li{
            width: 100%;
            height: 90px;
            background-color: #fff;
            border-bottom: 1px solid #ccc;
        }
    }
}
</style>

