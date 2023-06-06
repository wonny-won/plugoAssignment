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
    console.log(props.Img)
    return(
        <S.Container>
        <Slider {...settings}>
            {
                props.Img===undefined ? <div>없어</div> : <S.Img src={props.Img}/>
            }
        </Slider>
        </S.Container>
    )
}