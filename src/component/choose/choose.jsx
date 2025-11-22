import ideas from '../../assets/ideas.png'
import care from '../../assets/care.png'
import bg from '../../assets/bg.jpg'
function Choose(){
  return(
    <>
    <section className=' pb-[106px]'>
      <div className="container">
        <div className="text-center">
          <h2 className="font-bold font-inter text-[45px] text-[#151515] pb-[18px] max-w-[500px] mx-auto">
           Why You Should Choose Agenc    
          </h2>
        <p className="font-inter font-normal text-[16px] leading-[26px] text-[#737373]       
           pb-[130px] max-w-[802px] mx-auto">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
        </p>
        </div>
        <div className="flex">
        <div className="max-w-[791px]">
          <div className="flex justify-between">
            <div className="grid grid-cols-2">
              <div className="item pr-[103px]"> 
              <img src={ideas} alt="" className='pb-[20px]' />
               <h3 className='font-bold font-inter text-[#151515] text-[25px] '>
                  Innovative Ideas 
               </h3>
                <p className='font-inter text-[#737373] max-w-[340px] text-[16px] font-normal'>
                   Because each project is different, we adapt to your business model.
                </p>
           </div>
            <div className="item pb-[95px]"> 
              <img src={ideas} alt="" className='pb-[20px]' />
               <h3 className='font-bold font-inter text-[#151515] text-[25px] '>
                  Innovative Ideas 
               </h3>
                <p className='font-inter text-[#737373] max-w-[340px] text-[16px] font-normal'>
                   Because each project is different, we adapt to your business model.
                </p>
           </div>
            <div className="item"> 
              <img src={care} alt="" className='pb-[20px]' />
               <h3 className='font-bold font-inter text-[#151515] text-[25px] '>
                  Dedicated Support 
               </h3>
                <p className='font-inter text-[#737373] max-w-[340px] text-[16px] font-normal'>
                   We provide 24/7 support for all our clients and serve them professionally.
                </p>
           </div>
            <div className="item"> 
              <img src={care} alt="" className='pb-[20px]' />
               <h3 className='font-bold font-inter text-[#151515] text-[25px] '>
                 Dedicated Support 
               </h3>
                <p className='font-inter text-[#737373] max-w-[340px] text-[16px] font-normal'>
                  We provide 24/7 support for all our clients and serve them professionally.
                </p>
           </div>
            </div>
          </div>
        </div>
        <div className="max-w-[428px]">
          <img src={bg} className='w-full' alt="" />
        </div>
        </div>
      </div>
    </section>
    </>
  )
}
export default Choose