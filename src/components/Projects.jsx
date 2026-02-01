import { useRef } from "react";
import ProjectCard from "./ProjectCard";
import { ENTERPRISE_PROJECTS } from "../constants/projects";

export default function Projects() {
  const carouselRef = useRef(null);

  const scrollCarousel = (direction) => {
    const container = carouselRef.current;
    if (!container) return;

    const cardWidth = container.firstChild.offsetWidth + 24; // card + gap
    const maxScrollLeft = container.scrollWidth - container.clientWidth;

    if (direction === "right") {
      // At end → jump to start
      if (container.scrollLeft >= maxScrollLeft - 5) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollBy({ left: cardWidth, behavior: "smooth" });
      }
    }

    if (direction === "left") {
      // At start → jump to end
      if (container.scrollLeft <= 5) {
        container.scrollTo({ left: maxScrollLeft, behavior: "smooth" });
      } else {
        container.scrollBy({ left: -cardWidth, behavior: "smooth" });
      }
    }
  };

  return (
    <section id="projects" className="py-16">
      <div className="max-w-5xl mx-auto px-4">
        <h3 className="text-xl font-semibold mb-6">Enterprise Projects</h3>

        <div className="relative">
          {/* LEFT ARROW */}
          <button
            onClick={() => scrollCarousel("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10
                       p-3 rounded-full bg-black/40 backdrop-blur
                       hover:bg-black/60 transition"
          >
            ←
          </button>

          {/* RIGHT ARROW */}
          <button
            onClick={() => scrollCarousel("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10
                       p-3 rounded-full bg-black/40 backdrop-blur
                       hover:bg-black/60 transition"
          >
            →
          </button>

          {/* CAROUSEL */}
          <div
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory
                       px-10 pb-4
                       [-ms-overflow-style:none] [scrollbar-width:none]
                       [&::-webkit-scrollbar]:hidden"
          >
            {ENTERPRISE_PROJECTS.map((project) => (
              <div
                key={project.title}
                className="snap-start shrink-0 w-[90%] md:w-[70%] lg:w-[60%]"
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
