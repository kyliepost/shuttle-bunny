import React, { useEffect, useState } from "react"
import { useParams, useHistory, Link } from "react-router-dom"
import "./Rivers.css"

export const RiverChat = () => {
    const [posts ,setPost] = useState([]) 
    const [user] = useState([]) 

    const history = useHistory()
    const { riverId } = useParams()  


    useEffect(
        () => {
            fetch(`http://localhost:8088/posts/?riverId=${riverId}&_expand=river&_expand=user`)
                .then(res => res.json())
                .then((data) => {
                    setPost(data)
                })
        },
        [riverId]  
    )
    return (
        <>

        <h2>River Chat</h2>
            <div>
                <button onClick={() => history.push(`/posts/${riverId}/create`)}>Create Post</button>
            </div>
            {
                posts.map(
                    (post) => {
                        return <div className="chatPost" key={`post--${post.id}`}>
                              <Link to={`/posts/${post.id}`}><h3>{post.description}</h3></Link>
                            <p>
                            Submitted
                                by {post.user.name}
                                {/* <h3> {post.description} </h3> */}
                            </p>
                        </div>
                    }
                )
            }
        </>
    )
}
