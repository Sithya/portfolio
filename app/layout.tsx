import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ry Kunsithya - Portfolio | Aspiring Software Engineer",
  description:
    "Computer Science student passionate about creating innovative solutions and building the future through code. Specializing in full-stack development and modern web technologies.",
  keywords:
    "software engineer, computer science, full-stack developer, React, Node.js, portfolio",
  authors: [{ name: "Ry Kusithya" }],
  creator: "Ry Kunsithya",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rykunsithya.dev",
    title: "Ry Kunsithya - Portfolio",
    description: "Aspiring Software Engineer | Computer Science Student",
    siteName: "Ry Kunsithya - Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ry Kunsithya - Portfolio",
    description: "Aspiring Software Engineer | Computer Science Student",
    creator: "@rykunsithya",
  },
  robots: {
    index: true,
    follow: true,
  },
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
