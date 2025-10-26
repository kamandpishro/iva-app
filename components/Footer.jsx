import Image from "next/image";

export default function Footer() {

    return(
        <div className="flex items-center justify-center gap-64 bg-white rounded-lg px-4 py-2 ">
          <div className="flex flex-col items-center justify-center">
             <Image src={"/assets/bottom-nav/home.svg"} alt="جایگاه من" width={28}  height={28}/>
             <span className="text-xs mt-1 font-medium text-gray-800">جایگاه من</span>
          </div>
          <div className="flex flex-col items-center justify-center">
             <Image src={"/assets/bottom-nav/performance.svg"} alt="آمار عملکرد" width={50} height={50}/>
             <span  className="text-xs mt-1 font-medium text-gray-800">آمار عملکرد</span>
          </div>
           <div className="flex flex-col items-center justify-center">
             <Image src={"/assets/bottom-nav/notifications.svg"} alt="اطلاعیه ها" width={28} height={28}/>
              <span  className="text-xs mt-1 font-medium text-gray-800">اطلاعیه ها</span>
           </div>
           <div className="flex flex-col items-center justify-center">
            <Image src={"/assets/bottom-nav/profile.svg"} alt="پروقایل کاربری" width={28} height={28}/>
             <span  className="text-xs mt-1 font-medium text-gray-800">پروقایل کاربری</span>
           </div>
        </div>
    );

}