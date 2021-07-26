import http from "./http";

//首页数据请求
export const requestHomeData = () =>{
    return http.get('/api/index')
}
//商品数据请求
export const requestGoodsData = () => {
    return http.get('/api/goods')
}
//商品列表数据请求
export const requestGoodsList = (id) => {
    return http.get('/api/goods/',{
        category_id:id
    })
}