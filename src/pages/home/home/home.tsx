import React, { Component } from "react";
// import Http from "../../../utils/Http"
// import api from '../../../utils/api'
import {renderRoutes} from "react-router-config"
import "./style.scss";

export default class home extends Component<any, any> {
  render() {
    return (
      <div id="home" className="page">
        <h1>首页</h1>


        {/* 用于渲染子路由 */}
        {renderRoutes(this.props.route.children)}
      </div>
    );
  }
}
