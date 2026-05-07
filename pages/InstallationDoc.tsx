
import React from 'react';
import { Terminal, Package, Palette, Wand2, Clipboard, CheckCircle2, ChevronRight, Zap, Code, AlertTriangle, Info, AlertCircle, Layers, Paintbrush } from 'lucide-react';
import { Card, Button, Badge, Alert, Accordion, Kbd } from '../components/MaguitoUI';

const InstallationDoc: React.FC = () => {
  const [copied, setCopied] = React.useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const codeBlocks = {
    npm: 'npm install maguitoui lucide-react',
    tailwind: `// tailwind.config.js
module.exports = {
  presets: [
    require('maguitoui/preset')
  ],
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/maguitoui/**/*.{js,ts,jsx,tsx}",
  ],
}`,
    css: `/* Tu archivo CSS global (index.css / globals.css) */
import 'maguitoui/styles';

/* Opcional: sobrescribir variables */
:root {
  --maguito-primary: #F18652;
  --maguito-secondary: #79BCE8;
  --maguito-stroke: 3px;
  --maguito-shadow-depth: 6px;
}`,
    usage: `import { Button, Card, Input, Badge } from 'maguitoui';
import 'maguitoui/styles';

export default function MagicApp() {
  return (
    <Card className="p-6" shadowColor="orange">
      <Badge variant="primary">Nuevo</Badge>
      <h2 className="text-2xl font-bold mt-4">Hola MaguitoUI</h2>
      <Input label="Email" placeholder="tu@email.com" className="mt-4" />
      <Button variant="primary" className="mt-4">Enviar</Button>
    </Card>
  );
}`,
    manual: `/* CSS global sin usar el preset */
:root {
  --maguito-primary: #F18652;
  --maguito-secondary: #79BCE8;
  --maguito-accent: #FDCB63;
  --maguito-bg: #FEFEFC;
  --maguito-text: #2C2C2C;
  --maguito-danger: #E95B6F;
  --maguito-success: #A2D149;
  --maguito-warning: #FBBF24;
  --maguito-info: #67E8F9;

  --maguito-radius-lg: 40px;
  --maguito-radius-md: 16px;
  --maguito-radius-sm: 8px;
  --maguito-stroke: 3px;
  --maguito-shadow-depth: 6px;
  --maguito-font-body: 'Plus Jakarta Sans', sans-serif;
  --maguito-font-display: 'Fredoka', sans-serif;
}

.border-maguito {
  border-width: var(--maguito-stroke);
  border-style: solid;
  border-color: var(--maguito-text);
}

.shadow-maguito {
  box-shadow: var(--maguito-shadow-depth) var(--maguito-shadow-depth) 0px 0px var(--maguito-text);
}

.shadow-maguito-lg {
  box-shadow: calc(var(--maguito-shadow-depth) * 1.5) calc(var(--maguito-shadow-depth) * 1.5) 0px 0px var(--maguito-text);
}`
  };

  const CodeBlock = ({ code, id, label }: { code: string; id: string; label: string }) => (
    <Card className="bg-maguito-black text-maguito-white overflow-hidden p-0 border-4" shadowColor="orange">
       <div className="flex items-center justify-between px-6 py-4 border-b-2 border-white/10">
         <div className="flex items-center gap-3">
           <Terminal size={18} className="text-maguito-orange" />
           <span className="text-xs font-black uppercase tracking-widest text-gray-400">{label}</span>
         </div>
         <button onClick={() => copyToClipboard(code, id)} className="hover:text-maguito-orange transition-colors">
           {copied === id ? <CheckCircle2 size={18} className="text-maguito-green" /> : <Clipboard size={18} />}
         </button>
       </div>
       <pre className="p-6 md:p-8 font-mono text-xs md:text-sm text-maguito-orange overflow-x-auto leading-relaxed max-h-[500px]">
         {code}
       </pre>
    </Card>
  );

  return (
    <div className="space-y-16 md:space-y-24">
      <div className="space-y-6">
        <Badge variant="accent">Guía de Inicio</Badge>
        <h1 className="text-4xl md:text-7xl font-black text-maguito-black tracking-tighter leading-tight italic uppercase">
          Instalación <span className="text-maguito-orange">Oficial</span>
        </h1>
        <p className="text-lg md:text-2xl font-bold text-gray-700 max-w-3xl leading-relaxed">
          MaguitoUI es un paquete de npm listo para usar. Seguí estos pasos para integrar el diseño de Maguito Studio en cualquier proyecto React con Tailwind CSS.
        </p>
      </div>

      {/* PASO 1 */}
      <section className="space-y-8">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-maguito-orange border-4 border-maguito-black rounded-full flex items-center justify-center font-black text-xl shadow-maguito">1</div>
          <h2 className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter">Instalar el Paquete</h2>
        </div>
        <Card className="space-y-6 border-4" paddingSize="lg">
          <p className="font-bold text-gray-700 text-lg leading-relaxed">
            Instalá <strong>maguitoui</strong> y su dependencia de iconos <strong>lucide-react</strong>:
          </p>
          <CodeBlock code={codeBlocks.npm} id="npm" label="Terminal" />
          <Alert type="info" className="border-4">
            <div>
              <p className="font-black text-sm uppercase mb-1">Requisitos</p>
              <ul className="font-bold text-sm space-y-1">
                <li>• React 18.0.0 o superior</li>
                <li>• Tailwind CSS 3.0.0 o superior</li>
                <li>• Lucide React (se instala junto con el paquete)</li>
              </ul>
            </div>
          </Alert>
        </Card>
      </section>

      {/* PASO 2 */}
      <section className="space-y-8">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-maguito-blue border-4 border-maguito-black rounded-full flex items-center justify-center font-black text-xl shadow-maguito">2</div>
          <h2 className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter">Configurar Tailwind</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="space-y-8 border-4" paddingSize="lg">
            <h3 className="text-2xl font-black italic">Opción A: Preset Oficial (Recomendado)</h3>
            <p className="font-bold text-gray-700 leading-relaxed">
              Agregá nuestro preset a tu <code className="bg-maguito-black/5 px-2 py-0.5 rounded-maguito-sm font-mono text-sm">tailwind.config.js</code> para heredar automáticamente todos los tokens de diseño.
            </p>
            <div className="space-y-3 pt-2">
               <div className="flex items-center gap-3 font-bold text-sm">
                 <div className="w-5 h-5 bg-maguito-orange border-2 border-maguito-black rounded flex items-center justify-center"><ChevronRight size={12} className="text-maguito-black" /></div>
                 Colores: <code className="bg-maguito-black/5 px-1.5 py-0.5 rounded text-xs">maguito-orange</code>, <code className="bg-maguito-black/5 px-1.5 py-0.5 rounded text-xs">maguito-blue</code>, etc.
               </div>
               <div className="flex items-center gap-3 font-bold text-sm">
                 <div className="w-5 h-5 bg-maguito-blue border-2 border-maguito-black rounded flex items-center justify-center"><ChevronRight size={12} className="text-maguito-black" /></div>
                 Radios: <code className="bg-maguito-black/5 px-1.5 py-0.5 rounded text-xs">rounded-maguito-lg</code> (40px)
               </div>
               <div className="flex items-center gap-3 font-bold text-sm">
                 <div className="w-5 h-5 bg-maguito-yellow border-2 border-maguito-black rounded flex items-center justify-center"><ChevronRight size={12} className="text-maguito-black" /></div>
                 Fuentes: <code className="bg-maguito-black/5 px-1.5 py-0.5 rounded text-xs">font-display</code>, <code className="bg-maguito-black/5 px-1.5 py-0.5 rounded text-xs">font-sans</code>
               </div>
            </div>
          </Card>
          <CodeBlock code={codeBlocks.tailwind} id="tailwind" label="tailwind.config.js" />
        </div>
      </section>

      {/* PASO 3 */}
      <section className="space-y-8">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-maguito-yellow border-4 border-maguito-black rounded-full flex items-center justify-center font-black text-xl shadow-maguito">3</div>
          <h2 className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter">Importar Estilos y Usar</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <Card className="border-4" paddingSize="lg">
              <h3 className="text-xl font-black italic mb-4 flex items-center gap-2">
                <Paintbrush size={20} className="text-maguito-orange" /> Importar CSS
              </h3>
              <p className="font-bold text-gray-700 mb-4">
                Agregá esta línea en tu punto de entrada (<code className="bg-maguito-black/5 px-1.5 py-0.5 rounded text-xs font-mono">main.tsx</code>, <code className="bg-maguito-black/5 px-1.5 py-0.5 rounded text-xs font-mono">App.tsx</code> o <code className="bg-maguito-black/5 px-1.5 py-0.5 rounded text-xs font-mono">index.css</code>):
              </p>
              <CodeBlock code={`import 'maguitoui/styles';`} id="css-import" label="Import" />
            </Card>
            <Card className="border-4" paddingSize="lg">
              <h3 className="text-xl font-black italic mb-4">¡Y listo!</h3>
              <p className="font-bold text-gray-700 mb-4">Empezá a usar componentes inmediatamente:</p>
              <CodeBlock code={codeBlocks.usage} id="usage" label="App.tsx" />
            </Card>
          </div>
          <div className="space-y-6">
            <Card variant="interactive" paddingSize="lg" className="border-4" shadowColor="black">
               <div className="space-y-6 text-center">
                  <div className="w-20 h-20 bg-maguito-green border-4 border-maguito-black rounded-full mx-auto flex items-center justify-center shadow-maguito rotate-12">
                    <Zap size={32} className="text-maguito-black" />
                  </div>
                  <h3 className="text-3xl font-black uppercase italic tracking-tighter">Magia Instalada</h3>
                  <p className="font-bold text-gray-700">
                    Ya tenés todo listo. Explorá los 66 componentes y personalizá el tema a tu gusto.
                  </p>
                  <div className="flex gap-3 justify-center">
                    <Button variant="primary" onClick={() => { window.location.hash = '#components'; }}>Ver Componentes</Button>
                    <Button variant="ghost" onClick={() => { window.location.hash = '#themes'; }}>Temas</Button>
                  </div>
               </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CONFIGURACION MANUAL (Alternativa al preset) */}
      <section className="space-y-8">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-maguito-black text-white border-4 border-maguito-black rounded-full flex items-center justify-center font-black text-xl shadow-maguito">+</div>
          <h2 className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter">Configuración Manual (Sin Preset)</h2>
        </div>
        <Card className="border-4" paddingSize="lg">
          <p className="font-bold text-gray-700 text-lg leading-relaxed mb-4">
            Si preferís no usar el preset, podés definir las variables CSS manualmente en tu archivo de estilos globales. Esto te da control total sobre cada valor:
          </p>
          <CodeBlock code={codeBlocks.manual} id="manual-css" label="globals.css" />
          <div className="mt-6">
            <Alert type="info" className="border-4">
              <div>
                <p className="font-black text-sm uppercase mb-1">Nota</p>
                <p className="text-sm font-bold">Sin el preset, las clases de Tailwind como <code className="bg-maguito-black/5 px-1.5 py-0.5 rounded text-xs">bg-maguito-orange</code> no estarán disponibles automáticamente. Necesitás configurar los colores manualmente en tu <code className="bg-maguito-black/5 px-1.5 py-0.5 rounded text-xs">tailwind.config.js</code>.</p>
              </div>
            </Alert>
          </div>
        </Card>
      </section>

      {/* VARIABLES CSS */}
      <section className="space-y-8">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-maguito-orange/10 border-2 border-maguito-black rounded-xl">
            <Layers className="text-maguito-orange" size={24} />
          </div>
          <h2 className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter">Variables CSS Completas</h2>
        </div>

        <Accordion items={[
          {
            title: "Colores",
            icon: <Palette size={20} />,
            content: (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                {[
                  { name: '--maguito-primary', default: '#F18652', desc: 'Naranja principal' },
                  { name: '--maguito-secondary', default: '#79BCE8', desc: 'Azul secundario' },
                  { name: '--maguito-accent', default: '#FDCB63', desc: 'Amarillo acento' },
                  { name: '--maguito-bg', default: '#FEFEFC', desc: 'Color de fondo' },
                  { name: '--maguito-text', default: '#2C2C2C', desc: 'Texto principal' },
                  { name: '--maguito-danger', default: '#E95B6F', desc: 'Rojo error' },
                  { name: '--maguito-success', default: '#A2D149', desc: 'Verde éxito' },
                  { name: '--maguito-warning', default: '#FBBF24', desc: 'Amarillo alerta' },
                  { name: '--maguito-info', default: '#67E8F9', desc: 'Cyan info' },
                ].map(v => (
                  <div key={v.name} className="flex items-start gap-3 p-3 bg-gray-50 rounded-maguito-md">
                    <code className="text-xs font-mono font-bold shrink-0">{v.name}</code>
                    <div className="text-xs">
                      <span className="font-bold text-gray-500">{v.default}</span>
                      <span className="text-gray-400 ml-2">{v.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            )
          },
          {
            title: "Geometría (Bordes y Sombras)",
            icon: <Layers size={20} />,
            content: (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                {[
                  { name: '--maguito-radius-lg', default: '40px', desc: 'Cards, modales, hero' },
                  { name: '--maguito-radius-md', default: '16px', desc: 'Botones, inputs' },
                  { name: '--maguito-radius-sm', default: '8px', desc: 'Badges, chips' },
                  { name: '--maguito-stroke', default: '3px', desc: 'Grosor de todos los bordes' },
                  { name: '--maguito-shadow-depth', default: '6px', desc: 'Profundidad de sombra' },
                ].map(v => (
                  <div key={v.name} className="flex items-start gap-3 p-3 bg-gray-50 rounded-maguito-md">
                    <code className="text-xs font-mono font-bold shrink-0">{v.name}</code>
                    <div className="text-xs">
                      <span className="font-bold text-gray-500">{v.default}</span>
                      <span className="text-gray-400 ml-2">{v.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            )
          },
          {
            title: "Tipografías",
            icon: <Info size={20} />,
            content: (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                {[
                  { name: '--maguito-font-body', default: "'Plus Jakarta Sans', sans-serif", desc: 'Texto general, inputs' },
                  { name: '--maguito-font-display', default: "'Fredoka', sans-serif", desc: 'Headings, títulos' },
                ].map(v => (
                  <div key={v.name} className="flex items-start gap-3 p-3 bg-gray-50 rounded-maguito-md">
                    <code className="text-xs font-mono font-bold shrink-0">{v.name}</code>
                    <div className="text-xs">
                      <span className="font-bold text-gray-500">{v.default}</span>
                      <span className="text-gray-400 ml-2">{v.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            )
          }
        ]} />
      </section>

      {/* TROUBLESHOOTING */}
      <section className="space-y-8">
        <div className="flex items-center gap-4">
          <AlertTriangle size={32} className="text-maguito-red animate-pulse" />
          <h2 className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter">Problemas Comunes</h2>
        </div>

        <div className="space-y-4">
          <Card className="border-4 border-maguito-red bg-maguito-red/5" paddingSize="lg" shadowColor="danger">
            <div className="flex items-start gap-4">
              <Code2 className="text-maguito-red shrink-0" size={28} />
              <div className="space-y-3">
                <p className="text-lg font-black uppercase italic">Los componentes no se renderizan</p>
                <p className="font-bold text-gray-700 leading-relaxed">
                  Asegurate de haber importado los estilos globales. Sin <code className="bg-white px-2 py-0.5 rounded border-2 border-maguito-black font-mono text-xs">import 'maguitoui/styles'</code> las variables CSS no existen y los componentes no se ven correctamente.
                </p>
                <code className="block p-3 bg-maguito-black text-maguito-orange rounded-maguito-md font-mono text-xs">import 'maguitoui/styles';</code>
              </div>
            </div>
          </Card>

          <Card className="border-4 border-maguito-orange bg-maguito-orange/5" paddingSize="lg" shadowColor="orange">
            <div className="flex items-start gap-4">
              <AlertCircle className="text-maguito-orange shrink-0" size={28} />
              <div className="space-y-3">
                <p className="text-lg font-black uppercase italic">Error: "Cannot find module 'lucide-react'"</p>
                <p className="font-bold text-gray-700 leading-relaxed">
                  Lucide React es una <strong>peer dependency</strong>. Instalalo junto con maguitoui:
                </p>
                <code className="block p-3 bg-maguito-black text-maguito-orange rounded-maguito-md font-mono text-xs">npm install lucide-react</code>
              </div>
            </div>
          </Card>

          <Card className="border-4 border-maguito-yellow bg-maguito-yellow/10" paddingSize="lg" shadowColor="accent">
            <div className="flex items-start gap-4">
              <Info className="text-maguito-black shrink-0" size={28} />
              <div className="space-y-3">
                <p className="text-lg font-black uppercase italic">Las clases maguito-* no funcionan en Tailwind</p>
                <p className="font-bold text-gray-700 leading-relaxed">
                  Verificá que el <strong>content</strong> de tu <code className="bg-white px-1.5 py-0.5 rounded font-mono text-xs">tailwind.config.js</code> incluya la ruta a maguitoui:
                </p>
                <code className="block p-3 bg-maguito-black text-maguito-orange rounded-maguito-md font-mono text-xs">content: ["./node_modules/maguitoui/**/*.{js,ts,jsx,tsx}"]</code>
              </div>
            </div>
          </Card>

          <Card className="border-4 border-maguito-blue bg-maguito-blue/5" paddingSize="lg" shadowColor="secondary">
            <div className="flex items-start gap-4">
              <AlertCircle className="text-maguito-blue shrink-0" size={28} />
              <div className="space-y-3">
                <p className="text-lg font-black uppercase italic">Los iconos no se muestran</p>
                <p className="font-bold text-gray-700 leading-relaxed">
                  Algunos componentes usan iconos de Lucide internamente. Asegurate de tener <code className="bg-white px-1.5 py-0.5 rounded font-mono text-xs">lucide-react</code> instalado. Si usás un bundler como Vite, puede que necesites reiniciar el servidor de desarrollo.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default InstallationDoc;
