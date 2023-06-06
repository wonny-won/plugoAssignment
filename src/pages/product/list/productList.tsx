import { useFetchtProductList } from "./listFn/useFetchListQuery"

export default function ProductList(){
    const fetchData = useFetchtProductList('/product/list')
    console.log(fetchData.data)
    return(
        <>
        리스트
        </>
    )
}