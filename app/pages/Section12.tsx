export default function Section8() {
  return (
    <section className="w-full flex flex-col items-center min-h-screen justify-center px-4 py-12  overflow-hidden">
      <div className="w-full max-w-[1440px] min-h-[700px] flex flex-col relative p-10">
        {/* Градиент поверх изображения */}
        <div
          className="absolute inset-0 -z-10 rounded-3xl"
          style={{
            background:
              "radial-gradient(circle at 50% 20%, rgba(0,0,0,0.5) 0%, rgba(123,0,180,0.3) 100%)",
          }}
        />

        <div className="flex-1 grid grid-cols-3 grid-rows-[1fr_3fr_1fr] relative">
          <div className="p-10 flex border-l border-r border-[#cec1ff7d]">
            <button className="self-start border border-white rounded-full px-6 py-2 text-3xl ">
              Наши преимущества
            </button>
          </div>
          <div className="p-10 border-b border-r border-[#cec1ff7d] "></div>
          <div className="p-10 "></div>
          <div className="p-10 border-l border-b border-r border-[#cec1ff7d] justify-end flex flex-col gap-8">
            <div className="text-2xl ">Платформа</div>
            <div className="text-3xl ">
              Может работать локально, также может работать как онлайн-платформа
            </div>
          </div>
          <div className="p-10 border-r border-[#cec1ff7d] justify-end flex flex-col gap-8">
            <div className="text-2xl ">База знаний</div>
            <div className="text-3xl ">
              Ключевая возможность — самостоятельное формирование векторной
              базы, которая является основой решения
            </div>
          </div>
          <div className="p-10 border-b border-[#cec1ff7d] justify-end flex flex-col gap-8">
            <div className="text-2xl ">Визуал</div>
            <div className="text-3xl ">
              Образ отображается на экране любого формата — от голографических
              экранов до огромных экранов на сцене
            </div>
          </div>
          <div className="border-l border-r border-[#cec1ff7d]"></div>
          <div className="border-r border-[#cec1ff7d]"></div>
          <div className=""></div>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full py-3 px-10 text-3xl  bg-[#ffffff]/15 z-10 backdrop-blur-xs">
            Мы также работаем над своим персонажем, и вот наши преимущества
          </div>
        </div>
      </div>
    </section>
  );
}
