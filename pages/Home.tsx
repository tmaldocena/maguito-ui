
import React, { useState } from 'react';
import { Button, Card, Badge, Alert, Input } from '../components/MaguitoUI';
import { Sparkles, Wand2, MousePointer2, Palette, Zap, Layout as LayoutIcon, MessageCircle, AlertCircle, ArrowRight, RefreshCcw, Package, Github } from 'lucide-react';

const Home: React.FC<{ onNavigate: (path: string) => void }> = ({ onNavigate }) => {
  const [magicText, setMagicText] = useState('');
  const [manaLevel, setManaLevel] = useState(15);
  const [lastSpell, setLastSpell] = useState('Ninguno');
  const [isCasting, setIsCasting] = useState(false);

  const castSpell = (spellName: string) => {
    setLastSpell(spellName);
    setIsCasting(true);
    setTimeout(() => setIsCasting(false), 1000);
  };

  const refillMana = () => {
    setManaLevel(100);
    setTimeout(() => setManaLevel(15), 5000);
  };

  return (
    <div className="space-y-16 md:space-y-32">
      {/* HERO */}
      <section className="relative overflow-hidden bg-maguito-blue/10 border-4 border-maguito-black rounded-maguito-lg p-6 sm:p-12 md:p-24 flex flex-col lg:flex-row items-center gap-10 md:gap-16 shadow-maguito-lg">
        <div className="flex-1 space-y-6 md:space-y-10 text-center lg:text-left z-10">
          <div className="flex flex-wrap justify-center lg:justify-start gap-2">
            <Badge variant="primary" className="shadow-maguito scale-110">v1.1.0 — Disponible en npm</Badge>
            <Badge variant="secondary" className="shadow-maguito">
              <Package size={14} className="mr-1" /> npm install maguitoui
            </Badge>
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black leading-[0.9] text-maguito-black tracking-tighter italic uppercase">
            Magical UI for <br />
            <span className="bg-maguito-yellow px-3 py-1 md:px-4 md:py-2 border-2 md:border-4 border-maguito-black shadow-maguito md:shadow-maguito-lg inline-block my-2 md:my-4 text-maguito-black rotate-2">Creative Minds.</span>
          </h1>
          <p className="text-lg sm:text-2xl md:text-3xl font-bold text-gray-800 max-w-xl leading-relaxed mx-auto lg:mx-0">
            Una librería de componentes con estética neo-brutalista y curvas orgánicas, diseñada para que tus proyectos tengan personalidad propia.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-8 justify-center lg:justify-start pt-4">
            <Button size="lg" onClick={() => onNavigate('intro')} className="w-full sm:w-auto h-16 md:h-20 px-10 md:px-12 text-xl md:text-2xl">
              Conocé MaguitoUI <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={20} />
            </Button>
            <Button size="lg" variant="ghost" onClick={() => onNavigate('installation')} className="w-full sm:w-auto text-xl md:text-2xl group">
              <Package className="mr-2" size={20} /> Instalar Paquete
            </Button>
          </div>
        </div>
        
        <div className="flex-1 relative w-full lg:w-auto">
          <div className="relative z-10 w-full max-w-sm md:max-w-lg mx-auto">
            <div className="border-4 border-maguito-black rounded-full overflow-hidden aspect-square bg-maguito-white shadow-maguito-lg relative">
              <img src="https://picsum.photos/800/800?random=1" alt="Wizard" className="w-full h-full object-cover scale-110 grayscale hover:grayscale-0 transition-all duration-700" />
              <div className="absolute inset-0 bg-maguito-orange/10 mix-blend-multiply"></div>
            </div>
            <div className="absolute -bottom-4 -right-4 md:-bottom-10 md:-right-10 w-20 h-20 md:w-32 md:h-32 bg-maguito-yellow border-4 border-maguito-black rounded-maguito-md shadow-maguito-lg flex items-center justify-center rotate-12 animate-bounce">
               <Wand2 className="text-maguito-black w-10 md:w-16 h-10 md:h-16" />
            </div>
          </div>
          <div className="absolute -top-5 -right-5 w-24 h-24 md:w-48 md:h-48 bg-maguito-orange/20 border-2 border-maguito-black rounded-full blur-2xl md:blur-3xl" />
          <div className="absolute -bottom-10 -left-10 w-32 h-32 md:w-64 md:h-64 bg-maguito-blue/20 border-2 border-maguito-black rounded-full blur-2xl md:blur-3xl" />
        </div>
      </section>

      {/* COMPONENT PREVIEW GRID */}
      <section className="space-y-10 md:space-y-16">
        <div className="text-center space-y-4 md:space-y-6 px-4">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-maguito-black uppercase italic tracking-tighter">The Components</h2>
          <p className="text-lg md:text-2xl font-bold text-gray-700 max-w-2xl mx-auto">Tactile elements with character, soul, and a lot of curves.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 px-4 md:px-0 max-w-6xl mx-auto">
          {/* INTERACTIVE BUTTONS */}
          <Card className="hover:scale-[1.02] transition-all border-4" paddingSize="lg" shadowColor="orange">
            <div className="flex items-center justify-between mb-8 md:mb-12">
               <div className="flex items-center gap-4">
                 <div className="p-3 bg-maguito-orange/20 border-2 border-maguito-black rounded-xl">
                   <MousePointer2 className="text-maguito-orange" size={24} />
                 </div>
                 <h3 className="font-black text-2xl md:text-3xl text-maguito-black uppercase italic tracking-tighter">Buttons</h3>
               </div>
               
            </div>
            <div className="my-8 w-full">
              <Badge variant={isCasting ? "accent" : "neutral"} className="animate-pulse">
                 {isCasting ? "Invocando..." : `Hechizo: ${lastSpell}`}
              </Badge>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-8 md:mb-12">
              <Button size="md" onClick={() => castSpell('Fuego')}>Primary</Button>
              <Button size="md" variant="secondary" onClick={() => castSpell('Hielo')}>Blue</Button>
              <Button size="md" variant="success" onClick={() => castSpell('Naturaleza')}>Green</Button>
              <Button size="md" variant="ghost" onClick={() => castSpell('Invisible')}>Ghost</Button>
            </div>
            <div className="bg-gray-100 p-6 rounded-maguito-md border-2 border-maguito-black font-mono text-xs overflow-hidden text-maguito-black/50">
               {`<Button variant="primary" onClick={castSpell}>Primary</Button>`}
            </div>
          </Card>

          {/* BOLD CARDS */}
          <Card className="bg-maguito-red/5 border-4 hover:scale-[1.02] transition-all" paddingSize="lg" shadowColor="red">
             <div className="flex items-center gap-4 mb-8 md:mb-12">
               <div className="p-3 bg-maguito-red/20 border-2 border-maguito-black rounded-xl">
                 <LayoutIcon className="text-maguito-red" size={24} />
               </div>
               <h3 className="font-black text-2xl md:text-3xl text-maguito-black uppercase italic tracking-tighter">Cards</h3>
            </div>
            <Card 
              variant="interactive" 
              padding={false} 
              className="bg-maguito-white border-4 border-maguito-black shadow-maguito mb-6 group overflow-hidden"
              onClick={() => alert("¡Card interactiva clickeada!")}
            >
               <div className="h-40 md:h-56 bg-gray-200 rounded-maguito-sm flex items-center justify-center relative overflow-hidden">
                  <img src="https://picsum.photos/600/400?random=52" className="w-full h-full object-cover grayscale transition-all group-hover:grayscale-0 group-hover:scale-110 duration-500" />
                  <div className="absolute inset-0 bg-maguito-orange/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <span className="absolute text-4xl group-hover:scale-150 transition-transform">🖼️</span>
               </div>
               <div className="p-4 border-t-2 border-maguito-black">
                  <p className="font-black text-xl text-maguito-black uppercase italic">Project Vault</p>
                  <div className="flex gap-3 mt-3">
                    <Badge variant="success">New</Badge>
                    <Badge variant="neutral">Pro</Badge>
                  </div>
               </div>
            </Card>
          </Card>

          {/* PLAYFUL INPUTS */}
          <Card className="bg-maguito-blue/5 border-4 hover:scale-[1.02] transition-all" paddingSize="lg" shadowColor="blue">
            <div className="flex items-center gap-4 mb-8 md:mb-12">
               <div className="p-3 bg-maguito-blue/20 border-2 border-maguito-black rounded-xl">
                 <MessageCircle className="text-maguito-blue" size={24} />
               </div>
               <h3 className="font-black text-2xl md:text-3xl text-maguito-black uppercase italic tracking-tighter">Inputs</h3>
            </div>
            <div className="space-y-6 md:space-y-8">
               <Input 
                 label="Tu nombre de mago" 
                 placeholder="Escribe tu magia aquí..." 
                 value={magicText}
                 onChange={(e) => setMagicText(e.target.value)}
               />
               <div className="flex items-center gap-4 p-5 bg-maguito-white border-3 border-maguito-black rounded-maguito-md shadow-maguito min-h-[72px] transition-all">
                  <div className={`w-8 h-8 md:w-10 md:h-10 border-2 border-maguito-black rounded-full flex items-center justify-center text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-colors ${magicText ? 'bg-maguito-green' : 'bg-maguito-yellow'}`}>
                    {magicText ? '✨' : '💫'}
                  </div>
                  <span className="text-sm md:text-lg font-black uppercase italic tracking-tight text-gray-800 truncate">
                    {magicText ? `Hola, ${magicText}!` : "Esperando tu nombre..."}
                  </span>
               </div>
            </div>
          </Card>

          {/* SNAPPY ALERTS */}
          <Card className="bg-maguito-yellow/5 border-4 hover:scale-[1.02] transition-all" paddingSize="lg" shadowColor="accent">
             <div className="flex items-center gap-4 mb-8 md:mb-12">
               <div className="p-3 bg-maguito-yellow/20 border-2 border-maguito-black rounded-xl">
                 <AlertCircle className="text-maguito-orange" size={24} />
               </div>
               <h3 className="font-black text-2xl md:text-3xl text-maguito-black uppercase italic tracking-tighter">Alerts</h3>
            </div>
            <div className="space-y-6 md:space-y-8">
               <div 
                 onClick={refillMana} 
                 className="cursor-pointer group transform hover:-translate-y-1 transition-all"
               >
                 <Alert 
                  type={manaLevel < 20 ? "error" : "success"} 
                  className="p-5 border-3 relative overflow-hidden"
                 >
                    <div className="flex items-center justify-between w-full">
                      <span>{manaLevel < 20 ? "¡Mana crítico! Haz click para recargar" : `Mana al ${manaLevel}%`}</span>
                      {manaLevel < 20 && <RefreshCcw className="animate-spin text-maguito-black" size={18} />}
                    </div>
                    {/* Barra de progreso visual interna */}
                    <div className="absolute bottom-0 left-0 h-1 bg-maguito-black/20" style={{ width: `${manaLevel}%` }}></div>
                 </Alert>
               </div>
               
               <Alert type="success" className="p-5 border-3">
                  ¡Hechizo lanzado con éxito!
               </Alert>

               <div className="p-5 border-3 border-maguito-black rounded-maguito-md bg-white shadow-maguito text-center font-black uppercase italic text-xs tracking-[0.2em] hover:bg-maguito-black hover:text-white transition-colors cursor-help">
                 Barra de Información Flotante
               </div>
            </div>
          </Card>
        </div>
      </section>

      {/* WHY MAGUITO UI */}
      <section className="bg-maguito-white border-4 border-maguito-black rounded-maguito-lg p-8 sm:p-16 md:p-32 shadow-maguito-lg text-center space-y-12 md:space-y-24 relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-maguito-orange via-maguito-yellow to-maguito-blue"></div>
         
         <div className="space-y-6 md:space-y-8 relative z-10 px-2">
            <h2 className="text-3xl sm:text-5xl md:text-7xl font-black uppercase italic tracking-tighter text-maguito-black leading-tight md:leading-none">Why use <span className="text-maguito-orange">MaguitoUI?</span></h2>
            <p className="text-lg md:text-2xl font-bold text-gray-700 max-w-3xl mx-auto leading-relaxed">No more boring, generic interfaces. Stand out with bold design, friendly shapes, and a lot of air to let your content shine.</p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 relative z-10">
            <div className="space-y-4 md:space-y-8 group">
               <div className="w-20 h-20 md:w-24 md:h-24 bg-maguito-orange border-4 border-maguito-black rounded-maguito-md mx-auto flex items-center justify-center shadow-maguito-lg rotate-3 group-hover:rotate-12 transition-transform">
                  <Palette className="text-maguito-black" size={32} />
               </div>
               <div className="space-y-2 md:space-y-4">
                 <h3 className="font-black text-2xl md:text-3xl uppercase tracking-tighter italic text-maguito-black">Customizable</h3>
                 <p className="text-base md:text-lg font-bold text-gray-600 leading-relaxed">Tweak every pixel with ease. Our components use standard Tailwind classes and alchemy variables.</p>
               </div>
            </div>
            <div className="space-y-4 md:space-y-8 group">
               <div className="w-20 h-20 md:w-24 md:h-24 bg-maguito-white border-4 border-maguito-black rounded-maguito-md mx-auto flex items-center justify-center shadow-maguito-lg -rotate-6 group-hover:-rotate-12 transition-transform">
                  <Wand2 className="text-maguito-orange" size={32} />
               </div>
               <div className="space-y-2 md:space-y-4">
                 <h3 className="font-black text-2xl md:text-3xl uppercase tracking-tighter italic text-maguito-black">Rounded</h3>
                 <p className="text-base md:text-lg font-bold text-gray-600 leading-relaxed">Bold strokes and organic curves. Designed for projects that need a playful and trustworthy identity.</p>
               </div>
            </div>
            <div className="space-y-4 md:space-y-8 group">
               <div className="w-20 h-20 md:w-24 md:h-24 bg-maguito-black border-4 border-maguito-black rounded-maguito-md mx-auto flex items-center justify-center shadow-maguito-lg rotate-6 group-hover:rotate-[24deg] transition-transform">
                  <Zap className="text-maguito-yellow" size={32} />
               </div>
               <div className="space-y-2 md:space-y-4">
                 <h3 className="font-black text-2xl md:text-3xl uppercase tracking-tighter italic text-maguito-black">Fast Magic</h3>
                 <p className="text-base md:text-lg font-bold text-gray-600 leading-relaxed">Zero bloat, pure performance. Optimized for fast loading and a great, snappy user experience.</p>
               </div>
            </div>
         </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="bg-maguito-black rounded-maguito-lg p-8 sm:p-16 md:p-32 text-center space-y-8 md:space-y-12 shadow-maguito-lg border-4 border-maguito-black relative">
         <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(var(--maguito-primary) 2px, transparent 2px)', backgroundSize: '40px 40px' }}></div>
         <div className="w-16 h-16 md:w-24 md:h-24 bg-maguito-white border-4 border-maguito-black rounded-full mx-auto flex items-center justify-center mb-6 md:mb-10 shadow-maguito-lg animate-pulse relative z-10">
            <span className="text-3xl md:text-5xl">✨</span>
         </div>
         <h2 className="text-3xl sm:text-5xl md:text-8xl font-black text-maguito-white italic tracking-tighter uppercase leading-[0.9] md:leading-[0.85] max-w-5xl mx-auto relative z-10">
            ¿Listo para <span className="text-maguito-orange">invocar</span> la magia en tu próximo proyecto?
         </h2>
         <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-8 justify-center pt-8 md:pt-12 relative z-10">
            <Button size="lg" className="w-full sm:w-auto bg-maguito-yellow hover:bg-[#ffe180] h-16 md:h-24 px-10 md:px-16 text-xl md:text-3xl italic tracking-tighter" onClick={() => onNavigate('installation')}>Instalar Paquete</Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto text-maguito-white border-maguito-white hover:bg-maguito-white hover:text-maguito-black hover:border-maguito-white h-16 md:h-24 px-10 md:px-16 text-xl md:text-3xl italic tracking-tighter" onClick={() => onNavigate('intro')}>Conocé Más</Button>
         </div>
      </section>
    </div>
  );
};

export default Home;
