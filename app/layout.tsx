import type { Metadata } from "next";
import { Roboto, Amatic_SC, Petit_Formal_Script } from "next/font/google";
import "./globals.css";
import Header from "@/components/header"

const roboto = Roboto({
  weight: ['400', '500', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

const amaticsc = Amatic_SC({
  weight: ['400', '700'],
})

const petitformalscript = Petit_Formal_Script({
  weight: ['400'],
})


export const metadata: Metadata = {
  title: "My portfolio",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className}`}
      >
      <Header />
      {children}
      </body>
    </html>
  );
}
