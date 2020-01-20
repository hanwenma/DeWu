import React,{PureComponent} from 'react'
import {NavLink} from 'react-router-dom'  
import "./style.scss"

const tabs = [
    {
        icon:"./image/home1.png",
        activeIcon:"./image/home2.png",
        text:"首页",
        path:"/home"
    },
    {
        icon:"./image/visit1.png",
        activeIcon:"./image/visit2.png",
        text:"游览",
        path:"/visit"
    },
    {
        icon:"./image/Identification1.png",
        activeIcon:"./image/Identification2.png",
        text:"鉴定",
        path:"/identification"
    },
    {
        icon:"./image/mine1.png",
        activeIcon:"./image/mine2.png",
        text:"我的",
        path:"/mine"
    }
];

export default class Tabs extends PureComponent {
    constructor(){
        super();
        this.state = {
            selectIndex: 4
        }
    }
    activeAction(index){
       this.setState({
        selectIndex:index
       });
    }
    render(){
        let {selectIndex} = this.state;
        return (
            <nav id="tabs">
               {
                tabs.map((item,index)=>(
                  <NavLink 
                  to={item.path} 
                  key={index} 
                  className="tab-item"
                  onClick={this.activeAction.bind(this,index)}>
                    <img alt="图标"
                    src={selectIndex==index?item.activeIcon:item.icon} />
                    <span className="text">{item.text}</span>
                  </NavLink>
                ))
               }
            </nav>
        )
    }
}
