import * as S from './nav.styled'

export default function NavBar(){
    return(
        <S.Container>
            <div>
            <ul>
                <S.Li>Top</S.Li>
                <S.Li>Bottom</S.Li>
                <S.Li>Accessory</S.Li>
            </ul>
            </div>
        </S.Container>
    )
}