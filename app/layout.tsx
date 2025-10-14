import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Coworking Space - Collaboration Tools",
  description: "Collaboration applets for members of the coworking space",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
