import ProductListCard from "commons/components/card/listCard"
import { useFetchtProductList } from "./listFn/useFetchListQuery"
import { MapItem } from "./productList.type"
import * as S from './productList.styled'

export default function ProductList(){
    const fetchData = useFetchtProductList('/product/list')
    return(
        <S.Container>
        <head>
          <title>Plugo | 상품 리스트</title>
          <meta name="description" content="세계 최강 플루고의 상품을 만나보세요!" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </head>
        <h1 style={{display:'none'}}>상품 리스트</h1>
        {
            fetchData?.data?.map((item:MapItem)=>(
                    <ProductListCard data={item} />
            ))
        }
        </S.Container>
    )
}