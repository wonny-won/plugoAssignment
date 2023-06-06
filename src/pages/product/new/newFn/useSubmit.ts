import { Data, useCreateProductMutation } from "./createProcuctMutation"

export const useSubmit = (data:Data|{})=>{
    const createProduct = useCreateProductMutation('/product',data)
    return ()=>{ 
        try{
            createProduct.mutate()
        }catch(error){
            console.log('에러')
        }
    }
}