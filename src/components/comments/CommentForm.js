import React, { useState } from "react";
import { useHistory, useParams } from "react-router";
import "./Comments.css"

export const CommentForm = () => {
    const [comment, updateComment] = useState({
        description: ""
    })
    const history = useHistory()
    const { postId } = useParams()
    const { riverId } = useParams()
    const { commentId } = useParams()




    const saveComment = (evt) => {
        evt.preventDefault()

        const newComment = {
            description: comment.description,
            userId: parseInt(localStorage.getItem("shuttle_user")),
            postId: parseInt(postId)
        }


        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newComment)
        }

        return fetch(`http://localhost:8088/comments?_expand=post`, fetchOption)
            .then(() => {
                history.push(`/${riverId}/${postId}/chat`)
            })
            .then(() => {
                window.location.reload(false);
            })
    }

    return (
        <>

            <form>
                <fieldset>
                    <label htmlFor="inputDescription"></label>
                    <input
                        onChange={
                            (evt) => {
                                const copy = { ...comment }
                                copy.description = evt.target.value
                                updateComment(copy)
                            }
                        }
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="comment text"
                    />
                </fieldset>


                <fieldset className="btn">
                    <button className="formButtons" onClick={saveComment} >
                        Submit Comment
                    </button>
                </fieldset>
                <fieldset className="btn">
                {commentId ? <></> : <button className="formButtons" onClick={() => {
                    history.push(`/${riverId}/${postId}/chat`)
                }}>Cancel</button>}
                </fieldset>

            </form>
        </>
    )
}