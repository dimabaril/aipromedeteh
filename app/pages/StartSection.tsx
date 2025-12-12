import Image from "next/image";

export default function StartSection() {
  return (
    <section className="w-full mx-auto flex flex-col  items-center min-h-screen justify-around">
      <div></div>
      <div className="w-full max-w-[1200px] h-[600px] bg-linear-to-b from-transparent to-[rgba(123,0,180,0.2)] rounded-3xl p-10 text-white flex flex-col justify-between">
        <div className="flex">
          <h1 className="flex-1 text-2xl md:text-3xl leading-tight">
            AI-персонаж — это человеческий голосовой интерфейс с внешностью и
            персональностью
          </h1>
          <div className="flex-1">
            <Image
              src="/images/startgirl2.png"
              alt="startgirl2"
              width={500}
              height={500}
              className="h-full max-h-[450px] object-contain rounded-3xl"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row text-base">
          <div className="flex-1 border-t border-l border-[#cec1ff7d] p-4">
            Ведет диалог в реальном времени
          </div>
          <div className="flex-1 border-t border-l border-[#cec1ff7d] p-4">
            Работает локально, без интернета
          </div>
          <div className="flex-1 border-t border-l border-[#cec1ff7d] p-4">
            Внешность и голос настраиваются под ваш бренд
          </div>
          <div className="flex-1 border-t border-l border-[#cec1ff7d] p-4">
            Интегрируется в любые системы (CRM, веб, терминалы)
          </div>
        </div>
      </div>
      <div className="text-white rounded-full py-3 px-10 text-base backdrop-blur-md bg-[#2B2142]/50">
        Персонаж может быть любой внешности — любой расы, пола, возраста, стиля.
        Полная кастомизация
      </div>
      <div className="w-full max-w-[1400px] flex flex-col md:flex-row justify-center text-white text-base px-10">
        <div className="border border-b-0 border-white p-2 pb-0">
          Решения для help desk
        </div>
        <div className="border border-b-0 border-white p-2 pb-0">
          Соведущий для ивентов
        </div>
        <div className="border border-b-0 border-white p-2 pb-0">
          Онлайн платформа
        </div>
        <div className="border border-b-0 border-white p-2 pb-0">
          Онлайн перевод
        </div>
        <div className="border border-b-0 border-white p-2 pb-0">
          Развитие маркетинговой стратегии эмоционального контакта с аудиторией
        </div>
      </div>
    </section>
  );
}
