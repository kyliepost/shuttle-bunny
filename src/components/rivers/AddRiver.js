import React, { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router"

export const AddRiver = () => {
    const [river, updateRiver] = useState({
        name: "",
        imageURL: ""
    })
    const history = useHistory()
    const { riverId } = useParams()

    const saveRiver = (evt) => {
        evt.preventDefault()

        const newRiver = {
            name: river.name,
            imageURL: river.imageURL
    
        }


        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newRiver)
        }

        return fetch(`http://localhost:8088/rivers`, fetchOption)
            .then(() => {
                history.push(`/`)
                
            })
    }
    return (
        <>
            <form>
                <h2>Create River</h2>
                <fieldset>
                    <label htmlFor="inputDescription"> River Name: </label>
                    <input
                        onChange={
                            (evt) => {
                                const copy = { ...river }
                                copy.description = evt.target.value
                                updateRiver(copy)
                            }
                        }
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="river name"
                    />
                </fieldset>
                <fieldset>
                    <label htmlFor="inputDescription"> River Image: </label>
                    <input
                        onChange={
                            (evt) => {
                                const copy = { ...river }
                                copy.description = evt.target.value
                                updateRiver(copy)
                            }
                        }
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="imageURL"
                    />
                </fieldset>
                <fieldset>
                    <button onClick={saveRiver} className="btn btn-primary">
                        Submit River
                    </button>
                </fieldset>
                <fieldset>
                {riverId ? <></> : <button className="btn btn-primary" onClick={() => {
                    history.push(`/`)
                }}>Cancel</button>}
                </fieldset>
            </form>
        </>
    )
}