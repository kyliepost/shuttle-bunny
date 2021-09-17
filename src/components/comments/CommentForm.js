import React, { useState } from "react";
import { useHistory, useParams } from "react-router";

export const CommentForm = () => {
    const [comment, updateComment] = useState({
        description: ""
    })
    const history = useHistory()
    const { postId } = useParams()


    const saveComment = (evt) => {
        evt.preventDefault()

        const newComment = {
            description: comment.description,
            userId: parseInt(localStorage.getItem("shuttle_user")),
            riverId: parseInt(postId)
        }


        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newComment)
        }

        return fetch(`http://localhost:8088/comments`, fetchOption)
            .then(() => {
                history.push(`/comments/${postId}`)
            })
    }

    return (
        <>
            <form>
                <h2>Create Comment</h2>
                <fieldset>
                    <label htmlFor="inputDescription"> Description </label>
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
                        placeholder="description"
                    />
                </fieldset>
                <fieldset>
                    <button onClick={saveComment} className="btn btn-primary">
                        Submit Comment
                    </button>
                </fieldset>
               
            </form>
        </>
    )
}