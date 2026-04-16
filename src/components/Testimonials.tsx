import { motion } from "motion/react";
import { Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      text: "Passei por um divórcio complicado com disputa de guarda. O Dr. Rafael foi extremamente profissional, me manteve informada em todo momento e conseguimos um acordo que protegeu meus filhos. Recomendo sem hesitar.",
      author: "Mariana S.",
      area: "Direito de Família"
    },
    {
      text: "Contratei para revisar um contrato de compra de imóvel e o Dr. Rafael identificou cláusulas que me prejudicariam seriamente. Evitei um prejuízo enorme. Trabalho sério e honesto.",
      author: "Carlos E.",
      area: "Direito Imobiliário"
    },
    {
      text: "Minha família estava há dois anos tentando resolver um inventário com outro advogado, sem resultado. Em menos de oito meses com o Dr. Rafael, concluímos tudo. Competência de verdade.",
      author: "Família Rodrigues",
      area: "Inventário"
    }
  ];

  return (
    <section className="py-20 bg-noite relative border-t border-cinza">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <div className="label-tag justify-center mb-4">IV. O que dizem os clientes</div>
          <div className="gold-separator">
            <h2 className="text-3xl md:text-4xl font-display inline-block mx-4">Resultados que falam por si</h2>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-[15px]">
          {testimonials.map((test, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="service-card flex flex-col justify-between"
            >
              <Quote className="absolute top-5 right-5 w-6 h-6 text-dourado/10 rotate-180" strokeWidth={1.5} />
              
              <div className="relative z-10 pt-4">
                <p className="text-[14px] text-marfim/80 italic leading-[1.6] mb-8">
                  "{test.text}"
                </p>
                <div className="pt-6 border-t border-dourado/20">
                  <div className="font-display text-[16px] text-dourado uppercase tracking-[1px]">{test.author}</div>
                  <div className="font-mono text-[9px] uppercase tracking-[1px] text-marfim opacity-60 mt-2">{test.area}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
