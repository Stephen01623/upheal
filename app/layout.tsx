import Header from "@/app/components/landing/Header";
import Footer from "@/app/components/landing/Footer";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>

        <Header />

  
        <main>{children}</main>


        <Footer />

      </body>
    </html>
  );
}