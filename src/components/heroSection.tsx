import { type JSX } from 'react'
import phone_image from '../images/mobile.png'
import visa_image from '../images/visalogo.png'
import linkeldin_image from '../images/linkedinlogo.png'
import spotify_image from '../images/spotifylogo.png'
import zoom_image from '../images/zoomlogo.png'
import studentOne_image from '../images/Ellipse 252.png'
import studentTwo_image from '../images/Ellipse 248.png'
import studentThree_image from '../images/Ellipse 251.png'
import studentFour_image from '../images/Ellipse 250.png'
import studentNumber_image from '../images/Group 464.png'

const HeroSection = (): JSX.Element => {

  const logoImages = [visa_image, spotify_image, linkeldin_image, zoom_image]
  const students = [studentOne_image, studentTwo_image, studentThree_image, studentFour_image, studentNumber_image]

  return (
    <section className='max-w-screen w-full h-full flex flex-col items-center gap-10 max-[767px]:py-5 max-[767px]:px-5 max-[1002px]:px-10 max-[1002px]:pt-10 max-[1200px]:px-10 max-[1400px]:py-10 px-25 pt-20 pb-10 border-b-2 border-[#0000005a]'>

      <div className='h-full w-full flex max-[1200px]:flex-col max-[767px]:gap-10 max-[1400px]:gap-15 items-center'>

        <div className='h-full flex flex-col gap-5 max-[379px]:text-center max-[1200px]:items-center max-[1400px]:text-center'>

          <h1 className='max-[379px]:text-4xl max-[379px]:text-wrap min-[1200px]:text-[80px] max-[767px]:text-5xl max-[379px]:leading-10 max-[767px]:leading-15 max-[1200px]:text-7xl font-semibold max-[1002px]:max-w-full leading-25'>We make you learn language easily!</h1>

          <p className='max-[379px]:text-sm text-lg tracking-wide font-light max-w-130'>We help you learn language easily, with small lessons, you'll earn points and new levels while improving your real world communications.</p>

          <form onSubmit={(e: React.SubmitEvent<HTMLFormElement>): void => e.preventDefault()} className='min-[767px]:h-12.5 max-[767px]:h-fit flex max-[476px]:flex-col max-[1200px]:justify-center gap-3 items-center w-full'>

            <input
              placeholder='Enter your email'
              className='border-none outline-none bg-[#8080803c] rounded-4xl max-[1002px]:max-w-80 max-w-75 w-full p-5 h-full'
            />

            <button className='bg-[#ffd000] h-full max-[767px]:py-4 max-[767px]:px-6 px-5 text-sm font-semibold rounded-4xl'>Get Started</button>

          </form>

        </div>

        <img src={phone_image} alt='A picture of two phones' className='max-h-145 w-full object-contain' />

      </div>

      <div className='w-full flex max-[767px]:flex-col max-[767px]:gap-5 justify-between items-center'>

        <div className='flex items-center justify-between relative'>
          
          {students.map((data: string, index: number) => (
            <img key={index} src={data} className={`h-10 object-cover hover:animate-bounce`} alt='A picture of avatar'/>
          ))}

        </div>

        <div className='flex items-center gap-10 max-[767px]:flex-wrap max-[767px]:justify-center max-[767px]:hidden'>

          {logoImages.map((data: string, index: number) => (
            <img key={index} src={data} className='h-8 max-[1002px]:h-5 object-cover max-[767px]:shrink-0' alt='A picture of a companies logo'/>
          ))}

        </div>

      </div>

    </section>
  )
}

export default HeroSection