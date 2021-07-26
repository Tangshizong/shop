import axios from 'axios'
//import Vue from 'vue'

//二次封装axios请求
class Http{
    constructor(){
        //创建axios实例对象
        this.instance = axios.create(
            //请求统一配置
            {
                baseURL:"https://api.shop.eduwork.cn/",
                timeout:6000
            }
        );
        //设置响应拦截器
        //this.addResponseInterceptors();
    }

    //响应拦截器代码
    // addResponseInterceptors(){
    //     this.instance.interceptors.response.use(function (response) {
    //         if(response.status === 200 && response.data.code === 200){
    //             return response.data;
    //         }else{
    //             //业务逻辑错误
    //             //该请求时失败的
    //             //Toast('请求失败');
    //             return Promise.reject('网络错误');
    //         }
    //     },function (err) {
    //         //服务器响应错误
    //         //对响应错误做点什么
    //         //Toast('请求失败');
    //         return Promise.reject(err);
    //     });
    // }
    //设置get请求
    get(url,params = {}){
        return this.instance.get(url, {
            params
        });
    }
    //设置post请求
    post(url,data = {}){
        return this.instance.post(url,data)
    }
}

//导出
export default new Http();