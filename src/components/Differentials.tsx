import { motion } from "motion/react";
import { UserCheck, Handshake, MessageSquare, Globe } from "lucide-react";

export default function Differentials() {
  const items = [
    {
      title: "Atendimento direto com o advogado",
      text: "Você não é atendido por estagiários. Do primeiro contato à conclusão do caso, falo diretamente com cada cliente.",
      icon: UserCheck
    },
    {
      title: "Transparência total nos honorários",
      text: "Antes de qualquer compromisso, apresento os custos com clareza. Sem surpresas, sem letras miúdas.",
      icon: Handshake
    },
    {
      title: "Comunicação contínua",
      text: "Você é informado sobre cada movimentação do seu processo. Nenhuma novidade chega sem que você saiba antes.",
      icon: MessageSquare
    },
    {
      title: "Atuação em todo o Brasil",
      text: "Com atendimento presencial em São Paulo e online para todo o território nacional, estou disponível onde você estiver.",
      icon: Globe
    }
  ];

  return (
    <section className="py-20 bg-noite text-marfim border-t border-cinza">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <div className="label-tag justify-center mb-4">III. Por que me contratar</div>
          <h2 className="text-3xl md:text-5xl font-display text-marfim">
            O que faz a diferença na <span className="italic text-dourado">prática</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-[15px]">
          {items.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="service-card flex flex-col items-start hover:border-dourado/50 transition-colors"
            >
              <div className="text-dourado mb-6 opacity-80">
                <item.icon strokeWidth={1.5} className="w-8 h-8" />
              </div>
              <h3 className="font-display text-[16px] text-dourado mb-3 uppercase tracking-[1px]">{item.title}</h3>
              <p className="text-[13px] opacity-80 leading-[1.4]">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
