import { useState } from 'react'
import { BrowserRouter as Router} from "react-router-dom"
import AuthProvider from "./contexts/auth"
import RoutesIndex from './routes'

function App() {
  return (
    <AuthProvider>
      <Router>
        <RoutesIndex />
      </Router >
    </AuthProvider>
  )
}

export default App
