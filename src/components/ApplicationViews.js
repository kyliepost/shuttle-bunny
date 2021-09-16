import React from "react"
import { Route } from "react-router";
import { RiverChat } from "./rivers/RiverChat";
import { RiverList } from "./rivers/RiverList";



export const ApplicationViews = () => {
  return (
    <>

    <Route exact path="/">
    <RiverList />
    </Route>

    
    <Route exact path="/posts/:postId(\d+)/chat">
    <RiverChat />
</Route>

      
    </>

  )
}