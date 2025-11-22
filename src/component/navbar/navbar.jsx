import logo from '../../assets/logo.png'
function Navbar(){
  return(
    <>
    <nav className='pt-[57px] absolute top-0 left-0 w-full z-10'>
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="logo">
            <a href="">
              <img className='max-w-[168px]' src={logo} alt="" />
            </a>
          </div>
          <div className="menu">
            <ul className='flex gap-[68px]'>
              <li><a href="">Home</a></li>
              <li><a href="">About</a></li>
              <li><a href="">Service</a></li>
              <li><a href="">Careers</a></li>
              <li><a href="">Contact</a></li>
            </ul>
          </div>
          <div className="btn">
            <a href="" className='bg-[#6A4DF4] font-inter font-semibold  text-[#FFFFFF]
            py-[15px] px-[42px] leading-[26px] rounded-[10px]'>Contact</a>
          </div>
        </div>
      </div>
    </nav>
    
    </>
  )
}
export default Navbar