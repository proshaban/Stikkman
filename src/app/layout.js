import { Poppins , Aleo , League_Spartan } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600"], // You can customize the weights you need
  display: "swap",
});

const aleo = Aleo({
  variable: "--font-aleo",
  subsets: ["latin"],
  weight: ["300","400", "700"],
  display: "swap",
});

const leagueSpartan = League_Spartan({
  variable :"--font-leagueSpartan",
  subsets:["latin"],
  weight:["200", "400" , "600", "700", "800"],
  display:"swap"
})

export const metadata = {
  title: "Stikkman UI",
  description: "Assignment Project for stikkman by Shaban Khan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${aleo.variable} antialiased bg-[var(--color-1)]`}
      >
        {children}
      </body>
    </html>
  );
}
