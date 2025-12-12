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

        {/* <div className="absolute top-10 bottom-10 w-px bg-[#cec1ff7d]" /> */}

        {/* <div className="p-10">
          <button className="border border-white rounded-full  px-6 py-2 text-white text-lg">
            Что важно для качественного внедрения
          </button>
        </div>
        <div className="p-10 flex justify-center items-center flex-1">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="flex flex-col gap-10 p-10 bg-[#5A3B5D]/30 backdrop-blur-xs rounded-3xl">
              <h2 className="text-3xl font-bold text-white">
                Архитектура решения позволяет развернуть персонажа в сетевом
                режиме
              </h2>
              <div className="text-2xl text-white">
                Мы принципиально работаем на open source решениях и дорабатываем
                их для наших целей
              </div>
            </div>
            <div className=""></div>
            <div className=""></div>
          </div>
        </div> */}
        <div className="flex-1 grid grid-cols-3 grid-rows-[2fr_2fr_1fr] text-lg text-white">
          <div className="p-10 flex flex-col justify-between border-l border-b border-r border-[#cec1ff7d]">
            <button className="self-start border border-white rounded-full px-6 py-2">
              Гибкость и интеграции
            </button>
            <div className="self-end">Модульная архитектура</div>
          </div>
          <div className="p-10 border-b border-r border-[#cec1ff7d] flex items-center justify-end">
            Работа с любой
            <br />
            векторной базой
          </div>
          <div className="p-10 border-b border-r border-[#cec1ff7d] flex items-end">
            Развёртывание
            <br />
            на локально или в сети
          </div>
          <div className="p-10 border-l border-b border-r border-[#cec1ff7d] flex items-end">
            Подключение
            <br />
            ChatGPT / YandexGPT
          </div>
          <div className="p-10 border-b border-r border-[#cec1ff7d]">
            Встраивание в CRM
            <br />
            и корпоративные
            <br />
            системы
          </div>
          <div className="p-10 border-b border-r border-[#cec1ff7d] justify-between flex flex-col">
            <div className="self-start">Веб-версия готова</div>
            <div className="self-end text-right">
              Мобильное приложение —
              <br />в перспективе
            </div>
          </div>
          <div className="border-l border-r border-[#cec1ff7d]"></div>
          <div className=" border-r border-[#cec1ff7d]"></div>
          <div className="border-r border-[#cec1ff7d]"></div>
        </div>
      </div>
    </section>
  );
}
