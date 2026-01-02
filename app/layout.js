import {  Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-Provider";
import { Toaster } from "sonner";
import FloatingShapes from "@/components/floating-shapes";

export const metadata = {
  title: "Pixcraft",
  description: " AI Image Editor",
};
 const inter = Inter({subsets: ['latin']});
export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} `}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {/* <Header/> */}
          <main className="bg-slate-900 min-h-[2000px] text-white overflow-x-hidden">
          <FloatingShapes/>
          <Toaster richColors />
          {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
