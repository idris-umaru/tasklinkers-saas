import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "TaskLinkers",
  description: "Collaborative task management for small business teams.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth [scroll-behavior:smooth]">
      <body className="m-0 min-h-screen bg-[#f7f4ee] font-sans text-[#172033] [background-image:linear-gradient(180deg,_rgba(247,_244,_238,_0.92),_rgba(236,_241,_239,_0.95)),url(https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1800&q=80)] [background-attachment:fixed] [background-position:center_top] [background-size:cover]">
        {children}
      </body>
    </html>
  );
}
