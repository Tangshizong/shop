<template>
  <div class="product-list">
      <ul>
          <li class="products" v-for="item in products" :key="item.id">
              <div class="img-box">
                  <img :src="item.cover_url" alt="">
              </div>
              <div class="right">
                  <h3 class="title">{{item.title}}</h3>
                  <h4><span>特价</span><i>24h发货</i></h4>
                  <div class="price">￥{{item.price}}元/套 <span class="iconfont icon-gouwuche"></span></div>
                  <p>销量：{{item.sales}}</p>
              </div>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    name:'productList',
    props:{
        products:Array
    }
}
</script>

<style lang="scss" scoped>
.product-list{
    width: 100%;
    ul{
        width: 94%;
        margin: 0 auto;
        .products{
            width: 100%;
            border-radius: 5px;
            background-color: #fff;
            display: flex;
            margin: 10px 0;
            .img-box{
                width: 40%;
                img{
                    width: 150px;
                }
            }
            .right{
                flex: 1;
                position: relative;
                .title{
                    width: 100%;
                    height: 40px;
                    line-height: 40px;
                    font-weight: 550;
                }
                h4{
                    width: 100%;
                    // height: 60px;
                    padding: 10px 0;
                    font-size: 13px;
                    margin-top: 15px;
                    span{
                        border: 1px solid red;
                        border-radius: 10%;
                        color: red;
                        padding: 0 5px;
                        margin-right: 10px;
                    }
                    i{
                        border: 1px solid #ccc;
                        border-radius: 10%;
                        color: #ccc;
                        padding: 0 5px;
                    }
                }
                .price{
                    color: red;
                    font-size: 14px;
                    font-weight: 550;
                    padding: 5px 0;
                    position: relative;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    span{
                        display: block;
                        width: 25px;
                        height: 25px;
                        line-height: 25px;
                        text-align: center;
                        border-radius: 50%;
                        background: #41b6e6;
                        color: #fff;
                        margin-right: 20px;
                    }
                }
                p{
                    color: #ccc;
                    font-size: 14px;
                }
            }
        }

    }
}
</style>>
