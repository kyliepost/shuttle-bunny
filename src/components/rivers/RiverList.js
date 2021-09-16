import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Rivers.css"

// , useHistory

export const RiverList = () => {
    const [rivers, setRivers] = useState([])
    // const history = useHistory()

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

        <h1>Rivers</h1>
        

            <article className="river">
                <div className="riverCard">
                    {
                        rivers.map(
                            (riverObject) => {
                                return <p className="riverDetails" key={`river--${riverObject.id}`}>
                                    <Link to={`/posts/${riverObject.id}`}>{riverObject.name}</Link>
                                     <img src={riverObject.imageURL}/>
                                     {/* <button onClick={() => history.push("/chat")}>
                Go to this chat forum
            </button> */}
                                </p>

                            }
                        )
                    }
                </div>
            </article>
        </>

    )
}

