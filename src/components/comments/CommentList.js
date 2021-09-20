import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const CommentList = () => {
    const [comments, setComment] = useState([])
    const [post, setPost] = useState([])


    // const history = useHistory()
    const { postId } = useParams()
    const { riverId } = useParams()

    const allComments = () => {
    }

    useEffect(
        () => {
            fetch(`http://localhost:8088/posts/${postId}?_embed=comments&_expand=user&_expand=river`)
                .then(res => res.json())
                .then((data) => {
                    setComment(data.comments)
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
                                by {comment.user}:
                                {comment.description}
                            </p>
                        </div>
                    }
                )
            }
    
        </>
    )
}

