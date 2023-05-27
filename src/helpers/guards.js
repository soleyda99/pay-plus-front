import React from "react";
import { getGuard } from "./auth";
import { Route, Navigate } from "react-router-dom";

export const Guards = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (getGuard()) {
          return <Component {...props} />;
        } else {
          return (
            <Navigate
              to={{
                pathname: "/",
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
};
