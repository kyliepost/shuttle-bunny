import React from "react";
import { Link } from "react-router-dom";


export const NavBar = () => {

    <>
        return
        <ul>
        <Link className="navbar__link" to="#"
                onClick={
                    () => {
                        localStorage.removeItem("shuttle_user")
                    }
                }>
                    Logout
                </Link>
        </ul>
    </>


}