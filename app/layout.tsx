import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { sourceSans } from "@/fonts";
import { Toaster } from "@/components/ui/sonner";
import Provider from "@/components/auth/Provider";

export const metadata: Metadata = {
  title: "Nowted Notepad | Keep all your ideas in one place",
  description:
    "Nowted Notepad is your ultimate digital companion for organizing and capturing all your thoughts and ideas in one convenient place. With its intuitive interface and seamless syncing across devices, Nowted Notepad ensures that no idea is ever lost. Whether you're jotting down notes, drafting creative concepts, or outlining projects, Nowted Notepad provides the perfect platform to keep your inspiration flowing. Say goodbye to scattered thoughts and hello to streamlined productivity with Nowted Notepad",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={cn("h-full antialiased font-sans", sourceSans.className)}>
        <main className="min-h-screen">
          <Provider>
          <div className="flex-grow flex-1">{children}</div>
          </Provider>
        </main>
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
