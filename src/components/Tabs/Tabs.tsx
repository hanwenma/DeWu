import React,{PureComponent} from 'react'
import {NavLink} from 'react-router-dom'  
import {connect} from 'react-redux'
import "./style.scss"

interface IProps{
  testAction?: Function
}

interface IState {
  selectIndex: number,
  tabs: any[]
}

class Tabs extends PureComponent<IProps,IState> {
    constructor(props:any){
        super(props);
        let index = parseInt(localStorage.getItem('pageIndex') as string);
        this.state = {
            selectIndex: index?index:0,
            tabs: props.tabs
        }
    }

    activeAction(index:number){
       localStorage.setItem('pageIndex',""+index);
       this.setState({
        selectIndex:index
       });
    }

    render(){
        let {selectIndex,tabs} = this.state;
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
                    src={selectIndex===index?item.activeIcon:item.icon} />
                    <span className="text">{item.text}</span>
                  </NavLink>
                ))
               }
            </nav>
        )
    }
}


// 1. 取仓库上的数据
const mapStateToProps = (state:any)=>({
    // 将仓库中需要用到的数据，变成当前组件 props 上的数据
    tabs: state.tabs.tabs
  })
  
  // 2. 操作仓库中对应的数据
  const mapDispatchToProps = (dispatch:any)=>({
    // 2.1 这里的方法，相当于 原来在 class 组件中定义的方法
    testAction(num:number){
      dispatch({
        type: 'test',
        value: num
      })
    }
  })

export default connect(mapStateToProps, mapDispatchToProps)(Tabs);