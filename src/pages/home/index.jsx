import { Link } from "react-router-dom";
import { DefaultTemplate, BannerSection, AboutSection, StackSection, ProjectSction } from "../../components";
export const HomePage = () => {
  return (
    <DefaultTemplate>
      <div>
        <BannerSection/>
        <AboutSection />
        <StackSection />
        <ProjectSction />
      </div>
    </DefaultTemplate>
  );
};
