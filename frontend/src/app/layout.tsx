import "../styles/globals.scss";
import type { Metadata } from "next";

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
      <body>{children}</body>
    </html>
  );
}
