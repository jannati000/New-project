function Form(){
  return(
    <>
    <section className="bg-[#F3F3F3] py-[150px] px-[140px] ">
      <div className="container">
       <div className="flex items-center">
         <div className="max-w-50% pe-[146px]">
          <h2 className="font-inter text-[45px] text-[#151515] font-bold leading-[100%] 
          w-[450px] pb-5">We Do design, Code & Development</h2>
          <p className="text-[#7B7B7B] text-[16px] leading-[26px] font-normal font-inter 
          pb-[10px] w-[514px]">I had a good experience while using this app, what fascinated me was the live tracking feature There are many variations of passages of Lorem Ipsum available, but the majority.</p>
          <p className="text-[#7B7B7B] text-[16px] leading-[26px] font-normal font-inter 
          pb-[10px] w-[514px]">There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form.</p>
        </div>
        <div className="max-w-60%">
          <form action="" className="bg-[#FFFFFF] py-[61px] px-[43px] rounded-[20px] duration-300 hover:scale-105 hover:translate-y-2 hover:shadow-service">
            <h2 className="text-[30px] text-[#151515] font-inter font-bold pb-[30px] text-center">Get a free quote now</h2>
            <div className="from pb-5">
              <label htmlFor="">
              <p className="text-[#151515] text-[16px] leading-[26px] font-medium font-inter 
              pb-[10px]">Name</p>
              <input type="text" placeholder="Enter your name" className=" py-[19px] ps-[23px] border-[#E8E8E8] border-[1px] w-full outline-0 rounded-[10px] text-[16px] font-normal leading-[26px] text-[#D0D0D0]" 
              />
            </label>
            </div>
            <div className="from pb-5">
              <label htmlFor="">
              <p className="text-[#151515] text-[16px] leading-[26px] font-medium font-inter 
              pb-[10px]">Email</p>
              <input type="email" placeholder="Enter your Email" className=" py-[19px] ps-[23px] border-[#E8E8E8] border-[1px] w-full outline-0 rounded-[10px] text-[16px] font-normal leading-[26px] text-[#D0D0D0]" 
              />
            </label>
            </div>
            <div className="from pb-[30px]">
              <label htmlFor="">
              <p className="text-[#151515] text-[16px] leading-[26px] font-medium font-inter 
              pb-[10px]">Phone</p>
              <input type="number" placeholder="Enter your Phone" className=" py-[19px] ps-[23px] border-[#E8E8E8] border-[1px] w-full outline-0 rounded-[10px] text-[16px] font-normal leading-[26px] text-[#D0D0D0]" 
              />
            </label>
            </div>
             <div className="btn">
            <a href="" className='bg-[#6A4DF4] font-inter font-semibold  text-[#FFFFFF]
            py-[19px] px-[147px] leading-[26px] rounded-[10px]'>Get Pricing Now</a>
          </div>
          </form>
        </div>
       </div>
      </div>
    </section>
    
    </>
  )
}

export default Form