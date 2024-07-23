import TextAndImageSection from "./common/TextAndImageSection";
import theme from "@/styles/theme";

const AboutSection = () => {
  return (
    <TextAndImageSection
      markdownFilePath="AboutSection.md"
      imgSrc="/homepage/about-eliza.jpeg"
      imgAlt="Eliza Veretilo"
      imagePosition="right"
      bgColor={theme.colors.bgSecondary}
    />
  );
};

export default AboutSection;
