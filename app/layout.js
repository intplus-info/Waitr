import { Inter } from "next/font/google";
import "./globals.css";
import {Montserrat} from 'next/font/google'
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
const inter = Inter({ subsets: ["latin"] });
const montserrat_init = Montserrat({
  subsets:['latin'],
  weight:['400','600','700'],
  variable:'--font-montserrat'
})

export const metadata = {
  title: "Waitr",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat_init.variable}>
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
