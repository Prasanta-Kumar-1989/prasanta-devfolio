import { EXPERIENCE } from "../constants/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-10">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-6">Experience</h2>

        {/* GRID */}
        <div
          className="
            grid gap-6
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
          "
        >
          {EXPERIENCE.map((item, index) => (
            <div
              key={index}
              className="
                p-6
                bg-gray-50 dark:bg-white/5
                border border-black/10 dark:border-white/10
                rounded-2xl
                flex flex-col
              "
            >
              <h3 className="font-semibold text-base">
                {item.role} – {item.client}
              </h3>

              <p className="text-sm text-gray-500 mt-1">{item.duration}</p>

              <p className="text-sm text-gray-600 dark:text-gray-400 mt-3 leading-relaxed">
                {item.summary}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
