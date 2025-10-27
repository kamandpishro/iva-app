export default function Type() {
  const tabs = ["روزانه", "هفتگی", "ماهانه"];

  return (
    <div className="w-full flex justify-center mt-16 sm:mt-20">
      <div className="flex justify-between items-center bg-yellow-100 rounded-2xl p-2 shadow-sm 
                      w-[90%] sm:w-[80%] md:w-[60%] lg:w-[40%] xl:w-[35%] max-w-2xl">
        {tabs.map((tab, idx) => (
          <button
            key={idx}
            className={`flex-1 font-semibold rounded-xl py-3 mx-1 transition-all duration-200
              ${
                idx === 0
                  ? "bg-yellow-400 text-gray-900 font-bold shadow-sm hover:shadow-md"
                  :" text-gray-600 hover:bg-yellow-200"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
}
