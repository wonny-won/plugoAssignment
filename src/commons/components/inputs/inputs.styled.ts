import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
`
export const Title = styled.h3`
    font-size: 15px;
    margin: 5px 0;
    font-weight: 800;
    color: rgba(0,0,0,0.5);
`
export const Input = styled.input`
    width: 80%;
    font-size: 20px;
    font-weight: 400;
    border: none;
    border-bottom: 2px solid #ddd;
    outline: none;
    padding: 3px 5px;
`
export const Textarea = styled.textarea`
    width : 80%;
    height: 300px;
    border: 2px solid #ddd;
    outline: none;
    font-size: 20px;
    font-weight: 400;
    padding: 3px;
    border-radius: 4px;
`
export const Category = styled.select`
    width: 82%;
    font-size: 20px;
    border: 2px solid #ddd;
    padding: 5px;
    border-radius: 4px;
`