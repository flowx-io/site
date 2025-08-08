import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import { ReactNode } from "react";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";

import { routing } from "@/i18n/routing";
import "./globals.css";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "فلو إكس - ثورة رقمية تغيّر طريقة إدارة المؤسسات الخيرية",
    template: "%s | فلو إكس"
  },
  description: "فلو إكس يحول إدارة المؤسسات الخيرية من التعقيد إلى البساطة، مع زيادة التبرعات بنسبة 100% خلال 6 أشهر. النظام الأول من نوعه لإدارة المؤسسات الخيرية في العالم العربي من المغرب إلى العراق.",
  keywords: [
    "المؤسسات الخيرية",
    "إدارة التبرعات",
    "إدارة الجمعيات",
    "برامج خيرية",
    "العالم العربي",
    "التحول الرقمي",
    "إدارة المتبرعين",
    "منصة جمع التبرعات",
    "charitable organizations",
    "donation management",
    "nonprofit management"
  ],
  authors: [{ name: "فلو إكس" }],
  creator: "فلو إكس",
  publisher: "فلو إكس",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('http://flowxapp.com'),
  alternates: {
    canonical: "/",
    languages: {
      'ar': '/ar',
      'en': '/en',
    },
  },
  openGraph: {
    title: "فلو إكس - ثورة رقمية تغيّر طريقة إدارة المؤسسات الخيرية",
    description: "فلو إكس يحول إدارة المؤسسات الخيرية من التعقيد إلى البساطة، مع زيادة التبرعات بنسبة 100% خلال 6 أشهر. النظام الأول من نوعه لإدارة المؤسسات الخيرية في العالم العربي.",
    url: "/",
    siteName: "فلو إكس",
    images: [
      {
        url: "/assets/logo.png",
        width: 1200,
        height: 630,
        alt: "فلو إكس - ثورة رقمية تغيّر طريقة إدارة المؤسسات الخيرية",
      },
    ],
    locale: "ar_SA",
    alternateLocale: ["en_US"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "فلو إكس - ثورة رقمية تغيّر طريقة إدارة المؤسسات الخيرية",
    description: "فلو إكس يحول إدارة المؤسسات الخيرية من التعقيد إلى البساطة، مع زيادة التبرعات بنسبة 100% خلال 6 أشهر.",
    images: ["/assets/logo.png"],
    creator: "@flowx",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification tokens here when you have them
    // google: "your-google-verification-token",
    // yandex: "your-yandex-verification-token",
  },
  category: "technology",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }

  return (
    <html
      lang={locale}
      dir={locale === 'ar' ? 'rtl' : 'ltr'}
    >
      <body className={(cairo.className, "bg-white antialiased")}>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
