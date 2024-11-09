import type { Metadata } from "next";
import { Inter, Arima } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import WhatsAppBtn from '../components/WhatsAppBtn'
import PhoneBtn from '../components/PhoneBtn'

const inter = Inter({ subsets: ["latin"] });
const arima = Arima({subsets: ["latin"]})

export const metadata: Metadata = {
  
  title: "معلم سيراميك ورخام في الرياض | تركيب سيراميك | تركيب رخام | اتصل الان 0570250049 | تركيب ارضيات سيراميك ",
  description: "خبرة اكثر من 10 سنوات في مجال تركيبات السيراميك والرخام، للتواصل الاتصال علي +966570250049",
   keywords: ["ارضيات سيراميك","ارضيات رخام","تركيب رخام","تركيب سيراميك","فني تركيب سيراميك","بلاط","رخام",'سيراميك',"معلم سيراميك بالرياض","معلم رخام بالرياض","فني سيراميك و رخام","الرياض","رخام و سيراميك", '+966570250049', '966570250049', "تركيب ارضيات سيراميك", "تركيب سيراميك حمامات", "تركيب جميع انواع الرخام"],
   openGraph: {
    title: "معلم سيراميك ورخام في الرياض",
  description: "خبرة اكثر من 10 سنوات في مجال تركيبات السيراميك والرخام، للتواصل الاتصال علي +966570250049",
  phoneNumbers:'+966570250049',
  siteName: "معلم سيراميك ورخام في الرياض",
  tags: ["ارضيات سيراميك","ارضيات رخام","تركيب رخام","تركيب سيراميك","فني تركيب سيراميك","بلاط","رخام",'سيراميك',"معلم سيراميك بالرياض","معلم رخام بالرياض","فني سيراميك و رخام","الرياض","رخام و سيراميك", '+966570250049', '966570250049'],
   
   },
   formatDetection: {telephone: true},
   robots: {index: true, follow: true},
   referrer: 'origin',
   verification: {
    google: 'pX1I5YnTn2oW9La3K0exIwQ9vhs1ND_13OYq4vSyvXM',
    
   }
};
/**<meta name="google-site-verification" 
 * content="pX1I5YnTn2oW9La3K0exIwQ9vhs1ND_13OYq4vSyvXM" /> */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className='scroll-smooth'
    style={{scrollBehavior:'smooth', position: 'relative'}}>
      <body className={arima.className}>
      <SpeedInsights/>
      <Analytics/>
        {children}
        <WhatsAppBtn />
        <PhoneBtn />
        <footer className='w-full p-5 text-center bg-gray-700 text-white'>
        <span>all copyright ©️ are received</span>
        </footer>
        </body>
    </html>
  );
}
