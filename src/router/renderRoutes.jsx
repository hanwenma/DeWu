import React from "react";
import { Switch, Route, Redirect } from "react-router";

export function renderRoutes(
  routes,
  isLogin = false,
  extraProps = {},
  switchProps = {}
) {
  return routes ? (
    <Switch {...switchProps}>
      {routes.map((route, i) => (
        <Route
          key={route.key || i}
          path={route.path}
          exact={route.exact}
          strict={route.strict}
          render={props => {
            //需不需要鉴权
            if (route.isAuth) {
              //需要
              if (isLogin) {
                //登录了
                return route.render ? (
                  route.render({ ...props, ...extraProps, route: route })
                ) : (
                  <route.component {...props} {...extraProps} route={route} />
                );
              } else {
                //没有登录
                return <Redirect to="/login" />;
              }
            } else {
              //不需要
              return route.render ? (
                route.render({ ...props, ...extraProps, route: route })
              ) : (
                <route.component {...props} {...extraProps} route={route} />
              );
            }
          }}
        />
      ))}
    </Switch>
  ) : null;
}
