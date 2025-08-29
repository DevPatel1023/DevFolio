import ContributionsGithub from "../components/ContributionsGithub"
import Experience from "../components/Experience"
import TopBanner from "../components/TopBanner"

const MainSection = () => {
  return (
    <div className="md:w-4xl w-full flex flex-col justify-center mx-auto px-7 border border-zinc-900 diagonal-stripes">
        {/* top banner */}
        <TopBanner />
        <Experience />
        <ContributionsGithub username="DevPatel1023" 
        />
    </div>
  )
}

export default MainSection
