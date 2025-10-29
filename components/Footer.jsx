"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Footer() {
  const router = useRouter();

  return (
    <footer className="footer flex items-center justify-between sm:justify-evenly bg-white rounded-t-xl px-4 sm:px-6 py-3 fixed bottom-0 left-0 w-full z-50 shadow-[0_-2px_6px_rgba(0,0,0,0.05)]">
      <div
        onClick={() => router.push("/mystation")}
        className="footer__item flex flex-col items-center justify-center cursor-pointer"
      >
        <Image
          src="/assets/bottom-nav/home.svg"
          alt="home"
          width={26}
          height={26}
          className="footer__icon w-6 h-6 sm:w-7 sm:h-7"
        />
        <span className="footer__text text-[10px] sm:text-xs mt-1 font-medium text-gray-800">
          جایگاه من
        </span>
      </div>

      <div
        onClick={() => router.push("/performance")}
        className="footer__item flex flex-col items-center justify-center cursor-pointer"
      >
        <Image
          src="/assets/bottom-nav/performance.svg"
          alt="performance"
          width={50}
          height={50}
          className="footer__icon w-10 h-10 sm:w-12 sm:h-12"
        />
        <span className="footer__text text-[10px] sm:text-xs mt-1 font-medium text-gray-800">
          آمار عملکرد
        </span>
      </div>

      <div
        onClick={() => router.push("/notifications")}
        className="footer__item flex flex-col items-center justify-center cursor-pointer"
      >
        <Image
          src="/assets/bottom-nav/notifications.svg"
          alt="notifications"
          width={28}
          height={28}
          className="footer__icon w-6 h-6 sm:w-7 sm:h-7"
        />
        <span className="footer__text text-[10px] sm:text-xs mt-1 font-medium text-gray-800">
          اطلاعیه‌ها
        </span>
      </div>

      <div
        onClick={() => router.push("/profile")}
        className="footer__item flex flex-col items-center justify-center cursor-pointer"
      >
        <Image
          src="/assets/bottom-nav/profile.svg"
          alt="profile"
          width={28}
          height={28}
          className="footer__icon w-6 h-6 sm:w-7 sm:h-7"
        />
        <span className="footer__text text-[10px] sm:text-xs mt-1 font-medium text-gray-800">
          پروفایل کاربری
        </span>
      </div>
    </footer>
  );
}
