import type { JSX } from "react"
import { MdOutlineMenu } from "react-icons/md";

type Props = {
  handleMenu: () => void
}

const Header = ({handleMenu}: Props): JSX.Element => {

  const navItems = ['Service', 'Blog', 'About Us', 'Contact']

  return (
    <header className='max-w-screen w-full flex items-center justify-between max-[376px]:p-2 max-[767px]:p-5 max-[1002px]:px-10 px-25 py-5'>

      <p className='max-[376px]:text-lg text-2xl font-semibold'>Verbalizelt</p>

      <nav className='h-full max-[680px]:hidden'>

        <ul className='h-full flex items-center gap-5'>
          {navItems.map((data: string, index: number) => (
            <li key={index} className='text-sm'>{data}</li>
          ))}
        </ul>

      </nav>

      <div className="flex items-center gap-2">

        <button className='bg-[#ffd000] py-3 px-5 text-sm font-semibold rounded-4xl'>Register</button>

        <button onClick={(): void => handleMenu()} className='min-[680px]:hidden'>
          <MdOutlineMenu size={34} />
        </button>
      
      </div>

    </header>
  )
}

export default Header