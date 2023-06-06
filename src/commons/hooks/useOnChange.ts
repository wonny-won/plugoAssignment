import { ChangeEvent, useState } from "react"

export const useOnChange = ()=>{
    const [data, setdata] = useState({})
    const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>)=>{
        setdata({...data,[e.target.id]:e.target.value})
    }
    return {
        data,
        onChange
    }
}