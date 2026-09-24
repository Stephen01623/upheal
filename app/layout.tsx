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

        {/* 🔝 NAVBAR (GLOBAL) */}
        <Header />

        {/* 🔄 PAGE CONTENT */}
        <main>{children}</main>

        {/* 🔻 FOOTER (GLOBAL) */}
        <Footer />

      </body>
    </html>
  );
}