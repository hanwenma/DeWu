import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
// 从外部引入对应的 reducer
import tabs from './reudcers/tabs'

/*
 redux的中间件， 插件一般用于增强dispatch的功能
 redux默认的设定是 dispatch 只能接受一个对象参数，函数和promise都是不允许的，这个中间件就是为了解决这个问题的，
 让 dispatch 可以派发一个函数，当 dispatch 接收一个函数时
 该函数立即执行。并且 dispatch 又作为参数传人到了该函数中
*/
import thunk from 'redux-thunk'


const reudcer = combineReducers({
  tabs
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reudcer, composeEnhancers(applyMiddleware(thunk)));

export default store;