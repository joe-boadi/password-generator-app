import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "../app/Styles/styles.module.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Password Generator App",
  description: "Generate password with ease",
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
