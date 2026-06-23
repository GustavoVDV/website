"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";

export default function CompetenciaDeslealPage() {
  return (
    <div className="w-full min-h-screen bg-white">
      {/* HERO SECTION */}
      <div 
        className="w-full min-h-[100svh] flex items-center justify-center relative overflow-hidden bg-primary"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url('/images/promarcas_competenciadesleal.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        <div className="page-container relative z-10 w-full flex flex-col items-center justify-center text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold tracking-tighter text-white max-w-4xl leading-tight"
          >
            Competencia Desleal
          </motion.h1>
        </div>
      </div>

      {/* CONTENT SECTION */}
      <section className="bg-white py-20 px-[2rem]">
        <div className="max-w-[680px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <p style={{ fontSize: '1.125rem', color: '#111', borderLeft: '3px solid #111', paddingLeft: '16px', marginBottom: '28px', fontWeight: 400, lineHeight: 1.7, textAlign: 'justify' }}>
              Asesoramos y representamos a empresas en la prevención, detección y defensa frente a actos de competencia desleal que puedan afectar su posicionamiento, reputación o participación en el mercado. Nuestro enfoque combina análisis jurídico y estrategia empresarial para proteger los intereses comerciales de nuestros clientes en entornos altamente competitivos.
            </p>
            <p style={{ fontSize: '0.9375rem', color: '#555', lineHeight: 1.85, fontWeight: 400, marginBottom: '20px', textAlign: 'justify' }}>
              Contamos con experiencia en casos relacionados con actos de engaño, confusión, explotación indebida de reputación ajena, publicidad ilícita, violación de secretos empresariales, actos de denigración y otras prácticas contrarias a la buena fe comercial y a las normas de libre competencia.
            </p>
            <p style={{ fontSize: '0.9375rem', color: '#555', lineHeight: 1.85, fontWeight: 400, marginBottom: 0, textAlign: 'justify' }}>
              Brindamos acompañamiento integral en procedimientos administrativos, medidas cautelares, negociaciones y procesos judiciales, desarrollando estrategias eficaces orientadas a detener conductas ilícitas, minimizar riesgos y salvaguardar la posición competitiva de cada empresa.
            </p>

            <div className="mt-16 pt-12 border-t border-gray-100 text-center">
              <h3 className="text-xl font-bold text-primary mb-3">¿Requiere asesoría en esta materia?</h3>
              <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                Nuestro equipo de especialistas está listo para guiarle y diseñar una estrategia a la medida de su empresa.
              </p>
              <a href="whatsapp://send?phone=51989870722" className="inline-block">
                <Button size="lg" className="h-14 px-10 text-base font-semibold bg-primary text-white hover:bg-primary/90 hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 border border-white/20">
                  Iniciar Asesoría Inmediata <MoveRight className="w-5 h-5 ml-2 inline-block" />
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
