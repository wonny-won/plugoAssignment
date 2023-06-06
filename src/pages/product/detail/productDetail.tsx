import { useParams } from "react-router-dom"
import { useFetchDetailQuery } from "./detailFn/useFetchDetilQuery"
import * as S from './productDetail.styled'
import { onClickCart } from "./detailFn/cart"

export default function ProductDetail(){
    const params = useParams()
    const fetchDetailData = useFetchDetailQuery(`/product/detail/${params?.id}`,params?.id)
    const data = fetchDetailData?.data?.productData?.[0]
    return(
        <>
            <head>
              <title>Plugo | 상품 디테일</title>
              <meta name="description" content="세계 최강 플루고의 상품을 만나보세요!" />
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </head>
            <h1 style={{display:'none'}}>상품 디테일</h1>
            <S.Container>
                <h2 style={{display:'none'}}>상품 이미지</h2>
                <S.Img src={data?.productImg} />
                <S.RightSection>
                    <h2 style={{display:'none'}}>상품 기본정보</h2>
                    <S.ProductDetailSection>
                        <h3 style={{display:'none'}}>상품 카테고리</h3>
                            <S.Category>{data?.category}</S.Category>
                        <h3 style={{display:'none'}}>상품 이름</h3>
                            <S.Product>{data?.product}</S.Product>
                        <h3 style={{display:'none'}}>상품 가격</h3>
                            <S.Price>Won {data?.price}</S.Price>
                    </S.ProductDetailSection>
                    <h2 style={{display:'none'}}>장바구니 추가 하기</h2>
                        <S.CartBt onClick={onClickCart(data)}><S.Cart/> &nbsp; add cart</S.CartBt>
                    <h2 style={{display:'none'}}>상품 상세설명</h2>
                    <section>
                        <S.Detail>{data?.productDetail}</S.Detail>
                    </section>
                </S.RightSection>
            </S.Container>
        </>
    )
}