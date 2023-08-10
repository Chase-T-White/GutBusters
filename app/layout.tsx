import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import QueryWrapper from "./components/QueryWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GutBusters",
  description: "App to find new recipes",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryWrapper>{children}</QueryWrapper>
      </body>
    </html>
  );
}
