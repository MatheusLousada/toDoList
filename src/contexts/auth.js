import React, { createContext, useState} from "react";

export const AuthContext = createContext({});

function AuthProvider({children}){
    const [contextEmail, setContextEmail] = useState("");
    const [userAnswers, setUserAnswers] = useState([]);

    return(
        <AuthContext.Provider value={{contextEmail, setContextEmail, userAnswers, setUserAnswers}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;
