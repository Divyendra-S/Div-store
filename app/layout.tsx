import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import CartProvider from "@/components/provider";
import ShoppingCartModal from "@/components/ShoppingCartModal";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <div className=" min-h-screen bg-neutral-900">
            <Navbar />
            <ShoppingCartModal/>
            {children}
            <Footer/>
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
