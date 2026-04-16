export default function Footer() {
  return (
    <footer className="bg-noite border-t border-dourado/30 p-5 md:px-[60px] md:py-[20px] flex flex-col md:flex-row justify-between items-center gap-6" style={{ background: "rgba(13, 13, 13, 0.8)" }}>
      <div className="font-mono text-[10px] opacity-50 max-w-[600px] leading-[1.4] text-center md:text-left">
        Av. Paulista, 1000 — São Paulo, SP. Este escritório é regido pelo Código de Ética da OAB. © 2026 Rafael Monteiro Advocacia. Todos os direitos reservados.
      </div>
      <div className="label-tag !mb-0 shrink-0">São Paulo — SP</div>
    </footer>
  );
}
