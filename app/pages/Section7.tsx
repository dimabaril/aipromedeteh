import Image from "next/image";

export default function Section7() {
  return (
    <section className="w-full flex flex-col items-center min-h-screen justify-center px-4 py-12  overflow-hidden">
      <div className="w-full max-w-[1440px] min-h-[700px] flex flex-col relative p-10">
        {/* Фоновое изображение под градиентом */}
        <div className="absolute inset-0 -z-20 rounded-3xl overflow-hidden pointer-events-none">
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
          className="absolute inset-0 -z-10 rounded-3xl"
          style={{
            background:
              "linear-gradient(rgba(123,0,180,0.1) 0%, rgba(123,0,180,0.05) 20%, rgba(123,0,180,0.2) 100%)",
          }}
        />
        {/* Вертикальная линия слева */}
        <div className="absolute top-10 bottom-10 w-px bg-[#cec1ff7d]" />

        <div className="p-10">
          <button className="border border-white rounded-full  px-6 py-2 text-white text-lg">
            Что важно для качественного внедрения
          </button>
        </div>
        <div className="p-10 flex justify-center items-center relative flex-1">
          {/* Линия сетки */}
          <div className="absolute left-0 right-0 top-1/2 h-px bg-[#cec1ff7d]" />
          <div className="w-full flex flex-col items-center p-10 bg-[#5A3B5D]/30 backdrop-blur-xs rounded-3xl">
            <div className=" flex flex-col">
              <h2 className="text-2xl md:text-8xl font-bold text-white">90%</h2>
              <div className="text-2xl md:text-3xl text-white">
                успеха — правильно написанный сценарий
              </div>
            </div>
          </div>
        </div>
        <div className="flex p-10 gap-10">
          <div className="text-white rounded-full py-3 px-10 text-lg bg-[#ffffff]/15">
            Роль Персонажа
          </div>
          <div className="text-white rounded-full py-3 px-10 text-lg bg-[#ffffff]/15">
            То, что он должен знать
          </div>
          <div className="text-white rounded-full py-3 px-10 text-lg bg-[#ffffff]/15">
            То, о чем он должен говорить
          </div>
        </div>
      </div>
    </section>
  );
}
