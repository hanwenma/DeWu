// 对 fetch 进行二次封装

import 'whatwg-fetch'

export default class Http {

  // 封装 fecth 的 get 方法 
  static async fetch_get(url) {
    try {
      let response = await window.fetch(url);
      let rs = await response.json();
      return rs;
    } catch (error) {
      console.log(error);
    }
  }

  // 封装 fecth 的 post 方法 
  //  url 路径（string）
  //  contype 请求头类型（string）
  //  params 参数对象 （object）
  static async fetch_post(url, params = {}) {
    try {
      let response = await window.fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type':'application/json'
        },
        body: JSON.stringify(params)
      });
      return await response.json();
    } catch (error) {
      console.log("出错了...",error);
    }
   
  }

  //  封装 fecth 表单提交
  static async fetch_form(selector,url,){
    let form = document.querySelector(selector);
    let res = await window.fetch(url, {
      method: 'POST',
      body: new FormData(form)
    });

    return await res.json();
  }
 


  // 判断响应结果是否成功
  static isSuccess(res) {
    if (res.status >= 200 && res.status < 300) {
      return res;
    } else {
      this.requestExpection(res);
    }
  };

  // 构建失败对象
  static requestExpection(res) {
    throw new Error(res);
  };

}