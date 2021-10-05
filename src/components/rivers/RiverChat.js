import React, { useEffect, useState } from "react"
import { useParams, useHistory, Link } from "react-router-dom"
import "./Rivers.css"

export const RiverChat = () => {
    const [posts ,setPost] = useState([]) 
    const [user ,setUser] = useState([]) 
    const history = useHistory()
    const { riverId } = useParams()  
    const userId = parseInt(localStorage.getItem("shuttle_user"))


    const deletePost = (userId) => {
        fetch(`http://localhost:8088/posts/${userId}`, {
            method: "DELETE"
        })
        .then(() => {
            window.location.reload(false);
        })
    }

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
    

    const usersPost = () => {
        fetch(`http://localhost:8088/posts?userId=${userId}&_expand=user`)
        .then(res => res.json())
                .then((data) => {
                    setUser(data)
    })
}

useEffect(
    () => {
            usersPost()
    },
    []
)
    return (
        <>

        <h2 className="h2Post">River Chat</h2>
            <div>
                <button className="btn-post" onClick={() => history.push(`/${riverId}/create`)}>Create Post</button>
            </div>
            {
                posts.map(
                    (post) => {
                        return <div className="chatPost" key={`post--${post.id}`}>
                              <Link to={`/${riverId}/${post.id}/chat`}><h3 className="post">{post.description}</h3></Link>
                            <p>
                            Submitted
                                by {post.user.name}
                              
                            </p>
                            { (post.user.id === userId)
                            ?
                            <button className="deleteButton" onClick={() => {
                                deletePost(post.id)
                            }}>Delete</button>
                            : null
                        }
                        </div>
                        
                    }
                )
            }
        </>
    )
}
