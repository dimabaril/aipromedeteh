import Image from "next/image";

export default function Section7() {
  return (
    <section className="flex flex-col justify-center items-center px-4 py-12 w-full min-h-screen overflow-hidden">
      <div className="relative flex flex-col p-10 w-full max-w-[1440px] min-h-[700px]">
        {/* Фоновое изображение под градиентом */}
        <div className="-z-20 absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
          <Image
            src="/images/page7girl.png"
            alt="page5girl"
            className="w-full h-full object-cover"
            width={600}
            height={600}
          />
        </div>
        {/* Градиент поверх изображения */}
        <div
          className="-z-10 absolute inset-0 rounded-3xl"
          style={{
            background:
              "linear-gradient(rgba(123,0,180,0.1) 0%, rgba(123,0,180,0.05) 20%, rgba(123,0,180,0.2) 100%)",
          }}
        />
        {/* Вертикальная линия слева */}
        <div className="top-10 bottom-10 absolute bg-[#cec1ff7d] w-px" />

        <div className="p-10">
          <button className="px-6 py-2 border border-white rounded-full text-white text-lg">
            Что важно для качественного внедрения
          </button>
        </div>
        <div className="relative flex flex-1 justify-center items-center p-10">
          {/* Линия сетки */}
          <div className="top-1/2 right-0 left-0 absolute bg-[#cec1ff7d] h-px" />
          <div className="flex justify-center items-center bg-[#5A3B5D]/30 backdrop-blur-xs p-10 rounded-3xl w-full">
            <div className="flex flex-col">
              <h2 className="font-bold text-white text-2xl md:text-8xl">90%</h2>
              <div className="text-white text-2xl md:text-3xl">
                успеха — правильно написанный сценарий
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-10 p-10">
          <div className="bg-[#ffffff]/15 px-10 py-3 rounded-full text-white text-lg">
            Роль Персонажа
          </div>
          <div className="bg-[#ffffff]/15 px-10 py-3 rounded-full text-white text-lg">
            То, что он должен знать
          </div>
          <div className="bg-[#ffffff]/15 px-10 py-3 rounded-full text-white text-lg">
            То, о чем он должен говорить
          </div>
        </div>
      </div>
    </section>
  );
}
