import React, { useState } from "react";
import { useHistory, useParams } from "react-router";

export const ChatForm = () => {
    const [post, updatePost] = useState({
        description: ""
    })
    const history = useHistory()
    const { riverId } = useParams()


    const savePost = (evt) => {
        evt.preventDefault()

        const newTicket = {
            description: post.description,
            userId: parseInt(localStorage.getItem("shuttle_user")),
            riverId: parseInt(riverId),
            timestamp: 1634687829221
        }


        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newTicket)
        }

        return fetch(`http://localhost:8088/posts`, fetchOption)
            .then(() => {
                history.push(`/posts/${riverId}`)
            })
    }

    return (
        <>
            <form>
                <h2>Create Post</h2>
                <fieldset>
                    <label htmlFor="inputDescription"> Description </label>
                    <input
                        onChange={
                            (evt) => {
                                const copy = { ...post }
                                copy.description = evt.target.value
                                updatePost(copy)
                            }
                        }
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="description"
                    />
                </fieldset>
                <fieldset>
                    <button onClick={savePost} className="btn btn-primary">
                        Submit Post
                    </button>
                </fieldset>
                <fieldset>
                    <button type="submit">
                        Cancel
                    </button>
                </fieldset>
            </form>
        </>
    )
}