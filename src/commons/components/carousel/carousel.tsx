import Slider from 'react-slick';
import * as S from './carousel.styled'

export default function Carousel(props:any){
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return(
        <S.Container>
        <Slider {...settings}>
            {
                props.Img===undefined ? <S.Img src={require('../../../assets/noImg.gif')}/> : <S.Img src={props.Img}/>
            }
        </Slider>
        </S.Container>
    )
}