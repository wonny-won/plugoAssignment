import ProductListCard from "commons/components/card/listCard"
import * as S from 'pages/product/list/productList.styled'
import { MapItem } from "pages/product/list/productList.type"
import { useParams } from "react-router-dom"
import { useFetchCategoryItem } from "./categoryFn/fetchCategoryItem"

export default function Category(props:any){
    const param = useParams()
    const fetchDatas = useFetchCategoryItem(param)
    return(
        <S.Container>
        <head>
          <title>Plugo | 상품 리스트</title>
          <meta name="description" content="세계 최강 플루고의 상품을 만나보세요!" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </head>
        <h1 style={{display:'none'}}>상품 리스트</h1>
        {
            fetchDatas.map((item:MapItem)=>(
                    <ProductListCard data={item} />
            ))
        }
        </S.Container>
    )
}