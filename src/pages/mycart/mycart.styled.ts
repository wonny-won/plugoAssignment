import styled from "styled-components";
export const Container = styled.div`
    background-color: #eee;
    height: 100vh;
    padding: 0 10%;
`
export const ContentsWrap = styled.div`
    width: 670px;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    padding: 10px 20px;
`

export const Contents = styled.div`
    display: flex;
    background-color: #fff;
`
export const Img = styled.img`
    width:50px;
    height: 50px;
    size: cover;
`
export const ProductInfoWrap = styled.div`
    margin-left: 20px;
`
export const Categgory = styled.div`
    width: 30px;
    height: 16px;
    text-align: center;
    border: 1px solid black;
    background-color: black;
    font-size: 14px;
    color:#fff;
    padding: 0 10px; 
    margin-bottom: 8px;
`
export const Title = styled.div`
    font-size: 16px;
    font-weight: 700;
    color: #312E2ECC;
`
export const Price = styled.div`
    font-size: 14px;
    color: #312E2E9E;

`
export const CheckBox = styled.input`
    margin: 0 20px 0 0;
    width: 18px;
    height: 18px;
`