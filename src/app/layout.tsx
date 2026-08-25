import Footer from "@/components/layout/footer";
import type { Metadata } from "next";
import { Young_Serif, Outfit } from "next/font/google";
import "./globals.css";

const youngSerif = Young_Serif({
  variable: "--font-young-serif",
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Recipe Page",
  description:
    "Frontend Mentor Recipe Page challenge built with Next.js and TypeScript.",
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/icon.png", type: "image/png" }],
    apple: [{ url: "/apple-icon.png" }],
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
      className={`${youngSerif.variable} ${outfit.variable} antialiased`}
    >
      <body className="flex min-h-dvh w-full flex-col items-center justify-center bg-white sm:bg-stone-100 sm:px-19">
        {children}
        <Footer />
      </body>
    </html>
  );
}
