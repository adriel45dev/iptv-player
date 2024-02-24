import type { Metadata, Viewport } from "next";
import { Inter, Figtree } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const figtree = Figtree({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const APP_NAME = "IPTV Player";
const APP_DEFAULT_TITLE = "IPTV Player";
const APP_TITLE_TEMPLATE = "%s - IPTV";
const APP_DESCRIPTION = "Ready to play and stream!";

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },

  icons: {
    icon: [
      "/favicon-16x16.png?v=4",
      "/favicon-32x32.png?v=4",
      "/favicon.ico?v=4",
      "/android-chrome-192x192.png?v=4",
      "/android-chrome-512x512.png?v=4",
      "/mstile-70x70.png?v=4",
      "/mstile-144x144.png?v=4",
      "/mstile-150x150.png?v=4",
      "/mstile-310x150.png?v=4",
      "/mstile-310x310.png?v=4",
    ],

    // Apple Touch Icons
    apple: ["/apple-touch-icon.png?v=4", "/safari-pinned-tab.svg?v=4"],
  },
};

export const viewport: Viewport = {
  themeColor: "#083344",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={figtree.className}>{children}</body>
    </html>
  );
}
