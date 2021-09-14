import React from "react"
import { ApplicationViews } from "./ApplicationViews"
import { NavBar } from "./nav/NavBar"
import { RiverList } from "./rivers/RiverList"


export const ShuttleBunny = () => {
  return (
<>

 <NavBar />
    <h1>Shuttle Bunny</h1>
  <ApplicationViews/>
  <RiverList />



</>
  )
}

  