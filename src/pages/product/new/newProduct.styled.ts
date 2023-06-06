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
`
export const DetilSection = styled.div`
    width: 35%;
    height: 600px;
`
export const MiniSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const DetailMiniSection = styled(MiniSection)`
    height: 100%;
    justify-content: space-around;
`
export const ImgCarousel = styled.div`
    width: 90%;
    height: 500px;
    border: 1px solid gray;
`
export const Title = styled.h3`
    font-size: 15px;
    margin: 5px 0;
    font-weight: 600;
`