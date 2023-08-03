import {useRoutes} from 'react-router-dom'
import {Home} from '../Pages/Home'
import { Privada } from '../Pages/privada'
import { Login } from '../Pages/Login'
export const MainRoutes = () =>{
    return useRoutes([
        {path:'/',element: <Home/>},
        {path:'/privada',element: <Privada/>},
        {path: '/login' , element: <Login/>}
    ])
}