import * as S from './header.styled'

export default function Header(){
    return(
        <S.Container>
        <div>
            <S.Img src={require('../../../../assets/plugo.png')} />
        </div>
        <div>
        <S.MenuWrap>
            <S.Li>HOME</S.Li>
            <S.Li><S.A href={'/'}>ALL PRODUCT</S.A></S.Li>
            <S.Li><S.A href={'/mycart'}>MY</S.A></S.Li>
        </S.MenuWrap>
        </div>
        <S.User>
        <S.Search />
        <S.My />
        </S.User>
        </S.Container>
    )
}