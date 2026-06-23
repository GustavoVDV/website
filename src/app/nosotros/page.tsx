"use client";
import { MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const members = [
    {
        name: 'Socio 1',
        role: 'Socio Principal',
        avatar: '',
        link: '#',
    },
    {
        name: 'Socio 2',
        role: 'Socio Especialista',
        avatar: '',
        link: '#',
    },
    {
        name: 'Socio 3',
        role: 'Socio Especialista',
        avatar: '',
        link: '#',
    },
]

export default function NosotrosPage() {
    return (
        <section className="bg-white py-16 md:py-32 min-h-screen">
            <div className="page-container">
                <div className="mt-12 gap-8 sm:grid sm:grid-cols-2 md:mt-24">
                    <div className="sm:w-full">
                        <h2 className="text-4xl font-bold sm:text-5xl tracking-tighter text-primary">Nuestro equipo</h2>
                    </div>
                    <div className="mt-6 sm:mt-0 text-gray-600 space-y-4">
                        <p className="leading-relaxed">
                            El Estudio está conformado por abogados especializados en diversas áreas del Derecho, comprometidos con brindar una asesoría jurídica estratégica, cercana y de alto nivel.
                        </p>
                        <p className="leading-relaxed">
                            Nuestra experiencia se enfoca principalmente en Competencia Desleal, Propiedad Intelectual, Protección al Consumidor, Derecho de Seguros, Litigios y Resolución de Conflictos. Áreas en las cuales ofrecemos soluciones legales orientadas a la protección y defensa de los intereses de nuestros clientes.
                        </p>
                    </div>
                </div>
                <div className="mt-12 md:mt-24">
                    <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                        {members.map((member, index) => (
                            <div key={index} className="group overflow-hidden">
                                <div className="h-96 w-full rounded-md bg-gray-100 grayscale transition-all duration-500 hover:grayscale-0 group-hover:h-[22.5rem] group-hover:rounded-xl flex items-center justify-center">
                                    <div className="text-gray-300 text-6xl font-bold">{index + 1}</div>
                                </div>
                                <div className="px-2 pt-2 sm:pb-0 sm:pt-4">
                                    <div className="flex justify-between">
                                        <h3 className="text-primary text-base font-medium transition-all duration-500 group-hover:tracking-wider">{member.name}</h3>
                                        <span className="text-xs text-gray-400">_0{index + 1}</span>
                                    </div>
                                    <div className="mt-1 flex items-center justify-between">
                                        <span className="text-muted-foreground inline-block translate-y-6 text-sm opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">{member.role}</span>
                                        <a href={member.link} className="text-primary inline-block translate-y-8 text-sm tracking-wide opacity-0 transition-all duration-500 hover:underline group-hover:translate-y-0 group-hover:opacity-100 font-bold">
                                            Ver Perfil
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
