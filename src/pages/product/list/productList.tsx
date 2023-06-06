import ProductListCard from "commons/components/card/listCard"
import { useFetchtProductList } from "./listFn/useFetchListQuery"
import { MapItem } from "./productList.type"
import * as S from './productList.styled'

export default function ProductList(){
    const fetchData = useFetchtProductList('/product/list')
    console.log(fetchData.data)
    return(
        <S.Container>
        {
            fetchData?.data?.map((item:MapItem)=>(
                    <ProductListCard data={item} />
            ))
        }
        </S.Container>
    )
}