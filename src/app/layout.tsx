import type { Metadata } from "next";
import { Syne, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/layout/SmoothScrollProvider";
import GlobalMeshBackground from "@/components/ui/GlobalMeshBackground";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Vishal Kumar | Penetration Tester & Offensive Security Practitioner",
  description:
    "Offensive Security professional specializing in penetration testing, VAPT, web & API security, and security automation. B.Tech CSE with hands-on experience in vulnerability assessment and exploitation.",
  keywords: [
    "Vishal Kumar",
    "Penetration Tester",
    "Offensive Security",
    "VAPT",
    "Web Application Security",
    "API Security",
    "Cybersecurity",
    "Security Automation",
    "Penetration Testing Portfolio",
  ],
  authors: [{ name: "Vishal Kumar" }],
  creator: "Vishal Kumar",
  openGraph: {
    type: "website",
    locale: "en_IN",
    title: "Vishal Kumar | Penetration Tester & Offensive Security Practitioner",
    description:
      "Offensive Security professional specializing in penetration testing, VAPT, web & API security, and security automation.",
    siteName: "Vishal Kumar — Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vishal Kumar | Penetration Tester & Offensive Security Practitioner",
    description:
      "Offensive Security professional specializing in penetration testing, VAPT, web & API security, and security automation.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-bg-primary text-text-secondary antialiased">
        <GlobalMeshBackground />
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
