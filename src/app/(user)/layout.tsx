import type { Metadata } from "next";
import "../../styles/globals.css";
import { Poppins } from "next/font/google";
import Navbar from "@/components/Navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});
// 300: font-light
// 400: font-normal
// 500: font-medium
// 600: font-semibold
// 700: font-bold

export const metadata: Metadata = {
  title: "Digital Store",
  description: "E-commerce next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
