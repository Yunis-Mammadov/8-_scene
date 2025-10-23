import "./globals.css";
import { Tomorrow } from "next/font/google";
import Navbar from "./components/Navbar";

// Tomorrow fontunu yükləyirik və variable təyin edirik
const tomorrow = Tomorrow({
  subsets: ["latin"],
  weight: ["700", "900"], // istədiyin ağırlıqlar
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={tomorrow.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
