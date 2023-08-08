import desktopDark from '../assets/bg-desktop-dark.jpg';
import desktopLight from '../assets/bg-desktop-light.jpg'
import mobileDark from '../assets/bg-mobile-dark.jpg'
import mobileLight from '../assets/bg-mobile-light.jpg'

const Underlay = () => {
    var srcst1 = desktopDark + ' 1024w, ' + mobileDark + ' 375w'
    var size = "(min-width: 1024px) 1024px, 375px"
  return (
    <div className='h-[100svh]'>
      <div>
        <img src={desktopDark} alt="Fine backgroud" sizes={size} srcSet={srcst1}/>
      </div>
      <div className='bg-gray-800 h-[70vh]'>
        <div className=' w-[90%] mx-auto fixed top-20 left-5'>
            <div>
                <h1 className='text-4xl text-white font-extrabold'>T O D O</h1>
            </div>
            <div></div>
        </div>
      </div>
    </div>
  )
}

export default Underlay
