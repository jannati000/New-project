import vector from '../../assets/vector.png'
import review from '../../assets/review.jpg'
import Slider from "react-slick";
function Client(){

  const settings = {
    dots: false,
    centerMode: true,
    infinite: true,
    speed: 500,
    autoplay:true,
    autoplayspeed:1000,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  return(
    <>
    <section className='pb-[227px]'>
      <div className="container">
        <div className="text-center">
          <h2 className="font-bold font-inter text-[45px] text-[#151515] pb-[18px]">
            Some Client Reviews
          </h2>
        <p className="font-inter font-normal text-[16px] leading-[26px] text-[#737373]       
           pb-[130px] max-w-[609px] mx-auto">
          There are many variations of passages of Lorem Ipsum  available, but themajority  have suffered alteration in some form.
        </p>
        </div>
        <div className="gird grid-cols-3">
          <Slider {...settings}>
          <div className="item py-[54px] px-[58px] rounded-[30px] duration-200">
            <img src={vector} className='' alt="" />
            <p className='text-[16px] font-normal font-inter text-[#7B7B7B] leading-[26px] max-w-[307px] py-[20px]'>I had a good experience while using this app, what fascinated me was the live tracking feature There are many variations of passages of Lorem Ipsum available, but the majority.</p>
           <i class="fa-solid fa-star max-w-[20px] max-h-[20px] text-[#F9BD2C] gap-[7px]"></i>
           <i class="fa-solid fa-star max-w-[20px] max-h-[20px] text-[#F9BD2C] gap-[7px]"></i>
           <i class="fa-solid fa-star max-w-[20px] max-h-[20px] text-[#F9BD2C] gap-[7px]"></i>
           <i class="fa-solid fa-star max-w-[20px] max-h-[20px] text-[#F9BD2C] gap-[7px]"></i>
           <i class="fa-solid fa-star max-w-[20px] max-h-[20px] text-[#F9BD2C] gap-[7px]
             pb-[32px]"></i>
            <div className="flex">
               <img src={review} className='max-w-[47px] max-h-[47px] rounded-[50%]' alt="" />
               <div className="marketor pl-[20px]">
                <h2 className='font-semibold font-inter text-[#232323]'>Eric Drake</h2>
                <p className='font-inter font-normal text-[#7B7B7B]'>Digital Marketor</p>
               </div>
            </div>
          </div>
          <div className="item py-[54px] px-[58px] rounded-[30px] duration-200">
            <img src={vector} className='' alt="" />
            <p className='text-[16px] font-normal font-inter text-[#7B7B7B] leading-[26px] max-w-[307px] py-[20px]'>I had a good experience while using this app, what fascinated me was the live tracking feature There are many variations of passages of Lorem Ipsum available, but the majority.</p>
           <i class="fa-solid fa-star max-w-[20px] max-h-[20px] text-[#F9BD2C] gap-[7px]"></i>
           <i class="fa-solid fa-star max-w-[20px] max-h-[20px] text-[#F9BD2C] gap-[7px]"></i>
           <i class="fa-solid fa-star max-w-[20px] max-h-[20px] text-[#F9BD2C] gap-[7px]"></i>
           <i class="fa-solid fa-star max-w-[20px] max-h-[20px] text-[#F9BD2C] gap-[7px]"></i>
           <i class="fa-solid fa-star max-w-[20px] max-h-[20px] text-[#F9BD2C] gap-[7px]
             pb-[32px]"></i>
            <div className="flex">
               <img src={review} className='max-w-[47px] max-h-[47px] rounded-[50%]' alt="" />
               <div className="marketor pl-[20px]">
                <h2 className='font-semibold font-inter text-[#232323]'>Eric Drake</h2>
                <p className='font-inter font-normal text-[#7B7B7B]'>Digital Marketor</p>
               </div>
            </div>
          </div>
          <div className="item py-[54px] px-[58px] rounded-[30px] duration-200">
            <img src={vector} className='' alt="" />
            <p className='text-[16px] font-normal font-inter text-[#7B7B7B] leading-[26px] max-w-[307px] py-[20px]'>I had a good experience while using this app, what fascinated me was the live tracking feature There are many variations of passages of Lorem Ipsum available, but the majority.</p>
           <i class="fa-solid fa-star max-w-[20px] max-h-[20px] text-[#F9BD2C] gap-[7px]"></i>
           <i class="fa-solid fa-star max-w-[20px] max-h-[20px] text-[#F9BD2C] gap-[7px]"></i>
           <i class="fa-solid fa-star max-w-[20px] max-h-[20px] text-[#F9BD2C] gap-[7px]"></i>
           <i class="fa-solid fa-star max-w-[20px] max-h-[20px] text-[#F9BD2C] gap-[7px]"></i>
           <i class="fa-solid fa-star max-w-[20px] max-h-[20px] text-[#F9BD2C] gap-[7px]
             pb-[32px]"></i>
            <div className="flex">
               <img src={review} className='max-w-[47px] max-h-[47px] rounded-[50%]' alt="" />
               <div className="marketor pl-[20px]">
                <h2 className='font-semibold font-inter text-[#232323]'>Eric Drake</h2>
                <p className='font-inter font-normal text-[#7B7B7B]'>Digital Marketor</p>
               </div>
            </div>
          </div>
          <div className="item py-[54px] px-[58px] rounded-[30px] duration-200">
            <img src={vector} className='' alt="" />
            <p className='text-[16px] font-normal font-inter text-[#7B7B7B] leading-[26px] max-w-[307px] py-[20px]'>I had a good experience while using this app, what fascinated me was the live tracking feature There are many variations of passages of Lorem Ipsum available, but the majority.</p>
           <i class="fa-solid fa-star max-w-[20px] max-h-[20px] text-[#F9BD2C] gap-[7px]"></i>
           <i class="fa-solid fa-star max-w-[20px] max-h-[20px] text-[#F9BD2C] gap-[7px]"></i>
           <i class="fa-solid fa-star max-w-[20px] max-h-[20px] text-[#F9BD2C] gap-[7px]"></i>
           <i class="fa-solid fa-star max-w-[20px] max-h-[20px] text-[#F9BD2C] gap-[7px]"></i>
           <i class="fa-solid fa-star max-w-[20px] max-h-[20px] text-[#F9BD2C] gap-[7px]
             pb-[32px]"></i>
            <div className="flex">
               <img src={review} className='max-w-[47px] max-h-[47px] rounded-[50%]' alt="" />
               <div className="marketor pl-[20px]">
                <h2 className='font-semibold font-inter text-[#232323]'>Eric Drake</h2>
                <p className='font-inter font-normal text-[#7B7B7B]'>Digital Marketor</p>
               </div>
            </div>
          </div>
          </Slider>
        </div>
      </div>
    </section>
    
    </>
  )
}
export default Client