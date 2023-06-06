import Slider from 'react-slick';

export default function Carousel(props:any){
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return(
        <>
        <Slider {...settings}>
            <div>
            1
            </div>
        </Slider>
        </>
    )
}