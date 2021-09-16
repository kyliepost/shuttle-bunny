import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const RiverChat = () => {
    const [post, setPost] = useState({}) // State variable for current ticket object
    const [river] = useState() 
      
    const { postId } = useParams()  // Variable storing the route parameter

    useEffect(
        () => {
            fetch(`http://localhost:8088/posts/${postId}/chat?_expand=riverId`)
                .then(res => res.json())
                .then(setPost)
        },
        [ postId ]  // Above function runs when the value of ticketId change
    )

    return (
        <>
        <h2>River Chat</h2>
            <section className="post">
                {/* <h3 className="post__description">{river.name}</h3> */}
                <h3 className="post__description">{post.description}</h3>
                {/* <div className="post__user">Submitted by {post.user?.name}</div> */}
               
            </section>
        </>
    )
}
