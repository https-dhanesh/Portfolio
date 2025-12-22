import { Inter } from "next/font/google";
import "./globals.css";
import { ClientEffects } from "@/components/ClientEffects";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Dhanesh Shingade | Portfolio",
  description: "A portfolio of my software development projects.",
  icons: {
    icon: [
      { url: "/favicon.png" },
      { url: "/favicon-32x32.png" },
      { url: "/favicon-16x16.png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.png" sizes="any" />
      </head>
      <body className="antialiased">
        <ClientEffects>
          {children}
        </ClientEffects>
      </body>
    </html>
  );
}