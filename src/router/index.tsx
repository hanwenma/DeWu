import React,{ lazy } from "react";
import {Redirect} from 'react-router-dom'
import { RouteConfig } from "react-router-config";

const routes: RouteConfig[] = [
  {
    path: "/home",
    component: lazy(() => import("../pages/home/home/home")),
    // children: [
    //   {
    //     path: "/home/index",
    //     component: lazy(() => import("../pages/login/login/login"))
    //   }
    // ]
  },
  {
    path: "/visit",
    component: lazy(() => import("../pages/visit/visit/visit"))
  },
  {
    path: "/identification",
    component: lazy(() =>
      import("../pages/identification/identification/identification")
    )
  },
  {
    path: "/mine",
    component: lazy(() => import("../pages/mine/mine/mine"))
  },
  {
    path: "/login",
    component: lazy(() => import("../pages/login/login/login"))
  },
  {
    path: '/',
    exact: true,
    render: ()=> <Redirect to="/home" />
  },
  {
    path: '/not-found',
    component: lazy(()=>import('../pages/common/not-found/not-found'))
  },
  {
    path: "**",
    render: ()=> <Redirect to="/not-found" />
  }
];

export default routes;
