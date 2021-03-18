import {useState, useCallback, useEffect} from "react"

const storageName = "user"

export const useAuth = () =>{
    const [token, setToken] = useState(null)
    const [userId, setUserId] = useState(null)

    const login = useCallback((jwtToken, id)=>{
        setToken(jwtToken)
        setUserId(id)

        localStorage.setItem(storageName, JSON.stringify({
            token: jwtToken, userId:id
        }))

    }, [])


    const logout = useCallback(()=>{
        setUserId(null)
        setToken(null)
        localStorage.removeItem(storageName)
    }, [])

    useEffect(()=>{
        const data = JSON.stringify(localStorage.getItem(storageName))
        if(data && data.token){
            login(data.token, data.userId)
        }
    }, [login])

    return {login, logout, token, userId}

}