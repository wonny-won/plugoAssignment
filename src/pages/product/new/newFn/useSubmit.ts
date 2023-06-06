import { Data, useCreateProductMutation } from "./createProcuctMutation"

interface DataProps {
    product: string;
    price: string;
    category: string;
    productDetail: string;
    productImg?: string;
}

export const useSubmit = (data:Data|any)=>{
    const createProduct = useCreateProductMutation('/product',data)
    return ()=>{ 
        if(data.product && data.category && data.price && data.productDetail){
            try{
                createProduct.mutate()
            }catch(error){
                console.log('에러')
            }    
        } else {
            alert('상품 내용을 모두 채워주세요!')
        }
    }
}