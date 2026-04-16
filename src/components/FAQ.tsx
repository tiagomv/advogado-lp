import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "Como funciona a primeira consulta?",
      a: "A consulta inicial é realizada por videochamada ou presencialmente em São Paulo. Nela, analisamos seu caso, esclarecemos suas dúvidas e apresentamos as possibilidades jurídicas disponíveis."
    },
    {
      q: "Qual o valor dos honorários?",
      a: "Os honorários variam conforme a complexidade do caso. Após a consulta inicial, apresento uma proposta clara e detalhada. Trabalho com pagamento parcelado em casos selecionados."
    },
    {
      q: "Atende clientes fora de São Paulo?",
      a: "Sim. Atendo clientes de todo o Brasil de forma online, com a mesma qualidade e atenção do atendimento presencial."
    },
    {
      q: "Quanto tempo leva um processo?",
      a: "Depende da área e da complexidade. Na consulta, apresento uma estimativa realista baseada no seu caso específico — sem promessas vagas."
    },
    {
      q: "Preciso ir ao escritório pessoalmente?",
      a: "Não necessariamente. A maioria dos atendimentos e assinaturas pode ser feita de forma digital, com total validade jurídica."
    }
  ];

  return (
    <section className="py-20 bg-noite border-t border-cinza">
      <div className="max-w-4xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <div className="label-tag justify-center mb-4">V. Dúvidas Frequentes</div>
          <h2 className="text-3xl md:text-5xl font-display font-normal">Perguntas que todo cliente faz</h2>
        </div>

        <div className="space-y-[15px]">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="service-card"
              >
                <button 
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full text-left flex justify-between items-center outline-none transition-colors relative z-10"
                >
                  <span className="font-display text-[16px] md:text-[18px] text-dourado uppercase tracking-[1px] pr-8">{faq.q}</span>
                  <span className="text-dourado shrink-0 opacity-80">
                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </span>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden relative z-10"
                    >
                      <div className="pt-4 text-marfim opacity-80 text-[13px] leading-[1.5]">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
