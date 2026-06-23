"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isContacto = pathname === "/contacto";
  // Always transparent at top, dark on scroll — except on Contacto where it's always dark text
  const isDarkText = scrolled || isContacto;
  const hoverClass = isDarkText ? "hover:text-primary" : "hover:text-gray-300";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={cn(
      "w-full fixed top-0 z-50 transition-all duration-500 ease-in-out border-b",
      scrolled
        ? "bg-white/95 backdrop-blur-md border-gray-100 shadow-sm h-16"
        : "bg-transparent border-transparent h-24"
    )}>
      <div className="page-container flex h-full items-center justify-between">
        {/* LOGO LEFT */}
        <div className="flex-1">
          <Link href="/" className="flex items-center">
            <img src="/images/promarcas_imagotipo.png" alt="Logo" className={cn(
              "transition-all duration-500 ease-in-out transform w-auto",
              scrolled ? "h-9 scale-95" : "h-14 scale-100",
              !scrolled && !isContacto && "brightness-0 invert"
            )} />
          </Link>
        </div>

        {/* LINKS CENTER */}
        <div className={cn(
          "hidden md:flex flex-1 justify-center items-center gap-5 lg:gap-8 text-sm font-medium transition-colors",
          isDarkText ? "text-gray-600" : "text-white"
        )}>
          {pathname !== "/" && (
            <Link href="/" className={cn("transition-colors whitespace-nowrap", hoverClass)}>Inicio</Link>
          )}
          {pathname !== "/nosotros" && (
            <Link href="/nosotros" className={cn("transition-colors whitespace-nowrap", hoverClass)}>Nosotros</Link>
          )}
          <Link href="/#compromiso" className={cn("transition-colors whitespace-nowrap", hoverClass)}>Nuestro Compromiso</Link>
          
          <div className="relative group py-2">
            <Link href="#" onClick={(e) => e.preventDefault()} className={cn("transition-colors whitespace-nowrap flex items-center gap-1", hoverClass)}>
              Áreas de Práctica
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-60 group-hover:rotate-180 transition-transform duration-300"><path d="m6 9 6 6 6-6"/></svg>
            </Link>
            
            <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[280px] bg-white border border-gray-100 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] rounded-none opacity-0 invisible translate-y-3 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-400 overflow-hidden flex flex-col z-50">
              <Link href="/competencia-desleal" className="px-6 py-2.5 hover:bg-gray-50 text-gray-600 hover:text-primary transition-colors border-b border-gray-50 text-[13px] font-semibold flex items-center gap-2 group/item">
                <span className="w-1.5 h-1.5 rounded-full bg-primary/30 group-hover/item:bg-primary transition-colors"></span>
                Competencia Desleal
              </Link>
              <Link href="/litigios-resolucion-conflictos" className="px-6 py-2.5 hover:bg-gray-50 text-gray-600 hover:text-primary transition-colors border-b border-gray-50 text-[13px] font-semibold flex items-center gap-2 group/item">
                <span className="w-1.5 h-1.5 rounded-full bg-primary/30 group-hover/item:bg-primary transition-colors"></span>
                Litigios y Resolución de Conflictos
              </Link>
              <Link href="/propiedad-intelectual" className="px-6 py-2.5 hover:bg-gray-50 text-gray-600 hover:text-primary transition-colors border-b border-gray-50 text-[13px] font-semibold flex items-center gap-2 group/item">
                <span className="w-1.5 h-1.5 rounded-full bg-primary/30 group-hover/item:bg-primary transition-colors"></span>
                Propiedad Intelectual
              </Link>
              <Link href="/proteccion-consumidor" className="px-6 py-2.5 hover:bg-gray-50 text-gray-600 hover:text-primary transition-colors border-b border-gray-50 text-[13px] font-semibold flex items-center gap-2 group/item">
                <span className="w-1.5 h-1.5 rounded-full bg-primary/30 group-hover/item:bg-primary transition-colors"></span>
                Protección al Consumidor
              </Link>
              <Link href="/seguros-responsabilidad-social" className="px-6 py-2.5 hover:bg-gray-50 text-gray-600 hover:text-primary transition-colors text-[13px] font-semibold flex items-center gap-2 group/item">
                <span className="w-1.5 h-1.5 rounded-full bg-primary/30 group-hover/item:bg-primary transition-colors"></span>
                Seguros y Responsabilidad Social
              </Link>
            </div>
          </div>

          <Link href="/#empleo" className={cn("transition-colors whitespace-nowrap", hoverClass)}>Trabaja con Nosotros</Link>
          {pathname !== "/contacto" && (
            <Link href="/contacto" className={cn("transition-colors whitespace-nowrap", hoverClass)}>Contacto</Link>
          )}
        </div>

        {/* RIGHT EN|ES */}
        <div className="flex-1 flex justify-end items-center gap-6">
          <div className={cn(
            "flex items-center gap-2 text-sm font-bold transition-colors",
            isDarkText ? "text-gray-400" : "text-white/80"
          )}>
            <span className={cn(isDarkText ? "text-primary" : "text-white", "cursor-pointer")}>ES</span>
            <span>|</span>
            <span className={cn("cursor-pointer transition-colors", isDarkText ? "hover:text-primary" : "hover:text-gray-300")}>EN</span>
          </div>
        </div>
      </div>
    </nav>
  );
}
