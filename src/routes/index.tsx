import { Routes, Route } from "react-router-dom"
import { Fragment } from "react"
import PrivateRoute from "./PrivateRoute"

import SignIn from "../pages/SignIn"
import SignUp from "../pages/SignUp"
import Dashboard from "../pages/Dashboard"

export default function RoutesIndex() {
    return(
        <Fragment>
            <Routes>
                <Route element={<PrivateRoute />}>
                    <Route path="/dashboard" element={<Dashboard/>} />
                </Route>
                <Route path="/" element={<SignIn/>} />
                <Route path="/register" element={<SignUp/>} />
            </Routes>
        </Fragment>
    )
}