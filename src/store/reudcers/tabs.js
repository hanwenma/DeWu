const initialState = {
  tabs:[
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
]};

export default (state = initialState, action)=>{
  switch (action.type) {
    case 'test':
      return {
        ...state, 
        value: action.value
      }
      
    default:
      return state;
  }
}