import React from "react";
const ConditionalRendering=(props)=>{
    let isLoggedIn = true;
    return(
        <div>
            {/* {isLoggedIn?<h3 className="loggedin">thank you for logging in</h3>:<h3 className="logout">please do login</h3>} */}
            {isLoggedIn?<button className="btn btn-success">logout</button>:<button className="btn btn-primary">login</button>}

        </div>
    )
}
export default ConditionalRendering;