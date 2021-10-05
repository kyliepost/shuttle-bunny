import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Rivers.css"


export const RiverList = () => {
    const [rivers, setRivers] = useState([])


    useEffect(
        () => {
            fetch("http://localhost:8088/rivers")
                .then(response => response.json())
                .then((data) => {
                    setRivers(data)
                })
        },
        []
    )

    return (
        <>

            <h2>Rivers</h2>


            <article className="river">
                <div className="riverCard">
                    {
                        rivers.map(
                            (river) => {
                                return <p className="riverDetails" key={`river--${river.id}`}>
                                    <Link className="name" to={`/${river.id}`}>{river.name}</Link>
                                    <img src={river.imageURL} />
                                 
                                </p>

                            }
                        )
                    }
                </div>
            </article>
        </>

    )
}

