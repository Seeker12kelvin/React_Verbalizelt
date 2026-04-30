import type { JSX } from "react"

type FooterItems = {
  rowOne: string,
  rowTwo: string,
  rowThree: string
}

const Footer = (): JSX.Element => {

  const footerItems = [
    {rowOne: 'About Us', rowTwo: 'Service', rowThree: 'Blog'},
    {rowOne: 'Terms & conditions', rowTwo: 'Privacy and Policy', rowThree: 'Become a Partner'},
    {rowOne: 'Twitter', rowTwo: 'Facebook', rowThree: 'Instagram'}
  ]

  return (
    <footer className="w-full flex flex-col gap-10 items-center max-[767px]:py-10 max-[767px]:px-5 px-25 pt-20 pb-10 h-full">
      
      <div className="flex max-[767px]:flex-col max-[767px]:gap-10 max-[767px]:items-center justify-between items-start h-full w-full border-b-2 border-[#0000005a] max-[767px]:pb-10 min-[767px]:pb-20">

        <div className="flex flex-col min-[767px]:gap-5 max-[767px]:gap-3 h-full max-[767px]:">
          
          <h3 className="text-3xl font-semibold">Verbalizelt</h3>

          <p className="min-[767px]:max-w-73 w-full text-[1rem] tracking-wide font-light">Learning is a global training provider based across the UK that specialises in accrodited and bespoke training course.</p>

        </div>

        <div className="flex max-[767px]:flex-nowrap max-[767px]:items-start max-[767px]:gap-10 gap-20 items-center h-full">

          {footerItems.map((data: FooterItems, index: number) => (
            <div key={index} className="flex flex-col gap-10 h-full">

              <p className="w-full text-[1rem] tracking-wide font-light">{data.rowOne}</p>

              <p className="w-full text-[1rem] tracking-wide font-light">{data.rowTwo}</p>

              <p className="w-full text-[1rem] tracking-wide font-light">{data.rowThree}</p>

            </div>
          ))}

        </div>

      </div>

      <p className="text-[1rem] tracking-wide font-light">Privacy Policy Terms & Conditions Cookies Policy</p>

    </footer>
  )
}

export default Footer