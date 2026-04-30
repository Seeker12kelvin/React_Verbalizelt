import type { JSX } from "react"
import map_image from '../images/Component 138.png'

type Proofs = {
  number: string,
  text: string
}

const LearnSection = (): JSX.Element => {

  const proof: Proofs[] = [
    {
      number: '4.5k+',
      text: 'Daily register from new users'
    },
    {
      number: '1.5k+',
      text: 'Language in the world'
    },
    {
      number: '1000+',
      text: 'Total learners in the world'
    }
  ]

  return (
    <section className="text-center flex flex-col gap-20 max-[767px]:py-10 max-[767px]:px-5 max-[1200px]:px-10 max-[1200px]:pt-10 px-25 py-20">

      <div className="flex flex-col gap-5 max-[767px]:flex-col max-[767px]:gap-5 max-[767px]:text-center">

        <h2 className='min-[767px]:text-5xl max-[767px]:text-3xl font-semibold w-full'>Learn a new language the fun way</h2>

        <p className="text-lg tracking-wide font-light">Reach your language goals fast with ths worlds #1 education app</p>

      </div>

      <img src={map_image} alt="A map" className="min-[1200px]:h-150 object-cover w-full"/>

      <div className="w-full flex max-[767px]:flex-wrap max-[767px]:justify-center max-[767px]:gap-5 justify-between items-center">
        {proof.map((data: Proofs, index: number) => (
          <div key={index} className="flex flex-col items-center gap-3">

            <h3 className="scale-300 font-semibold">{data.number}</h3>

            <p className='text-sm tracking-wide font-light'>{data.text}</p>

          </div>
        ))}
      </div>

    </section>
  )
}

export default LearnSection