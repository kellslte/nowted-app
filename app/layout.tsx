import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nowted Notepad | Keep all your ideas in one place",
  description:
    "Nowted Notepad is your ultimate digital companion for organizing and capturing all your thoughts and ideas in one convenient place. With its intuitive interface and seamless syncing across devices, Nowted Notepad ensures that no idea is ever lost. Whether you're jotting down notes, drafting creative concepts, or outlining projects, Nowted Notepad provides the perfect platform to keep your inspiration flowing. Say goodbye to scattered thoughts and hello to streamlined productivity with Nowted Notepad",
  icons: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
