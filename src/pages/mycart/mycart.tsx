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
            <S.MyCart>MY CART</S.MyCart>
        {
            cart.map((item:any)=>(
                <S.ContentsWrap key={item.id}>
                    <S.Contents>
                    <div><S.CheckBox type="checkBox"/></div>
                    <S.Img src={item.productImg} />
                    <div>
                    <S.ProductInfoWrap>
                        <S.Categgory>{item.category}</S.Categgory>
                        <S.Title>{item.product}</S.Title>
                        <div>Won {item.price}</div>
                    </S.ProductInfoWrap>
                    </div>
                    </S.Contents>
                    <div> <S.Delete /> </div>
                </S.ContentsWrap>
            ))
        }
        </S.Container>
    )
}