import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import sl1 from '../Images/crime-1-dp.jpg';
import sl2 from'../Images/crime-2.jpg'
import sl3 from'../Images/crimedp.jpg'
import sl4 from'../Images/galiya-lofi.jpg';
import "../CSS/rules.css";

function AutoImageMainseives() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000, // Adjust the speed (in milliseconds) as needed
    };




    return (

        <>
            <div className='container-fluid '>
                <div className='container py-5 container-slideder bg-secondary'>


                    <Slider {...settings}>
                        {/* Your carousel items go here */}
                        <div className='slide-img-box '>
                            <img className='img-fluid' src={sl1} alt='1'/>
                            <h3>Item 1</h3>
                        </div>
                        <div>
                        <img className='img-fluid' src={sl1} alt='1'/>
                            <h3>Item 2</h3>
                        </div>
                        <div>
                        <img className='img-fluid' src={sl1} alt='1'/>
                            <h3>Item 3</h3>
                        </div>

                        <div>
                        <img className='img-fluid' src={sl3} alt='1'/>
                            <h3>Item 4</h3>
                        </div>
                        <div>
                        <img className='img-fluid' src={sl3} alt='1'/>
                            <h3>Item 5</h3>
                        </div>
                        <div>
                        <img className='img-fluid' src={sl3} alt='1'/>
                            <h3>Item 6</h3>
                        </div>
                     

                    </Slider>

                </div>
            </div>
        </>
    )
}

export default AutoImageMainseives;
