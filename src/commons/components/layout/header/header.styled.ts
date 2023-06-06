import{ SearchOutlined,UserOutlined } from '@ant-design/icons'
import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 120px;
    background-color: #fff;
    position: fixed;
    top: 0;
`
export const Img = styled.img`
    width: 100px;
    height: 50px;
`
export const MenuWrap = styled.ul`
    width: 370px;
    display: flex;
    justify-content: space-around;
    font-size: 18px;
    height: 22px;
`
export const Li = styled.li`
    list-style: none;
    font-weight: 500;
    padding: 5px;
    &:hover{
        cursor: pointer;
        color: grey;
        font-size: 20px;
        transition: all 0.7s;
    }
`
export const A = styled.a`
    text-decoration: none;
    color: black;
`
export const User = styled.div`
    width: 120px;
    display: flex;
    justify-content: space-around;
    font-size: 15px;
`
export const Search = styled(SearchOutlined)`
    font-size: 20px;
`
export const My = styled(UserOutlined)`
font-size: 20px;
`