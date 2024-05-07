import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import News from "@/components/News";
import SessionWrapper from "@/components/SessionWrapper";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "X clone",
  description: "A clone of X website built with Next.js and Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <SessionWrapper>
      <html lang="en">
        <body className={inter.className}>
          <div className="flex justify-between mx-auto max-w-6xl">
            <div className="hidden sm:inline border-r h-screen">
              <Sidebar />
            </div>
            <div>{children}</div>
            <div className="hidden lg:flex lg:flex-col h-screen p-3 border-l w-[24rem]">
              <div className="sticy top-0 bg-white py-2">
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-gray-100 border-gray-200 rounded-3xl text-sm w-full px-4 py-2" />
              </div>
              <News />
            </div>
          </div>

        </body>
      </html>
    </SessionWrapper>
  );
}
