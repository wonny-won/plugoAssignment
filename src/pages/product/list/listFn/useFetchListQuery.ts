import { useQuery } from "@tanstack/react-query"
import axios from "axios"

export const useFetchtProductList = (url:string)=>{
    return useQuery({
        queryKey: ['fetchProductList'],
        queryFn: async()=>{ 
            const result = await axios.get(url)
            return result?.data
         }
    })
}