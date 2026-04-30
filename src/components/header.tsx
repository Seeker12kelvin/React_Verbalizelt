import type { JSX } from "react"
import { MdOutlineMenu } from "react-icons/md";


const Header = (): JSX.Element => {

  const navItems = ['Service', 'Blog', 'About Us', 'Contact']

  return (
    <header className='flex items-center justify-between max-[767px]:py-5 max-[767px]:px-5 px-25 py-5'>

      <p className='text-2xl font-semibold'>Verbalizelt</p>

      <nav className='h-full max-[767px]:hidden'>

        <ul className='h-full flex items-center gap-5'>
          {navItems.map((data: string, index: number) => (
            <li key={index} className='text-sm'>{data}</li>
          ))}
        </ul>

      </nav>

      <button className='bg-[#ffd000] py-3 px-5 text-sm font-semibold rounded-4xl'>Register</button>

    </header>
  )
}

export default Header