import React from "react";

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 pt-20 pb-10">
      <div className="page-container">
        <div className="flex flex-col items-center text-center">
           {/* LOGO */}
           <div className="mb-10">
              <img src="/promarcas/images/promarcas_imagotipo.png" alt="Logo Estudio Jurídico" className="h-16 w-auto" />
           </div>
           
           <div className="flex flex-wrap justify-center gap-8 mb-12 text-sm text-gray-500 font-medium">
              <a href="#" className="hover:text-primary transition-colors">Políticas de Privacidad</a>
              <a href="#" className="hover:text-primary transition-colors">Cookies</a>
              <a href="#" className="hover:text-primary transition-colors">Términos y Condiciones</a>
              <a href="#" className="hover:text-primary transition-colors">Libro de Reclamaciones</a>
           </div>

           <div className="w-full border-t border-gray-100 pt-10 flex flex-col md:flex-row justify-center items-center text-xs text-gray-400 gap-4">
              <p>© 2026 Promarcas. Todos los derechos reservados.</p>
           </div>
        </div>
      </div>
    </footer>
  );
}
