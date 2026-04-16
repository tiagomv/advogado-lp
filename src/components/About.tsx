import { motion } from "motion/react";

export default function About() {
  const stats = [
    { number: "14", label: "Anos de experiência" },
    { number: "800+", label: "Casos atendidos" },
    { number: "12", label: "Estados de atuação" },
    { number: "98%", label: "Clientes satisfeitos" }
  ];

  return (
    <section id="sobre" className="py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-16">
          <div className="label-text text-dourado mb-4">I. Quem Sou</div>
          <div className="gold-separator">
            <span className="text-dourado text-[12px]">✦</span>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-display mb-10 leading-[1.2]">
            Advocacia que respeita o seu <span className="italic text-dourado">tempo</span> e o seu <span className="italic text-dourado">caso.</span>
          </h2>
          
          <div className="space-y-6 text-[16px] md:text-[18px] text-marfim/80 leading-[1.6] max-w-3xl mx-auto">
            <p>
              Sou o Dr. Rafael Monteiro, advogado especializado em Direito de Família e Direito Imobiliário, inscrito na OAB/SP sob o nº 387.204. Ao longo de 14 anos de atuação, aprendi que por trás de cada processo existe uma história — e que o meu papel vai além de ganhar causas.
            </p>
            <p>
              É garantir que você entenda cada etapa, tome decisões com segurança e sinta que tem alguém competente ao seu lado. Atendo pessoas físicas e empresas, com foco em soluções práticas, prazos cumpridos e comunicação direta. Nada de juridiquês desnecessário.
            </p>
          </div>
        </motion.div>

        <div className="mt-20 flex flex-wrap justify-center gap-8 md:gap-16 border-t border-dourado/20 py-10">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * idx }}
              className="flex flex-col text-center"
            >
              <div className="font-display text-[28px] text-dourado">{stat.number}</div>
              <div className="font-mono text-[9px] uppercase tracking-[1px] opacity-60 mt-2">{stat.label}</div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
