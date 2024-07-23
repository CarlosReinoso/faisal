import TextAndImageSection from "./common/TextAndImageSection";

export default function PaintingsSection() {
  return (
    <TextAndImageSection
      markdownFilePath="PaintingsSection.md"
      imgSrc="/homepage/paintings-section.jpg"
      imgAlt="Paintings"
      bgColor="bg-beige"
      fontColor="text-black"
      imagePosition="left"
      buttonText="View Paintings"
      buttonUrl="/paintings"
    />
  );
}
