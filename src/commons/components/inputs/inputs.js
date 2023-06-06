import * as S from './inputs.styled'
export default function Inputs(props){
    const optionArr = ['Accessory','Top','Bottom',]
    return(
        <>
            <S.Container>
                <S.Title>{props.title}</S.Title>
                { props.input==='input' && <S.Input type='text'/> }
                { props.input==='textArea' && <S.Textarea /> }
                {
                    props.input==='select' && 
                        <S.Category>
                        { optionArr.map((item,index)=>(
                                <option key={index}>{item}</option>
                            )) }
                        </S.Category>
                }
            </S.Container>            
        </>
    )
}