// app/pages/Section2.tsx
export default function Section2() {
  return (
    <section className="w-full flex flex-col items-center min-h-screen justify-center px-4 py-12">
      <div className="w-full max-w-[1440px] relative p-10">
        {/* Градиент поверх всего контейнера */}
        <div
          className="absolute inset-0 -z-10 rounded-3xl"
          style={{
            background:
              "linear-gradient(rgba(123,0,180,0.1) 0%, rgba(123,0,180,0.05) 20%, rgba(123,0,180,0.2) 100%)",
          }}
        />
        {/* Вертикальная линия слева */}
        <div className="absolute top-10 h-10/12 w-px bg-[#cec1ff7d]" />
        <div className="p-10">
          <button className="border border-white rounded-full px-6 py-2 text-white text-lg ">
            Как мы пришли к этой идее
          </button>
        </div>
        <div className="flex">
          <div className="flex-1 p-10">
            <h2 className="text-2xl md:text-4xl font-bold text-white">
              Мы — команда разработчиков, создающая цифровых AI-персонажей для
              выставок, event-проекта, и бренд-коммуникаций
            </h2>
          </div>
          <div className="flex-1 flex items-center p-10">
            <div className="bg-[#5A3B5D]/30 rounded-3xl px-8 py-6 text-white text-2xl w-full text-left">
              Это позволяет нам предлагать решения
              <br />с AI-Персонажами
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
