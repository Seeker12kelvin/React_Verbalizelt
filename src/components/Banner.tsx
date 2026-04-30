import { type JSX } from 'react'

const Banner = (): JSX.Element => {
  return (
    <section className='bg-[#ffd000] w-full flex flex-col items-center gap-5 px-25 py-20'>

      <h2 className='text-5xl font-semibold max-w-150'>Learn a new language for free download app Now!</h2>

      <div className='w-full flex justify-center items-center gap-3'>

        <button className='h-15 w-30 bg-[black] rounded-4xl border-white border-3' />

        <button className='h-15 w-30 bg-[black] rounded-4xl border-white border-3' />

      </div>

    </section>
  )
}

export default Banner