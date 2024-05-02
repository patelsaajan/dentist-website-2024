import WebsiteNav from "@/nav-bar/website-nav-bar";
import DentistThemeProvider from "@/theme";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Noto_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dentist Website",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <DentistThemeProvider>
      <html lang="en">
        <body className={inter.className} suppressHydrationWarning={true}>
          <WebsiteNav />
          {children}
        </body>
      </html>
    </DentistThemeProvider>
  );
}
