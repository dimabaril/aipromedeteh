import Image from "next/image";

export default function Section11() {
  return (
    <section className="w-full flex flex-col items-center min-h-screen justify-center px-4 py-12  overflow-hidden">
      <div className="w-full max-w-[1440px] min-h-[700px] flex flex-col relative p-10">
        {/* Фоновое изображение под градиентом */}
        <div className="absolute inset-0 -z-20 rounded-3xl overflow-hidden pointer-events-none">
          <Image
            src="/images/page11girl.png"
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
        <div className="flex-1 grid grid-cols-[1fr_3fr_1fr] grid-rows-[4fr_3fr] text-lg text-white relative">
          <div className="p-10 flex flex-col justify-between border-l border-b border-r border-[#cec1ff7d]">
            <button className="self-start border border-white rounded-full px-6 py-2">
              Конкуренты
            </button>
            <div className="bg-[#5A3B5D]/30 rounded-2xl p-5 self-end">
              <Image
                src="/images/characterai.png"
                alt="characterai"
                width={100}
                height={100}
                className="h-full object-contain"
              />
            </div>
          </div>
          <div className="p-10 border-b border-r border-[#cec1ff7d] flex items-end">
            <div className="bg-[#5A3B5D]/30 rounded-2xl p-5">
              <Image
                src="/images/heygen.png"
                alt="heygen"
                width={100}
                height={100}
                className="h-full object-contain"
              />
            </div>
          </div>
          <div className="p-10 border-b border-r border-[#cec1ff7d] flex justify-end">
            <button className="self-start border border-white rounded-full px-6 py-2">
              Наши плюсы
            </button>
          </div>
          <div className="p-10 border-l border-r border-[#cec1ff7d] flex items-start justify-end">
            <div className="bg-[#5A3B5D]/30 rounded-2xl p-5">
              <div className="w-[100px] h-[100px] flex items-center justify-center">
                <Image
                  src="/images/replika.png"
                  alt="replika"
                  width={80}
                  height={80}
                  className="h-full object-contain"
                />
              </div>
            </div>
          </div>
          <div className="flex items-start justify-start p-10 border-r border-[#cec1ff7d]">
            <div className="bg-[#5A3B5D]/30 rounded-2xl p-5">
              <Image
                src="/images/akool.png"
                alt="akool"
                width={100}
                height={100}
                className="h-full object-contain"
              />
            </div>
          </div>
          <div className="p-10 border-r border-[#cec1ff7d]"></div>

          <div className="absolute bottom-10 right-10 bg-[#5A3B5D]/30 backdrop-blur-xs rounded-3xl p-8 text-white text-lg z-10">
            <ul className="list-disc pl-5 flex flex-col gap-10">
              <li>Локальная работа без интернета</li>
              <li>Настоящие эмоции и живое поведение</li>
              <li>Полная кастомизация внешности</li>
              <li>Возможность встраивать в оффлайн-ивенты</li>
              <li>Работа с локальной векторной базой</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
