import Image from "next/image";

export default function Section3() {
  return (
    <section className="w-full flex flex-col items-center min-h-screen justify-center px-4 py-12">
      <div className="w-full flex flex-col max-w-[1440px] min-h-[700px] relative p-10">
        {/* Фоновое изображение под градиентом */}
        <div className="absolute inset-0 -z-20 rounded-3xl overflow-hidden pointer-events-none">
          {/* <img
            src="/images/page3girl.png"
            alt="bg"
            className="w-full h-full object-cover opacity-70"
            draggable="false"
          /> */}
          <Image
            src="/images/page3girl.png"
            alt="page3girl"
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
          <button className="border border-white rounded-full px-6 py-2  text-3xl ">
            Наша философия
          </button>
        </div>
        <div className="flex">
          <div className="flex-1  p-10">
            <div className="flex flex-col gap-4 bg-[#5A3B5D]/30 rounded-3xl px-8 py-6  w-full text-left">
              <div className="text-2xl">Главная идея</div>
              <div className="text-3xl">
                AI-персонаж — это не замена человеку
              </div>
            </div>
          </div>
          <div className="flex-1  p-10 pl-0">
            <div className="flex flex-col gap-4 bg-[#5A3B5D]/30 rounded-3xl px-8 py-6  w-full text-left">
              <div className="text-2xl">Наш подход</div>
              <div className="text-3xl">
                Это новый способ взаимодействия с цифровыми интерфейсами —
                естественный, голосовой, эмоциональный
              </div>
            </div>
          </div>
          <div className="flex-1  p-10 pl-0">
            <div className="flex flex-col gap-4 bg-[#5A3B5D]/30 rounded-3xl px-8 py-6  w-full text-left">
              <div className="text-2xl">Результат</div>
              <div className="text-3xl">
                Это создаёт новые маркетинговые возможности: живые
                бренд-персонажи, интерактивные гиды, отзывы с эмоциями
              </div>
            </div>
          </div>
        </div>
        {/* Горизонтальная линия */}
        <div className="border-t border-[#cec1ff7d]"></div>
        <div className="self-center mx-10 text-center rounded-full py-3 px-10 my-10 text-3xl bg-[#ffffff]/15">
          Новый вид интерфейса, который максимально естественнен и удобен для
          пользователя — общение голосом
        </div>
      </div>
    </section>
  );
}
