import ScrollPages from "./ScrollPages";

export default function Home() {
  // Логика типа фона теперь внутри ScrollPages
  return (
    <div className="flex flex-col items-center">
      <header className="w-full max-w-[1440px] text-2xl  text-center flex justify-between fixed py-20 px-5">
        <div className="flex gap-4">
          <svg
            className="w-6 h-6 sm:w-7 sm:h-7"
            width="27"
            height="27"
            viewBox="0 0 27 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0)">
              <path
                d="M13.5 0V27"
                stroke="white"
                strokeWidth="1.8"
                strokeMiterlimit="10"
              ></path>
              <path
                d="M0 13.5H27"
                stroke="white"
                strokeWidth="1.8"
                strokeMiterlimit="10"
              ></path>
              <path
                d="M23.0461 3.95349L3.95312 23.0465"
                stroke="white"
                strokeWidth="1.8"
                strokeMiterlimit="10"
              ></path>
              <path
                d="M3.95312 3.95349L23.0461 23.0465"
                stroke="white"
                strokeWidth="1.8"
                strokeMiterlimit="10"
              ></path>
            </g>
            <defs>
              <clipPath id="clip0">
                <rect width="27" height="27" fill="white"></rect>
              </clipPath>
            </defs>
          </svg>
          <span>Проект София — интерактивный цифровой персонаж</span>
        </div>
        <span>2025</span>
      </header>
      <ScrollPages />
    </div>
  );
}
