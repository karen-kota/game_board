import { useContext } from "react"
import { Outlet, Navigate } from "react-router-dom"
import { AuthContext } from "../contexts/auth"

export default function PrivateRoute() {

    const {signed, loading}: any = useContext(AuthContext)

    return signed ? <Outlet/> : <Navigate to="/" />
}