"use client";

import { useEffect, useMemo, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MoveRight,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Users,
  Award,
  Lock,
  CheckCircle,
  Briefcase
} from "lucide-react";
import { Button } from "@/components/ui/button";

// --- CUSTOM COUNT-UP COMPONENT ---
function CountUp({ end, duration = 3, start = false }: { end: number, duration?: number, start?: boolean }) {
  const [count, setCount] = useState(0);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    if (!start || animated) return;
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setAnimated(true);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration, start, animated]);

  return <span>{count}</span>;
}

// --- HERO COMPONENT ---
function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  const titles = useMemo(
    () => ["Marcas", "Patentes", "Diseños", "Innovaciones", "Derechos"],
    []
  );

  // Titles animation for Slide 1
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setTitleNumber((prev) => (prev === titles.length - 1 ? 0 : prev + 1));
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  // Auto-slide every 8 seconds. Resets if manual navigation occurs.
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev === 2 ? 0 : prev + 1));
    }, 8000);
    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  const nextSlide = () => setCurrentSlide((prev) => (prev === 2 ? 0 : prev + 1));
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? 2 : prev - 1));

  const slides = [
    {
      image: "/promarcas/images/promarcas_hero.png",
      content: (
        <div className="flex gap-10 flex-col items-center w-full">
          <h1 className="text-5xl md:text-7xl max-w-4xl tracking-tighter text-center font-regular">
            <span className="text-white">Protegemos sus</span>
            <span className="relative flex w-full justify-center overflow-hidden text-center pb-4 md:pb-6 pt-1">
              &nbsp;
              <span className="absolute inset-0 flex items-center justify-center">
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold text-white py-2"
                    initial={{ opacity: 0, y: -100 }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={titleNumber === index ? { y: 0, opacity: 1 } : { y: titleNumber > index ? -150 : 150, opacity: 0 }}
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </span>
          </h1>
          <p className="text-base md:text-[17px] leading-relaxed tracking-tight text-blue-100/80 max-w-3xl text-center mx-auto font-light">
            Expertos en el registro y defensa de activos intangibles en el Perú.
          </p>
        </div>
      )
    },
    {
      image: "/promarcas/images/promarcas_hero2.png",
      content: (
        <div className="flex flex-col items-center justify-center max-w-5xl mx-auto px-4 mt-4 w-full">
          <p className="text-xl md:text-3xl leading-relaxed tracking-tight text-white text-center font-light">
            "Protegemos los intereses de nuestros clientes con soluciones legales especializadas en seguros, gestión de riesgos y resolución de controversias."
          </p>
        </div>
      )
    },
    {
      image: "/promarcas/images/promarcas_hero3.png",
      content: (
        <div className="flex flex-col items-center justify-center max-w-5xl mx-auto px-4 mt-4 w-full">
          <p className="text-xl md:text-3xl leading-relaxed tracking-tight text-white text-center font-light">
            "Defendemos los derechos e intereses de empresas y consumidores, brindando asesoría legal especializada en conflictos de consumo, reclamaciones y cumplimiento normativo."
          </p>
        </div>
      )
    }
  ];

  return (
    <div className="w-full relative overflow-hidden bg-[#001529] min-h-[100svh] flex items-center justify-center">
      {/* Background Images with Crossfade */}
      <AnimatePresence initial={false}>
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url('${slides[currentSlide].image}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
          }}
        />
      </AnimatePresence>

      {/* Minimalist Navigation Arrows */}
      <button onClick={prevSlide} className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/10 text-white/50 hover:text-white hover:bg-black/30 hover:scale-105 active:scale-95 transition-all backdrop-blur-sm border border-white/5 hidden sm:block group">
        <ChevronLeft className="w-8 h-8 group-hover:-translate-x-0.5 transition-transform" strokeWidth={1.5} />
      </button>
      <button onClick={nextSlide} className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/10 text-white/50 hover:text-white hover:bg-black/30 hover:scale-105 active:scale-95 transition-all backdrop-blur-sm border border-white/5 hidden sm:block group">
        <ChevronRight className="w-8 h-8 group-hover:translate-x-0.5 transition-transform" strokeWidth={1.5} />
      </button>

      <div className="page-container relative z-10 w-full pt-16 pb-24">
        <div className="flex flex-col items-center justify-center w-full">
          {/* Dynamic Content */}
          <div className="w-full flex justify-center items-center h-[260px] md:h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="w-full flex justify-center items-center"
              >
                {slides[currentSlide].content}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Fixed Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 mt-6">
            <Button size="lg" onClick={() => document.getElementById('info-registro')?.scrollIntoView({ behavior: 'smooth' })} className="h-14 px-10 text-base font-semibold bg-primary text-white hover:bg-primary/90 hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 border border-white/20">
              Registrar Marca
            </Button>
            <a href="whatsapp://send?phone=51989870722" className="inline-block">
              <Button size="lg" className="h-14 px-8 text-base font-semibold bg-transparent text-white border-2 border-white/80 hover:border-white hover:bg-white/10 hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 outline-none">
                Asesoría Inmediata <MoveRight className="w-5 h-5 ml-2" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- INFO REGISTRO SECTION ---
function InfoRegistroSection() {
  return (
    <section id="info-registro" className="bg-white py-[80px] px-[2rem]">
      <div className="max-w-[680px] mx-auto">
        <p style={{ fontSize: '1.125rem', color: '#111', borderLeft: '3px solid #111', paddingLeft: '16px', marginBottom: '28px', fontWeight: 400, lineHeight: 1.7, textAlign: 'justify' }}>
          Registrar una marca en el Perú es mucho más que un trámite: es proteger la identidad, la reputación y el valor comercial de un negocio.
        </p>
        <p style={{ fontSize: '0.9375rem', color: '#555', lineHeight: 1.85, fontWeight: 400, marginBottom: '20px', textAlign: 'justify' }}>
          Un registro adecuado permite a las empresas diferenciarse en el mercado, evitar conflictos con terceros y obtener exclusividad sobre el uso de su marca. Sin embargo, un procedimiento mal planteado puede generar observaciones, oposiciones o incluso la denegatoria del registro, afectando directamente la inversión y el crecimiento de una empresa.
        </p>
        <p style={{ fontSize: '0.9375rem', color: '#555', lineHeight: 1.85, fontWeight: 400, marginBottom: 0, textAlign: 'justify' }}>
          Por ello, contar con asesoría legal especializada resulta fundamental para realizar una evaluación estratégica previa, identificar riesgos y garantizar una protección sólida y efectiva de la marca. Nuestro estudio brinda acompañamiento integral durante todo el proceso de registro, defensa y protección de marcas, ofreciendo soluciones legales orientadas a resguardar los activos intangibles y fortalecer la seguridad jurídica de cada negocio.
        </p>
      </div>
    </section>
  );
}

// --- STATS SECTION ---
function StatsSection() {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="stats-section" ref={sectionRef} style={{ width: '100%', padding: '80px 0', background: '#fff' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6rem' }}>
        {/* KPIs left */}
        <div style={{ display: 'flex', gap: '5rem' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '3rem', fontWeight: 700, color: '#111', lineHeight: 1, fontVariantNumeric: 'tabular-nums' }}>
              +<CountUp end={450} duration={3} start={isInView} />
            </div>
            <p style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#888', marginTop: '8px', letterSpacing: '0.1em' }}>Casos Resueltos</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '3rem', fontWeight: 700, color: '#111', lineHeight: 1, fontVariantNumeric: 'tabular-nums' }}>
              +<CountUp end={250} duration={3} start={isInView} />
            </div>
            <p style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#888', marginTop: '8px', letterSpacing: '0.1em' }}>Patentes Inscritas</p>
          </div>
        </div>
        {/* Divider */}
        <div style={{ width: '1px', height: '80px', background: '#ccc', flexShrink: 0 }} />
        {/* Quote right */}
        <blockquote style={{ fontStyle: 'italic', fontSize: '1rem', color: '#666', margin: 0, textAlign: 'justify', lineHeight: 1.7, background: 'none', border: 'none', padding: 0, maxWidth: '400px' }}>
          "Nuestra trayectoria se define por la confianza de nuestros clientes y la excelencia en la defensa estratégica de sus activos intangibles."
        </blockquote>
      </div>
    </section>
  );
}



// --- VALUES ---
const values = [
  { title: "Integridad", description: "Actuamos con honestidad y transparencia en cada caso, priorizando siempre la ética profesional.", icon: <ShieldCheck className="w-8 h-8 text-primary" /> },
  { title: "Compromiso con el cliente", description: "Nos involucramos profundamente en cada asunto, brindando atención personalizada y constante.", icon: <Users className="w-8 h-8 text-primary" /> },
  { title: "Excelencia profesional", description: "Buscamos resultados de la más alta calidad, con rigor jurídico y actualización permanente.", icon: <Award className="w-8 h-8 text-primary" /> },
  { title: "Confidencialidad", description: "Protegemos la información de nuestros clientes con absoluta discreción y respeto.", icon: <Lock className="w-8 h-8 text-primary" /> },
  { title: "Responsabilidad", description: "Asumimos cada caso con seriedad, cumpliendo plazos y obligaciones con precisión.", icon: <CheckCircle className="w-8 h-8 text-primary" /> },
];

function Values() {
  return (
    <section id="compromiso" className="py-24 bg-white">
      <div className="page-container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-primary tracking-tighter mb-4">Nuestro Compromiso</h2>
          <p className="text-gray-500 text-lg">Los pilares que sostienen nuestra excelencia legal y ética profesional.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-screen-xl mx-auto">
          {values.map((value, index) => (
            <div key={index} className="group bg-white p-10 rounded-3xl border border-gray-100 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 flex flex-col items-start">
              <div className="mb-6 p-4 rounded-2xl bg-gray-50 group-hover:bg-primary/5 transition-colors">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-primary mb-4 tracking-tight group-hover:translate-x-1 transition-transform">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm antialiased">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- PRO BONO & CAREERS ---
function ProBono() {
  return (
    <section className="py-24 bg-gray-50 text-primary">
      <div className="page-container max-w-4xl text-center">
        <h2 className="text-4xl font-bold mb-8 tracking-tighter text-primary">Pro Bono</h2>
        <p className="text-xl text-gray-500 leading-relaxed font-light">
          Nuestros abogados dedican una cantidad de horas al año para atender consultas legales de personas de escasos recursos que se encuentran en situación de vulnerabilidad de manera gratuita.
        </p>
      </div>
    </section>
  );
}

function Careers() {
  return (
    <section id="empleo" className="py-24 bg-white">
      <div className="page-container text-center border-2 border-dashed border-gray-100 rounded-[3rem] py-20">
        <Briefcase className="w-16 h-16 text-gray-200 mx-auto mb-6" />
        <h2 className="text-3xl font-bold text-gray-300 mb-4">Trabaja con nosotros</h2>
        <p className="text-gray-400 max-w-md mx-auto">
          Nuestra bolsa de trabajo se encuentra deshabilitada temporalmente por actualizaciones en el sistema.
        </p>
      </div>
    </section>
  );
}

// --- MAIN PAGE ---
export default function Home() {
  return (
    <>
      <Hero />
      <InfoRegistroSection />
      <StatsSection />
      <Values />
      <ProBono />
      <Careers />

    </>
  );
}
