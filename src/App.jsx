
import { motion } from "framer-motion";
import { Plane, MapPin, Hotel, Utensils, Users } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0b132b] via-[#1c2541] to-[#0b132b] text-white px-6 py-12">
      <div className="max-w-5xl mx-auto space-y-20">
        <motion.section initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold">✈️ Английский для путешествий</h1>
          <p className="text-lg md:text-xl text-cyan-300 max-w-3xl mx-auto">
            Реальный разговорный английский для уверенных поездок
          </p>
        </motion.section>

        <section className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/5 p-6 rounded-2xl shadow-xl">
            <h2 className="text-2xl text-orange-300 mb-3">О курсе</h2>
            <p className="text-white/80">
              Практический английский для путешествий и реальных ситуаций.
            </p>
          </div>
          <div className="bg-white/5 p-6 rounded-2xl shadow-xl">
            <h2 className="text-2xl text-orange-300 mb-3">Для кого</h2>
            <p className="text-white/80">4–5 класс<br/>6–8 класс</p>
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-6">
          {[
            { icon: <Plane />, title: "Аэропорт" },
            { icon: <Hotel />, title: "Отель" },
            { icon: <Utensils />, title: "Рестораны" },
            { icon: <MapPin />, title: "Город" },
            { icon: <Users />, title: "Общение" }
          ].map((item, i) => (
            <div key={i} className="bg-white/5 p-6 rounded-2xl">
              <div className="flex items-center gap-3 text-cyan-300">
                {item.icon}
                <h3 className="text-xl">{item.title}</h3>
              </div>
            </div>
          ))}
        </section>

        <section className="text-center">
          <button className="px-10 py-6 text-lg rounded-2xl bg-gradient-to-r from-orange-400 to-cyan-400 shadow-xl hover:scale-105 transition">
            Записаться на курс
          </button>
        </section>
      </div>
    </div>
  );
}
