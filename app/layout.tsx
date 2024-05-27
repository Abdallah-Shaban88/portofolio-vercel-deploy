import type { Metadata } from "next";
import { Inter, Arima } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ["latin"] });
const arima = Arima({subsets: ["latin"]})

export const metadata: Metadata = {
  title: "معلم سيراميك ورخام في الرياض",
  description: "خبرة اكثر من 10 سنوات في مجال تركيبات السيراميك والرخام، للتواصل من داخل الرياض او من خارجها الاتصال علي +966533108772",
   keywords: ["ارضيات سيراميك","ارضيات رخام","تركيب رخام","تركيب سيراميك","فني تركيب سيراميك","بلاط","رخام",'سيراميك',"معلم سيراميك بالرياض","معلم رخام بالرياض","فني سيراميك و رخام","الرياض","رخام و سيراميك", '+966533108772', '966533108772'],
   openGraph: {
    title: "معلم سيراميك ورخام في الرياض",
  description: "خبرة اكثر من 10 سنوات في مجال تركيبات السيراميك والرخام، للتواصل من داخل الرياض او من خارجها الاتصال علي +966533108772",
  phoneNumbers:'+966533108772',
  siteName: "معلم سيراميك ورخام في الرياض",
  tags: ["ارضيات سيراميك","ارضيات رخام","تركيب رخام","تركيب سيراميك","فني تركيب سيراميك","بلاط","رخام",'سيراميك',"معلم سيراميك بالرياض","معلم رخام بالرياض","فني سيراميك و رخام","الرياض","رخام و سيراميك", '+966533108772', '966533108772'],
  
   },
   formatDetection: {telephone: true},
   robots: {index: true, follow: true},
   referrer: 'origin',
  verification: {
    google: 'pX1I5YnTn2oW9La3K0exIwQ9vhs1ND_13OYq4vSyvXM'
   }
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
