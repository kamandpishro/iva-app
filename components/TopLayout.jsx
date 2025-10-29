import Header from "@/components/Header";
import Tab from "@/components/Tab";

export default function TopLayout() {
  return (
    <>
      {/* Fixed header section */}
      <div className="top-layout__header fixed top-0 left-0 w-full z-50 bg-white shadow-sm rounded-b-xl">
        <Header />
        <div className="top-layout__header-divider h-3 bg-gray-100" />
      </div>

      {/* Tab section below the header */}
      <div className="top-layout__tab-wrapper pt-[92px] sm:pt-24 md:pt-[100px] lg:pt-[104px]">
        <Tab />
        <div className="top-layout__tab-divider border-b border-gray-300 mt-2 mx-auto w-[80%]" />
      </div>
    </>
  );
}
