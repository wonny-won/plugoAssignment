import Inputs from 'commons/components/inputs/inputs'
import * as S from './newProduct.styled'
import { useOnChange } from 'commons/hooks/useOnChange'
import { useSubmit } from './newFn/useSubmit' 

export default function NewProduct(){
    const {data,onChange} = useOnChange()
    const onClickSubmit = useSubmit(data)
    
    return(
        <S.Container>
            <head>
              <title>PlugoAdmin | createProduct</title>
              <meta name="description" content="세계 최강 플루고의 상품을 만나보세요!" />
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </head>
            <h1 style={{display:'none'}}>상품 등록</h1>
            <S.Contents>
                <S.ImgSection>
                    <h2 style={{display:'none'}}>상품 이미지 등록</h2>
                    <S.MiniSection>
                        <S.ImgCarousel>이미지 캐러셀 들어올거임</S.ImgCarousel>
                        <input type='text'/>
                    </S.MiniSection>
                </S.ImgSection>
                <S.DetilSection>
                    <h2 style={{display:'none'}}>상품 상세</h2>
                    <S.DetailMiniSection>
                        <Inputs title={'상품명'} input={'input'} id={'product'} onChange={onChange}/>
                        <Inputs title={'상품가격'} input={'input'} id={'price'} onChange={onChange}/>
                        <Inputs title={'카테고리'} input={'select'} />
                        <Inputs title={'상세설명'} input={'textArea'} id={'productDetail'} onChange={onChange}/>
                    </S.DetailMiniSection>
                </S.DetilSection>
            </S.Contents>
            <div>
                <button onClick={onClickSubmit}>상품등록</button>
                <button>등록취소</button>
            </div>
        </S.Container>
    )
}