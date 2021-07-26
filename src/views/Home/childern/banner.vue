<template>
    <van-swipe class="my-swipe"
    :autoplay="3000" 
    indicator-color="white"
    style="width:96%"
    >
        <van-swipe-item v-for="item in bannerlist" :key="item.id">
            <img :src="item.imgUrl" alt="" width="100%" />
        </van-swipe-item>
    </van-swipe>
</template>

<script>
//mport { mapState } from 'vuex';
import Vue from 'vue';
import { Swipe, SwipeItem } from 'vant';
import { requestHomeData } from '../../../api/request'
import axios from 'axios'

Vue.use(Swipe);
Vue.use(SwipeItem);

export default {
    name:'Banner',
    data(){
        return {
            bannerlist:[]
        }
    },
    // computed:{
    //     ...mapState('Home',['bannerlist'])
    // },
    methods: {
        requestAllHomeData(){
            //请求首页数据
            axios.get('http://localhost:8091/home').then(data =>{
                //console.log(data)
                //const banner = data.data.result.header.hot_events.events
                const banner = data.data.result.header.hot_events.events.map((item)=>{
                    return {
                        id:item.id,
                        imgUrl:item.image
                    } 
                })
                this.bannerlist = banner
                //console.log(banner)
            })
        }
    },
    created(){
        this.requestAllHomeData()
    }
}
</script>

<style scoped>
  .my-swipe{
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
    border-radius: 10px;
  }
</style>