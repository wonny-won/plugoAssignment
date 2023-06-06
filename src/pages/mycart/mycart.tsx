import { useEffect, useState } from "react";
import * as S from './mycart.styled'
import { DeleteOutlined } from '@ant-design/icons'

export default function MyCart(){
    const [cart, setCart] = useState<any>([]);
    useEffect(()=>{
        const cart = JSON.parse(localStorage.getItem("cart") || "[]");
        setCart(cart);
    },[])
    console.log(cart)      

    return(
        <S.Container>
        {
            cart.map(()=>(
                <S.ContentsWrap>
                    <S.Contents>
                    <div><S.CheckBox type="checkBox"/></div>
                    <S.Img src={cart?.[0]?.productImg} />
                    <div>
                    <S.ProductInfoWrap>
                        <S.Categgory>{cart?.[0]?.category}</S.Categgory>
                        <S.Title>{cart?.[0]?.product}</S.Title>
                        <div>Won {cart?.[0]?.price}</div>
                    </S.ProductInfoWrap>

                    </div>
                    </S.Contents>
                    <div> <DeleteOutlined /> </div>
                </S.ContentsWrap>
            ))
        }
        </S.Container>
    )
}