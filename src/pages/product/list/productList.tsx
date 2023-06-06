import { useFetchtProductList } from "./listFn/useFetchListQuery"
import { MapItem } from "./productList.type"

export default function ProductList(){
    const fetchData = useFetchtProductList('/product/list')
    console.log(fetchData.data)
    return(
        <>
        {
            fetchData?.data?.map((item:MapItem)=>(
                <div>
                    <div>==============</div>
                    <div>{item.product}</div>
                    <div>{item.price}</div>
                    <div>{item.category}</div>
                    <div>{item.productDetail}</div>
                    <div>==============</div>
                </div>
            ))
        }
        </>
    )
}