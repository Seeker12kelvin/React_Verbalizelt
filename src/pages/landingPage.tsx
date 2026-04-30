import Menu from "../components/menu"
import Banner from "../components/Banner"
import Header from "../components/header"
import WhySection from "../components/whySection"
import { useRef, useState, type JSX } from "react"
import HeroSection from "../components/heroSection"
import LearnSection from "../components/LearnSection"


const LandingPage = (): JSX.Element => {

  const navbarItems = ['Service', 'Blog', 'About Us', 'Contact']
  const menuBarRef = useRef<HTMLElement | null>(null)
  const [menuBtn, setMenuBtn] = useState<boolean>(false)

  const handleMenu = (): void => {
    setMenuBtn(true)
  }
  
  return (
    <main className="h-full w-full">

      <Header handleMenu={handleMenu}/>
      
      {menuBtn && <Menu menuBarRef={menuBarRef} navBarItems={navbarItems} setMenuBtn={setMenuBtn}/>}

      <HeroSection />

      <WhySection />

      <LearnSection />

      <Banner />

    </main>
  )
}

export default LandingPage