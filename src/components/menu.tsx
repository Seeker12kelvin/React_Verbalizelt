import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { IoCloseSharp } from "react-icons/io5";
import { type JSX, type RefObject, type Dispatch, type SetStateAction } from "react"

type Props = {
  menuBarRef: RefObject<HTMLElement | null>
  setMenuBtn: Dispatch<SetStateAction<boolean>>
  navBarItems: string[]
}

const Menu = ({menuBarRef, setMenuBtn, navBarItems}: Props): JSX.Element | null | undefined => {

  useGSAP(() => {
    const menuElement = menuBarRef.current
    if (!menuElement) return

    gsap.set(menuElement, {xPercent: -100})
    gsap.to(menuElement, {xPercent: 0, duration: 0.5, ease: "power2.out"})

    return () => {
      gsap.killTweensOf(menuElement)
    }
  }, [menuBarRef])

  const handleCloseMenu = (): void => {
    gsap.to(menuBarRef.current, {
      xPercent: 100,
      duration: 0.5,
      ease: "power2.out",
      onComplete: (): void => setMenuBtn(false)
    })
  }


  return (
    <aside ref={menuBarRef} className="w-screen h-screen bg-[#e1e7f73b] backdrop-blur-3xl fixed top-0 left-0 z-50 flex flex-col items-center gap-10">
      
      <button onClick={(): void => handleCloseMenu()}>
        <IoCloseSharp size={54} className='cursor-pointer' />
      </button>
      
      <nav className="w-full h-full">

        <ul className='w-full h-full flex flex-col gap-7 text-xl items-center tracking-widest'>
          {navBarItems.map((data: string, index: number) => (
            <li key={index}>
              <a href="#" className={`${index < navBarItems.length - 2 ? 'font-normal' : 'font-normal'}`}>{data}</a>
            </li>
          ))}
        </ul>

      </nav>

    </aside>
  )
}

export default Menu