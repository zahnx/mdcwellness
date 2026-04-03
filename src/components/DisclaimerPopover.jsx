import { useState, useEffect } from "react";
import { X } from "lucide-react";

export default function AnimatedDisclaimer() {
  const [visible, setVisible] = useState(true);
  const [show, setShow] = useState(false);

  // Trigger slide-up animation on mount
  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 100); // slight delay for animation
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  // Predefined email
  const email = "marasiganrazzelreyes@gmail.com";
  const subject = encodeURIComponent("Interested in building a full web app");
  const body = encodeURIComponent(
    "Hi Razzel,\n\nI saw your UI/UX prototype and I'm interested in building a full working version of this app. Could we discuss the details?\n\nThanks!",
  );
  const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;

  return (
    <div
      className={`fixed bottom-0 left-0 w-full z-50 bg-surface-container-high border-t border-surface-container/30 shadow-xl px-4 md:px-16 py-4 transform transition-transform duration-300 ease-in-out
      ${show ? "translate-y-0" : "translate-y-full"}`}
    >
      <div className="flex flex-wrap items-center justify-between gap-2">
        {/* Disclaimer text */}
        <p className="text-on-surface text-sm md:text-base flex-1">
          <span className="font-semibold">Heads up!</span> This is a{" "}
          <span className="font-bold text-primary">UI/UX prototype</span> —
          backend is not integrated yet. Interested in a full working version?{" "}
          <a
            href={mailtoLink}
            className="font-semibold text-primary cursor-pointer hover:underline"
          >
            Let’s build it together!
          </a>
        </p>

        {/* Close button */}
        <button
          onClick={() => setVisible(false)}
          className="text-on-surface hover:text-primary transition-colors flex-shrink-0"
        >
          <X size={20} />
        </button>
      </div>
    </div>
  );
}
