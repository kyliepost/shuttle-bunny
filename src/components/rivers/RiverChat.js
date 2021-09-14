import React from "react";
import { useHistory } from "react-router-dom";

export const RiverChat = () => {
    const history = useHistory()

    return (
        <div className="riverCard">
            {
                <p>
                    <button onClick={() => history.push("/rivers/chat")}>
                        Go to this chat forum
                    </button>
                </p>

            }
            
        
        </div>
    )
}