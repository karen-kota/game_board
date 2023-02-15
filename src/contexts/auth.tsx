import { useState, createContext, useEffect } from "react";
import { hash } from "bcryptjs"

export const AuthContext = createContext({})

interface User {
    id: string
    name: string
    password: string
}


export default function AuthProvider({ children }: any) {

    const [user, setUser] = useState<User | null>(null)
    const [loadingAuth, setLoadingAuth] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        function loadStorage() {
            const storageUser = localStorage.getItem("SistemaUser")

            if(storageUser) {
                setUser(JSON.parse(storageUser))
            }

            setLoading(false)
        }

        loadStorage()

    }, [])

        async function signUp(email: string, password: string, name: string) {
            setLoading(true)

            const passwordHash = await hash(password, 8)

            fetch("http://localhost:3000/users", {
                method: "POST",
                headers: {
                    "Context-Type": "application/json"
                },
                body: JSON.stringify({
                    "id": Date.now(),
                    "name": name,
                    "email": email,
                    "password": passwordHash
                })
            })
            .then(res => res.json())
            .then(result => {
                let data = {
                    id: result.id,
                    name: result.name,
                    email: result.email
                }

                setUser(data)
                storageUser(data)
            })
            .catch(console.log)
        }

        function storageUser(data: User) {
            localStorage.setItem("SistemaUser", JSON.stringify(data))
        }

        return(
            <AuthContext.Provider value={{ signed: !!user, user, loading, signUp}}>
                {children}
            </AuthContext.Provider>
        )
}