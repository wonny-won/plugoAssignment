import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import { useRouter } from "commons/hooks/useRouter";

export interface Data {
    product: string;
    price: string;
    category: string;
    productDetail: string;
    productImg?: string;
}

export const useCreateProductMutation = (url:string,data:Data|{})=>{
    const router = useRouter()
    return useMutation({
        mutationKey:['createProduct'],
        mutationFn: async()=> await axios.post(url,data),
        onSuccess: (data)=>{
            if(data)router('/')()
            return data
        }
    })
}