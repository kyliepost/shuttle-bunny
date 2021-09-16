import React from "react"
import { Route } from "react-router";
import { RiverChat } from "./rivers/RiverChat";
import { ChatForm } from "./rivers/RiverChatForm";
import { RiverList } from "./rivers/RiverList";



export const ApplicationViews = () => {
  return (
    <>

    <Route exact path="/">
    <RiverList />
    </Route>

    
    <Route exact path="/posts/:riverId(\d+)">
    <RiverChat />
</Route>

<Route exact path="/posts/:riverId(\d+)/create">
    <ChatForm />
</Route>

      
    </>

  )
}