import { useRouter } from 'commons/hooks/useRouter'
import * as S from './nav.styled'

export default function NavBar(){
    const router = useRouter()
    return(
        <S.Container>
            <div>
            <ul>
                <S.Li onClick={router('/category/Top')}>Top</S.Li>
                <S.Li onClick={router('/category/Bottom')}>Bottom</S.Li>
                <S.Li onClick={router('/category/Accessory')}>Accessory</S.Li>
            </ul>
            </div>
        </S.Container>
    )
}