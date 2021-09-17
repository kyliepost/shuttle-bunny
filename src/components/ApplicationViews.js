import React from "react"
import { Route } from "react-router";
import { CommentForm } from "./comments/CommentForm";
import { CommentList } from "./comments/CommentList";
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

      <Route exact path="/posts/:riverId(\d+)/comments/:postId(\d+)">
        <RiverChat />
      </Route>

      <Route exact path="/posts/:postId(\d+)">
        <CommentList />
      </Route>

      <Route exact path="/comments/:postId(\d+)">
        <CommentForm />
      </Route>


    </>

  )
}