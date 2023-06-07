import { useRouter } from 'commons/hooks/useRouter';
import * as S from './listCard.styled'

interface ProductListCardProps {
    data:{
        id?: string;
        product?: string;
        productImg?: string;
        productDetail?: string;
        price?: string;
        category?: string;
    }
}   

export default function ProductListCard(props:ProductListCardProps){
    const router = useRouter()
    return(
        <S.Container key={props.data?.id} onClick={router(`/product/detail/${props.data?.id}`)}>
            <S.Img src={props.data?.productImg ? props.data?.productImg : require('../../../assets/noImg.gif')} />
            <S.productInfoWrap>
                <S.TitleWrap>
                    <S.ProductName>{props.data?.product}</S.ProductName>
                    <S.Category>{props.data?.category}</S.Category>
                </S.TitleWrap>
                <S.Price> Won {props.data?.price}</S.Price>
            </S.productInfoWrap>
        </S.Container>
    )
}