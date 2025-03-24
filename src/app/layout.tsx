"use client";
import Copyright from "@/components/global/copyright";
import "./globals.css";
import Rootprovider from "@/components/provider/rootProvider";
import Aos from "@/components/animation/aos";
import NextTopLoader from "nextjs-toploader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Aos />
      <html lang="en">
        <head>
          <link
            href="https://cdn.jsdelivr.net/npm/remixicon@4.5.0/fonts/remixicon.css"
            rel="stylesheet"
          />
        </head>
        <body suppressHydrationWarning className={` antialiased`}>
        <NextTopLoader color="#552DDE" showSpinner={false} />
          <Rootprovider>{children}</Rootprovider>
          <Copyright />
        </body>
      </html>
    </>
  );
}
