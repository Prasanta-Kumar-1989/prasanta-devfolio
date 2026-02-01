export default function Navbar({ dark, setDark }) {
  return (
    <header className="fixed top-0 w-full z-50 bg-white/70 dark:bg-black/40 backdrop-blur border-b border-black/10 dark:border-white/10">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        <span className="font-semibold">Prasanta Kumar Sitha</span>

        <nav className="hidden md:flex gap-6 text-sm">
          {["Home", "About", "Skills", "Experience", "Projects", "Contact"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-indigo-500"
              >
                {item}
              </a>
            ),
          )}
        </nav>

        <button
          onClick={() => setDark(!dark)}
          className="text-sm px-3 py-1 rounded-md border border-black/10 dark:border-white/20 hover:bg-black/5 dark:hover:bg-white/10 transition"
        >
          {dark ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </header>
  );
}
