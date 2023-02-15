import { FormEvent, useState } from "react"
import { Link } from "react-router-dom"
import logo from "../../assets/logo.svg"
import logo_branco from "../../assets/logo_white.svg"
import "./signin.css"

function handleSubmit(e: FormEvent) {
    e.preventDefault()
}

export default function SignIn() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return(
        <div className="container-center">
            <div className="login">
                <div className="login-area">
                    <img src={logo_branco} alt="Logo"/>
                </div>

                <form onSubmit={handleSubmit}>
                    <h1>Entrar</h1>
                    <input type="email" placeholder="email@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <input type="password" placeholder="******" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <button type="submit">Acessar</button>
                </form>

                <Link to="/register">Criar uma conta</Link>
            </div>
        </div>
    )
}


