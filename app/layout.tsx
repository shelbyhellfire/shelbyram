import { Footer } from "@/components/layout/footer";
import { Navigation } from "@/components/layout/navigation";
import { ScrollToTop } from "@/components/providers/scroll-to-top";
import { ThemeProvider } from "@/components/providers/theme-provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shelby Ramseth - UX Frontend Developer",
  description:
    "UX Frontend Developer specializing in component libraries, design systems, and bridging the gap between design and code.",
  keywords: [
    "UX Developer",
    "Frontend Developer",
    "Design Systems",
    "Component Libraries",
    "React",
    "Next.js",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ScrollToTop />
          <Navigation />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
