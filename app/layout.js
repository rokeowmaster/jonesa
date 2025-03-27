import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/cartContext";
import { ClerkProvider } from "@clerk/nextjs";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Jonesa Furniture",
  description: "Jonesa Furniture is a furniture store.",
};

export default function RootLayout({ children }) {
  return (
    // <ClerkProvider publishableKey="pk_test_cHJvYmFibGUtZGFuZS05Mi5jbGVyay5hY2NvdW50cy5kZXYk">
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
       <CartProvider>{children}</CartProvider> 
      </body>
    </html>
    {/* </ClerkProvider> */}
  );
}
