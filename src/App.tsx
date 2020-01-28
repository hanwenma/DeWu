import React,{lazy, Suspense} from 'react';
import {BrowserRouter as Router,Route,Redirect,Switch} from "react-router-dom";
import Loading from "./components/Loading/Loading";
import Tabs from './components/Tabs/Tabs';

const Home = lazy(()=>import("./pages/home/home/home"));
const Visit = lazy(()=>import("./pages/visit/visit/visit"));
const Identification = lazy(()=>import("./pages/identification/identification/identification"));
const Mine = lazy(()=>import("./pages/mine/mine/mine"));
const NotFound = lazy(()=>import("./pages/common/not-found/not-found"));
const Login = lazy(()=>import("./pages/login/login/login"))

const App: React.FC = () => {
  return (
    <Router>
    <Suspense fallback={<Loading/>}>
       <div id="app">
         {/* 根页面 */}
        <Switch>
          <Route path="/" exact render={()=>{
            return <Redirect to="/home"/>
          }}/>
          <Route path="/home" component={Home} />
          <Route path="/visit" component={Visit} />
          <Route path="/identification" component={Identification} />
          <Route path="/mine" component={Mine} />
          <Route path="/login" component={Login} />
          <Route component={NotFound}/>
        </Switch>

        {/* 子页面 */}
        <Switch>
          <Route path="/home/index" exact component={Login}/>
        </Switch>

        {/* 底部 tabBar */}
        <Tabs />
       </div>
    </Suspense>
  </Router>
  );
}

export default App;
