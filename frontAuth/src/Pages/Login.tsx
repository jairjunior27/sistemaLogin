import { Link } from "react-router-dom"
import { Theme } from "../components/Theme"

export const Login = () =>{
    return(
        <Theme>
            <div className="my-8 mx-3 text-gray-500 bg-gray-300 p-4">
            <form action="" className="flex flex-col">
                <h2 className="text-center text-2xl">Login</h2>
                <label className="flex flex-col rounded mb-3">
                    Email:
                    <input type="email" placeholder="Digite seu email"  className="p-2 rounded text-black outline-0 mt-1"/>
                </label>
                <label className="flex flex-col  rounded mb-3">
                    Password:
                    <input type="email" placeholder="Digite sua senha" className="p-2 rounded text-black outline-0 mt-1" />
                </label>
                <button className="w-full p-2  rounded my-3 bg-blue-800 text-white">Enviar</button>
            </form>
            <p className="my-3 text-center">Faça seu cadastro <Link to='/' className="text-blue-800">Clique aqui</Link></p>
            </div>
        </Theme>
    )
}