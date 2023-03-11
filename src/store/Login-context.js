import { createContext, useState } from "react";


const LoginContext = createContext(
    {
        isLogging: false,
        seConnecter: () => { },
        seDeconnecter: () => { }
    }
)

export function LoginContextProvider(props) {
    const [isLog, setIsLog] = useState(false);

    function seConnecter(credentials) {
        if (credentials.login == "nidhal@gmail.com" && credentials.pwd == "azerty") {
            setIsLog(true);
            return true;
        }
        else {
            setIsLog(false);
            return false
        }
    }

    function seDeconnecter() {
        setIsLog(false)
    }

    const fav = {
        isLogging: isLog,
        seConnecter: seConnecter,
        seDeconnecter: seDeconnecter

    }


    return <LoginContext.Provider value={fav}>
        {props.children}
    </LoginContext.Provider>

}

export default LoginContext;