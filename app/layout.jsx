
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer"
import Tab from "@/components/Tab";


export const metadata = {
  title: "ایوا",
  description: "بسته اینترنتی ایوا",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className="flex flex-col h-screen bg-white text-gray-900">
        <Header />
        <Tab/>
          <main className="flex-1 overflow-y-auto px-4 sm:px-6 md:px-10">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
