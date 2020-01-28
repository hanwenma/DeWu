import React, {useCallback} from 'react'
import './style.scss'
import { useHistory } from 'react-router-dom';
const NoFfound: React.FC = ()=>{
  let history = useHistory();
  const backAction = useCallback(()=>{
    history.goBack();
  },[history]);
    return (
      <div id="NotFound" className="page">
        <h1>欢迎来到 404 星球，
        <span onClick={backAction}>点此</span> 返回地球</h1>
        <img src="./image/404.gif" alt=""/>
      </div>
    )
}

export default NoFfound;