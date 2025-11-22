import banner from '../../assets/banner.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


function Banner(){


    var settings = {
    dots: true,
    infinite: true,
    arrows:false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplayspeed:2000,
  };

  return(
    <>
      <section className='relative'>
      <img src={banner}className='w-full' alt="" />
      <div className="absolute top-0 left-0 w-full h-full bg-[#00000099]">
        <div className="max-w-[950px] absolute top-[50%] left-[50%] -translate-x-2/4 -translate-y-2/4">

         <Slider {...settings}>
            <div className="slider-item text-center duration-200">
          <h1 className='text-white font-inter font-bold text-[70px] leading-[120%] pb-[51px]'>
            We Help brands with high quality services
            </h1>
            <p className=' max-w-[621px] mx-auto text-[16px] leading-[26px] text-white font-inter font-normal pb-[55px]'>There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look.</p>
           <a href="" className='bg-[#6A4DF4] font-inter font-semibold  text-[#FFFFFF]
            py-[15px] px-[42px] leading-[26px] rounded-[10px]'>Get Started</a>
        </div>
        <div className="slider-item text-center mb-4 duration-200">
          <h1 className='text-white font-inter font-bold text-[70px] leading-[120%] pb-[51px]'>
            We Help brands with high quality services
            </h1>
            <p className=' max-w-[621px] mx-auto text-[16px] leading-[26px] text-white font-inter font-normal pb-[55px]'>There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look.</p>
           <a href="" className='bg-[#6A4DF4] font-inter font-semibold  text-[#FFFFFF]
            py-[15px] px-[42px] leading-[26px] rounded-[10px]'>Get Started</a>
        </div>
        <div className="slider-item text-center mb-4 duration-200">
          <h1 className='text-white font-inter font-bold text-[70px] leading-[120%] pb-[51px]'>
            We Help brands with high quality services
            </h1>
            <p className=' max-w-[621px] mx-auto text-[16px] leading-[26px] text-white font-inter font-normal pb-[55px]'>There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look.</p>
           <a href="" className='bg-[#6A4DF4] font-inter font-semibold  text-[#FFFFFF]
            py-[15px] px-[42px] leading-[26px] rounded-[10px]'>Get Started</a>
        </div>
        <div className="slider-item text-center mb-4 duration-200">
          <h1 className='text-white font-inter font-bold text-[70px] leading-[120%] pb-[51px]'>
            We Help brands with high quality services
            </h1>
            <p className=' max-w-[621px] mx-auto text-[16px] leading-[26px] text-white font-inter font-normal pb-[55px]'>There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look.</p>
           <a href="" className='bg-[#6A4DF4] font-inter font-semibold  text-[#FFFFFF]
            py-[15px] px-[42px] leading-[26px] rounded-[10px]'>Get Started</a>
        </div>
         </Slider>
        
        </div>
      </div>
    </section>
    </>
  )
}
export default Banner