import type { Metadata } from "next";
import { Inter, Arima } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ["latin"] });
const arima = Arima({subsets: ["latin"]})

export const metadata: Metadata = {
  title: "معلم سيراميك ورخام في الرياض",
  description: "خبرة اكثر من 10 سنوات في مجال تركيبات السيراميك والرخام",
   
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={arima.className}>
      <SpeedInsights/>
      <Analytics/>
        {children}
        </body>
    </html>
  );
}
