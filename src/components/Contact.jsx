import { CONTACT_DETAILS } from "../constants/contact";

export default function Contact() {
  return (
    <section id="contact" className="py-10">
      <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl font-semibold">Contact Me</h2>

          <p className="text-gray-600 dark:text-gray-400 mt-2">
            I’m open to new opportunities and collaborations.
          </p>

          <div className="mt-6 space-y-3">
            {CONTACT_DETAILS.map((item, index) => (
              <p key={index} className="flex items-center gap-2">
                <span>{item.icon}</span>

                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:underline"
                  >
                    {item.value}
                  </a>
                ) : (
                  <span>{item.value}</span>
                )}
              </p>
            ))}
          </div>
        </div>
        <form className="space-y-4">
          <input
            className="w-full px-4 py-3 rounded-lg border"
            placeholder="Your Name"
          />

          <input
            className="w-full px-4 py-3 rounded-lg border"
            placeholder="Your Email"
          />

          <textarea
            className="w-full px-4 py-3 rounded-lg border"
            rows="4"
            placeholder="Your Message"
          />

          <button
            type="submit"
            className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
