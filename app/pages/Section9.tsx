import Image from "next/image";

export default function Section9() {
  return (
    <section className="w-full flex flex-col items-center min-h-screen justify-center px-4 py-12  overflow-hidden">
      <div className="w-full max-w-[1440px] min-h-[700px] flex flex-col relative p-10">
        {/* Фоновое изображение под градиентом */}
        <div className="absolute inset-0 -z-20 rounded-3xl overflow-hidden pointer-events-none">
          <Image
            src="/images/page9girl.png"
            alt="page5girl"
            className="w-full h-full object-cover"
            width={600}
            height={600}
          />
        </div>
        {/* Градиент поверх изображения */}
        <div
          className="absolute inset-0 -z-10 rounded-3xl"
          style={{
            background:
              "linear-gradient(rgba(123,0,180,0.1) 0%, rgba(123,0,180,0.05) 20%, rgba(123,0,180,0.2) 100%)",
          }}
        />
        {/* Вертикальная линия слева */}
        <div className="absolute top-10 bottom-10 w-px bg-[#cec1ff7d]" />
        {/* Вертикальная линия правее */}
        <div className="absolute top-10 bottom-10 left-4/5  w-px bg-[#cec1ff7d] -z-10" />

        <div className="p-10">
          <button className="border border-white rounded-full  px-6 py-2 text-white text-lg">
            Что важно для качественного внедрения
          </button>
        </div>
        <div className="p-10 flex justify-center items-center relative flex-1">
          {/* Линия сетки */}
          <div className="absolute left-0 right-0 top-1/2 h-px bg-[#cec1ff7d]" />

          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="flex flex-col gap-10 p-10 bg-[#5A3B5D]/30 backdrop-blur-xs rounded-3xl">
              <h2 className="text-3xl text-white">
                Архитектура решения позволяет развернуть персонажа в сетевом
                режиме
              </h2>
              <div className="text-2xl text-white">
                Мы принципиально работаем на open source решениях и дорабатываем
                их для наших целей
              </div>
            </div>
            <div className=""></div>
            <div className=""></div>
          </div>
        </div>
      </div>
    </section>
  );
}
