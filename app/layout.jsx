import "./globals.css";
import Footer from "@/components/Footer";
import TopLayout from "@/components/TopLayout";

export const metadata = {
  title: "ایوا",
  description: "بسته اینترنتی ایوا",
  icons: {
    icon: "/assets/header/logo.svg",  
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className="flex flex-col h-screen bg-white text-gray-900">
        {/*tab and hedear*/}
        <TopLayout />

        {/* can scroll*/}
        <main className="flex-1 overflow-y-auto px-4 sm:px-6 md:px-10 bg-white rounded-b-xl">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
