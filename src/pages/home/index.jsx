import { Link } from "react-router-dom";
import { DefaultTemplate, BannerSection, AboutSection, StackSection, ProjectSection } from "../../components";
export const HomePage = () => {
  return (
    <DefaultTemplate>
      <div>
        <BannerSection/>
        <AboutSection />
        <StackSection />
        <ProjectSection />
      </div>
    </DefaultTemplate>
  );
};
