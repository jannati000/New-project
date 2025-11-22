import logo from '../../assets/logo.png'
function Footer(){
  return(
    <>
   <section className='pt-[142px] px-[12px]'>
    <div className="container">
      <div className="flex">
         <div className="w-[33.33%]">
            <img src={logo} alt="" />
            <p className='font-inter font-normal text-[#7B7B7B] text-[16px] leading-[26px] pt-[30px]'>I had a good experience while using this app, what fascinated me was the live tracking feature There are many variations of passages of Lorem Ipsum available, but the majority.</p>
          </div> 
         <div className="w-[16.66%] px-[132px]">
          <h2 className='text-[20px] font-semibold text-[#151515] pb-[40px]'>About</h2>
          <div className=" flex flex-col">
            <a href="" className='font-inter font-normal text-[#7B7B7B] text-[16px] w-[100px] pb-5 hover:text-[#6A4DF4] hover:font-semibold duration-300'>About Us</a>
            <a href="" className='font-inter font-normal text-[#7B7B7B] text-[16px] pb-5 hover:text-[#6A4DF4] hover:font-semibold duration-300'>Features</a>
            <a href="" className='font-inter font-normal text-[#7B7B7B] text-[16px] pb-5 hover:text-[#6A4DF4] hover:font-semibold duration-300'>News</a>
            <a href="" className='font-inter font-normal text-[#7B7B7B] text-[16px] pb-5 hover:text-[#6A4DF4] hover:font-semibold duration-300'>Careers</a>
          </div>
          </div> 
         <div className="w-[16.66%] px-[132px]">
          <h2 className='text-[20px] font-semibold text-[#151515] pb-[40px]'>Company</h2>
          <div className=" flex flex-col">
            <a href="" className='font-inter font-normal text-[#7B7B7B] text-[16px] w-[120px] pb-5 hover:text-[#6A4DF4] hover:font-semibold duration-300'>Our Team</a>
            <a href="" className='font-inter font-normal text-[#7B7B7B] text-[16px] pb-5 
            w-[180px] hover:text-[#6A4DF4] hover:font-semibold duration-300'>Partner With Us</a>
            <a href="" className='font-inter font-normal text-[#7B7B7B] text-[16px] pb-5 hover:text-[#6A4DF4] hover:font-semibold duration-300'>FAQ</a>
            <a href="" className='font-inter font-normal text-[#7B7B7B] text-[16px] pb-5 hover:text-[#6A4DF4] hover:font-semibold duration-300'>Blog</a>
          </div>
          </div> 
         <div className="w-[16.66%] px-[132px]">
          <h2 className='text-[20px] font-semibold text-[#151515] pb-[40px]'>Support</h2>
          <div className=" flex flex-col">
            <a href="" className='font-inter font-normal text-[#7B7B7B] text-[16px] w-[71px] pb-5 hover:text-[#6A4DF4] hover:font-semibold duration-300'>About</a>
            <a href="" className='font-inter font-normal text-[#7B7B7B] text-[16px] pb-5 w-[150px] hover:text-[#6A4DF4] hover:font-semibold duration-300'>Support Center</a>
            <a href="" className='font-inter font-normal text-[#7B7B7B] text-[16px] pb-5 hover:text-[#6A4DF4] hover:font-semibold duration-300'>Feedback</a>
            <a href="" className='font-inter font-normal text-[#7B7B7B] text-[16px] pb-5 w-[157px] hover:text-[#6A4DF4] hover:font-semibold duration-300'>Contact Us</a>
            <a href="" className='font-inter font-normal text-[#7B7B7B] text-[16px] pb-5 hover:text-[#6A4DF4] hover:font-semibold duration-300 pb-[50px]'>Accesbility</a>
          </div>
          </div> 
         <div className="w-[16.66%] px-[132px]">
          <h2 className='text-[20px] font-semibold text-[#151515] pb-[40px] w-[118px]'>Get in touch</h2>
          <div className=" flex flex-col">
            <a href="" className='font-inter font-normal text-[#7B7B7B] text-[16px] w-[150px] pb-5 hover:text-[#6A4DF4] hover:font-semibold duration-300'> 
              info@gmail.com
            </a>
            <a href="tel: +88 0121 0212" className='font-inter font-normal text-[#7B7B7B] text-[16px] pb-5 w-[121px] hover:text-[#6A4DF4] hover:font-semibold duration-300'>
              +88 0121 0212
              </a>          
          </div>
          </div> 
      </div>
    </div>
    <div className="container">
      <div className="text py-[33px] border-t border-[#E8E8E8] ">
        <h2 className='text-center text-[#CCCCCC] font-normal font-inter'>All credit goes to @agence.com</h2>
      </div>
    </div>
   </section>
    </>
  )
}
export default Footer