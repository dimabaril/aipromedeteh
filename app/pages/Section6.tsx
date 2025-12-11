import Xarrow from "react-xarrows";

export default function Section6() {
  return (
    <section className="w-full flex flex-col items-center min-h-screen justify-center px-4 py-12  overflow-hidden">
      <div className="w-full max-w-[1440px] min-h-[700px] flex flex-col justify-between relative p-10">
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
          <button className="border border-white rounded-full px-6 py-2 text-white text-lg">
            Схема работы персонажа
          </button>
        </div>
        <div className="flex flex-col gap-12 relative">
          <div className="flex ">
            <div className="flex-1"></div>
            <div
              className="flex-1 px-6 py-2 text-white text-center text-base whitespace-nowrap"
              id="knowledge-base"
            >
              Графово-векторная база данных и др.
            </div>
            <div
              className="flex-1 px-6 py-2 text-white text-center text-base whitespace-nowrap"
              id="emotion-gen"
            >
              Генератор движения губ
            </div>
          </div>
          <div className="flex justify-around items-center border-b border-[#cec1ff7d]">
            <div className=" px-6 py-2 text-white text-base whitespace-nowrap border-l border-[#cec1ff7d]">
              VAD
            </div>
            <div className=" px-6 py-2 text-white text-base whitespace-nowrap border-l border-[#cec1ff7d]">
              Распознавание речи
            </div>
            <div
              className=" px-6 py-2 text-white text-base whitespace-nowrap border-l border-[#cec1ff7d]"
              id="llm-core"
            >
              Мультиагентное LLM ядро
            </div>
            <div
              className=" px-6 py-2 text-white text-base whitespace-nowrap border-l border-[#cec1ff7d]"
              id="speech-gen"
            >
              Генерация речи
            </div>
            <div
              className=" px-6 py-2 text-white text-base whitespace-nowrap border-l border-[#cec1ff7d]"
              id="video-gen"
            >
              ИИ-видеогенератор
            </div>
          </div>
          <div className="flex ">
            <div
              className="flex-1 px-6 py-2 text-white text-center text-base whitespace-nowrap"
              id="vision-system"
            >
              Система машинного зрения
            </div>
            <div className="flex-1"></div>
            <div
              className="flex-1 px-6 py-2 text-white text-center text-base whitespace-nowrap"
              id="emotion-engine"
            >
              Движок эмоций
            </div>
          </div>
        </div>
        {/* стрелки */}
        <Xarrow
          start="knowledge-base"
          startAnchor={{ position: "bottom", offset: { x: -10, y: 0 } }}
          end="llm-core"
          endAnchor={{ position: "top", offset: { x: -10, y: 0 } }}
          color="#cec1ff7d"
          strokeWidth={1}
          headSize={10}
          // curveness={0}
        />
        <Xarrow
          start="llm-core"
          startAnchor={{ position: "top", offset: { x: 10, y: 0 } }}
          end="knowledge-base"
          endAnchor={{ position: "bottom", offset: { x: 10, y: 0 } }}
          color="#cec1ff7d"
          strokeWidth={1}
          headSize={10}
          // curveness={0}
        />
        <Xarrow
          start="speech-gen"
          startAnchor="top"
          end="emotion-gen"
          endAnchor={{ position: "bottom", offset: { x: -10, y: 0 } }}
          color="#cec1ff7d"
          strokeWidth={1}
          headSize={10}
          // curveness={0}
        />
        <Xarrow
          start="emotion-gen"
          startAnchor={{ position: "bottom", offset: { x: 10, y: 0 } }}
          end="video-gen"
          endAnchor="top"
          color="#cec1ff7d"
          strokeWidth={1}
          headSize={10}
          // curveness={0}
        />
        <Xarrow
          start="vision-system"
          startAnchor="top"
          end="llm-core"
          endAnchor={{ position: "bottom", offset: { x: 0, y: 10 } }}
          color="#cec1ff7d"
          strokeWidth={1}
          headSize={10}
          // curveness={0}
        />
        <Xarrow
          start="speech-gen"
          startAnchor={{ position: "bottom", offset: { x: 0, y: 10 } }}
          end="emotion-engine"
          endAnchor={{ position: "top", offset: { x: -10, y: 0 } }}
          color="#cec1ff7d"
          strokeWidth={1}
          headSize={10}
          // curveness={0}
        />
        <Xarrow
          start="emotion-engine"
          startAnchor={{ position: "top", offset: { x: 10, y: 0 } }}
          end="video-gen"
          endAnchor={{ position: "bottom", offset: { x: 0, y: 10 } }}
          color="#cec1ff7d"
          strokeWidth={1}
          headSize={10}
          // curveness={0}
        />
        <div></div>
      </div>
    </section>
  );
}
