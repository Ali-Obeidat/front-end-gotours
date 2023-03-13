import { useEffect, useState } from "react"
import { useAuthContext } from "./useAuthContext"
import axios from 'axios'
import { useLocalStorage } from "./useLocalStorage"


export const useLogout = () => {
    const [isCancelled, setIsCancelled] = useState(false)
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(null)
    const { dispatch } = useAuthContext()

    const [token, setToken] = useLocalStorage("token", localStorage.getItem("token"));

    const logout = async (token) => {
        setIsPending(true)
        setError(null)
        //! sign user out
        try {
            await axios({
                method: 'get',
                url: 'https://dry-castle-66151.herokuapp.com/api/v1/users/logout',
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${token}`
                }
            })

            dispatch({ type: 'LOGOUT' })
            setToken(null)
            if (!isCancelled) {
                setError(null)
                setIsPending(false)
            }
        } catch (error) {
            console.log(error.response.data.message);
            if (!isCancelled) {
                setError(error.message)
                setIsPending(false)
            }
        }
    }

    useEffect(() => {
        return () => setIsCancelled(true)
    }, [])

    return { logout }

}