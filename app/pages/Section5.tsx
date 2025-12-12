import Image from "next/image";

export default function Section5() {
  return (
    <section className="w-full flex flex-col items-center min-h-screen justify-center px-4 py-12  overflow-hidden">
      <div className="w-full max-w-[1440px] min-h-[700px] flex flex-col relative p-10">
        {/* Фоновое изображение под градиентом */}
        <div className="absolute inset-0 -z-20 rounded-3xl overflow-hidden pointer-events-none">
          <Image
            src="/images/page5girl.png"
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
          <button className="border border-white rounded-full px-6 py-2  text-3xl">
            Как это работает
          </button>
        </div>
        <div className="flex gap-10 justify-around items-center relative flex-1">
          {/* Линия сетки */}
          <div className="absolute left-0 right-0 top-1/2 h-px bg-[#cec1ff7d]" />
          <div className="ml-10 flex flex-col gap-6 p-10 backdrop-blur-xs border-l border-[#cec1ff7d]">
            <h2 className="text-3xl  ">Вы говорите</h2>
            <div className=" text-2xl">Система распознаёт голос и запрос</div>
          </div>
          <div className="flex flex-col gap-6 p-10 backdrop-blur-xs border-l border-[#cec1ff7d]">
            <h2 className="text-3xl  ">Мы обрабатываем</h2>
            <div className=" text-2xl">LLM + ваша локальная база знаний</div>
          </div>
          <div className=" flex flex-col gap-6 p-10 backdrop-blur-xs border-l border-[#cec1ff7d]">
            <h2 className="text-3xl  ">Персонаж отвечает</h2>
            <div className=" text-2xl">Голос + выражения лица + эмоции</div>
          </div>
        </div>
      </div>
    </section>
  );
}
