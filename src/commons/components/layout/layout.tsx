import { useLocation } from "react-router-dom"
import Header from "./header/header"
import NavBar from "./nav/nav"
import styled from "styled-components"

export default function Layout(props:{
    children: JSX.Element
}){
    const params = useLocation()
    console.log(params.pathname)
    const VIEW_NAV = ['/']
    const includesNav = VIEW_NAV.includes(params.pathname)


    return(
        <>
        <Header />
        <Wrap>
            { includesNav &&<NavBar/>}
            <div style={{width:'100%'}}>{props.children}</div>
        </Wrap>
        </>
    )
}
const Wrap = styled.div`
    width: 100%;
    display: flex;
    margin-top:120px;
`