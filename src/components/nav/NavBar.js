import React from "react"
import { Link } from "react-router-dom"


export const NavBar = (props) => {
return (
    <>
        
        <ul>
        <li className="navbar__item active">
                <Link className="navbar__link" to="/">Users</Link>
            </li>
        </ul>
    </>

)
}