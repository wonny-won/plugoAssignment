import { useEffect } from "react"
import { useRouter } from "./useRouter"

export const useAuth = ()=>{
    const router = useRouter()
    useEffect(()=>{
        const result = window.prompt('admin 코드를 입력해주세요.')
        if(result!=='plugoAdmin'){
            alert('틀린 암호입니다.')
            router('/')()
            return
        } 
    },[])
}