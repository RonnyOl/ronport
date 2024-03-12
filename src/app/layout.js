import { Inter } from "next/font/google";
import "./globals.css";
import { Readex_Pro, League_Spartan, Metal} from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const readex_pro = Readex_Pro({ subsets: ["latin"], weight: ["400", "600"], variable: "--font-readex" });
const league_spartan = League_Spartan({subsets: ["latin"], weight: ["400", "600"], variable: "--font-league"})
const metal = Metal({subsets: ["latin"], weight: "400", variable: "--font-metal"})
export const metadata = {
  title: "Ronny's portfolio",
  description: "¡Welcome! look at my portfolio.",
  icons:  {
    icon: "/favicon.ico"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${readex_pro.variable} ${inter.variable} ${league_spartan.variable} ${metal.variable}`}>{children}</body>
    </html>
  );
}
