"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function ContactoPage() {
  const title = "Contáctenos";
  const description = "Estamos listos para proteger sus activos más valiosos. Contáctanos hoy para tener una asesoría especializada.";
  const phone = "+51 989 870 722";
  const email = "contacto@promarcas.com";

  return (
    <div className="w-full min-h-screen bg-white pt-48 pb-48">
      <div className="page-container max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20">

          {/* Left Column: Info */}
          <div className="flex-1 lg:max-w-md pt-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="mb-4 text-5xl font-semibold lg:text-6xl text-primary tracking-tighter">
                {title}
              </h1>
              <p className="text-base md:text-[17px] leading-relaxed tracking-tight text-gray-500 mb-8 font-light">
                {description}
              </p>

              <div className="space-y-8">
                <div>
                  <h3 className="mb-6 text-center text-sm font-bold lg:text-left text-[#111] uppercase tracking-wider">
                    Detalles de Contacto
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 text-gray-600">
                      <Phone className="w-5 h-5 text-primary/60" />
                      <div>
                        <span className="text-lg font-medium">{phone}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 text-gray-600">
                      <Mail className="w-5 h-5 text-primary/60" />
                      <div>
                        <a href={`mailto:${email}`} className="text-lg font-medium underline hover:text-primary transition-colors">
                          {email}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Form */}
          <div className="flex-[2]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-xl shadow-[0_2px_20px_rgb(0,0,0,0.06)] border border-gray-100 p-6 md:p-8"
            >
              <form action="mailto:contacto@promarcas.com" method="POST" encType="text/plain" className="space-y-5">
                <fieldset disabled className="space-y-5 group">
                  <div className="flex flex-col md:flex-row gap-5">
                    <div className="flex-1 space-y-2">
                      <Label htmlFor="firstname" className="text-sm font-bold text-gray-400">Nombre</Label>
                      <Input
                        type="text"
                        id="firstname"
                        name="Nombre"
                        placeholder="Formulario deshabilitado temporalmente"
                        className="h-10 bg-gray-50 border-0 border-b border-gray-200 rounded-none px-0 shadow-none text-gray-400 cursor-not-allowed"
                        required
                        disabled
                      />
                    </div>
                    <div className="flex-1 space-y-1">
                      <Label htmlFor="lastname" className="text-sm font-bold text-gray-400">Apellido</Label>
                      <Input
                        type="text"
                        id="lastname"
                        name="Apellido"
                        placeholder="Formulario deshabilitado"
                        className="h-10 bg-gray-50 border-0 border-b border-gray-200 rounded-none px-0 shadow-none text-gray-400 cursor-not-allowed"
                        disabled
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <Label htmlFor="email" className="text-sm font-bold text-gray-400">Correo Electrónico</Label>
                    <Input
                      type="email"
                      id="email"
                      name="Correo"
                      placeholder="Formulario deshabilitado"
                      className="h-10 bg-gray-50 border-0 border-b border-gray-200 rounded-none px-0 shadow-none text-gray-400 cursor-not-allowed"
                      required
                      disabled
                    />
                  </div>

                  <div className="space-y-1">
                    <Label htmlFor="subject" className="text-sm font-bold text-gray-400">Asunto</Label>
                    <Input
                      type="text"
                      id="subject"
                      name="subject"
                      placeholder="Formulario deshabilitado"
                      className="h-10 bg-gray-50 border-0 border-b border-gray-200 rounded-none px-0 shadow-none text-gray-400 cursor-not-allowed"
                      disabled
                    />
                  </div>

                  <div className="space-y-1">
                    <Label htmlFor="message" className="text-sm font-bold text-gray-400">Mensaje</Label>
                    <Textarea
                      id="message"
                      name="Mensaje"
                      placeholder="El formulario de contacto está deshabilitado temporalmente por mantenimiento."
                      className="h-10 bg-gray-50 border-0 border-b border-gray-200 rounded-none px-0 shadow-none text-gray-400 resize-none overflow-hidden cursor-not-allowed"
                      required
                      disabled
                    />
                  </div>

                  <div className="mt-4">
                    <Button type="button" disabled size="lg" className="w-full h-12 text-base font-semibold bg-gray-300 text-gray-500 cursor-not-allowed border border-gray-200">
                      Formulario Bloqueado <MoveRight className="w-5 h-5 ml-2" />
                    </Button>
                  </div>
                </fieldset>
              </form>
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
}
