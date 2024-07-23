import "./globals.css";

// const inter = Inter({ subsets: ["Tahoma"] });

export const metadata = {
  title: "Zen Transformations",
  description: "Property Investments & Developments",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
