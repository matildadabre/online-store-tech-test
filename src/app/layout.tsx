import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/PageHeader";
import Footer from "@/components/PageFooter";
import { ModalProvider } from "@/contexts/modal/modal-context";

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
        <ModalProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ModalProvider>
      </body>
    </html>
  );
}
