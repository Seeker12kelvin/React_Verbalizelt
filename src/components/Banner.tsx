import { type JSX } from 'react'

const Banner = (): JSX.Element => {
  return (
    <section className='bg-[#ffd000] w-full flex flex-col items-center gap-5 max-[767px]:py-10 max-[767px]:px-5 py-20 text-center'>

      <h2 className='min-[767px]:text-5xl max-[767px]:text-3xl font-semibold max-w-150'>Learn a new language for free download app Now!</h2>

      <div className='w-full flex justify-center items-center gap-3'>

        <button className='h-15 w-30 bg-[black] rounded-4xl border-white border-3' />

        <button className='h-15 w-30 bg-[black] rounded-4xl border-white border-3' />

      </div>

    </section>
  )
}

export default Banner