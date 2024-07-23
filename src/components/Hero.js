import "../styles/hero.css";

export default function Hero() {
  return (
    <div className="relative hero-bg bg-cover bg-center h-screen flex items-center justify-center">
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="relative text-center text-white px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-shadow">
          Eliza Veretilo
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mt-4 text-shadow">
          Art | Astrology | Transformation
        </p>
      </div>
    </div>
  );
}
