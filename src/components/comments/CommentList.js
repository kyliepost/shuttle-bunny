import React, { useEffect, useState, useHistory } from "react"
import { useParams } from "react-router-dom"
import "./Comments.css"

export const CommentList = () => {
    const [comments, setComments] = useState([])
    const [user, setUser] = useState([])
    const [users, setUsers] = useState([])
    const [post, setPost] = useState([])
    const { postId } = useParams()
    const userId = parseInt(localStorage.getItem("shuttle_user"))



    useEffect(
        () => {
            fetch(`http://localhost:8088/posts/${postId}?_expand=river`)
                .then(res => res.json())
                .then((data) => {
                    setPost(data)
                    // setRiver(data.river)
                    // SetUser(data.river)
                })
        },
        [postId]
    )

    const deleteComment = (id) => {
        fetch(`http://localhost:8088/comments/${id} `, {
            method: "DELETE"
        })
        .then(() => {
            window.location.reload(false);
        })
    }
    

    useEffect(
        () => {
            fetch(`http://localhost:8088/comments?postId=${postId}&_expand=user`)
                .then(res => res.json())
                .then((data) => {
                    setComments(data)
                    setUser(data)
                })
        },
        [userId]
    )
      
    const usersComment = () => {
        fetch(`http://localhost:8088/comments?userId=${userId}&_expand=user`)
        .then(res => res.json())
                .then((data) => {
                    setUsers(data)
    })
}

useEffect(
    () => {
            usersComment()
    },
    []
)

    return (
        <>

            <h2 className="post">{post.description}</h2>
        


            {
                comments.map(
                    (comment) => {
                        return <div className="chatComment" key={`comment--${comment.id}`}>

                            <p>
                                Submitted
                                by {comment.user.name}: {""}
                                {comment.description}
                            </p>
                            { (comment.user.id === userId)
                            ?
                            <button className="deleteButton" onClick={() => {
                                deleteComment(comment.id)
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

