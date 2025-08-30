import ContributionsGithub from "../components/ContributionsGithub";
import Experience from "../components/Experience";
import ReachOut from "../components/ReachOut";
import RecentContributions from "../components/RecentContributions";
import TechStack from "../components/TechStackcarousal";
import TopBanner from "../components/TopBanner";

const MainSection = () => {
  return (
    <div className="md:max-w-4xl w-full flex flex-col justify-center mx-auto px-7 border border-zinc-900 diagonal-stripes">
      <TopBanner />
      <Experience />
      <ContributionsGithub username="DevPatel1023" variant="compact" />
      <TechStack />
      <RecentContributions />
      <ReachOut title="Let's connect" subtitle="Find me on these platforms" />
    </div>
  );
};

export default MainSection;
