"use client";

import ScrollProgressBar from "@/components/ScrollProgressBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Toaster } from 'react-hot-toast';

export function ClientEffects({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Toaster position="top-center" />
      <ScrollProgressBar />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}