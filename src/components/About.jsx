import { ABOUT_ME } from "../constants/about";

export default function About() {
  return (
    <section id="about" className="py-10">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-4">{ABOUT_ME.title}</h2>

        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
          {ABOUT_ME.description}
        </p>
      </div>
    </section>
  );
}
