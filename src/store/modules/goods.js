import { requestGoodsData,requestGoodsList } from '../../api/request';

export default {
    namespaced:true,
    //存放状态
    state:{
        categories:[],
        goodsList:{}
    },
    //修改状态
    mutations:{
        //修改分类数据
        setCategories(state,payload){
            state.categories = payload;
        },
        //获取列表数据
        setGoodsList(state,payload){
            state.data = payload
        }
    },
    //计算属性：
    getters:{

    },
    //进行异步操作的
    actions:{
        //请求商品数据
        requestAllGoodsData(context){
            //请求商品数据
            requestGoodsData().then(data=>{
                //console.log(data);
                //商品分类
                const categories = data.data.categories;
                //console.log(categories);
                context.commit('setCategories',categories);
            })
        },
        //请求商品列表数据
        requestAllGoodsList(context,id){
            console.log(id);
            requestGoodsList(id)
            .then(data => {
                console.log(data);
                // context.commit('setGoodsList',data)
            })
       }
    }
}