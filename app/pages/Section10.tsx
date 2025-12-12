// app/pages/Section2.tsx
export default function Section10() {
  return (
    <section className="w-full flex flex-col items-center min-h-screen justify-center px-4 py-12">
      <div className="w-full max-w-[1440px] relative p-10">
        {/* Градиент поверх всего контейнера */}
        <div
          className="absolute inset-0 -z-10 rounded-3xl"
          style={{
            background:
              "radial-gradient(circle at 50% 20%, rgba(0,0,0,0.5) 0%, rgba(123,0,180,0.3) 100%)",
          }}
        />
        {/* Вертикальная линия слева */}
        <div className="absolute top-10 h-10/12 w-px bg-[#cec1ff7d]" />
        <div className="p-10">
          <button className="border border-white rounded-full px-6 py-2 text-white text-lg ">
            Мы — разработчики
          </button>
        </div>
        <div className="flex">
          <div className="flex-1 p-10">
            <h2 className="text-3xl text-white">
              Мы сами являемся
              <br />
              разработчиками
            </h2>
          </div>
          <div className="flex-1 flex items-center p-10">
            <div className="bg-[#5A3B5D]/30 rounded-3xl px-8 py-6 text-white text-3xl w-full text-left translate-y-2/3 backdrop-blur-xs z-10">
              Мы всегда рады обсудить, где персонаж может быть полезен именно
              вам
            </div>
          </div>
        </div>
        {/* Горизонтальная линия */}
        <div className="border-t border-[#cec1ff7d] relative"></div>
        <div className="text-white text-base max-w-3xl p-10">
          Это позволяет делать любые тонкие настройки решения
          <br />
          для специальных потребностей
        </div>
      </div>
    </section>
  );
}
