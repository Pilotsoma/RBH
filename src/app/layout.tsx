import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import { Toaster } from "react-hot-toast";
import Providers from "@/components/Providers";

const geist = Geist({ variable: "--font-sans", subsets: ["latin"] });
const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Royal Biryani House | Authentic Hyderabadi Cuisine – Katy, TX",
  description:
    "Order authentic Hyderabadi biryani, curries, and more online from Royal Biryani House in Katy, TX. Delivery and pickup available.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} ${playfair.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#FFFBF5]">
        <Providers>
          <Navbar />
          <CartDrawer />
          <Toaster
            position="bottom-right"
            toastOptions={{
              style: { fontFamily: "var(--font-sans)", fontSize: "14px" },
            }}
          />
          <main className="flex-1">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
