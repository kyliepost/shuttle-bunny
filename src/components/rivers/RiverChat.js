import React, { useEffect, useState } from "react"
import { useParams, useHistory } from "react-router-dom"

export const RiverChat = () => {
    const [posts ,setPost] = useState([]) 
    // const [posts] = useState([])
    // const [river] = useState() 
    const history = useHistory()

    const { riverId } = useParams()  
    const { postId } = useParams()

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
                        return <div key={`post--${post.id}`}>
                            <p><h3>{post.description}</h3> Submitted
                                by {post.user.name}
                            </p>
                        </div>
                    }
                )
            }
        </>
    )

    return (
        <>
            <h2>River {riverId} Chat</h2>

            <button onClick={() => history.push(`/posts/${riverId}/create`)}>
                Create Post
            </button>

            {
                posts.map(
                    (post) => {
                        return <div key={`post--${post.id}`}>
                            <p>{post.description} Submitted
                                by {post.user.name} 
                            </p>
                        </div>
                    }
                )
            }
        </>
    )
}
