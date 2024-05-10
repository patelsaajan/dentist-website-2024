import SnackbarContext from "components/context/snackbar";
import NextAuthProvider from "components/next-auth";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import DentistThemeProvider from "theme";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Deesha Chudasama",
  description: "Personal Website for Deesha Chudasama",
  icons: [
    {
      rel: "favicon",
      url: "/favicon.ico",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <DentistThemeProvider>
      <NextAuthProvider>
        <html lang="en">
          <body className={inter.className} suppressHydrationWarning={true}>
            <SnackbarContext>{children}</SnackbarContext>
          </body>
        </html>
      </NextAuthProvider>
    </DentistThemeProvider>
  );
}
