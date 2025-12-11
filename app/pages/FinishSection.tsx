// app/pages/FinishSection.tsx
import Image from "next/image";

export default function FinishSection() {
  return (
    <section className="w-full mx-auto flex flex-col items-center min-h-screen justify-around">
      <div></div>
      <div className="relative w-full max-w-[1200px] h-[600px] rounded-3xl p-10 text-white flex flex-col justify-between overflow-hidden">
        {/* Градиент поверх всего контейнера */}
        <div
          className="absolute inset-0 pointer-events-none z-10 rounded-3xl"
          style={{
            background:
              "linear-gradient(to bottom, transparent 60%, rgba(123,0,180,0.2) 100%)",
          }}
        />
        <div className="grid grid-cols-[1fr_2fr_3fr] grid-rows-[2fr_1fr] h-full w-full gap-0 relative z-0">
          {/* 1 строка */}
          <div className="flex p-10 border-[#cec1ff7d] border-b border-r items-start">
            <h1 className="border px-6 py-2 rounded-full">Контакты</h1>
          </div>
          <div className="flex p-10 items-center justify-center border-[#cec1ff7d] border-b">
            <Image
              src="/images/qrcode.png"
              alt="qrcode"
              width={600}
              height={600}
              className="h-full object-contain rounded-3xl"
            />
          </div>
          <div className="row-span-2 col-start-3 flex items-center justify-center ">
            {/* картинка */}
            <Image
              src="/images/finishgirl.png"
              alt="finishgirl"
              width={600}
              height={600}
              className="h-full object-contain"
            />
          </div>
          {/* 2 строка */}
          <div className="border-[#cec1ff7d] border-r"></div>
          <div className="p-10 flex flex-col">
            <div className="">+7 925 735 3351</div>
            <div className="">Артур Ширкин</div>
          </div>
        </div>
      </div>
      <div></div>
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
