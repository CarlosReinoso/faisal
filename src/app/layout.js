import { HERO_SUBHEADING } from "@/lib/constants";
import "./globals.css";
import { Libre_Baskerville } from "@next/font/google";

const libreBaskerville = Libre_Baskerville({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Zen Transformations",
  description: HERO_SUBHEADING,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={libreBaskerville.className}>
      <body>{children}</body>
    </html>
  );
}
