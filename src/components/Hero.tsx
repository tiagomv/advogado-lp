import { motion } from "motion/react";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex items-center pt-10 pb-12 overflow-hidden bg-noite">
      {/* Background Texture/Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(var(--color-marfim) 1px, transparent 1px)", backgroundSize: "40px 40px" }}></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-dourado/5 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-[1.2fr_0.8fr] gap-10 items-start relative z-10 pt-10">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-start gap-[20px]"
        >
          <div className="label-tag">
            ADVOCACIA ESPECIALIZADA EM SÃO PAULO
          </div>
          
          <h1 className="text-4xl md:text-[48px] leading-[1.1] font-display text-marfim font-normal">
            Seu problema jurídico merece uma <span className="italic">solução real.</span>
          </h1>

          <p className="text-[18px] text-marfim/80 max-w-[500px] leading-[1.5]">
            Dr. Rafael Monteiro atua há 14 anos protegendo patrimônio, família e direitos de pessoas e empresas em todo o Brasil.
          </p>

          <div className="flex flex-wrap gap-4 mt-2">
            <a href="#contato" className="flex items-center gap-2 btn-primary hover:bg-cinza border border-marfim/10">
              <MessageCircle className="w-4 h-4" />
              Falar pelo WhatsApp
            </a>
            <a href="#especialidades" className="flex items-center gap-2 btn-primary !bg-transparent border !border-dourado/40 hover:!bg-dourado/10">
              Ver Especialidades
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        {/* Image Content */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="relative w-full border border-dourado p-[10px] flex flex-col gap-5 mt-8 md:mt-0 max-w-md mx-auto aspect-[3/4] md:aspect-auto md:h-full"
        >
          <div className="flex-1 bg-cinza border border-dourado/30 flex items-center justify-center relative overflow-hidden h-full min-h-[400px]">
            <span className="absolute font-display text-[40px] opacity-5 -rotate-90 whitespace-nowrap">RAFAEL MONTEIRO</span>
            <img 
              src="https://picsum.photos/seed/lawyer_portrait/800/1000?grayscale" 
              alt="Dr. Rafael Monteiro" 
              className="absolute inset-0 w-full h-full object-cover grayscale opacity-90 sepia-[0.3]"
              referrerPolicy="no-referrer"
            />
            {/* Dark gradient overlay to blend at the bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-noite via-noite/20 to-transparent"></div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
