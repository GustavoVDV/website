import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Promarcas | Protección de Marcas y Propiedad Intelectual",
  description: "Expertos en el registro y defensa de activos intangibles en el Perú y el mundo.",
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
