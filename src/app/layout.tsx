import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/PageHeader";
import Footer from "@/components/PageFooter";
import { CartProvider } from "@/contexts/Cart/cartContext";
import { ModalProvider } from "@/contexts/Modal/modalContext";

export const metadata: Metadata = {
  title: "Demo Store",
  description: "Online store tech test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <ModalProvider>
            <Header />
            <main>{children}</main>
            <Footer />
          </ModalProvider>
        </CartProvider>
      </body>
    </html>
  );
}
