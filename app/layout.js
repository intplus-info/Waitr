import { Inter } from "next/font/google";
import "./globals.css";
import {Montserrat} from 'next/font/google'

const inter = Inter({ subsets: ["latin"] });
const montserrat_init = Montserrat({
  subsets:['latin'],
  weight:['400','600','700'],
  variable:'--font-montserrat'
})

export const metadata = {
  title: "Waitr - Scan to Order System for Restaurants & Hotels",
  description: "Generated by create next app",
  icons:{
    icon:['/favicon.ico?=4'],
    apple:['/apple-touch-icon.png?v=4'],
    shortcut:['/apple-touch-icon.png']
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat_init.variable}>
       
        {children}
        
      </body>
    </html>
  );
}
