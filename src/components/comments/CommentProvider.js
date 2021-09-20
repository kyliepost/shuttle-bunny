import React, { useState, createContext } from "react";

export const CommentContext = createContext()


// export const CommentProvider = (props) => {
//     const [ comments, setComments ] = useState()

//     const getComments = () => {
//         return fetch(`http://localhost:8088/posts/${postId}?_embed=comments&_expand=user&_expand=river`)
//         .then(res => res.json())
//         .then((data) => setComments(data))
//     }

//     const removeComment = commentId => {
//         return fetch(`http://localhost:8088/comments/${commentId}`, {
//             method: "DELETE"
//         })
//         .then()
//     }
// }