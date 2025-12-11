// app/pages/Section3.tsx
export default function Section3() {
  return (
    <section className="w-full flex flex-col items-center min-h-screen justify-center px-4 py-12">
      <div className="w-full max-w-[1440px] min-h-[700px] relative p-10">
        {/* Фоновое изображение под градиентом */}
        <div className="absolute inset-0 -z-20 rounded-3xl overflow-hidden pointer-events-none">
          <img
            src="/images/page3girl.png"
            alt="bg"
            className="w-full h-full object-cover opacity-70"
            draggable="false"
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
          <button className="border border-white rounded-full px-6 py-2 text-white text-lg ">
            Наша философия
          </button>
        </div>
        <div className="flex">
          <div className="flex-1  p-10">
            <div className="flex flex-col gap-4 bg-[#5A3B5D]/30 rounded-3xl px-8 py-6 text-white text-2xl w-full text-left">
              <div>Главная идея</div>
              <div>AI-персонаж — это не замена человеку</div>
            </div>
          </div>
          <div className="flex-1  p-10 pl-0">
            <div className="flex flex-col gap-4 bg-[#5A3B5D]/30 rounded-3xl px-8 py-6 text-white text-2xl w-full text-left">
              <div>Наш подход</div>
              <div>
                Это новый способ взаимодействия с цифровыми интерфейсами —
                естественный, голосовой, эмоциональный
              </div>
            </div>
          </div>
          <div className="flex-1  p-10 pl-0">
            <div className="flex flex-col gap-4 bg-[#5A3B5D]/30 rounded-3xl px-8 py-6 text-white text-2xl w-full text-left">
              <div>Результат</div>
              <div>
                Это создаёт новые маркетинговые возможности: живые
                бренд-персонажи, интерактивные гиды, отзывы с эмоциями
              </div>
            </div>
          </div>
        </div>
        {/* Горизонтальная линия */}
        <div className="border-t border-[#cec1ff7d] relative"></div>
        <div className="text-white text-base max-w-3xl p-10">
          Наш опыт в графике и AI позволил нам создать собственную технологию,
          основанную на open-source ядре с нашими важными доработками. У нас
          также есть опыт реализации креативных и рекламных проектов
        </div>
      </div>
    </section>
  );
}
