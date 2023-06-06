import { ChangeEvent, useState } from "react"

interface Data {   
        product?: string | {};
        price?: string | {};
        category?: string | {};
        productDetail?: string | {};
        productImg?: string[] | {};    
}

export const useOnChange = ()=>{
    const [data, setdata] = useState<Data>({})
    const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>)=>{
        setdata({...data,[e.target.id]:e.target.value})
    }
    return {
        data,
        onChange
    }
}