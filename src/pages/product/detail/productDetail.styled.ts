import styled from "styled-components";

export const Container = styled.section`
    width: 75%;
    display: flex;
    justify-content: space-between;
    margin: auto;
`
export const Img = styled.img`
    width: 50%;
    height: 600px;
`
export const RightSection = styled.div`
    width: 45%;
`
export const ProductDetailSection = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 20px 0;
`
export const Category = styled.div`
    width: 30px;
    height: 18px;
    text-align: center;
    border: 1px solid black;
    background-color: black;
    font-size: 15px;
    font-weight: 800;
    color:#fff;
    padding: 0 10px; 
    margin-bottom: 8px;
`
export const Product = styled.div`
    color: #312E2ECC;
    font-size: 20px;
    margin: 8px 0;
`
export const Price = styled.div`
    color: #312E2E9E;
    font-size: 18px;
    margin: 8px 0;
`
export const CartBt = styled.button`
    width: 100%;
    border: 1px solid #4d4021;
    padding: 10px 0;
    background-color: #4d4021;
    color: #fff;
    font-size: 15px;
    font-weight: 700;
    border-radius: 4px;
    &:hhover{
        cursor: pointer;
    }
`
export const Detail = styled.div`
    margin: 20px 0;
    border: 1px solid #ddd;
    border-radius: 4px;
    width: 91%;
    height: 150px;
    padding: 20px;
    overflow: scroll;
`