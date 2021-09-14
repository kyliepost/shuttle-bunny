import React, { useEffect, useState } from "react";

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
                                return <p key={`river--${riverObject.id}`}>{riverObject.name}
                                    
                                </p>

                            }
                        )
                    }
                </div>
            </article>
        </>

    )
}

