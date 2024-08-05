import Image from "next/image";
import { HERO_SUBHEADING } from "@/lib/constants";

export default function HeroSection() {
  return (
    <div className="relative hero-bg bg-cover bg-center h-screen flex flex-col items-center justify-center">
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative text-center text-white px-4 flex flex-col items-center justify-center h-full">
        <div className="absolute top-1/4 transform -translate-y-1/2">
          <div className="relative w-48 h-48 lg:w-64 lg:h-64">
            <Image
              src="/logo.svg"
              alt="logo"
              layout="fill"
              objectFit="contain"
              className="img-shadow responsive-image"
            />
          </div>
        </div>
        <div className="relative flex flex-col items-center justify-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-shadow mt-4">
            Zen Transformations
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mt-4 text-shadow">
            {HERO_SUBHEADING}
          </p>
        </div>
      </div>
    </div>
  );
}
