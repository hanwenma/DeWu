import React,{Suspense} from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import Loading from "./components/Loading/Loading";
import Tabs from './components/Tabs/Tabs';
import {renderRoutes} from './router/renderRoutes';
import routes from './router';


const App: React.FC = () => {
  return (
    <Router>
    <Suspense fallback={<Loading/>}>
       <div id="app">

         {/* 路由配置 */}
        {renderRoutes(routes)}

        {/* 底部 tabBar */}
        <Tabs />

       </div>
    </Suspense>
  </Router>
  );
}

export default App;
