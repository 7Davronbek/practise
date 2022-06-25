import React from 'react'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';


const PureCarousel = () => {
    return (
        <div>
            <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={125}
                totalSlides={3}
            >
                <Slider>
                    <Slide index={0}>
                        <img src="/images/1.jpg" alt=" 1" />
                    </Slide>
                    <Slide index={1}>
                        <img src="/images/1.jpg" alt=" 1" />
                        .</Slide>
                    <Slide index={2}>
                        <img src="/images/1.jpg" alt=" 1" />
                    </Slide>
                </Slider>

                <ButtonBack>Back</ButtonBack>
                <ButtonNext>Next</ButtonNext>
            </CarouselProvider>
        </div>
    )
}

export default PureCarousel