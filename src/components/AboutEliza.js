import TextAndImageSection from "./common/TextAndImageSection";
import theme from "@/styles/theme";

const AboutEliza = () => {
  return (
    <TextAndImageSection
      markdownFilePath="AboutEliza.md"
      imgSrc="/homepage/about-eliza.jpeg"
      imgAlt="Eliza Veretilo"
      imagePosition="right"
      bgColor={theme.colors.bgSecondary}
    />
  );
};

export default AboutEliza;
