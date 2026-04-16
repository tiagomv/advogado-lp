import { motion } from "motion/react";
import { Users, Building2, ScrollText, FileSignature } from "lucide-react";

export default function Areas() {
  const areas = [
    {
      title: "Direito de Família",
      description: "Divórcio, guarda de filhos, pensão alimentícia, inventário e partilha de bens. Conduzimos processos delicados com discrição e eficiência, priorizando acordos que preservem relações e reduzam o desgaste emocional.",
      icon: Users
    },
    {
      title: "Direito Imobiliário",
      description: "Compra e venda de imóveis, contratos, usucapião, regularização fundiária e disputas entre locador e locatário. Protegemos seu patrimônio em cada etapa da negociação.",
      icon: Building2
    },
    {
      title: "Inventário e Herança",
      description: "Planejamento sucessório, abertura e condução de inventários judiciais e extrajudiciais. Agilidade e segurança para um processo que já é naturalmente difícil.",
      icon: ScrollText
    },
    {
      title: "Contratos Civis",
      description: "Elaboração, revisão e rescisão de contratos. Identificamos riscos antes que se tornem problemas — e defendemos seus interesses quando o contrato é descumprido.",
      icon: FileSignature
    }
  ];

  return (
    <section id="especialidades" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-12">
          <div className="label-tag">II. Especialidades</div>
          <h2 className="text-3xl md:text-5xl font-display">Áreas em que atuo</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-[15px]">
          {areas.map((area, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="service-card flex flex-col items-start hover:border-dourado/50 transition-colors"
            >
              <div className="mb-6 text-dourado opacity-80">
                <area.icon strokeWidth={1.5} className="w-8 h-8" />
              </div>
              <h3 className="text-[16px] font-display mb-3 text-dourado uppercase tracking-[1px]">{area.title}</h3>
              <p className="text-[13px] text-marfim opacity-80 leading-[1.4]">
                {area.description}
              </p>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
