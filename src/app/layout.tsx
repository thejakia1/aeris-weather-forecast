import type { Metadata } from "next";
import "/src/styles/globals.css";

export const metadata: Metadata = {
  title: "Aeris Weather Forecast",
  description: "Aeris is a weather forecast app, developed by Jakia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
