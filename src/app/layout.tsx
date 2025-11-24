import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClientEffects } from "@/components/ClientEffects";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Dhanesh Shingade | Portfolio",
  description: "A portfolio of my software development projects.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        <ClientEffects>
          {children}
        </ClientEffects>
      </body>
    </html>
  );
}