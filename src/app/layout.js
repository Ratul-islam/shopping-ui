import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Minimal shopping Ui",
  description: "Shopping you design",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-cyan-900 h-screen flex justify-center items-center`}
      >
        <main className="overflow-hidden relative  flex p-4 flex-col aspect-phone w-72 rounded-lg bg-gradient">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
