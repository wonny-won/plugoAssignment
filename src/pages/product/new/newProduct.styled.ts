import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const Contents = styled.section`
    width: 100%;
    display: flex;
    justify-content: space-around;
`
export const ImgSection = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const DetilSection = styled.div`
    width: 35%;
    height: 600px;
`
export const MiniSection = styled.section`
    width: 90%;
`
export const DetailMiniSection = styled(MiniSection)`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

`
export const ImgCarousel = styled.div`
    width: 90%;
    height: 500px;
    border: 1px solid gray;
    margin: 0;
`
export const Title = styled.h3`
    font-size: 15px;
    margin: 5px 0;
    font-weight: 600;
`
export const ButtonWrap = styled.div`
    padding: 60px 0;
`
export const Button = styled.button`
    width: 300px;
    padding: 15px 0;
    margin: 0 10px;
    border: 1.5px solid black;
    background-color: #fff;
    font-size: 17px;
    font-weight: 800;
    &:hover {
        background-color: black;
        color: #fff;
        cursor: pointer;
    }
`