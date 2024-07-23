import "./globals.css";

// const inter = Inter({ subsets: ["Tahoma"] });

export const metadata = {
  title: "Faisal",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
