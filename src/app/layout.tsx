import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DocumentARM",
  description: "Documentação interativa de ARM Assembly",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex h-screen flex-col text-black`}>
        <Header />
        <div className="flex h-full w-screen bg-[#404040] p-10 pt-0">
          {children}
        </div>
      </body>
    </html>
  );
}
