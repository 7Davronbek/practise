import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';

const Slider = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <Splide
                            options={{
                                type: 'loop',
                            }}
                            aria-label="My Favorite Images"
                        >
                            <SplideSlide>
                                <img src="/images/1.jpg" alt=" 1" />
                            </SplideSlide>
                            <SplideSlide>
                                <img src="/images/1.jpg" alt=" 2" />
                            </SplideSlide>
                            <SplideSlide>
                                <img src="/images/1.jpg" alt=" 3" />
                            </SplideSlide>
                        </Splide>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slider