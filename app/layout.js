// فایل: app/layout.jsx
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer"
import Type from "@/components/Type";

export const metadata = {
  title: "ایوا",
  description: "بسته اینترنتی ایوا",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className="flex flex-col h-screen bg-white text-gray-900">
        <Header />
        <Type/>
        <main className="flex-1 overflow-y-auto">{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
