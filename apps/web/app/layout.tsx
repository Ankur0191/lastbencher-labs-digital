import type { Metadata, Viewport } from "next";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { SmoothScroll } from "../components/SmoothScroll";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: process.env.NEXT_PUBLIC_SITE_URL ? new URL(process.env.NEXT_PUBLIC_SITE_URL) : undefined,
  title: {
    default: "The Last Bencher Labs Digital — Make the Difficult, Deliverable",
    template: "%s | The Last Bencher Labs Digital",
  },
  description: "A flexible business and digital partner for recruitment, software engineering, project delivery, contracts operations and market research.",
  openGraph: {
    title: "The Last Bencher Labs Digital",
    description: "If no one else can do it, we’ll find a way.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#f8f7f3",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <SmoothScroll>
          <SiteHeader />
          <main id="main-content" tabIndex={-1}>{children}</main>
          <SiteFooter />
        </SmoothScroll>
      </body>
    </html>
  );
}
