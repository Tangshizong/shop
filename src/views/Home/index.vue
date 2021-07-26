<template>
<div id="home">
    <header-bar class="top" />
    <div class="layout" ref="scroll">
        <!-- 轮播图 -->
        <!-- <div class="banner" :bannerlist="bannerlist">
            <banner />
        </div> -->
        <!-- 分类列表 -->
        <div class="warp">
            <div class="sort">
                <ul>
                    <li v-for="item in sortlist" :key="item.id">
                        <div class="sort-icon">
                            <i class="iconfont icon-fenlei"></i>
                        </div>
                        <p>{{item.name}}</p>
                    </li>
                </ul>
            </div>
            <!-- 超划算 -->
            <div class="cheap">
                <div class="cheap-box">
                    <h2 class="title">超划算 <span>更多 <i class="iconfont icon-fanhui-copy"></i></span></h2>
                    <div class="cheap-list">
                        <ul>
                            <li v-for="item in cheaplist" :key="item.id">
                                <img :src="item.cover_url" alt="">
                                <p>{{item.description}}</p>
                                <div class="price-box">
                                    <span class="price"><i>￥{{item.price}}</i>/本</span>
                                    <span class="iconfont icon-gouwuche"></span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <!-- 精品 -->
            <div class="boutique">
                <div class="boutique-box">
                    <!-- 好吃点 -->
                    <div class="good">
                        <h2 class="title">好货</h2>
                        <img :src="cheaplist[1].cover_url" width="80px" alt="">
                        <img :src="cheaplist[1].cover_url" width="80px" alt="">
                    </div>
                    <!-- 产地 -->
                    <div class="origin">
                        <h2 class="title">超划算</h2>
                        <img :src="cheaplist[1].cover_url" width="80px" alt="">
                        <img :src="cheaplist[1].cover_url" width="80px" alt="">
                    </div>
                </div>
            </div>
            <!-- 商品数据 -->
            <ProductList :products="productList" />
        </div>
    </div>


</div>
    
</template>

<script>
import IScroll from 'iscroll/build/iscroll-probe'
import HeaderBar from '../../components/headerBar.vue'
import ProductList from './childern/productList.vue'

import { mapState } from 'vuex'


export default {
    name:'Home',
    data(){
        return {
            // bannerlist:[],
            // sortlist:[],
            // cheaplist:[],
            // productList:[]
        }
    },
    components:{
        [HeaderBar.name]:HeaderBar,
        ProductList
    },
    computed:{
        ...mapState('home',['sortlist']),
        ...mapState('home',['cheaplist']),
        ...mapState('home',['productList']),
    },
    methods: {
       
    },
    created(){
        // 调用vuex的actions，获得页面的数据
        this.$store.dispatch('home/requestAllHomeData')
    },
    mounted(){
            //创建滚动视图
            //console.log(IScroll);
            //this.$nextTick()
            setTimeout(()=>{
                const scroll = new IScroll(this.$refs.scroll,{
                tap:true,
                click:true,
                mouseWheel:true,
                scrollbars: false,
                // 加了这个才能监听拖拽事件
                probeType:this.onScroll ? 3 : 0,
                // 解决拖拽卡顿
                scrollX: false,
                scrollY: true,
                disablePointer: true,
                disableTouch: false,
                disableMouse: true
            })

            // 触摸前刷新滚动视图，防止数据因为异步加载而导致滚动视图识别不了高度。
            // scroll.on('beforeScrollStart', ()=>{ 
            //     console.log(this.refresh);
            //     //scroll.refresh();   
            // });

            // scroll.on('scroll', ()=>{
            //     console.log(this.onScroll);
            //     //this.onScroll(scroll.y);
            //  })
            },1000)
            

    },

}
</script>

<style lang='scss' scoped>
#home{
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 49px;
    left: 0;
}
.warp{
    width: 100%;
    position:absolute;
    top: 0;
}
.sort{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 10px 0;
    ul{
        width: 94%;
        border-radius: 10px;
        padding: 10px 0 ;
        //background-color: #fff;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        li{
            width: 50px; 
            flex: 1;
            font-size: 12px;
            color: rgb(92, 92, 92);
            text-align: center;
            margin: 2px;
            .sort-icon{
                width: 50px;
                height: 50px;
                background-color: #8ac6d1;
                border-radius: 50%;
                display: inline-block;
                .iconfont{
                    text-align: center;
                    font-size: 26px;
                    line-height: 50px;
                    color: #fff;
                }
            }
            p{
                line-height: 20px;
                margin-top: 5px;
            }
        }
    }
}
.cheap{
    width: 100%;
    margin-top: 10px;
    .cheap-box{
        width: 94%;
        margin: 0 auto;
        background-color: #fff;
        border-radius: 5px;
        h2{
            width: 100%;
            box-sizing: border-box;
            height: 40px;
            font-size: 14px;
            font-weight: 700;
            line-height: 40px;
            padding: 0 20px;
            span{
                float: right;
                font-weight:500;
                .iconfont{
                    font-size: 14px;
                }
            }
            
        }
        .cheap-list{
            width: 100%;
            font-size: 13px;
            // font-weight: 600;
            ul{
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 10px 0;
                li{
                    // flex: 1;
                    width: 30%;
                    // height: 120px;
                    text-align: center;
                    margin: 0px 10px;
                    img{
                        width: 80px;
                        display: inline-block;
                    }
                    p{
                        overflow: hidden;
                        text-overflow:ellipsis;
                        white-space: nowrap;
                    }
                    .price-box{
                        width: 100%;
                        height: 30px;
                        display: flex;
                        justify-content: space-around;
                        margin-top: 10px;
                        .price{
                            color: red;
                            line-height: 25px;
                            font-size: 14px;
                            font-weight: 550;
                        }
                        .iconfont{
                            display: block;
                            width: 25px;
                            height: 25px;
                            font-size: 14px;
                            border-radius: 50%;
                            text-align: center;
                            background-color: #41b6e6;
                            color: white;
                            line-height: 25px;
                        }
                    }

                }
            }
        }
    }

}
.boutique{
    width: 100%;
    margin: 10px 0;
    .boutique-box{
        width: 94%;
        margin: 0 auto;
        background-color: #fff;
        border-radius: 5px;
        box-sizing: border-box;
        display: flex;
        padding: 10px 0;
        .good{
            width: 50%;
            border-right: 1px solid #ccc;
            h2{
                width: 100%;
                box-sizing: border-box;
                height: 40px;
                font-size: 14px;
                font-weight: 700;
                line-height: 40px;
                padding: 0 20px;
            }
            img{
                display: inline-block;
            }
        }
        .origin{
            width: 50%;
            h2{
                width: 100%;
                box-sizing: border-box;
                height: 40px;
                font-size: 14px;
                font-weight: 700;
                line-height: 40px;
                padding: 0 20px;
            }
            img{
                display: inline-block;
            }
        }
    }
}
</style>