
import React, { useState, useEffect } from 'react';
import {
  Sparkles, Send, Trash2, Settings, Share2, Star,
  Plus, Github, MessageSquare, AlertCircle, ArrowRight,
  CheckCircle2, Loader2, Calendar as CalIcon, Filter as FilterIcon,
  ToggleLeft, List as ListIcon, Sliders, Hash, RefreshCcw, Bell, Moon, Sun, Heart,
  Settings2, LogOut, User, Zap, Mail, Check, X, Home, Compass, UserCircle, Layers, Bookmark, Droplets, Search, Code, Eye, Copy, Info, XCircle, ChevronLeft, ChevronRight,
  Save, Package
} from 'lucide-react';
import {
  Button, Card, Input, Textarea, Alert, Badge, Label, Validator,
  Checkbox, Radio, Toggle, Select, Slider, Rating,
  FileInput, Calendar, Spinner, LoadingDots, Progress, RadialProgress, Skeleton, Toast, Tooltip,
  Dropdown, DropdownItem, Modal, FAB, Swap, Breadcrumbs, Dock, DockItem, Navbar, Pagination, Steps, Tabs, Link, Fieldset, Filter,
  Accordion, Avatar, Divider, Stat, Table, TableHead, TableBody, TableRow, TableHeader, TableCell, Timeline, List, ChatBubble, Carousel, Hero, Mask, Diff, Hover3DCard, Countdown, ThemeController, Drawer, Stack, Indicator, Kbd, Join, Status, Artboard
} from '../components/MaguitoUI';

// --- UTILITY: SHOWCASE WRAPPER ---
const Showcase = ({ title, description, children, code }: { title: string, description: string, children?: React.ReactNode, code: string }) => {
  const [view, setView] = useState<'preview' | 'code'>('preview');
  const [isCopied, setIsCopied] = useState(false);

  const copyCode = () => {
    navigator.clipboard.writeText(code);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="space-y-6 mb-20 group">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="space-y-2">
          <h3 className="text-3xl font-black uppercase italic tracking-tighter text-maguito-black">{title}</h3>
          <p className="text-gray-600 font-bold italic leading-tight max-w-2xl">{description}</p>
        </div>
        <div className="flex bg-maguito-black/5 p-1 rounded-maguito-md border-2 border-maguito-black w-max">
          <button 
            onClick={() => setView('preview')}
            className={`px-4 py-1.5 rounded-maguito-sm flex items-center gap-2 text-xs font-black uppercase italic transition-all ${view === 'preview' ? 'bg-maguito-orange text-maguito-black shadow-maguito -translate-x-0.5 -translate-y-0.5' : 'text-gray-500 hover:text-maguito-black'}`}
          >
            <Eye size={14} /> Vista
          </button>
          <button 
            onClick={() => setView('code')}
            className={`px-4 py-1.5 rounded-maguito-sm flex items-center gap-2 text-xs font-black uppercase italic transition-all ${view === 'code' ? 'bg-maguito-orange text-maguito-black shadow-maguito -translate-x-0.5 -translate-y-0.5' : 'text-gray-500 hover:text-maguito-black'}`}
          >
            <Code size={14} /> Código
          </button>
        </div>
      </div>

      <Card className="relative border-4" paddingSize="none" shadowColor="black">
        {view === 'preview' ? (
          <div className="p-8 md:p-12 bg-white/50 min-h-[200px] flex flex-wrap items-center justify-center gap-6">
            {children}
          </div>
        ) : (
          <div className="relative">
            <pre className="p-8 bg-maguito-black text-maguito-orange font-mono text-xs md:text-sm overflow-x-auto leading-relaxed max-h-[500px]">
              {code}
            </pre>
            <button 
              onClick={copyCode}
              className="absolute top-4 right-4 p-2 bg-maguito-white/10 hover:bg-maguito-white/20 border border-maguito-white/20 rounded-lg text-maguito-white transition-all flex items-center gap-2 text-[10px] font-black uppercase"
            >
              {isCopied ? <><Check size={14} className="text-maguito-green" /> Copiado</> : <><Copy size={14} /> Copiar</>}
            </button>
          </div>
        )}
      </Card>
    </div>
  );
};

// --- SECTION: BOTONES ---
export const ButtonsDoc = () => {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    document.title = 'Buttons — MaguitoUI | React Component Library';
    return () => { document.title = 'MaguitoUI — Bold React Component Library | Neo-Brutalist Design System'; };
  }, []);
  const triggerLoading = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <div className="space-y-12">
      <header className="space-y-4">
        <h1 className="text-4xl md:text-8xl font-black text-maguito-black tracking-tighter uppercase italic leading-none">Botones</h1>
        <p className="text-xl md:text-2xl font-bold text-gray-700 max-w-3xl italic">El motor de tu interfaz. Disponibles en todas las variantes de energía y geometrías posibles.</p>
      </header>

      <Showcase 
        title="Variantes Cromáticas" 
        description="Los 11 estados de color principales. Úsalos para definir la jerarquía de tus acciones mágicas."
        code={`<Button variant="primary">Primary</Button>\n<Button variant="secondary">Secondary</Button>\n<Button variant="accent">Accent</Button>\n<Button variant="info">Info</Button>\n<Button variant="success">Success</Button>\n<Button variant="warning">Warning</Button>\n<Button variant="danger">Danger</Button>\n<Button variant="neutral">Neutral</Button>\n<Button variant="gradient">Gradient</Button>\n<Button variant="outline">Outline</Button>\n<Button variant="ghost">Ghost</Button>`}
      >
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="accent">Accent</Button>
        <Button variant="info">Info</Button>
        <Button variant="success">Success</Button>
        <Button variant="warning">Warning</Button>
        <Button variant="danger">Danger</Button>
        <Button variant="neutral">Neutral</Button>
        <Button variant="gradient">Gradient</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
      </Showcase>

      <Showcase 
        title="Impacto y Escala" 
        description="Tres tamaños para diferentes contextos de invocación y la opción de botones circulares."
        code={`<Button size="sm">Small</Button>\n<Button size="md">Medium</Button>\n<Button size="lg">Large</Button>\n<Button shape="circle" size="lg" icon={<Plus />} />`}
      >
        <div className="flex items-center gap-6 flex-wrap">
          <Button size="sm">Pequeño</Button>
          <Button size="md">Mediano</Button>
          <Button size="lg">Grande</Button>
          <div className="h-10 w-[2px] bg-maguito-black/10 mx-4" />
          <Button shape="circle" size="sm" icon={<Plus size={16}/>} />
          <Button shape="circle" size="md" icon={<Plus size={20}/>} />
          <Button shape="circle" size="lg" icon={<Plus size={24}/>} />
        </div>
      </Showcase>

      <Showcase 
        title="Estados de Mana" 
        description="Feedback visual para procesos de carga, estados bloqueados o persistencia."
        code={`<Button loading={isLoading} onClick={triggerLoading}>Invocando...</Button>\n<Button disabled>Sellado</Button>\n<Button active>Presionado</Button>\n<Button icon={<Zap />}>Con Mana</Button>`}
      >
        <Button loading={isLoading} onClick={triggerLoading}>Probar Carga</Button>
        <Button disabled>Deshabilitado</Button>
        <Button active>Estado Activo</Button>
        <Button variant="secondary" icon={<Sparkles size={18} />}>Con Icono</Button>
      </Showcase>
    </div>
  );
};

// --- SECTION: INPUTS ---
export const InputsDoc = () => {
  const [val, setVal] = useState('');
  useEffect(() => {
    document.title = 'Inputs & Forms — MaguitoUI | React Component Library';
    return () => { document.title = 'MaguitoUI — Bold React Component Library | Neo-Brutalist Design System'; };
  }, []);
  const [check, setCheck] = useState(true);
  const [toggle, setToggle] = useState(true);
  const [radio, setRadio] = useState('a');
  const [rating, setRating] = useState(4);
  const [slider, setSlider] = useState(65);
  const [filter, setFilter] = useState(['Ataque']);

  const toggleFilter = (tag: string) => {
    setFilter(prev => prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]);
  };

  return (
    <div className="space-y-12">
      <header className="space-y-4">
        <h1 className="text-4xl md:text-8xl font-black text-maguito-black tracking-tighter uppercase italic leading-none">Inputs</h1>
        <p className="text-xl md:text-2xl font-bold text-gray-700 max-w-3xl italic">Componentes de entrada para recolectar ingredientes de tus usuarios.</p>
      </header>

      <Showcase 
        title="Escritura Mágica" 
        description="Campos de texto y áreas de escritura con validaciones integradas."
        code={`<Input label="Identidad" value={val} onChange={...} />\n<Input error="Mana inválido" />\n<Textarea label="Grimorio" />`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          <Input label="Identidad del Mago" placeholder="Gandalf el Blanco" value={val} onChange={e => setVal(e.target.value)} helper="Será visible en tu grimorio público." />
          <Input label="Espejo de Contacto" placeholder="correo@estudio.magic" error={val.length > 10 ? undefined : "Escribe más mana para validar"} />
          <Textarea label="Grimorio Personal" placeholder="Describe tus hechizos más poderosos..." className="md:col-span-2" />
        </div>
      </Showcase>

      <Showcase 
        title="Selectores Binarios" 
        description="Checkboxes, radios y toggles diseñados para una interacción táctil y satisfactoria."
        code={`<Checkbox label="Pacto" checked={check} onChange={...} />\n<Radio label="Luz" checked={radio === 'a'} />\n<Toggle label="Vibras" checked={toggle} />`}
      >
        <div className="flex flex-wrap gap-12">
          <div className="space-y-4">
            <Checkbox label="Aceptar Pacto Mágico" checked={check} onChange={() => setCheck(!check)} />
            <Checkbox label="Recibir Cuervos Mensajeros" checked={!check} onChange={() => setCheck(!check)} />
          </div>
          <div className="space-y-4">
            <Radio label="Camino de la Luz" checked={radio === 'a'} onChange={() => setRadio('a')} />
            <Radio label="Senda de las Sombras" checked={radio === 'b'} onChange={() => setRadio('b')} />
          </div>
          <div className="space-y-4">
            <Toggle label="Vibras Neón" checked={toggle} onChange={() => setToggle(!toggle)} />
            <Toggle label="Efectos de Partículas" checked={!toggle} onChange={() => setToggle(!toggle)} />
          </div>
        </div>
      </Showcase>

      <Showcase 
        title="Herramientas de Valor" 
        description="Sliders, Ratings y Selectores para cuantificar el poder."
        code={`<Slider value={slider} onChange={...} />\n<Rating value={rating} onChange={...} />\n<Filter tags={['A', 'B']} selected={filter} />`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
          <div className="space-y-8">
            <Slider label="Carga de Mana Requerida" value={slider} onChange={e => setSlider(Number(e.target.value))} />
            <Rating label="Reputación en el Gremio" value={rating} onChange={setRating} />
            <Select label="Escuela de Magia">
              <option>Alquimia Elemental</option>
              <option>Nigromancia Ética</option>
              <option>Runas Antiguas</option>
            </Select>
            <Filter 
              label="Categorías de Hechizo" 
              tags={['Ataque', 'Defensa', 'Curación', 'Utilidad']} 
              selected={filter} 
              onToggle={toggleFilter} 
            />
          </div>
          <div className="flex flex-col gap-6">
            <Calendar label="Fecha del Gran Ritual" />
            <FileInput label="Sube tu Sello de Archimago" />
          </div>
        </div>
      </Showcase>
    </div>
  );
};

// --- SECTION: ACCIONES ---
export const ActionsDoc = () => {
  useEffect(() => {
    document.title = 'Actions (FAB, Swap, Dropdown) — MaguitoUI | React Component Library';
    return () => { document.title = 'MaguitoUI — Bold React Component Library | Neo-Brutalist Design System'; };
  }, []);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [swapA, setSwapA] = useState(false);
  const [swapB, setSwapB] = useState(true);

  return (
    <div className="space-y-12">
      <header className="space-y-4">
        <h1 className="text-4xl md:text-8xl font-black text-maguito-black tracking-tighter uppercase italic leading-none">Acciones</h1>
        <p className="text-xl md:text-2xl font-bold text-gray-700 max-w-3xl italic">Componentes interactivos para menús, diálogos y cambios de estado rápidos.</p>
      </header>

      <Showcase 
        title="Desplegables y Menús" 
        description="Dropdowns con animaciones fluidas y trazos definidos."
        code={`<Dropdown label="Opciones" variant="primary">\n  <DropdownItem icon={<User />}>Perfil</DropdownItem>\n</Dropdown>`}
      >
        <div className="flex gap-4">
          <Dropdown label="Inventario" variant="primary">
            <DropdownItem icon={<Bookmark size={16}/>}>Hechizos Guardados</DropdownItem>
            <DropdownItem icon={<Droplets size={16}/>}>Pociones Disponibles</DropdownItem>
            <DropdownItem icon={<Layers size={16}/>}>Artefactos</DropdownItem>
            <hr className="my-1 border-maguito-black/10 border-t-2" />
            <DropdownItem icon={<Trash2 size={16}/>} className="text-maguito-red">Vaciar Cofre</DropdownItem>
          </Dropdown>
          <Dropdown label="Variante Azul" variant="secondary">
            <DropdownItem>Acción Rápida 1</DropdownItem>
            <DropdownItem>Acción Rápida 2</DropdownItem>
          </Dropdown>
        </div>
      </Showcase>

      <Showcase 
        title="Diálogos y Swaps" 
        description="Componentes que transforman la interfaz o detienen el flujo para atención."
        code={`<Swap active={swap} onToggle={...} childrenOn={<Sun />} childrenOff={<Moon />} />\n<Modal isOpen={open} title="Ritual" />`}
      >
        <div className="flex flex-col items-center gap-12 w-full">
          <div className="flex items-center gap-20">
            <div className="text-center space-y-2">
              <Swap active={swapA} onToggle={() => setSwapA(!swapA)} childrenOn={<Sun size={24}/>} childrenOff={<Moon size={24}/>} />
              <p className="text-[10px] font-black uppercase italic opacity-40">Sol / Luna</p>
            </div>
            <div className="text-center space-y-2">
              <Swap active={swapB} onToggle={() => setSwapB(!swapB)} childrenOn={<Heart size={24} className="fill-maguito-red" />} childrenOff={<Heart size={24}/>} />
              <p className="text-[10px] font-black uppercase italic opacity-40">Favorito</p>
            </div>
          </div>
          
          <div className="flex gap-4">
            <Button variant="accent" onClick={() => setIsModalOpen(true)}>Abrir Modal de Prueba</Button>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Ritual de Transmutación">
               <div className="space-y-6">
                 <p className="font-bold text-gray-700 italic">Estás a punto de convertir código base en pura magia visual. ¿Deseas continuar?</p>
                 <div className="flex gap-4">
                   <Button fullWidth onClick={() => setIsModalOpen(false)}>¡Hágase la Magia!</Button>
                   <Button fullWidth variant="ghost" onClick={() => setIsModalOpen(false)}>Cancelar</Button>
                 </div>
               </div>
            </Modal>
          </div>
        </div>
      </Showcase>
    </div>
  );
};

// --- SECTION: NAVEGACIÓN ---
export const NavigationDoc = () => {
  useEffect(() => {
    document.title = 'Navigation (Navbar, Breadcrumbs, Tabs) — MaguitoUI | React Component Library';
    return () => { document.title = 'MaguitoUI — Bold React Component Library | Neo-Brutalist Design System'; };
  }, []);
  const [activeTab, setActiveTab] = useState('pociones');
  const [currentPage, setCurrentPage] = useState(3);
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div className="space-y-12">
      <header className="space-y-4">
        <h1 className="text-4xl md:text-8xl font-black text-maguito-black tracking-tighter uppercase italic leading-none">Navegación</h1>
        <p className="text-xl md:text-2xl font-bold text-gray-700 max-w-3xl italic">Sistemas para orientar al mago en su viaje por la aplicación.</p>
      </header>

      <Showcase 
        title="Navbar y Links" 
        description="La estructura superior de navegación con soporte para branding y acciones."
        code={`<Navbar \n  brand={<Brand />} \n  actions={<Button>Login</Button>}\n>\n  <Link>Home</Link>\n</Navbar>`}
      >
        <div className="w-full border-maguito border-maguito-black rounded-maguito-md overflow-hidden bg-white">
          <Navbar 
            brand={<div className="font-black text-2xl italic">MAGUITO<span className="text-maguito-orange">UI</span></div>}
            actions={<Button size="sm">Entrar</Button>}
          >
            <Link>Hechizos</Link>
            <Link>Pociones</Link>
            <Link>Mercado</Link>
          </Navbar>
        </div>
      </Showcase>

      <Showcase 
        title="Pestañas y Pasos" 
        description="Tabs para sub-vistas y Steps para procesos guiados."
        code={`<Tabs active={activeTab} onChange={setActiveTab} tabs={...} />\n<Steps current={currentStep} steps={...} />`}
      >
        <div className="space-y-12 w-full">
          <div className="flex justify-center">
            <Tabs 
              active={activeTab} 
              onChange={setActiveTab} 
              tabs={[
                { id: 'grimorio', label: 'Grimorio', icon: <Bookmark size={16}/> },
                { id: 'pociones', label: 'Pociones', icon: <Droplets size={16}/> },
                { id: 'artefactos', label: 'Artefactos', icon: <Layers size={16}/> }
              ]} 
            />
          </div>
          <div className="space-y-6">
            <Steps 
              current={currentStep} 
              steps={[
                { label: 'Invocación', icon: <Sparkles size={16}/> },
                { label: 'Carga de Mana', icon: <Zap size={16}/> },
                { label: 'Lanzamiento', icon: <Send size={16}/> }
              ]} 
            />
            <div className="flex justify-center gap-4">
              <Button size="sm" variant="outline" onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}>Anterior</Button>
              <Button size="sm" variant="outline" onClick={() => setCurrentStep(Math.min(2, currentStep + 1))}>Siguiente</Button>
            </div>
          </div>
        </div>
      </Showcase>

      <Showcase 
        title="Rutas y Páginas" 
        description="Breadcrumbs para ubicación y Pagination para listas extensas."
        code={`<Breadcrumbs items={[{label: 'Inicio'}]} />\n<Pagination current={currentPage} total={8} onPageChange={...} />`}
      >
        <div className="flex flex-col items-center gap-10 w-full">
          <Breadcrumbs items={[
            { label: 'Inicio', icon: <Home size={14}/> },
            { label: 'Grimorios', icon: <Compass size={14}/> },
            { label: 'Nivel Avanzado' }
          ]} />
          <Pagination current={currentPage} total={8} onPageChange={setCurrentPage} />
        </div>
      </Showcase>

      <Showcase 
        title="El Muelle (Dock)" 
        description="Menú flotante estilo OS para las herramientas de uso frecuente."
        code={`<Dock>\n  <DockItem icon={<Search />} label="Buscar" />\n  <DockItem icon={<Settings />} label="Ajustes" />\n</Dock>`}
      >
        <div className="py-12 bg-maguito-black/5 rounded-maguito-lg w-full flex justify-center border-maguito border-dashed border-maguito-black/20">
          <Dock>
            <DockItem icon={<Search size={24}/>} label="Buscar Hechizo" />
            <DockItem icon={<UserCircle size={24}/>} label="Perfil Mágico" />
            <DockItem icon={<Sparkles size={24}/>} label="Laboratorio" />
            <DockItem icon={<Settings size={24}/>} label="Configuración" />
          </Dock>
        </div>
      </Showcase>
    </div>
  );
};

// --- SECTION: CARDS ---
export const CardsDoc = () => {
  useEffect(() => {
    document.title = 'Cards & Layout — MaguitoUI | React Component Library';
    return () => { document.title = 'MaguitoUI — Bold React Component Library | Neo-Brutalist Design System'; };
  }, []);
  return (
    <div className="space-y-12">
    <header className="space-y-4">
      <h1 className="text-4xl md:text-8xl font-black text-maguito-black tracking-tighter uppercase italic leading-none">Tarjetas</h1>
      <p className="text-xl md:text-2xl font-bold text-gray-700 max-w-3xl italic">Contenedores con peso visual y carácter único.</p>
    </header>

    <Showcase 
      title="Variantes de Card" 
      description="Estructuras con sombras de colores y efectos de elevación."
      code={`<Card shadowColor="orange">Standard</Card>\n<Card variant="interactive" shadowColor="blue">Hover</Card>`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        <Card shadowColor="orange" paddingSize="lg">
          <Badge variant="primary" className="mb-4">Manual</Badge>
          <h3 className="text-3xl font-black italic uppercase leading-none">Cofre de Roble</h3>
          <p className="mt-4 font-bold opacity-60 text-lg">Contenedor clásico con sombra sólida. Ideal para agrupar información estática.</p>
          <div className="mt-8 flex gap-2">
            <Button size="sm">Abrir</Button>
            <Button size="sm" variant="ghost">Info</Button>
          </div>
        </Card>
        <Card variant="interactive" shadowColor="blue" paddingSize="lg">
          <Badge variant="secondary" className="mb-4">Interactivo</Badge>
          <h3 className="text-3xl font-black italic uppercase leading-none">Espejo de Agua</h3>
          <p className="mt-4 font-bold opacity-60 text-lg">Esta tarjeta se eleva al pasar el cursor, invitando al usuario a interactuar con ella.</p>
          <div className="mt-8 h-20 bg-maguito-blue/10 border-2 border-dashed border-maguito-black rounded-lg flex items-center justify-center font-black italic uppercase text-xs">Zona de Hover</div>
        </Card>
      </div>
    </Showcase>
  </div>
  );
};

// --- SECTION: ALERTS ---
export const AlertsDoc = () => {
  useEffect(() => {
    document.title = 'Alerts — MaguitoUI | React Component Library';
    return () => { document.title = 'MaguitoUI — Bold React Component Library | Neo-Brutalist Design System'; };
  }, []);
  return (
    <div className="space-y-12">
    <header className="space-y-4">
      <h1 className="text-4xl md:text-8xl font-black text-maguito-black tracking-tighter uppercase italic leading-none">Alertas</h1>
      <p className="text-xl md:text-2xl font-bold text-gray-700 max-w-3xl italic">Comunica eventos importantes con señales visuales inmediatas.</p>
    </header>

    <Showcase 
      title="Tipos de Aviso" 
      description="Cuatro niveles de comunicación para cualquier situación crítica o de éxito."
      code={`<Alert type="success">¡Éxito!</Alert>\n<Alert type="warning">Cuidado</Alert>\n<Alert type="error">Error</Alert>\n<Alert type="info">Info</Alert>`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        <Alert type="success">El hechizo de guardado ha sido exitoso en el grimorio.</Alert>
        <Alert type="warning">Cuidado archimago, el nivel de mana está bajo el 20%.</Alert>
        <Alert type="error">Error de transmutación: ingredientes incompatibles detectados.</Alert>
        <Alert type="info">Recuerda que los lunes hay descuento en pociones de vuelo.</Alert>
      </div>
    </Showcase>
  </div>
  );
};

// --- SECTION: FEEDBACK ---
export const FeedbackDoc = () => {
  const [showToast, setShowToast] = useState(false);
  const [progress, setProgress] = useState(65);
  useEffect(() => {
    document.title = 'Feedback (Toast, Progress, Skeleton) — MaguitoUI | React Component Library';
    return () => { document.title = 'MaguitoUI — Bold React Component Library | Neo-Brutalist Design System'; };
  }, []);

  return (
    <div className="space-y-12">
      <header className="space-y-4">
        <h1 className="text-4xl md:text-8xl font-black text-maguito-black tracking-tighter uppercase italic leading-none">Feedback</h1>
        <p className="text-xl md:text-2xl font-bold text-gray-700 max-w-3xl italic">Comunícate mediante polvos mágicos y señales de progreso claras.</p>
      </header>

      <Showcase 
        title="Indicadores de Carga" 
        description="Spinners, puntos de carga y esqueletos para tiempos de espera."
        code={`<Spinner size={48} />\n<LoadingDots />\n<Skeleton className="h-4 w-full" />`}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center w-full">
          <Card className="flex flex-col items-center gap-4" shadowColor="orange">
            <Spinner size={48} />
            <span className="text-[10px] font-black uppercase italic">Invocando...</span>
          </Card>
          <Card className="flex flex-col items-center gap-4" shadowColor="blue">
            <LoadingDots variant="secondary" />
            <span className="text-[10px] font-black uppercase italic">Esperando Mana...</span>
          </Card>
          <Card className="space-y-4" shadowColor="black">
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
          </Card>
        </div>
      </Showcase>

      <Showcase 
        title="Barras de Progreso" 
        description="Visualiza el avance de transmutaciones de forma lineal o radial."
        code={`<Progress value={progress} showValue />\n<RadialProgress value={progress} />`}
      >
        <div className="space-y-12 w-full">
          <div className="flex flex-col items-center gap-4">
             <Slider label="Controlar Progreso Global" value={progress} onChange={e => setProgress(Number(e.target.value))} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-items-center">
            <RadialProgress value={progress} size={120} variant="primary" />
            <RadialProgress value={Math.min(100, progress + 20)} size={120} variant="success" />
            <RadialProgress value={Math.max(0, progress - 30)} size={120} variant="accent" />
          </div>
          <Card className="space-y-8" paddingSize="lg">
            <Progress value={progress} label="Transmutando Datos..." showValue variant="success" />
            <Progress value={Math.min(100, progress + 10)} label="Descargando Grimorio..." showValue variant="primary" />
          </Card>
        </div>
      </Showcase>

      <Showcase 
        title="Notificaciones y Guía" 
        description="Badges, Toasts y Tooltips para información contextual."
        code={`<Badge variant="primary">Nuevo</Badge>\n<Tooltip text="Info">Hovérame</Tooltip>\n<Toast message="Guardado" />`}
      >
        <div className="flex flex-wrap items-center justify-center gap-12 w-full">
          <div className="flex flex-wrap gap-3 max-w-xs">
            <Badge variant="primary">Badge 1</Badge>
            <Badge variant="secondary">Badge 2</Badge>
            <Badge variant="success">Badge 3</Badge>
            <Badge variant="danger">Badge 4</Badge>
            <Badge variant="accent">Badge 5</Badge>
          </div>
          <Tooltip text="Información secreta para magos de nivel 10+" position="top">
            <Button variant="outline" className="h-14">Pasa el cursor</Button>
          </Tooltip>
          
          <div className="flex flex-col items-center gap-4">
            <Button variant="secondary" onClick={() => setShowToast(true)}>Disparar Notificación</Button>
            {showToast && (
              <div className="fixed bottom-10 right-10 z-[300]">
                <Toast message="¡Elemento asegurado en el cofre!" type="success" onClose={() => setShowToast(false)} />
              </div>
            )}
          </div>
        </div>
      </Showcase>
    </div>
  );
};

// --- SECTION: LAYOUT ---
export const LayoutDoc = () => {
  useEffect(() => {
    document.title = 'Layout (Stack, Drawer, Stack) — MaguitoUI | React Component Library';
    return () => { document.title = 'MaguitoUI — Bold React Component Library | Neo-Brutalist Design System'; };
  }, []);
  return (
    <div className="space-y-12">
    <header className="space-y-4">
      <h1 className="text-4xl md:text-8xl font-black text-maguito-black tracking-tighter uppercase italic leading-none">Layout</h1>
      <p className="text-xl md:text-2xl font-bold text-gray-700 max-w-3xl italic">Organiza el contenido con contenedores y estructuras neo-brutalistas.</p>
    </header>

    <Showcase
      title="Accordion"
      description="Contenido colapsable para organizar información en secciones expandibles."
      code={`<Accordion items={[
  { title: "Sección 1", content: "Contenido 1" },
  { title: "Sección 2", content: "Contenido 2" },
]} />`}
    >
      <div className="w-full max-w-md">
        <Accordion items={[
          { title: "¿Qué es MaguitoUI?", content: "Una librería de componentes neo-brutalista con estilo bubbly.", icon: <Info size={20} /> },
          { title: "¿Cómo instalar?", content: "npm install maguitoui y listo para crear magia.", icon: <Package size={20} /> },
          { title: "¿Es gratis?", content: "¡Sí! 100% open source bajo licencia MIT.", icon: <Heart size={20} /> },
        ]} />
      </div>
    </Showcase>

    <Showcase
      title="Stack"
      description="Apila elementos con desplazamiento visual para efecto de profundidad."
      code={`<Stack>
  <Card>A</Card>
  <Card>B</Card>
  <Card>C</Card>
</Stack>`}
    >
      <Stack>
        <Card className="w-48 h-32 flex items-center justify-center bg-maguito-orange" shadowColor="black">Card 1</Card>
        <Card className="w-48 h-32 flex items-center justify-center bg-maguito-blue" shadowColor="black">Card 2</Card>
        <Card className="w-48 h-32 flex items-center justify-center bg-maguito-yellow" shadowColor="black">Card 3</Card>
      </Stack>
    </Showcase>

    <Showcase
      title="Indicator"
      description="Posiciona elementos en las esquinas de un contenedor."
      code={`<Indicator indicator={<Badge>3</Badge>} position="top-right">
  <Avatar />
</Indicator>`}
    >
      <div className="flex gap-8">
        <Indicator indicator={<Badge variant="danger">9+</Badge>} position="top-right">
          <Avatar size="lg" shape="circle" />
        </Indicator>
        <Indicator indicator={<Status status="online" />} position="bottom-right">
          <Avatar size="lg" shape="circle" src="https://picsum.photos/100/100" />
        </Indicator>
      </div>
    </Showcase>

    <Showcase
      title="Artboard"
      description="Contenedores con aspect ratio predefinido para mockups de dispositivos."
      code={`<Artboard device="phone">Contenido móvil</Artboard>`}
    >
      <div className="flex gap-4">
        <Artboard device="phone" className="p-4 bg-maguito-orange/10">
          <p className="text-center font-black">📱 Phone</p>
        </Artboard>
        <Artboard device="tablet" className="p-4 bg-maguito-blue/10">
          <p className="text-center font-black">📱 Tablet</p>
        </Artboard>
      </div>
    </Showcase>
  </div>
  );
};

// --- SECTION: CONTENT ---
export const ContentDoc = () => {
  useEffect(() => {
    document.title = 'Content (Avatar, Table, Timeline, Carousel) — MaguitoUI | React Component Library';
    return () => { document.title = 'MaguitoUI — Bold React Component Library | Neo-Brutalist Design System'; };
  }, []);
  return (
    <div className="space-y-12">
      <header className="space-y-4">
        <h1 className="text-4xl md:text-8xl font-black text-maguito-black tracking-tighter uppercase italic leading-none">Contenido</h1>
        <p className="text-xl md:text-2xl font-bold text-gray-700 max-w-3xl italic">Muestra información de forma atractiva y organizada.</p>
      </header>

      <Showcase
        title="Avatar"
        description="Representación visual de usuarios con estados opcionales."
        code={`<Avatar src="url" size="md" shape="circle" status="online" />`}
      >
        <div className="flex gap-4 items-end">
          <Avatar size="sm" status="online" />
          <Avatar size="md" status="busy" />
          <Avatar size="lg" shape="rounded" status="offline" />
          <Avatar shape="square" />
        </div>
      </Showcase>

      <Showcase
        title="Stat"
        description="Muestra métricas y datos importantes con iconos y tendencias."
        code={`<Stat label="Ventas" value="$1,234" icon={<Zap />} trend="up" trendValue="+12%" />`}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
          <Stat label="Ingresos" value="$2,450" icon={<Zap size={24} />} trend="up" trendValue="+18%" />
          <Stat label="Usuarios" value="842" icon={<User size={24} />} trend="neutral" />
          <Stat label="Rebote" value="23%" icon={<AlertCircle size={24} />} trend="down" trendValue="-5%" />
        </div>
      </Showcase>

      <Showcase
        title="Table"
        description="Tablas de datos con estilo neo-brutalista."
        code={`<Table>
  <TableHead>
    <TableRow><TableHeader>Nombre</TableHeader><TableHeader>Rol</TableHeader></TableRow>
  </TableHead>
  <TableBody>
    <TableRow><TableCell>Maguito</TableCell><TableCell>Admin</TableCell></TableRow>
  </TableBody>
</Table>`}
      >
        <div className="w-full">
          <Table>
            <TableHead>
              <TableRow>
                <TableHeader>Hechicero</TableHeader>
                <TableHeader>Rango</TableHeader>
                <TableHeader>Estado</TableHeader>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Maguito</TableCell>
                <TableCell>Archimago</TableCell>
                <TableCell><Badge variant="success">Activo</Badge></TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Merlín</TableCell>
                <TableCell>Hechicero</TableCell>
                <TableCell><Badge variant="warning">Ocupado</Badge></TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Gandalf</TableCell>
                <TableCell>Mago</TableCell>
                <TableCell><Badge variant="ghost">Viajando</Badge></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </Showcase>

      <Showcase
        title="Timeline"
        description="Línea de tiempo para mostrar progreso o eventos cronológicos."
        code={`<Timeline items={[
  { title: "Inicio", date: "9:00", status: "completed" },
  { title: "En progreso", status: "active" },
]} />`}
      >
        <div className="w-full max-w-md">
          <Timeline items={[
            { title: "Briefing", date: "9:00 AM", description: "Reunión con el cliente", status: "completed", icon: <Check size={18} /> },
            { title: "Diseño", date: "11:00 AM", description: "Crear mockups", status: "active", icon: <Sparkles size={18} /> },
            { title: "Desarrollo", date: "2:00 PM", description: "Implementar componentes", status: "pending" },
            { title: "Launch", date: "5:00 PM", description: "Deploy a producción", status: "pending" },
          ]} />
        </div>
      </Showcase>

      <Showcase
        title="List"
        description="Lista vertical de elementos con iconos y acciones."
        code={`<List items={[
  { title: "Item 1", description: "Desc", icon: <Star /> },
]} />`}
      >
        <div className="w-full max-w-md">
          <List items={[
            { title: "Guardar proyecto", description: "Ctrl + S", icon: <Save size={20} /> },
            { title: "Compartir", description: "Enviar enlace", icon: <Share2 size={20} /> },
            { title: "Eliminar", description: "Mover a papelera", icon: <Trash2 size={20} />, action: <Button size="sm" variant="danger">X</Button> },
          ]} />
        </div>
      </Showcase>

      <Showcase
        title="Chat Bubble"
        description="Burbujas de chat para conversaciones."
        code={`<ChatBubble message="Hola!" sender="me" timestamp="10:00" />`}
      >
        <div className="w-full max-w-sm">
          <ChatBubble message="¿Cómo va el proyecto?" sender="them" timestamp="10:00 AM" avatar="https://picsum.photos/40/40" />
          <ChatBubble message="¡Casi listo! Solo falta el deploy 🚀" sender="me" timestamp="10:05 AM" />
          <ChatBubble message="¡Excelente!" sender="them" timestamp="10:06 AM" avatar="https://picsum.photos/40/40" />
        </div>
      </Showcase>

      <Showcase
        title="Hero"
        description="Banner principal con título y llamadas a la acción."
        code={`<Hero title="Mi Proyecto" subtitle="Descripción">
  <Button>CTA</Button>
</Hero>`}
      >
        <Hero title="Landings en 24h" subtitle="Tu página lista en un día" className="w-full">
          <Button variant="neutral" className="bg-white">Ver más</Button>
          <Button variant="neutral">Empezar</Button>
        </Hero>
      </Showcase>

      <Showcase
        title="Divider"
        description="Separadores horizontales o verticales con etiqueta opcional."
        code={`<Divider label="O" />`}
      >
        <div className="w-full">
          <p className="text-center font-bold mb-4">Contenido arriba</p>
          <Divider label="O" />
          <p className="text-center font-bold mt-4">Contenido abajo</p>
        </div>
      </Showcase>

      <Showcase
        title="Mask"
        description="Recorta contenido con diferentes formas."
        code={`<Mask shape="circle"><img /></Mask>`}
      >
        <div className="flex gap-4">
          <Mask shape="circle"><img src="https://picsum.photos/100/100" className="w-24 h-24" /></Mask>
          <Mask shape="rounded"><img src="https://picsum.photos/100/100" className="w-24 h-24" /></Mask>
          <Mask shape="squircle"><img src="https://picsum.photos/100/100" className="w-24 h-24" /></Mask>
        </div>
      </Showcase>
    </div>
  );
};

// --- SECTION: INTERACTIVE ---
export const InteractiveDoc = () => {
  const [theme, setTheme] = useState(0);
  const [countdown, setCountdown] = useState(10);
  const [countdownKey, setCountdownKey] = useState(0);
  useEffect(() => {
    document.title = 'Interactive (Modal, Accordion, Calendar) — MaguitoUI | React Component Library';
    return () => { document.title = 'MaguitoUI — Bold React Component Library | Neo-Brutalist Design System'; };
  }, []);

  return (
    <div className="space-y-12">
      <header className="space-y-4">
        <h1 className="text-4xl md:text-8xl font-black text-maguito-black tracking-tighter uppercase italic leading-none">Interactivos</h1>
        <p className="text-xl md:text-2xl font-bold text-gray-700 max-w-3xl italic">Componentes que responden y transforman la experiencia.</p>
      </header>

      <Showcase
        title="Theme Controller"
        description="Selector visual para cambiar entre temas de color."
        code={`<ThemeController themes={temas} activeTheme={0} onThemeChange={setTheme} />`}
      >
        <ThemeController
          themes={[
            { name: 'Naranja', colors: { primary: '#F18652', secondary: '#79BCE8' } },
            { name: 'Rosa', colors: { primary: '#FF2D95', secondary: '#22D3EE' } },
            { name: 'Verde', colors: { primary: '#A2D149', secondary: '#6B21A8' } },
          ]}
          activeTheme={theme}
          onThemeChange={setTheme}
        />
      </Showcase>

      <Showcase
        title="Countdown"
        description="Cuenta regresiva en tiempo real."
        code={`<Countdown seconds={60} onComplete={() => alert('¡Tiempo!')} />`}
      >
        <div className="text-center">
          <Countdown key={countdownKey} seconds={countdown} onComplete={() => alert('¡Tiempo terminado!')} />
          <Button onClick={() => { setCountdown(10); setCountdownKey(k => k + 1); }} variant="outline" className="mt-4">Reiniciar</Button>
        </div>
      </Showcase>

      <Showcase
        title="Kbd"
        description="Muestra atajos de teclado con estilo."
        code={`<Kbd keys={['Ctrl', 'K']} label="Guardar" />`}
      >
        <div className="flex gap-4">
          <Kbd keys={['Ctrl', 'K']} label="Buscar:" />
          <Kbd keys={['⌘', 'Shift', 'P']} />
          <Kbd keys={['Esc']} label="Salir:" />
        </div>
      </Showcase>

      <Showcase
        title="Join"
        description="Agrupa inputs o botones con bordes compartidos."
        code={`<Join>
  <Input placeholder="Email" />
  <Button>Suscribir</Button>
</Join>`}
      >
        <div className="flex flex-col gap-4">
          <Join>
            <Input placeholder="tu@email.com" />
            <Button>Suscribir</Button>
          </Join>
          <Join orientation="vertical">
            <Button variant="primary">Opción 1</Button>
            <Button variant="secondary">Opción 2</Button>
          </Join>
        </div>
      </Showcase>

      <Showcase
        title="Status"
        description="Indicador de estado con etiqueta opcional."
        code={`<Status status="online" label="En línea" />`}
      >
        <div className="flex gap-4">
          <Status status="online" label="Disponible" />
          <Status status="busy" label="Ocupado" />
          <Status status="away" label="Ausente" />
          <Status status="offline" />
        </div>
      </Showcase>
    </div>
  );
};
