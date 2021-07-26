import { requestHomeData } from '../../api/request'


export default {
    namespaced: true,
    //存放数据的
    state: {
        sortlist:[],
        cheaplist:[],
        productList:[]
    },
    //修改数据的
    mutations: {
        //设置banner数据
        setSortlist(state,payload){
            state.sortlist = payload;
        },
        setCheaplist(state,payload){
            state.cheaplist = payload;
        },
        setProductList(state,payload){
            state.productList = payload;
        }

    },
    //计算属性
    getters:{
        
    },
    //异步操作的
    actions: {
        //请求数据
        requestAllHomeData(context){
            //请求首页数据
            requestHomeData().then(data =>{
               //console.log(data);
                //分类数据
                const sort = data.data.categories.splice(0,5).map(item=>{
                    return {
                        id:item.id,
                        name:item.name
                    }
                });  
                context.commit('setSortlist',sort);
                //超划算数据
                const cheap = data.data.goods.data.splice(0,3).map(item=>{
                    return {
                        id:item.id,
                        title:item.title,
                        description:item.description,
                        price:item.price,
                        cover_url:item.cover_url
                    }
                });
                context.commit('setCheaplist',cheap);
                //商品列表数据
                const product = data.data.goods.data.map(item=>{
                    return {
                        id:item.id,
                        title:item.title,
                        description:item.description,
                        price:item.price,
                        cover_url:item.cover_url,
                        sales:item.sales
                    }
                });
                context.commit('setProductList',product);
            })
        }
        
    },
}
