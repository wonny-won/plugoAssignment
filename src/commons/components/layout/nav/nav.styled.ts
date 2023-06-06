import styled from "styled-components";

export const Container = styled.div`
    width: 300px;
    height: 70vh;
    border: 1px solid #ddd;
    border-radius: 4px;
    margin-left: 30px;
`
export const Li = styled.li`
    list-style: none;
    font-weight: 500;
    padding: 5px;
    color: #312E2ECC;
    &:hover{
        cursor: pointer;
        color: grey;
        font-size: 20px;
        transition: all 0.7s;
    }

`