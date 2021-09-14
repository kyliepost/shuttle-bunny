import React from "react"
import { Route } from "react-router";
import { RiverChat } from "./rivers/RiverChat";
import { RiverList } from "./rivers/RiverList";



export const ApplicationViews = () => {
  return (
    <>
    <Route exact path="/rivers">
    <RiverList />
    </Route>

    <Route exact path="/rivers/chat">
      <RiverChat />
    </Route>
      
    </>

  )
}