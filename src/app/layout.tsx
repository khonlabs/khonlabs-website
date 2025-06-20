import type { Metadata } from "next";
import { Trirong } from "next/font/google";
import "./globals.css";

const trirong = Trirong({
  subsets: ['latin'],
  preload: true,
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
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
        className={`${trirong.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
