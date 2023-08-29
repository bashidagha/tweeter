import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tweeter",
  description: "Base of devChallenge.io",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.svg" sizes="any" />
        <link rel="icon" href="/logo.svg" type="image/svg" sizes="any" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
