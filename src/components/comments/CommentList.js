import React, { useEffect, useState } from "react"
import { useParams, useHistory } from "react-router-dom"

export const CommentList = () => {
    const [comments ,setComment] = useState([]) 
    const history = useHistory()
    const { postId } = useParams() 
    const { riverId } = useParams()  



    useEffect(
        () => {
            fetch(`http://localhost:8088/comments/?riverId=${riverId}&postId=${postId}&_expand=user`)
                .then(res => res.json())
                .then((data) => {
                    setComment(data)
                })
        },
        [postId]  
    )
    return (
        <>

        <h2>River Chat</h2>
     
         
            {
                comments.map(
                    (comment) => {
                        return <div className="chatComment" key={`comment--${comment.id}`}>

                            <p>
                              
                            Submitted
                                by {comment.user.name}:
                                <h3> {comment.description} </h3>
                            </p>
                        </div>
                    }
                )
            }
        </>
    )
}