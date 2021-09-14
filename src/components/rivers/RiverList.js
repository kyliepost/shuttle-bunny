import React, { useEffect, useState } from "react";
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

            <article className="river">
                <div className="riverCard">
                    {
                        rivers.map(
                            (riverObject) => {
                                return <p className="riverDetails" key={`river--${riverObject.id}`}>{riverObject.name}
                                     <img src={riverObject.imageURL} class="river__image"/>
                                </p>

                            }
                        )
                    }
                </div>
            </article>
        </>

    )
}

