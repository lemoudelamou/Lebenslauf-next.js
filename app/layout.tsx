
import type { Metadata } from "next"
import { ThemeProvider } from "next-themes"; 
//@ts-ignore
import "./globals.css";

export const metadata: Metadata = {
  title: "Mourad Daghar | Software Developer",
  description:
    "Lebenslauf von Mourad Daghar – Softwareentwicklung, Medieninformatik, Webentwicklung und Machine Learning.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
     <html lang="de" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="system"
          enableSystem
          storageKey="theme"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}