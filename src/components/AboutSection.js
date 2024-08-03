import TextAndImageSection from "./common/TextAndImageSection";
import theme from "@/styles/theme";

const AboutSection = () => {
  return (
    <TextAndImageSection
      markdownFilePath="AboutSection.md"
      imgSrc="/homepage/about.jpg"
      imgAlt="about"
      imagePosition="left"
      bgColor={theme.colors.bgSecondary}
      className="mt-20"
    />
  );
};

export default AboutSection;
