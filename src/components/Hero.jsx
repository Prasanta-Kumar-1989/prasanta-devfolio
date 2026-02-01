import profilePic from "../assets/profile.jpg";
import heroBg from "../assets/hero-bg.png";
import { HERO_CONTENT } from "../constants/hero";

export default function Hero() {
  const { title, experience, description, location, buttons, profileAlt } =
    HERO_CONTENT;

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center text-white overflow-hidden"
    >
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-[#0f0f1e]/85" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-5 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
          <p className="text-indigo-200">{experience}</p>
          <p className="max-w-md mx-auto md:mx-0 text-gray-200">
            {description}
          </p>
          <p className="text-sm text-gray-300">{location}</p>

          <div className="flex flex-col sm:flex-row gap-4 pt-2 justify-center md:justify-start">
            <a
              href={buttons.primary.href}
              className="px-6 py-3 bg-white text-indigo-700 rounded-xl font-semibold text-center"
            >
              {buttons.primary.label}
            </a>

            <a
              href={buttons.secondary.href}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-white/40 rounded-xl hover:bg-white/10 transition text-center"
            >
              {buttons.secondary.label}
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <img
            src={profilePic}
            alt={profileAlt}
            className="w-52 h-52 md:w-64 md:h-64 rounded-full border-4 border-white/30 object-cover"
          />
        </div>
      </div>
    </section>
  );
}
