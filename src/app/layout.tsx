import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://megagym.ng"),
  title: "MEGA GYM | Built By Discipline. Powered By You. - Ayobo, Lagos",
  description:
    "Mega Gym is a premier fitness centre located at 14 Camp Davies Rd, Ayobo, Lagos. Strength training, aerobics, boxing, cycling, HIIT, structured weekly programmes & dedicated coaching.",
  keywords: [
    "Mega Gym Ayobo",
    "Gym in Ayobo Lagos",
    "Fitness Centre Ayobo",
    "Gym Lagos Nigeria",
    "Boxing class Ayobo",
    "Strength training Lagos",
    "Fitness Coach Ayobo",
  ],
  openGraph: {
    title: "MEGA GYM — Ayobo, Lagos",
    description: "Built By Discipline. Powered By You. Modern fitness centre in Ayobo, Lagos.",
    url: "https://megagym.ng",
    siteName: "MEGA GYM",
    images: [
      {
        url: "/images/gym-interior.jpg",
        width: 1600,
        height: 840,
        alt: "Mega Gym Fitness Centre",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@300;400;500;600;700;800;900&family=Oswald:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#080808] text-[#F2F2F2] antialiased selection:bg-[#E5392F] selection:text-white">
        {children}
        <Analytics />
      </body>
    </html>
  );
}

