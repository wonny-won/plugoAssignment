import { useNavigate } from "react-router-dom"

export const useRouter = ()=> {
    const navigate = useNavigate()
    const router = (path:string)=>()=>{
        navigate(path)
    }
    return router
}