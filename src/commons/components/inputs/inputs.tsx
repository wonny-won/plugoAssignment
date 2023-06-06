import * as S from './inputs.styled'
interface InputsProps {
    input: string;
    title: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
    id?: string
}   

export default function Inputs(props:InputsProps){
    const optionArr = ['카테고리를 선택해주세요','Accessory','Top','Bottom',]
    return(
        <>
            <S.Container>
                <S.Title>{props.title}</S.Title>
                { props.input==='input' && <S.Input id ={props.id} type='text' onChange={props.onChange}/> }
                { props.input==='textArea' && <S.Textarea id ={props.id} onChange={props.onChange}/> }
                {
                    props.input==='select' && 
                        <S.Category id ={props.id} onChange={props.onChange}>
                        { optionArr.map((item,index)=>(
                                <option key={index}>{item}</option>
                            )) }
                        </S.Category>
                }
            </S.Container>            
        </>
    )
}