export default function Section4() {
  return (
    <section className="w-full flex flex-col items-center min-h-screen justify-center px-4 py-12 relative overflow-hidden">
      <div className="w-full max-w-[1440px] relative p-10">
        {/* Градиент поверх изображения */}
        <div
          className="absolute inset-0 -z-10 rounded-3xl"
          style={{
            background:
              "radial-gradient(circle at 50% 20%, rgba(0,0,0,0.5) 0%, rgba(123,0,180,0.3) 100%)",
          }}
        />
        {/* Вертикальная линия слева */}
        <div className="absolute top-10 bottom-10 left-10 w-px bg-[#cec1ff7d]" />
        {/* Вертикальная линия справа */}
        <div className="absolute top-10 bottom-10 right-10  w-px bg-[#cec1ff7d]" />
        {/* Горизонтальная и вертикальная линия в центре*/}
        <div className="absolute left-10 right-10 top-1/2  h-px bg-[#cec1ff7d] -z-10" />
        <div className="absolute top-10 bottom-10 left-1/2  w-px bg-[#cec1ff7d] -z-10" />
        <div className="p-10">
          <button className="border border-white rounded-full px-6 py-2 text-white text-lg ">
            Возможности применения
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-8 px-10">
          <div className="bg-[#5A3B5D]/30 backdrop-blur-xs rounded-3xl px-8 py-6 text-white text-xl w-full text-left flex flex-col justify-between z-10">
            <div className="font-bold mb-2">Event & выставки</div>
            <ul className="list-disc pl-5">
              <li>Ассистент на стенде</li>
              <li>Ведущий</li>
              <li>Гид</li>
            </ul>
          </div>
          <div className="bg-[#5A3B5D]/30 backdrop-blur-xs rounded-3xl px-8 py-6 text-white text-xl w-full text-left flex flex-col justify-between z-10  md:-translate-y-1/2">
            <div className="font-bold mb-2">Образование & сервис</div>
            <ul className="list-disc pl-5">
              <li>Лектор</li>
              <li>Собеседник</li>
              <li>Образовательные платформы</li>
            </ul>
          </div>
          <div className="bg-[#5A3B5D]/30 backdrop-blur-xs rounded-3xl px-8 py-6 text-white text-xl w-full text-left flex flex-col justify-between z-10 ">
            <div className="font-bold mb-2">
              Веб-версия персонажа для стендов (сайтов)
            </div>
            <div>Интеграции в CRM и другие внутренние системы</div>
          </div>
          <div className="bg-[#5A3B5D]/30 backdrop-blur-xs rounded-3xl px-8 py-6 text-white text-xl w-full text-left flex flex-col justify-between md:col-start-2 z-10  md:-translate-y-1/4">
            <div className="font-bold mb-2">Онлайн-интеграции</div>
            <ul className="list-disc pl-5">
              <li>Медицинские центры</li>
              <li>Коуч-копилот</li>
              <li>Графические интерфейсы</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
