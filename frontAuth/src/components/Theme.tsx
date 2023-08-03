import { Header } from "./Header"
import { Footer } from "./Footer"


export const Theme = ({children}:{children: React.ReactNode}) =>{
    return(
      <div className="h-screen flex flex-col">
        <Header/>
      <div className="flex-1">{children}</div>
      <Footer/>
      </div>
    )
}