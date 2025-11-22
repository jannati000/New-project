import web from '../../assets/web.png'
import uiux from '../../assets/uiux.png'
import web2 from '../../assets/web2.png'
import motion from '../../assets/motion.png'
import animation from '../../assets/animation.png'
import Digital from '../../assets/Digital.png'
function Service(){
  return(
    <>
    <section className='pb-[103px]'>
      <div className="container">
        <div className="text-center">
          <h2 className="font-bold font-inter text-[45px] text-[#151515] pb-[20px]">Our Provided Services</h2>
        <p className="font-inter font-normal text-[16px] leading-[26px] text-[#737373] pb-[50px]
         max-w-[609px] mx-auto">There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form.</p>
        </div>
        <div className="grid grid-cols-3" gap-x-6 gap-y-6>
          <div className="service-item pt-[80px] pb-[47px] text-center hover:shadow-service rounded-[20px] duration-300 hover:scale-105 hover:translate-y-2" >
            <img src={web} alt="" className='mx-auto pb-[40px]' />
            <h3 className='font-inter font-bold text-[#151515] text-[25px] pb-[20px]'>Web Design</h3>
            <p className='font-inter font-normal text-[#737373] text-[16px] leading-[26px] max-w-[326px] mx-auto' >There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look.</p>
          </div>
          <div className="service-item pt-[80px] pb-[47px] text-center hover:shadow-service rounded-[20px] duration-300 hover:scale-105 hover:translate-y-2">
            <img src={uiux} alt="" className='mx-auto pb-[40px]' />
            <h3 className='font-inter font-bold text-[#151515] text-[25px] pb-[20px]'>UI/UX Design</h3>
            <p className='font-inter font-normal text-[#737373] text-[16px] leading-[26px] max-w-[326px] mx-auto' >There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look.</p>
          </div>
          <div className="service-item pt-[80px] pb-[47px] text-center hover:shadow-service rounded-[20px] duration-300 hover:scale-105 hover:translate-y-2">
            <img src={web2} alt="" className='mx-auto pb-[40px]' />
            <h3 className='font-inter font-bold text-[#151515] text-[25px] pb-[20px]'>Web Development</h3>
            <p className='font-inter font-normal text-[#737373] text-[16px] leading-[26px] max-w-[326px] mx-auto' >There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look.</p>
          </div>
          <div className="service-item pt-[80px] pb-[47px] text-center hover:shadow-service rounded-[20px] duration-300 hover:scale-105 hover:translate-y-2">
            <img src={motion} alt="" className='mx-auto pb-[40px]' />
            <h3 className='font-inter font-bold text-[#151515] text-[25px] pb-[20px]'>Motion Graphics</h3>
            <p className='font-inter font-normal text-[#737373] text-[16px] leading-[26px] max-w-[326px] mx-auto' >There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look.</p>
          </div>
          <div className="service-item pt-[80px] pb-[47px] text-center hover:shadow-service rounded-[20px] duration-300 hover:scale-105 hover:translate-y-2">
            <img src={animation} alt="" className='mx-auto pb-[40px]' />
            <h3 className='font-inter font-bold text-[#151515] text-[25px] pb-[20px]'>3D Animation</h3>
            <p className='font-inter font-normal text-[#737373] text-[16px] leading-[26px] max-w-[326px] mx-auto' >There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look.</p>
          </div>
          <div className="service-item pt-[80px] pb-[47px] text-center hover:shadow-service rounded-[20px] duration-300 hover:scale-105 hover:translate-y-2">
            <img src={Digital} alt="" className='mx-auto pb-[40px]' />
            <h3 className='font-inter font-bold text-[#151515] text-[25px] pb-[20px]'>Digital Marketing</h3>
            <p className='font-inter font-normal text-[#737373] text-[16px] leading-[26px] max-w-[326px] mx-auto' >There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look.</p>
          </div>

        </div>
      </div>
    </section>
    </>
  )
}

export default Service