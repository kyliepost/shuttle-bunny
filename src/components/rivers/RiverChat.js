import React, { useEffect, useState } from "react"
import { useParams, useHistory } from "react-router-dom"

export const RiverChat = () => {
    const [post, setPost] = useState({}) // State variable for current ticket object
    // const [river] = useState() 
    const history = useHistory()

    const { riverId } = useParams()  // Variable storing the route parameter
    const { postId } = useParams()

    useEffect(
        () => {
            fetch(`http://localhost:8088/posts/${riverId}?_expand=river&_expand=user`)
                .then(res => res.json())
                .then((data) => {
                    setPost(data)
                })
        },
        [riverId]  // Above function runs when the value of ticketId change
    )

    return (
        <>
            <h2>River {riverId} Chat</h2>

            <button onClick={() => history.push(`/posts/${riverId}/create`)}>
                Create Post
            </button>

            <section className="post">
                <h3 className="post__description">{riverId.name}</h3>
                <h3 className="post__description">{post.description}</h3>
                <div className="post__user">Submitted by {post.user?.name}</div>

            </section>
        </>
    )
}
