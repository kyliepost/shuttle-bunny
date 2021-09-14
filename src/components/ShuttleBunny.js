import React from "react";
import { Route, Redirect } from "react-router-dom";
import { ApplicationViews } from "./ApplicationViews";
import { NavBar } from "./nav/NavBar";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";


export const ShuttleBunny = () => (
  <>
    <Route
      render={() => {
        if (localStorage.getItem("shuttle_bunny")) {
          return (
            <>
              <NavBar />
              <h1>Shuttle Bunny </h1>
              <ApplicationViews />
              
            </>
          );
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />

    <Route path="/login">
      <Login />
    </Route>
    <Route path="/register">
      <Register />
    </Route>
  </>
);