import type { JSX } from 'react'
import first_image from '../images/Group 466.png'
import second_image from '../images/Group 467.png'

const WhySection = (): JSX.Element => {
  return (
    <section className='flex flex-col max-[1001px]:items-center max-[1001px]:gap-0 gap-10 w-full max-w-screen max-[1101px]:py-10 max-[1101px]:px-5 px-25 py-20'>

      <div className='flex max-[1101px]:flex-col max-[767px]:gap-5 max-[1200px]:items-center max-[1101px]:gap-5 max-[1101px]:text-center justify-between w-full'>

        <h2 className='min-[767px]:text-5xl max-[767px]:text-3xl font-semibold max-w-150 w-full'>Why you'll love learning with Verbalizelt</h2>

        <p className='text-lg tracking-wide font-light max-w-100'>Reach your goals your way with features designed for the fastest, most fun way to learn a language.</p>

      </div>

      <div className='w-full flex max-[1101px]:flex-wrap max-[1101px]:gap-10 justify-between'>

        <img src={first_image} alt='A picture of a phone' className='max-h-145 object-contain' />

        <img src={second_image} alt='A picture of a phone' className='max-h-145 object-contain' />
        
      </div>

    </section>
  )
}

export default WhySection