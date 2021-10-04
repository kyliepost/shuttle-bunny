import React from "react"
import { Route } from "react-router";
import { CommentForm } from "./comments/CommentForm";
import { CommentList } from "./comments/CommentList";
// import { AddRiver } from "./rivers/AddRiver";
import { RiverChat } from "./rivers/RiverChat";
import { ChatForm } from "./rivers/RiverChatForm";
import { RiverList } from "./rivers/RiverList";



export const ApplicationViews = () => {
  return (
    <>

      <Route exact path="/">
        <RiverList />
        {/* <AddRiver /> */}
      </Route>


      <Route exact path="/:riverId(\d+)">
        <RiverChat />
      </Route>

      <Route exact path="/:riverId(\d+)/create">
        <ChatForm />
      </Route>


      <Route exact path="/:riverId(\d+)/:postId(\d+)/chat">
        <CommentList />
        <CommentForm />
      </Route>



    </>

  )
}