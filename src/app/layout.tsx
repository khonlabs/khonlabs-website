import type { Metadata } from "next";
import { Prompt, Tinos } from "next/font/google";
import "./globals.css";

const prompt = Prompt({
  subsets: ['latin'],
  preload: true,
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const tinos = Tinos({
  subsets: ['latin'],
  preload: true,
  weight: ['400', '700']
});

export const metadata: Metadata = {
  title: "KHON LABS",
  description: "KHON LABS (คน แล็บส์), Let's make new things.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body
        className={`${tinos.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
