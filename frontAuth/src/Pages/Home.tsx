import { Theme } from "../components/Theme"
import imgRegistro from '../assets/financial_data.png'
import { Link } from "react-router-dom"
export const Home = () =>{

    return(
        <Theme>
        <div className="h-full flex ">
            <div className="pleft flex-1"><img src={imgRegistro} alt="" /></div>
            <div className="pright flex-1 p-4 bg-gray-200">
                <form action="" className="flex flex-col">
                    <h2 className="text-center text-blue-800 font-bold text-2xl my-2">Faça seu Cadastro</h2>
                    <label className="flex flex-col text-gray-500">
                        Nome:
                        <input type="text" placeholder="Digite seu nome" className="p-2 my-3 rounded  text-black"/>
                    </label>
                    <label className="flex flex-col text-gray-500">
                        Email:
                        <input type="email" placeholder="Digite seu email" className="p-2 my-3 rounded text-black"/>
                    </label>
                    <label className="flex flex-col text-gray-500">
                        Password:
                        <input type="password" placeholder="Digite sua senha" className="p-2 my-3 rounded text-black"/>
                    </label>

                    <button className="text-white w-full  rounded p-2 mt-10 bg-blue-800 opacity-90 hover:opacity-100">Cadastrar</button>
                </form>

                <p className="text-center text-gray-500 my-5">Já tem cadastro? <Link to='/login' className="text-blue-800">faça seu login aqui !!!</Link></p>
            </div>
        </div>
        </Theme>
    )
}