import React from 'react';
import { Button, Card, Badge, Alert } from '../components/MaguitoUI';
import { Sparkles, Zap, Palette, Code2, Package, ArrowRight, BookOpen, Terminal, Layers, Heart, ShieldCheck, Github } from 'lucide-react';

interface IntroProps {
  onNavigate: (path: string) => void;
}

const Intro: React.FC<IntroProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-16 md:space-y-24">
      {/* HERO DE INTRO */}
      <section className="space-y-8 text-center">
        <div className="flex justify-center">
          <Badge variant="accent" className="shadow-maguito">
            <Sparkles size={14} className="mr-1" /> v1.1.0 — Disponible en npm
          </Badge>
        </div>
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-black text-maguito-black tracking-tighter italic uppercase leading-[0.9]">
          Bienvenido a<br />
          <span className="text-maguito-orange">MaguitoUI</span>
        </h1>
        <p className="text-lg md:text-2xl font-bold text-gray-700 max-w-2xl mx-auto leading-relaxed italic">
          Una librería de componentes React con estética Neo-Brutalista y toques orgánicos, diseñada para que tus proyectos tengan personalidad propia.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center pt-4">
          <Button size="lg" onClick={() => onNavigate('installation')} className="h-16 px-10 text-xl">
            Instalar Ahora <ArrowRight className="ml-2" size={20} />
          </Button>
          <Button size="lg" variant="outline" onClick={() => onNavigate('buttons')} className="h-16 px-10 text-xl">
            Ver Componentes
          </Button>
        </div>
      </section>

      {/* QUE ES */}
      <section className="space-y-8">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-maguito-orange/10 border-2 border-maguito-black rounded-xl">
            <Sparkles className="text-maguito-orange" size={24} />
          </div>
          <h2 className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter">¿Qué es MaguitoUI?</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card paddingSize="lg" className="space-y-6" shadowColor="orange">
            <h3 className="text-xl font-black uppercase italic">La Idea</h3>
            <p className="font-bold text-gray-700 leading-relaxed">
              MaguitoUI nació en <strong className="text-maguito-black">Maguito Studio</strong> como respuesta a un problema real: las librerías de componentes se ven todas iguales. Botones planos, bordes sutiles, sombras difusas... <em>aburrido.</em>
            </p>
            <p className="font-bold text-gray-700 leading-relaxed">
              Creamos una librería con <strong className="text-maguito-orange">bordes sólidos</strong>, <strong className="text-maguito-blue">sombras desplazadas</strong>, <strong className="text-maguito-yellow">curvas orgánicas</strong> y mucha personalidad. Cada componente tiene carácter propio.
            </p>
          </Card>

          <Card paddingSize="lg" className="space-y-6" shadowColor="blue">
            <h3 className="text-xl font-black uppercase italic">La Estética</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-3 h-3 bg-maguito-orange border-2 border-maguito-black rounded-full mt-1 shrink-0" />
                <p className="font-bold text-gray-700"><strong>Neo-Brutalismo:</strong> Bordes gruesos, sombras sólidas, colores vibrantes sin gradientes sutiles.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-3 h-3 bg-maguito-blue border-2 border-maguito-black rounded-full mt-1 shrink-0" />
                <p className="font-bold text-gray-700"><strong>Bubbly:</strong> Curvas redondeadas y orgánicas que suavizan la crudeza del brutalismo clásico.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-3 h-3 bg-maguito-yellow border-2 border-maguito-black rounded-full mt-1 shrink-0" />
                <p className="font-bold text-gray-700"><strong>Temas dinámicos:</strong> Cambiá colores, bordes, sombras y tipografías en tiempo real con variables CSS.</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* FEATURES */}
      <section className="space-y-8">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-maguito-yellow/20 border-2 border-maguito-black rounded-xl">
            <Zap className="text-maguito-black" size={24} />
          </div>
          <h2 className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter">¿Por qué usarla?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card paddingSize="lg" className="space-y-4 text-center group hover:-translate-y-1 transition-transform">
            <div className="w-16 h-16 bg-maguito-orange border-4 border-maguito-black rounded-maguito-md mx-auto flex items-center justify-center shadow-maguito rotate-3 group-hover:rotate-12 transition-transform">
              <Layers size={28} className="text-maguito-black" />
            </div>
            <h3 className="text-lg font-black uppercase italic">66 Componentes</h3>
            <p className="font-bold text-gray-600 text-sm">Botones, cards, inputs, tablas, modales, timelines, carousels y mucho más.</p>
          </Card>

          <Card paddingSize="lg" className="space-y-4 text-center group hover:-translate-y-1 transition-transform">
            <div className="w-16 h-16 bg-maguito-blue border-4 border-maguito-black rounded-maguito-md mx-auto flex items-center justify-center shadow-maguito -rotate-3 group-hover:-rotate-12 transition-transform">
              <Palette size={28} className="text-maguito-black" />
            </div>
            <h3 className="text-lg font-black uppercase italic">100% Personalizable</h3>
            <p className="font-bold text-gray-600 text-sm">Variables CSS para colores, radios, bordes, sombras y tipografías. Creá tu propio tema.</p>
          </Card>

          <Card paddingSize="lg" className="space-y-4 text-center group hover:-translate-y-1 transition-transform">
            <div className="w-16 h-16 bg-maguito-yellow border-4 border-maguito-black rounded-maguito-md mx-auto flex items-center justify-center shadow-maguito rotate-6 group-hover:rotate-[24deg] transition-transform">
              <Code2 size={28} className="text-maguito-black" />
            </div>
            <h3 className="text-lg font-black uppercase italic">TypeScript</h3>
            <p className="font-bold text-gray-600 text-sm">Tipos completos incluidos. Autocompletado y validación en tu IDE.</p>
          </Card>

          <Card paddingSize="lg" className="space-y-4 text-center group hover:-translate-y-1 transition-transform">
            <div className="w-16 h-16 bg-maguito-green border-4 border-maguito-black rounded-maguito-md mx-auto flex items-center justify-center shadow-maguito -rotate-6 group-hover:-rotate-[24deg] transition-transform">
              <Package size={28} className="text-maguito-black" />
            </div>
            <h3 className="text-lg font-black uppercase italic">Instalable via npm</h3>
            <p className="font-bold text-gray-600 text-sm"><code className="bg-maguito-black/5 px-2 py-0.5 rounded">npm install maguitoui</code> y listo para usar.</p>
          </Card>

          <Card paddingSize="lg" className="space-y-4 text-center group hover:-translate-y-1 transition-transform">
            <div className="w-16 h-16 bg-maguito-white border-4 border-maguito-black rounded-maguito-md mx-auto flex items-center justify-center shadow-maguito rotate-3 group-hover:rotate-12 transition-transform">
              <ShieldCheck size={28} className="text-maguito-black" />
            </div>
            <h3 className="text-lg font-black uppercase italic">MIT License</h3>
            <p className="font-bold text-gray-600 text-sm">Open source y libre para uso personal y comercial. Sin restricciones.</p>
          </Card>

          <Card paddingSize="lg" className="space-y-4 text-center group hover:-translate-y-1 transition-transform">
            <div className="w-16 h-16 bg-maguito-black border-4 border-maguito-black rounded-maguito-md mx-auto flex items-center justify-center shadow-maguito -rotate-3 group-hover:-rotate-12 transition-transform">
              <Heart size={28} className="text-maguito-orange" />
            </div>
            <h3 className="text-lg font-black uppercase italic">Hecho con Amor</h3>
            <p className="font-bold text-gray-600 text-sm">Diseñado y desarrollado por Maguito Studio con atención a cada detalle.</p>
          </Card>
        </div>
      </section>

      {/* INSTALACION RAPIDA */}
      <section className="space-y-8">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-maguito-green/20 border-2 border-maguito-black rounded-xl">
            <Terminal className="text-maguito-black" size={24} />
          </div>
          <h2 className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter">Empezar en 3 pasos</h2>
        </div>

        <div className="space-y-4">
          <Card paddingSize="lg" className="flex items-center gap-6" shadowColor="orange">
            <div className="w-12 h-12 bg-maguito-orange border-4 border-maguito-black rounded-full flex items-center justify-center font-black text-xl shadow-maguito shrink-0">1</div>
            <div className="flex-1">
              <h3 className="font-black uppercase italic mb-1">Instalá el paquete</h3>
              <code className="text-sm bg-maguito-black/5 px-3 py-1.5 rounded-maguito-sm font-mono">npm install maguitoui lucide-react</code>
            </div>
          </Card>

          <Card paddingSize="lg" className="flex items-center gap-6" shadowColor="blue">
            <div className="w-12 h-12 bg-maguito-blue border-4 border-maguito-black rounded-full flex items-center justify-center font-black text-xl shadow-maguito shrink-0">2</div>
            <div className="flex-1">
              <h3 className="font-black uppercase italic mb-1">Configurá Tailwind</h3>
              <p className="font-bold text-gray-600 text-sm">Agregá el preset de MaguitoUI a tu <code className="bg-maguito-black/5 px-1.5 py-0.5 rounded">tailwind.config.js</code></p>
            </div>
          </Card>

          <Card paddingSize="lg" className="flex items-center gap-6" shadowColor="accent">
            <div className="w-12 h-12 bg-maguito-yellow border-4 border-maguito-black rounded-full flex items-center justify-center font-black text-xl shadow-maguito shrink-0">3</div>
            <div className="flex-1">
              <h3 className="font-black uppercase italic mb-1">Importá y usá</h3>
              <p className="font-bold text-gray-600 text-sm">Importá los estilos y empezá a usar componentes inmediatamente.</p>
            </div>
          </Card>
        </div>

        <div className="flex justify-center pt-4">
          <Button size="lg" variant="primary" onClick={() => onNavigate('installation')} className="h-14 px-8 text-lg">
            Ver Guía Completa de Instalación <BookOpen className="ml-2" size={18} />
          </Button>
        </div>
      </section>

      {/* REQUISITOS */}
      <section className="space-y-6">
        <Alert type="info" className="border-4 p-6">
          <div className="space-y-2">
            <p className="font-black uppercase italic text-sm">Requisitos Técnicos</p>
            <ul className="font-bold text-sm space-y-1">
              <li>• <strong>React</strong> 18.0.0 o superior</li>
              <li>• <strong>Tailwind CSS</strong> 3.0.0 o superior</li>
              <li>• <strong>Lucide React</strong> para los iconos (peer dependency)</li>
              <li>• <strong>TypeScript</strong> recomendado (tipos incluidos)</li>
            </ul>
          </div>
        </Alert>
      </section>

      {/* CTA FINAL */}
      <section className="bg-maguito-black rounded-maguito-lg p-8 sm:p-16 text-center space-y-8 border-4 border-maguito-black shadow-maguito-lg relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(var(--maguito-primary) 2px, transparent 2px)', backgroundSize: '32px 32px' }} />
        <div className="relative z-10 space-y-6">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-maguito-white italic tracking-tighter uppercase">
            ¿Listo para crear <span className="text-maguito-orange">magia</span>?
          </h2>
          <p className="text-lg font-bold text-gray-400 max-w-xl mx-auto">
            Explorá los 66 componentes, personalizá temas y empezá a construir interfaces con personalidad.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center pt-4">
            <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-lg bg-maguito-yellow hover:bg-[#ffe180]" onClick={() => onNavigate('buttons')}>
              Explorar Componentes
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 text-lg text-maguito-white border-maguito-white hover:bg-maguito-white hover:text-maguito-black" onClick={() => onNavigate('themes')}>
              Temas y Colores
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Intro;
