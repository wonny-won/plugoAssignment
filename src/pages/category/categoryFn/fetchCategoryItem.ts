import { useFetchtProductList } from "pages/product/list/listFn/useFetchListQuery"

export const useFetchCategoryItem = (category: any)=>{
    const fetchData = useFetchtProductList('/product/list')
    const data = fetchData?.data?.filter((item:{
        category: string
    })=>(item.category===category.category))
    return data
}