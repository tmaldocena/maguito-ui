
import React, { useState, useEffect } from 'react';
import { Palette, Zap, Sun, Moon, Droplets, Wand2, Sparkles, RefreshCcw, Check, Square, Circle, Type, Layers, Box, Waves, Clipboard, Download, Palette as PaletteIcon } from 'lucide-react';
import { Card, Button, Badge, Alert, Input } from '../components/MaguitoUI';
import { BorderStyle, FontStyle } from '../App';

export interface ThemePreset {
  id: string;
  name: string;
  primary: string;
  secondary: string;
  bg: string;
  text?: string;
  accent?: string;
  icon: React.ReactNode;
  description: string;
}

export const THEMES: ThemePreset[] = [
  {
    id: 'classic',
    name: 'Mago de Luz',
    primary: '#F18652',
    secondary: '#79BCE8',
    bg: '#FEFEFC',
    text: '#2C2C2C',
    accent: '#FDCB63',
    icon: <Sun size={20} />,
    description: 'El estilo original de Maguito Studio. Cálido y confiable.'
  },
  {
    id: 'dark',
    name: 'Hechicero Oscuro',
    primary: '#FDCB63',
    secondary: '#79BCE8',
    bg: '#121212',
    text: '#F5F5F5',
    accent: '#F18652',
    icon: <Moon size={20} />,
    description: 'Alto contraste para sesiones de código nocturnas.'
  },
  {
    id: 'cyber',
    name: 'Cyber Mage',
    primary: '#67E8F9',
    secondary: '#E95B6F',
    bg: '#0B1120',
    text: '#F0F0F0',
    accent: '#FDCB63',
    icon: <Zap size={20} />,
    description: 'Energía neón y vibras futuristas.'
  },
  {
    id: 'pastel',
    name: 'Pastel Pixie',
    primary: '#A2D149',
    secondary: '#FDCB63',
    bg: '#F5F5F5',
    text: '#2C2C2C',
    accent: '#79BCE8',
    icon: <Droplets size={20} />,
    description: 'Suavidad máxima para interfaces relajadas.'
  }
];

interface ThemesDocProps {
  currentTheme: ThemePreset;
  onThemeChange: (theme: ThemePreset) => void;
  borderStyle: BorderStyle;
  onBorderStyleChange: (style: BorderStyle) => void;
  strokeWeight: number;
  onStrokeChange: (weight: number) => void;
  shadowDepth: number;
  onShadowChange: (depth: number) => void;
  fontStyle: FontStyle;
  onFontChange: (font: FontStyle) => void;
  useGrain: boolean;
  onGrainChange: (grain: boolean) => void;
}

const ThemesDoc: React.FC<ThemesDocProps> = ({ 
  currentTheme, 
  onThemeChange, 
  borderStyle, 
  onBorderStyleChange,
  strokeWeight,
  onStrokeChange,
  shadowDepth,
  onShadowChange,
  fontStyle,
  onFontChange,
  useGrain,
  onGrainChange
}) => {
  useEffect(() => {
    document.title = 'Themes & Customization — MaguitoUI | React Component Library';
    return () => { document.title = 'MaguitoUI — Bold React Component Library | Neo-Brutalist Design System'; };
  }, []);
  const [showExport, setShowExport] = useState(false);

  const handleCustomColor = (key: keyof ThemePreset, value: string) => {
    onThemeChange({
      ...currentTheme,
      id: 'custom-alchemy',
      name: 'Custom Alchemy',
      [key]: value
    });
  };

  const getThemeJSON = () => {
    const { icon, ...rest } = currentTheme;
    return JSON.stringify({
      ...rest,
      geometry: { borderStyle, strokeWeight, shadowDepth, fontStyle, useGrain }
    }, null, 2);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(getThemeJSON());
    alert("¡Configuración copiada al grimorio! (Portapapeles)");
  };

  return (
    <div className="space-y-12 md:space-y-16 px-2 md:px-0">
      <div className="space-y-4">
        <h1 className="text-4xl md:text-6xl font-black text-maguito-black leading-tight">Alquimia <span className="text-maguito-orange">Visual</span></h1>
        <p className="text-lg md:text-2xl font-medium max-w-3xl opacity-80 leading-relaxed">
          Personaliza cada átomo de la interfaz. Desde el trazo de la realidad hasta la sombra de los objetos.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
        {/* PRESETS */}
        <section className="lg:col-span-1 space-y-6 md:space-y-8">
          <div className="flex items-center gap-3">
             <Palette size={24} className="text-maguito-orange" />
             <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight">Escuela de Magia</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {THEMES.map((theme) => (
              <Card 
                key={theme.id}
                variant="interactive"
                onClick={() => onThemeChange(theme)}
                className={`flex items-center gap-4 ${currentTheme.id === theme.id ? 'ring-4 ring-maguito-orange/30 border-2 md:border-maguito' : 'opacity-70 grayscale-[0.5]'}`}
                shadowColor={currentTheme.id === theme.id ? theme.primary : 'transparent'}
                paddingSize="sm"
              >
                <div className="p-2 md:p-3 bg-maguito-white border-2 border-maguito-black rounded-maguito-md shrink-0">
                   {/* Fixed: Typed cloned element correctly for Lucide icons */}
                   {React.cloneElement(theme.icon as React.ReactElement<any>, { size: 18 })}
                </div>
                <div className="min-w-0">
                   <h4 className="font-black text-maguito-black truncate">{theme.name}</h4>
                   <p className="text-[10px] font-bold opacity-60">Preset oficial</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* WORKSHOP */}
        <section className="lg:col-span-2 space-y-6 md:space-y-8">
          <div className="flex items-center gap-3">
             <Wand2 size={24} className="text-maguito-blue" />
             <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight">Taller del Hechicero</h2>
          </div>
          
          <Card className="bg-maguito-black/5 space-y-6 md:space-y-8" paddingSize="lg">
             <div className="space-y-4">
                <div className="flex justify-between items-center">
                   <h3 className="font-black text-sm md:text-base flex items-center gap-2"><Layers size={18} /> Grosor Trazo</h3>
                   <Badge variant="neutral">{strokeWeight}px</Badge>
                </div>
                <input 
                  type="range" min="1" max="8" step="1" 
                  value={strokeWeight} 
                  onChange={(e) => onStrokeChange(Number(e.target.value))}
                  className="w-full accent-maguito-orange h-3 bg-maguito-white border-2 border-maguito-black rounded-full appearance-none cursor-pointer"
                />
             </div>

             <div className="space-y-4">
                <div className="flex justify-between items-center">
                   <h3 className="font-black text-sm md:text-base flex items-center gap-2"><Box size={18} /> Profundidad</h3>
                   <Badge variant="neutral">{shadowDepth}px</Badge>
                </div>
                <input 
                  type="range" min="0" max="16" step="2" 
                  value={shadowDepth} 
                  onChange={(e) => onShadowChange(Number(e.target.value))}
                  className="w-full accent-maguito-blue h-3 bg-maguito-white border-2 border-maguito-black rounded-full appearance-none cursor-pointer"
                />
             </div>

             <div className="space-y-4">
                <h3 className="font-black text-sm md:text-base flex items-center gap-2"><Type size={18} /> Tipografías</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4">
                   {[
                     { id: 'branding', label: 'Maguito', desc: 'Fred+Jak' },
                     { id: 'jakarta', label: 'Clean', desc: 'Jakarta' },
                     { id: 'serif', label: 'Elegant', desc: 'Serif' },
                     { id: 'mono', label: 'Studio', desc: 'Mono' }
                   ].map((f) => (
                     <button 
                       key={f.id}
                       onClick={() => onFontChange(f.id as FontStyle)}
                       className={`p-3 md:p-4 border-2 border-maguito-black rounded-maguito-md transition-all ${fontStyle === f.id ? 'bg-maguito-yellow shadow-maguito' : 'bg-maguito-white'}`}
                     >
                        <p className={`text-xl md:text-2xl font-bold ${
                          f.id === 'branding' ? 'font-display' : 
                          f.id === 'serif' ? 'font-serif' : 
                          f.id === 'mono' ? 'font-mono' : 'font-sans'
                        }`}>Aa</p>
                        <p className="text-[8px] md:text-[10px] font-black uppercase mt-1">{f.label}</p>
                        <p className="text-[6px] md:text-[8px] font-bold opacity-40 uppercase tracking-tighter">{f.desc}</p>
                     </button>
                   ))}
                </div>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 pt-6 border-t-2 border-maguito-black/10">
                <div className="space-y-3">
                   <h3 className="font-black text-xs md:text-sm">Geometría</h3>
                   <div className="flex gap-2">
                      <Button size="sm" variant={borderStyle === 'bubbly' ? 'primary' : 'outline'} onClick={() => onBorderStyleChange('bubbly')} className="flex-1 h-12">Bubbly</Button>
                      <Button size="sm" variant={borderStyle === 'sharp' ? 'secondary' : 'outline'} onClick={() => onBorderStyleChange('sharp')} className="flex-1 h-12">Sharp</Button>
                   </div>
                </div>
                <div className="space-y-3">
                   <h3 className="font-black text-xs md:text-sm">Efectos</h3>
                   <Card variant="interactive" padding={false} onClick={() => onGrainChange(!useGrain)} className={`flex items-center justify-between p-3 h-12 ${useGrain ? 'bg-maguito-cyan/20 border-2 md:border-maguito' : 'opacity-60 border-2'}`}>
                      <div className="flex items-center gap-2 font-bold text-[10px] md:text-xs"><Waves size={16} /> Grano</div>
                      <div className={`w-8 h-5 rounded-full border-2 border-maguito-black transition-all relative ${useGrain ? 'bg-maguito-green' : 'bg-gray-300'}`}>
                         <div className={`absolute top-0.5 w-3 h-3 bg-maguito-black rounded-full transition-all ${useGrain ? 'left-4' : 'left-0.5'}`}></div>
                      </div>
                   </Card>
                </div>
             </div>
          </Card>
        </section>
      </div>

      {/* CUSTOM COLOR ALCHEMIST */}
      <section className="space-y-6 md:space-y-8">
        <div className="flex items-center gap-3">
           <PaletteIcon size={24} className="text-maguito-yellow" />
           <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight">Laboratorio Cromático</h2>
        </div>
        <Card className="bg-maguito-white border-2 md:border-maguito shadow-maguito-lg p-6 md:p-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {[
              { label: 'Primario', key: 'primary' },
              { label: 'Secundario', key: 'secondary' },
              { label: 'Fondo', key: 'bg' },
              { label: 'Texto', key: 'text' },
              { label: 'Acento', key: 'accent' },
            ].map((color) => (
              <div key={color.key} className="space-y-2 md:space-y-3">
                <label className="text-[10px] font-black uppercase text-gray-500 tracking-wider">{color.label}</label>
                <div className="relative group">
                  <input 
                    type="color" 
                    value={currentTheme[color.key as keyof ThemePreset] as string || '#000000'} 
                    onChange={(e) => handleCustomColor(color.key as keyof ThemePreset, e.target.value)}
                    className="w-full h-12 md:h-16 border-2 md:border-maguito rounded-maguito-md cursor-pointer p-1 bg-maguito-white shadow-maguito active:scale-95 transition-transform"
                  />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                    <div className="w-5 h-5 md:w-6 md:h-6 rounded-full border-2 border-maguito-black bg-maguito-white/30 backdrop-blur-sm"></div>
                  </div>
                </div>
                <input 
                  type="text" 
                  value={(currentTheme[color.key as keyof ThemePreset] as string || '').toUpperCase()} 
                  onChange={(e) => handleCustomColor(color.key as keyof ThemePreset, e.target.value)}
                  className="w-full text-center font-mono text-[10px] p-2 border-2 border-maguito-black rounded-maguito-sm bg-gray-50"
                />
              </div>
            ))}
          </div>

          <div className="mt-10 md:mt-12 flex flex-col md:flex-row items-center justify-between gap-6 p-6 bg-maguito-black/5 border-2 border-dashed border-maguito-black rounded-maguito-lg">
            <div className="flex items-center gap-4 text-center md:text-left">
              <div className="hidden sm:block p-4 bg-maguito-yellow border-2 border-maguito-black rounded-full shadow-maguito rotate-12">
                <Sparkles size={24} className="text-maguito-black" />
              </div>
              <div>
                <h4 className="text-lg md:text-xl font-black">¿Hechizo Perfecto?</h4>
                <p className="text-xs md:text-sm font-bold opacity-70">Exporta tu configuración para usarla en tu proyecto real.</p>
              </div>
            </div>
            <div className="flex gap-3 w-full md:w-auto">
              <Button variant="accent" icon={<Download size={18} />} onClick={() => setShowExport(!showExport)} className="flex-1 md:flex-initial">
                {showExport ? 'Cerrar' : 'Exportar'}
              </Button>
              <Button variant="outline" icon={<RefreshCcw size={18} />} onClick={() => onThemeChange(THEMES[0])} className="flex-1 md:flex-initial">
                Reset
              </Button>
            </div>
          </div>

          {showExport && (
            <div className="mt-8 space-y-4 animate-in fade-in slide-in-from-top-4 duration-500 overflow-hidden">
              <div className="flex justify-between items-center px-2">
                <Badge variant="neutral" className="truncate max-w-[200px]">config.json</Badge>
                <button onClick={copyToClipboard} className="flex items-center gap-2 text-[10px] md:text-xs font-black hover:text-maguito-orange transition-colors shrink-0">
                  <Clipboard size={14} /> Copiar
                </button>
              </div>
              <pre className="p-4 md:p-6 bg-maguito-black text-maguito-orange border-2 md:border-maguito rounded-maguito-lg shadow-maguito-lg font-mono text-[10px] md:text-sm overflow-x-auto leading-relaxed">
                {getThemeJSON()}
              </pre>
            </div>
          )}
        </Card>
      </section>

      {/* LIVE PREVIEW SECTION */}
      <section className="space-y-6 md:space-y-8">
         <div className="flex items-center gap-3">
             <Sparkles size={24} className="text-maguito-yellow" />
             <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight">Previsualización Real</h2>
          </div>
          <Card className="min-h-[300px] md:min-h-[400px] flex items-center justify-center bg-maguito-white/50 relative overflow-hidden" padding={false}>
             <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(var(--maguito-text) 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
             
             <div className="relative z-10 w-full max-w-2xl grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center p-6 md:p-8">
                <Card shadowColor="primary" className="space-y-4" paddingSize="sm">
                   <div className="w-10 h-10 md:w-12 md:h-12 bg-maguito-orange rounded-maguito-md border-2 md:border-maguito flex items-center justify-center shadow-maguito">
                      <Zap size={20} />
                   </div>
                   <h3 className="text-xl md:text-2xl font-black">Componente A</h3>
                   <p className="font-bold text-xs md:text-sm opacity-70">Nota cómo los colores personalizados y la geometría afectan este contenedor.</p>
                   <Button fullWidth variant="primary">Invocar Acción</Button>
                </Card>

                <div className="space-y-4 md:space-y-6">
                   <Alert type="success">¡La Alquimia está funcionando!</Alert>
                   <Input label="Tu Nombre Mágico" placeholder="Ej: Gandalf" />
                   <div className="flex justify-center md:justify-start gap-4">
                      <Button shape="circle" variant="accent" icon={<Sun size={18} />} />
                      <Button shape="circle" variant="secondary" icon={<Moon size={18} />} />
                      <Button shape="circle" variant="outline" icon={<RefreshCcw size={18} />} />
                   </div>
                </div>
             </div>
          </Card>
      </section>
    </div>
  );
};

export default ThemesDoc;
