export default function Skills() {
  const skills = [
    "React",
    "Redux",
    "TypeScript",
    "JavaScript",
    "HTML",
    "CSS",
    "GraphQL",
    "AG Grid",
    "Jest",
    "Git",
    "CI/CD",
  ];

  return (
    <section id="skills" className="py-10 bg-gray-50 dark:bg-[#0f0f1a]">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-6">Skills</h2>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 rounded-full text-sm bg-indigo-500/10 text-indigo-600 dark:text-indigo-300 border border-indigo-500/20"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
