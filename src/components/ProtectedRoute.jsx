import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContextProvider"
import { Children, useEffect } from "react"
import { MdNavigateBefore } from "react-icons/md"

function ProtectedRoute({children}) {
    const {isAuthenticated} = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        if (!isAuthenticated) navigate("/login")
    }, [isAuthenticated, navigate])
return isAuthenticated && children
}



export default ProtectedRoute