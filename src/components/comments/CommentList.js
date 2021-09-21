import React, { useEffect, useState, useHistory } from "react"
import { useParams } from "react-router-dom"

export const CommentList = () => {

    const [comments, setComments] = useState([])
    const [post, setPost] = useState([])
    // const [comment] = useState([])
    const { postId } = useParams()
    // const { riverId } = useParams()



    const deleteComment = (id) => {
        fetch(`http://localhost:8088/comments/${id}`, {
            method: "DELETE"
        })
    }

   

    useEffect(
        () => {
            fetch(`http://localhost:8088/posts/${postId}?_embed=comments&_expand=user&_expand=river`)
                .then(res => res.json())
                .then((data) => {
                    setComments(data.comments)
                    setPost(data)
                    // setRiver(data.river)
                    // SetUser(data.river)
                })
        },
        [postId]
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
                                by {comment.userId}:
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

