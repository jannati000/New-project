import work1 from '../../assets/work1.png'
import work2 from '../../assets/work2.png'
import work3 from '../../assets/work3.png'
import work4 from '../../assets/work4.png'
import work5 from '../../assets/work5.png'
import work6 from '../../assets/work6.png'
function Work(){
  return(
    <>
    <section className="bg-[#F3F3F3] py-[150px] px-[140px] mb-[150px]">

      <div className="text-center">
          <h2 className="font-bold font-inter text-[45px] text-[#151515] pb-[18px]">
            Our Recent Work
          </h2>
        <p className="font-inter font-normal text-[16px] leading-[26px] text-[#737373]       
           pb-[106px] max-w-[609px] mx-auto">
          There are many variations of passages of Lorem Ipsum  available, but themajority  have suffered alteration in some form.
        </p>
        </div>
         
         <div className="grid grid-cols-3 gap-x-6 gap-y-6">

            <div className='bg-white rounded-[20px] w-full duration-300 hover:scale-105 hover:translate-y-2'>
              <img src={work1} className=' rounded-[20px]' alt="" />
              <div className=' py-[30px] px-[42px] text-center'>
                <h4 className='font-bold font-inter text-[#151515] text-[20px] leading-[100%] pb-[10px]'>Task Management App</h4>
                <p className=' text-[16px] leading-[26px] font-inter font-normal text-[#737373]'>This is a task management application that can help you be more </p>
              </div>
            </div>
            <div className='bg-white rounded-[20px] w-full duration-300 hover:scale-105 hover:translate-y-2'>
              <img src={work2} className=' rounded-[20px]' alt="" />
              <div className=' py-[30px] px-[42px] text-center'>
                <h4 className='font-bold font-inter text-[#151515] text-[20px] leading-[100%] pb-[10px]'>Saas Landing Page Design</h4>
                <p className=' text-[16px] leading-[26px] font-inter font-normal text-[#737373]'>This is a task management application that can help you be more </p>
              </div>
            </div>
            <div className='bg-white rounded-[20px] w-full duration-300 hover:scale-105 hover:translate-y-2'>
              <img src={work3} className=' rounded-[20px]' alt="" />
              <div className=' py-[30px] px-[42px] text-center'>
                <h4 className='font-bold font-inter text-[#151515] text-[20px] leading-[100%] pb-[10px]'>App Design</h4>
                <p className=' text-[16px] leading-[26px] font-inter font-normal text-[#737373]'>This is a task management application that can help you be more </p>
              </div>
            </div>
            <div className='bg-white rounded-[20px] w-full duration-300 hover:scale-105 hover:translate-y-2'>
              <img src={work4} className=' rounded-[20px]' alt="" />
              <div className=' py-[30px] px-[42px] text-center'>
                <h4 className='font-bold font-inter text-[#151515] text-[20px] leading-[100%] pb-[10px]'>Landing Page Design</h4>
                <p className=' text-[16px] leading-[26px] font-inter font-normal text-[#737373]'>This is a task management application that can help you be more </p>
              </div>
            </div>
            <div className='bg-white rounded-[20px] w-full duration-300 hover:scale-105 hover:translate-y-2'>
              <img src={work5} className=' rounded-[20px]' alt="" />
              <div className=' py-[30px] px-[42px] text-center'>
                <h4 className='font-bold font-inter text-[#151515] text-[20px] leading-[100%] pb-[10px]'>Dashboard Design</h4>
                <p className=' text-[16px] leading-[26px] font-inter font-normal text-[#737373]'>This is a task management application that can help you be more </p>
              </div>
            </div>
            <div className='bg-white rounded-[20px] w-full duration-300 hover:scale-105 hover:translate-y-2'>
              <img src={work6} className=' rounded-[20px]' alt="" />
              <div className=' py-[30px] px-[42px] text-center'>
                <h4 className='font-bold font-inter text-[#151515] text-[20px] leading-[100%] pb-[10px]'>Web App Design</h4>
                <p className=' text-[16px] leading-[26px] font-inter font-normal text-[#737373]'>This is a task management application that can help you be more </p>
              </div>
            </div>

         </div>
    </section>
    
    </>
  )
}
export default Work