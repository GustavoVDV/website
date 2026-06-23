"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";

export default function PropiedadIntelectualPage() {
  return (
    <div className="w-full min-h-screen bg-white">
      {/* HERO SECTION */}
      <div 
        className="w-full min-h-[100svh] flex items-center justify-center relative overflow-hidden bg-primary"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url('/images/promarcas_propiedadintelectualportada.jpg')",
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
            Propiedad Intelectual
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
              Protegemos los activos intangibles que representan el valor y la identidad de cada negocio. Brindamos asesoría especializada en el registro, protección, defensa y gestión estratégica de marcas, nombres comerciales, derechos de autor, patentes, diseños industriales y secretos empresariales de nuestros clientes.
            </p>

            <div style={{ paddingLeft: '20px', paddingRight: '20px', paddingTop: '20px', paddingBottom: '20px', background: '#f9f9f9', borderLeft: '2px solid rgba(0,21,41,0.15)', marginBottom: '20px' }}>
              <p style={{ fontSize: '0.9375rem', color: '#111', fontWeight: 700, marginBottom: '16px' }}>
                Nuestra práctica de Propiedad Intelectual se divide de la siguiente manera:
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  'Marcas y otros signos distintivos.',
                  'Patentes de invención.',
                  'Litigios en defensa de nuestros clientes.',
                  'Asesoría legal en Contratos de Licencia y transferencia.',
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.9375rem', color: '#444', fontWeight: 500 }}>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#001529', flexShrink: 0 }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <p style={{ fontSize: '0.9375rem', color: '#555', lineHeight: 1.85, fontWeight: 400, marginBottom: '20px', textAlign: 'justify' }}>
              Nuestro enfoque combina conocimiento jurídico y visión comercial para garantizar que las creaciones, innovaciones y desarrollos de nuestros clientes se encuentren debidamente resguardados frente a usos indebidos, competencia desleal o vulneraciones de derechos.
            </p>
            <p style={{ fontSize: '0.9375rem', color: '#555', lineHeight: 1.85, fontWeight: 400, marginBottom: 0, textAlign: 'justify' }}>
              Asimismo, acompañamos a empresas, emprendedores y creadores en procedimientos administrativos, negociaciones, licenciamientos, contratos tecnológicos y acciones judiciales vinculadas a la propiedad intelectual, ofreciendo soluciones eficaces orientadas a la protección y valorización de sus activos. Y con ello protegemos no sólo su futuro de posibles actos destinados a comprometer sus creaciones sino también el futuro de sus familias.
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
