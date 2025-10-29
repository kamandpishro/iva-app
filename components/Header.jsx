"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  return (
    <header
      dir="rtl"
      className="header flex relative items-center bg-white rounded-lg px-4 sm:px-8 py-2 sm:py-3"
    >
      <Image
        src="/assets/header/logo.svg"
        alt="ایوا"
        width={100}
        height={40}
        priority
        className="header__logo"
      />

      <h4 className="header__title text-gray-800 font-bold text-2xl sm:text-4xl absolute left-1/2 -translate-x-1/2">
        بسته اینترنت
      </h4>

      <Image
        src="/assets/header/back-icon.svg"
        alt="بازگشت"
        width={24}
        height={24}
        onClick={() => router.back()}
        className="header__back-button cursor-pointer ms-auto hover:scale-110 w-5 h-5 sm:w-6 sm:h-6"
      />
    </header>
  );
}
