import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Sparkles, Stethoscope, Smile, ShieldPlus, MapPin, Phone, Mail, Instagram, Facebook, Clock, ArrowRight, Quote, Menu, X } from "lucide-react";
import logo from "@/assets/logo-myckaela.png";
import marble from "@/assets/marble-hero.jpg";
import portrait from "@/assets/dentist-portrait.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dra. Myckaela Schulter — Cirurgiã Dentista em Anitápolis/SC" },
      { name: "description", content: "Odontologia de excelência com a Dra. Myckaela Schulter em Anitápolis, Santa Catarina. Cirurgia dentista, estética e tratamentos personalizados." },
      { property: "og:title", content: "Dra. Myckaela Schulter — Cirurgiã Dentista" },
      { property: "og:description", content: "Odontologia de excelência em Anitápolis, SC." },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=Jost:wght@300;400;500;600&display=swap" },
    ],
  }),
  component: Index,
});

const services = [
  { icon: Smile, title: "Odontologia Estética", desc: "Clareamento, lentes de contato e harmonização do sorriso com acabamento natural." },
  { icon: Stethoscope, title: "Clínica Geral", desc: "Consultas, profilaxia, restaurações e cuidado preventivo para toda a família." },
  { icon: ShieldPlus, title: "Cirurgia Dentária", desc: "Extrações, sisos e procedimentos cirúrgicos com técnica minimamente invasiva." },
  { icon: Sparkles, title: "Atendimento Premium", desc: "Ambiente acolhedor, tecnologia moderna e planos personalizados para cada paciente." },
];

const testimonials = [
  {
    name: "Thaís",
    text: "Sou muito fã do seu trabalho. Obrigada pela paciência de sempre e pelo seu excelente trabalho — amei demais!",
  },
  {
    name: "Evely",
    text: "Só as suas mãos para me devolver a naturalidade e me deixar novamente de bem com o espelho! Sou sua fã número 1 e admiradora de todo o seu empenho em buscar sempre os melhores cursos.",
  },
  {
    name: "Gabi",
    text: "Só me arrependi de não ter feito antes. Não consigo explicar com palavras o quanto esse procedimento melhorou minha autoestima. Recomendo! Nunca é um gasto — é investimento em se sentir bem e gostar do que vê no espelho.",
  },
];

function Index() {
  const whatsapp = "https://wa.me/5548999999999?text=Olá%2C%20gostaria%20de%20agendar%20uma%20consulta";
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "#servicos", label: "Serviços" },
    { href: "#sobre", label: "Sobre" },
    { href: "#depoimentos", label: "Depoimentos" },
    { href: "#contato", label: "Contato" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/60">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#top" className="font-display text-lg tracking-wide" onClick={() => setMenuOpen(false)}>
            <span className="text-gold-gradient">M</span> Schulter
          </a>
          <nav className="hidden md:flex items-center gap-10 text-sm tracking-wider uppercase text-muted-foreground">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-foreground transition">{l.label}</a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a href={whatsapp} target="_blank" rel="noreferrer" className="hidden sm:inline-flex text-xs tracking-luxury uppercase border border-foreground/30 px-4 py-2 hover:bg-foreground hover:text-background transition">
              Agendar
            </a>
            <button
              type="button"
              aria-label="Abrir menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
              className="md:hidden w-10 h-10 inline-flex items-center justify-center border border-foreground/30 text-foreground"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden border-t border-border/60 bg-background/95 backdrop-blur-md transition-[max-height] duration-300 ease-out ${
            menuOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          <nav className="flex flex-col px-6 py-4 gap-1 text-sm tracking-wider uppercase text-muted-foreground">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="py-3 border-b border-border/50 hover:text-foreground transition"
              >
                {l.label}
              </a>
            ))}
            <a
              href={whatsapp}
              target="_blank"
              rel="noreferrer"
              onClick={() => setMenuOpen(false)}
              className="mt-3 inline-flex items-center justify-center gap-2 bg-gold-gradient text-primary-foreground px-4 py-3 tracking-luxury uppercase text-xs"
            >
              Agendar Consulta <ArrowRight className="w-4 h-4" />
            </a>
          </nav>
        </div>
      </header>


      {/* HERO */}
      <section id="top" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <img src={marble} alt="" width={1920} height={1280} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/10 to-background/60" />
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <p className="text-xs tracking-luxury uppercase text-gold-gradient mb-8">Anitápolis · Santa Catarina</p>
          <img src={logo} alt="Dra. Myckaela Schulter" width={480} height={320} className="mx-auto w-72 md:w-[28rem] mb-6" />
          <h1 className="font-display text-3xl md:text-5xl text-foreground/85 italic font-light mb-6">
            Um sorriso cuidado <br />com a delicadeza que você merece.
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Odontologia de excelência aliada a um atendimento humano, atento e personalizado para cada paciente.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href={whatsapp} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-3 bg-gold-gradient text-primary-foreground px-8 py-4 tracking-luxury uppercase text-xs shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all">
              Agendar Consulta
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
            </a>
            <a href="#servicos" className="inline-flex items-center gap-2 text-xs tracking-luxury uppercase text-foreground/70 hover:text-foreground transition">
              Conhecer Serviços
            </a>
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-xs tracking-luxury uppercase text-gold-gradient mb-4">Especialidades</p>
            <h2 className="text-4xl md:text-5xl italic font-light">Cuidado completo para o seu sorriso</h2>
            <div className="mx-auto mt-6 h-px w-16 bg-gold-gradient" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {services.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-card p-10 group hover:bg-accent/40 transition-colors">
                <div className="w-14 h-14 rounded-full border border-primary/40 flex items-center justify-center mb-6 group-hover:bg-gold-gradient group-hover:border-transparent transition-all">
                  <Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition" strokeWidth={1.4} />
                </div>
                <h3 className="text-xl mb-3">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="py-28 px-6 bg-secondary/40">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -inset-4 border border-primary/30 -z-10" />
            <img src={portrait} alt="Dra. Myckaela Schulter" width={1024} height={1280} loading="lazy" className="w-full aspect-[4/5] object-cover" />
          </div>
          <div>
            <p className="text-xs tracking-luxury uppercase text-gold-gradient mb-4">Sobre a Doutora</p>
            <h2 className="text-4xl md:text-5xl italic font-light mb-8 leading-tight">
              Dra. Myckaela <br />Schulter
            </h2>
            <div className="h-px w-16 bg-gold-gradient mb-8" />
            <p className="text-muted-foreground leading-relaxed mb-5">
              Cirurgiã dentista com paixão pela odontologia detalhista e humanizada. Atendendo a comunidade de Anitápolis e região, alia técnica, sensibilidade e tecnologia para entregar resultados naturais e duradouros.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Cada paciente é único — e merece um plano de tratamento construído sob medida, em um ambiente leve e acolhedor.
            </p>
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              {[
                { n: "+500", l: "Sorrisos" },
                { n: "5★", l: "Avaliações" },
                { n: "100%", l: "Dedicação" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-display text-3xl text-gold-gradient">{s.n}</div>
                  <div className="text-xs tracking-luxury uppercase text-muted-foreground mt-2">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTATO */}
      {/* DEPOIMENTOS */}
      <section id="depoimentos" className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-xs tracking-luxury uppercase text-gold-gradient mb-4">Depoimentos</p>
            <h2 className="text-4xl md:text-5xl italic font-light">O carinho de quem confia</h2>
            <div className="mx-auto mt-6 h-px w-16 bg-gold-gradient" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <figure key={t.name} className="relative bg-card border border-border/60 p-10 flex flex-col">
                <Quote className="w-8 h-8 text-primary/70 mb-6" strokeWidth={1.2} />
                <blockquote className="text-foreground/85 leading-relaxed italic font-light flex-1">
                  “{t.text}”
                </blockquote>
                <figcaption className="mt-8 pt-6 border-t border-border/60">
                  <div className="font-display text-lg text-gold-gradient">{t.name}</div>
                  <div className="text-[10px] tracking-luxury uppercase text-muted-foreground mt-1">Paciente</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="py-28 px-6 bg-secondary/40">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-luxury uppercase text-gold-gradient mb-4">Contato</p>
            <h2 className="text-4xl md:text-5xl italic font-light">Venha nos visitar</h2>
            <div className="mx-auto mt-6 h-px w-16 bg-gold-gradient" />
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              {[
                { icon: MapPin, label: "Endereço", value: "Anitápolis, Santa Catarina — Brasil" },
                { icon: Phone, label: "Telefone / WhatsApp", value: "(48) 99999-9999" },
                { icon: Mail, label: "E-mail", value: "contato@dramyckaela.com.br" },
                { icon: Clock, label: "Horário", value: "Seg a Sex · 08h às 18h" },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex gap-5 items-start">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-gold-gradient flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary-foreground" strokeWidth={1.4} />
                  </div>
                  <div>
                    <div className="text-xs tracking-luxury uppercase text-muted-foreground mb-1">{label}</div>
                    <div className="text-foreground/90">{value}</div>
                  </div>
                </div>
              ))}
              <a href={whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 bg-gold-gradient text-primary-foreground px-8 py-4 tracking-luxury uppercase text-xs shadow-lg shadow-primary/20 hover:shadow-xl transition-all">
                Falar no WhatsApp <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <div className="relative">
              <div className="absolute -inset-3 border border-primary/30 -z-10" />
              <iframe
                title="Localização — Anitápolis, SC"
                src="https://www.google.com/maps?q=Anit%C3%A1polis%2C%20Santa%20Catarina&output=embed"
                className="w-full h-full min-h-[400px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-secondary/50 py-14 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <div className="font-display text-2xl italic"><span className="text-gold-gradient">Dra.</span> Myckaela Schulter</div>
            <div className="text-xs tracking-luxury uppercase text-muted-foreground mt-2">Cirurgiã Dentista · Anitápolis/SC</div>
          </div>
          <div className="flex items-center gap-4">
            {[
              { Icon: Instagram, href: "https://instagram.com" },
              { Icon: Facebook, href: "https://facebook.com" },
              { Icon: Phone, href: whatsapp },
            ].map(({ Icon, href }, i) => (
              <a key={i} href={href} target="_blank" rel="noreferrer" className="w-11 h-11 rounded-full border border-primary/40 flex items-center justify-center text-primary hover:bg-gold-gradient hover:text-primary-foreground hover:border-transparent transition">
                <Icon className="w-4 h-4" strokeWidth={1.5} />
              </a>
            ))}
          </div>
          <div className="text-xs text-muted-foreground tracking-wider">
            © {new Date().getFullYear()} · Todos os direitos reservados
          </div>
        </div>
      </footer>
    </div>
  );
}
