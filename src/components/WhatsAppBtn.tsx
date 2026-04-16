import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageCircle } from "lucide-react";

export default function WhatsAppBtn() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.a
          href="#contato"
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-10 right-10 z-[1001] w-[60px] h-[60px] rounded-full bg-noite border border-dourado flex items-center justify-center hover:bg-cinza shadow-[0_0_15px_rgba(184,149,63,0.4)] transition-colors duration-300"
        >
          <MessageCircle className="w-6 h-6 text-white" />
        </motion.a>
      )}
    </AnimatePresence>
  );
}
