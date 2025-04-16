import HeroSection from "../Components/Common/Header/HeroSection"
import Projects from "../Components/Common/Projects"
import Skills from "../Components/Common/Skills"
import Footer from "../Components/Common/Footer"
const LandingPage = () => {
  return (
<>
<div className="flex flex-col ">
<HeroSection/>
<Projects/>
<Skills />
<Footer />
</div>
</>
  )
}

export default LandingPage
