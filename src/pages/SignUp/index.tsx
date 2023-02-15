import { FormEvent, useContext, useState } from "react"
import { Link } from "react-router-dom"
import logo from "../../assets/logo.svg"
import logo_branco from "../../assets/logo_white.svg"
import { AuthContext } from "../../contexts/auth"
export default function SignUp() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { signUp }: any = useContext(AuthContext)

    function handleSubmit(e: FormEvent) {
        e.preventDefault()

        if(name !== "" && email !== "" && password !== "") {
            signUp(email, password, name)
        } else {
            alert("Necessário preencher todos os campos")
        }

        setName("")
        setEmail("")
        setPassword("")
    }

    return(
        <div className="container-center">
            <div className="login">
                <div className="login-area">
                    <img src={logo_branco} alt="Logo"/>
                </div>

                <form onSubmit={handleSubmit}>
                    <h1>Criar</h1>
                    <input type="text" placeholder="Seu nome" value={name} onChange={(e) => setName(e.target.value)}/>
                    <input type="email" placeholder="email@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <input type="password" placeholder="******" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <button type="submit">Registrar</button>
                </form>

                <Link to="/">Já possuo conta</Link>
            </div>
        </div>
    )
}
