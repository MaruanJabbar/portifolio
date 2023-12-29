import { DefaultTemplate } from "../../components/defaultTemplate";
import { Link } from "react-router-dom";
import { AboutSection } from "../../components/aboutSection";


export const HomePage = () => {
  return (
    <DefaultTemplate>
      <div>
        <AboutSection />
      </div>
    </DefaultTemplate>
  );
};
