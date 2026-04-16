import { motion } from "motion/react";
import { MessageCircle, Mail } from "lucide-react";

export default function CTA() {
  return (
    <section id="contato" className="py-20 bg-noite relative">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-marfim text-noite p-10 md:p-16 flex flex-col gap-[20px] text-center"
        >
          <div className="relative z-10">
            <h2 className="text-[20px] md:text-[24px] font-display font-bold mb-4">
              Pronto para resolver sua situação?
            </h2>

            <div className="flex flex-col items-center gap-6 mt-6">
              <a 
                href="#"
                className="inline-flex items-center gap-3 btn-primary text-marfim bg-noite"
              >
                <MessageCircle className="w-5 h-5" />
                Falar pelo WhatsApp
              </a>
              <a 
                href="mailto:contato@rafaelmonteiro.adv.br"
                className="font-mono text-[11px] text-noite opacity-70 mt-2 hover:opacity-100 transition-opacity uppercase"
              >
                contato@rafaelmonteiro.adv.br
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
