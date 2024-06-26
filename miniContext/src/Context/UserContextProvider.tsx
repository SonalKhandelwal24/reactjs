import React from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children}:any) => {
    const [user, setUser] = React.useState(null)

    return(
        <UserContext.Provider value={{user, setUser}}>
            {children} {/* card , dsboard, etc */}
        </UserContext.Provider>
    )
}

export default UserContextProvider;