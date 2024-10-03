import React from "react";
import localFont from "next/font/local";

// Use the same fonts as in the root layout or define new ones if needed
const geistSans = localFont({
  src: "../fonts/GeistVF.woff", 
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff", 
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function MyBucketLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex flex-col min-h-screen">
          

          <main className="flex-grow">
            {children}
          </main>

         
        </div>
      </body>
    </html>
  );
}