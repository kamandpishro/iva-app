import Image from "next/image"

export default function Header() {
    return(
        <div className="flex bg-white rounded-lg  items-center justify-center gap-64 px-4 py-2">
            <Image 
            src="/assets/header/logo.svg"  
            alt="ایوا"   
            width={100}
            height={40}
            priority
            />
            <h4 className="text-gray-800  font-bold text-4xl">بسته اینترنتی</h4>
            <Image src="/assets/header/back-icon.svg" 
            alt="بازگشت"
             width={24}
             height={24}
            />

        </div>
    );
}
