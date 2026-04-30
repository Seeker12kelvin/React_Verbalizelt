import type { JSX } from "react"
import HeroSection from "../components/heroSection"
import Header from "../components/header"
import WhySection from "../components/whySection"
import LearnSection from "../components/LearnSection"
import Banner from "../components/Banner"


const LandingPage = (): JSX.Element => {
  return (
    <main className="h-full w-full overflow-hidden">

      <Header />

      <HeroSection />

      <WhySection />

      <LearnSection />

      <Banner />

    </main>
  )
}

export default LandingPage