import { useQuery } from "@tanstack/react-query"
import axios from "axios"

export const useFetchDetailQuery = (url:string,id:any)=>{
    return useQuery({
        queryKey: ['getDetailData'],
        queryFn: async()=> {
            const result = await axios.get(url,id)
            return result?.data
        }
    })
}