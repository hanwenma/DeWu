import React,{lazy, Suspense} from 'react';
import {BrowserRouter as Router,Route,Redirect,Switch} from "react-router-dom";
import Loading from "./components/Loading/Loading";
import Tabs from './components/Tabs/Tabs';
import "./style.scss";

const Home = lazy(()=>import("./pages/home/home/home"));
const Visit = lazy(()=>import("./pages/visit/visit/visit"));
const Identification = lazy(()=>import("./pages/identification/identification/identification"));
const Mine = lazy(()=>import("./pages/mine/mine/mine"));
const NotFound = lazy(()=>import("./pages/common/not-found/not-found"));

const App: React.FC = () => {
  return (
    <Router>
    <Suspense fallback={<Loading/>}>
       <div id="app">
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/visit" component={Visit} />
          <Route path="/identification" component={Identification} />
          <Route path="/mine" component={Mine} />
          <Route path="/" exact render={()=>{
            return <Redirect to="/home"/>
          }}/>
          <Route component={NotFound}/>
        </Switch>
        <Tabs />
       </div>
    </Suspense>
  </Router>
  );
}

export default App;
