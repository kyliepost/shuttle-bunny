import React, { useEffect, useState, useHistory } from "react"
import { useParams } from "react-router-dom"

export const CommentList = () => {
    const [comments, setComments] = useState([])
    const [user, setUser] = useState([])
    const [post, setPost] = useState([])
    const { postId } = useParams()
    const { userId } = useParams()


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
      

    return (
        <>

            <h2>{post.description}</h2>



            {
                comments.map(
                    (comment) => {
                        return <div className="chatComment" key={`comment--${comment.id}`}>

                            <p>
                                Submitted
                                by {comment.user.name}:
                                {comment.description}
                            </p>
                            <button onClick={() => {
                                deleteComment(comment.id)
                            }}>Delete</button>
                        </div>
                    }
                )
            }

        </>
    )
}

