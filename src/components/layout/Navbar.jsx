import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function Navbar({ action, items }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6">
      <div
        className={`mx-auto max-w-content rounded-full px-5 py-3 transition duration-300 ${
          isScrolled
            ? "glass-panel border border-white/80 bg-white/88"
            : "border border-transparent bg-white/35 backdrop-blur-xs"
        }`}
      >
        <div className="flex items-center justify-end md:hidden">
          <button
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/5 bg-white/80 text-crimson-800"
            onClick={() => setIsOpen((current) => !current)}
            type="button"
          >
            <span className="space-y-1.5">
              <span className="block h-0.5 w-5 bg-current" />
              <span className="block h-0.5 w-5 bg-current" />
            </span>
          </button>
        </div>

        <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] md:items-center">
          <div />

          <nav className="flex items-center justify-center gap-6">
            {items.map((item) => (
              <a
                key={item.href}
                className="text-sm font-medium text-stone-600 transition hover:text-crimson-800"
                href={item.href}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex justify-end">
            {action ? (
              <a
                className="rounded-full bg-crimson-800 px-4 py-2 text-sm font-semibold text-white transition hover:bg-crimson-700"
                href={action.href}
              >
                {action.label}
              </a>
            ) : null}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto mt-3 max-w-content rounded-[28px] border border-white/80 bg-white/92 p-4 shadow-soft backdrop-blur-xl md:hidden"
            exit={{ opacity: 0, y: -12 }}
            initial={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.24 }}
          >
            <nav className="flex flex-col gap-2">
              {items.map((item) => (
                <a
                  key={item.href}
                  className="rounded-2xl px-4 py-3 text-sm font-medium text-stone-700 transition hover:bg-crimson-50 hover:text-crimson-800"
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              {action ? (
                <a
                  className="rounded-2xl bg-crimson-800 px-4 py-3 text-sm font-semibold text-white transition hover:bg-crimson-700"
                  href={action.href}
                  onClick={() => setIsOpen(false)}
                >
                  {action.label}
                </a>
              ) : null}
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
