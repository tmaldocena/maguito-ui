
import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, Search, Wand2, Sparkles, Book, Box, Layout as LayoutIcon, MessageCircle, AlertCircle, ChevronDown, Check, Package, Bell, MousePointer2, Compass, Rocket, ExternalLink, Home as HomeIcon } from 'lucide-react';
import { Button, Card } from './MaguitoUI';
import { THEMES, ThemePreset } from '../pages/ThemesDoc';

interface LayoutProps {
  children: React.ReactNode;
  activePath: string;
  onNavigate: (path: string) => void;
  currentTheme: ThemePreset;
  onThemeChange: (theme: ThemePreset) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, activePath, onNavigate, currentTheme, onThemeChange }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isThemeMenuOpen, setThemeMenuOpen] = useState(false);
  const themeMenuRef = useRef<HTMLDivElement>(null);

  const isDarkTheme = currentTheme.bg?.startsWith('#0') || currentTheme.bg?.startsWith('#1');

  const navItems = [
    { section: 'COMENZANDO', items: [
      { id: 'home', label: 'Inicio', icon: HomeIcon },
      { id: 'intro', label: 'Introducción', icon: Sparkles },
      { id: 'installation', label: 'Instalación', icon: Package },
      { id: 'publishing', label: 'Publicar en NPM', icon: Rocket },
      { id: 'themes', label: 'Temas & Colores', icon: Book },
    ]},
    { section: 'COMPONENTES', items: [
      { id: 'buttons', label: 'Botones', icon: Box },
      { id: 'inputs', label: 'Inputs', icon: MessageCircle },
      { id: 'actions', label: 'Acciones', icon: MousePointer2 },
      { id: 'navigation', label: 'Navegación', icon: Compass },
      { id: 'cards', label: 'Tarjetas', icon: LayoutIcon },
      { id: 'feedback', label: 'Feedback', icon: Bell },
      { id: 'alerts', label: 'Alertas', icon: AlertCircle },
      { id: 'layout', label: 'Layout', icon: LayoutIcon },
      { id: 'content', label: 'Contenido', icon: Book },
      { id: 'interactive', label: 'Interactivos', icon: Wand2 },
    ]}
  ];
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (themeMenuRef.current && !themeMenuRef.current.contains(event.target as Node)) {
        setThemeMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={`min-h-screen flex flex-col ${isDarkTheme ? 'bg-[#121212]' : 'bg-maguito-white'}`}>
      {/* NAVBAR */}
      <nav className={`sticky top-0 z-50 ${isDarkTheme ? 'bg-[#121212] border-[#F5F5F5]' : 'bg-maguito-white border-maguito-black'} border-b-4 px-4 md:px-6 py-4 flex items-center justify-between`}>
        <div className="flex items-center gap-4 md:gap-8">
          <div 
            className="flex items-center gap-2 cursor-pointer group"
            onClick={() => onNavigate('home')}
          >
            <div className="w-8 h-8 md:w-10 md:h-10 bg-maguito-orange border-2 border-maguito-black rounded-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center transition-transform group-hover:rotate-12">
              <Wand2 className="text-maguito-white w-5 h-5 md:w-6 md:h-6" />
            </div>
            <span className={`text-xl md:text-2xl font-black tracking-tight ${isDarkTheme ? 'text-[#F5F5F5]' : 'text-maguito-black'}`}>Maguito<span className="text-maguito-orange">UI</span></span>
          </div>

          <div className={`hidden md:flex items-center gap-6 font-bold ${isDarkTheme ? 'text-gray-300' : 'text-gray-800'}`}>
            <button onClick={() => onNavigate('intro')} className={`${isDarkTheme ? 'hover:text-white' : 'hover:text-maguito-black'} transition-colors`}>Docs</button>
            <button onClick={() => onNavigate('buttons')} className={`${isDarkTheme ? 'hover:text-white' : 'hover:text-maguito-black'} transition-colors`}>Componentes</button>
          </div>
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <div className="hidden lg:flex relative">
            <Search className={`absolute left-3 top-1/2 -translate-y-1/2 ${isDarkTheme ? 'text-gray-400' : 'text-gray-500'}`} size={18} />
            <input 
              type="text" 
              placeholder="Buscar..." 
              className={`pl-10 pr-4 py-2 ${isDarkTheme ? 'bg-[#2A2A2A] text-gray-200' : 'bg-gray-100 text-maguito-black'} border-2 ${isDarkTheme ? 'border-gray-600' : 'border-maguito-black'} rounded-xl focus:outline-none focus:ring-2 focus:ring-maguito-orange/30 w-48 font-medium`}
            />
          </div>
          
          <div className="relative" ref={themeMenuRef}>
            <button 
              onClick={() => setThemeMenuOpen(!isThemeMenuOpen)}
              className={`flex items-center gap-2 p-2 border-2 ${isDarkTheme ? 'border-gray-500 hover:bg-[#F5F5F5]/10 text-gray-200' : 'border-maguito-black hover:bg-gray-100 text-maguito-black'} rounded-xl transition-all shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] ${isThemeMenuOpen ? 'translate-x-[1px] translate-y-[1px] shadow-none bg-maguito-orange/10' : ''}`}
            >
              <span className={`p-1 ${isDarkTheme ? 'bg-[#1A1A1A] border-gray-500' : 'bg-maguito-white border-maguito-black'} border rounded-md flex items-center justify-center`}>
                {currentTheme.icon}
              </span>
              <ChevronDown size={16} className={`transition-transform duration-300 ${isThemeMenuOpen ? 'rotate-180' : ''}`} />
            </button>

            {isThemeMenuOpen && (
              <div className={`absolute right-0 mt-3 w-56 ${isDarkTheme ? 'bg-[#1A1A1A] border-gray-500' : 'bg-maguito-white border-maguito-black'} border-4 rounded-maguito-md shadow-maguito-lg z-[60] overflow-hidden animate-in fade-in zoom-in-95 duration-200`}>
                <div className="p-3 border-b-2 border-maguito-black bg-maguito-black text-maguito-white text-[10px] font-black uppercase tracking-widest italic">
                  Alquimia Visual
                </div>
                <div className="p-1">
                  {THEMES.map((theme) => (
                    <button
                      key={theme.id}
                      onClick={() => {
                        onThemeChange(theme);
                        setThemeMenuOpen(false);
                      }}
                      className={`w-full flex items-center justify-between gap-3 px-3 py-3 rounded-maguito-sm transition-all font-black text-sm uppercase italic tracking-tighter ${currentTheme.id === theme.id ? 'bg-maguito-orange/20 text-maguito-black' : `${isDarkTheme ? 'text-gray-300 hover:bg-[#F5F5F5]/10 hover:text-white' : 'text-gray-700 hover:bg-gray-100 hover:text-maguito-black'}`}`}
                    >
                      <div className="flex items-center gap-3">
                        <span className={`p-1.5 border-2 border-maguito-black rounded-lg transition-transform ${currentTheme.id === theme.id ? 'bg-maguito-yellow rotate-6' : 'bg-maguito-white'}`}>
                          {theme.icon}
                        </span>
                        <span>{theme.name}</span>
                      </div>
                      {currentTheme.id === theme.id && <Check size={16} className="text-maguito-orange" />}
                    </button>
                  ))}
                </div>
                <div className="p-2 bg-gray-50 border-t-2 border-maguito-black">
                   <button 
                    onClick={() => onNavigate('themes')}
                    className="w-full text-center text-[10px] font-black uppercase tracking-widest text-gray-500 hover:text-maguito-orange transition-colors"
                   >
                     Personalizar Laboratorio →
                   </button>
                </div>
              </div>
            )}
          </div>

          <Button size="sm" variant="ghost" className="hidden sm:flex gap-2">
            <ExternalLink size={18} /> GitHub
          </Button>
          <button 
            className="md:hidden p-2 border-2 border-maguito-black rounded-xl bg-maguito-orange text-maguito-black"
            onClick={() => setSidebarOpen(!isSidebarOpen)}
            aria-label="Toggle menu"
          >
            {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <div className="flex flex-1">
        <aside className={`
          fixed inset-y-0 left-0 z-40 w-64 ${isDarkTheme ? 'bg-[#121212] border-[#F5F5F5]' : 'bg-maguito-white border-maguito-black'} border-r-4 p-6 transform transition-transform duration-200 ease-in-out md:relative md:translate-x-0
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        `}>
          <div className="space-y-8">
            {navItems.map((section) => (
              <div key={section.section}>
                <h3 className={`text-xs font-black ${isDarkTheme ? 'text-gray-400' : 'text-gray-500'} mb-4 tracking-widest`}>{section.section}</h3>
                <ul className="space-y-1">
                  {section.items.map((item) => (
                    <li key={item.id}>
                      <button
                        onClick={() => {
                          onNavigate(item.id);
                          setSidebarOpen(false);
                        }}
                        className={`
                          w-full flex items-center gap-3 px-4 py-2 rounded-xl font-bold transition-all
                          ${activePath === item.id 
                            ? `${isDarkTheme ? 'bg-[#FDCB63]/20 text-[#F5F5F5] border-[#F5F5F5]' : 'bg-maguito-orange/20 text-maguito-black border-maguito-black'} border-2 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]` 
                            : `${isDarkTheme ? 'text-gray-300 hover:bg-[#F5F5F5]/10 hover:text-white' : 'text-gray-800 hover:bg-maguito-black hover:text-maguito-white'} border-2 border-transparent`}
                        `}
                      >
                        <item.icon size={18} />
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </aside>

        <main className="flex-1 p-6 md:p-12 overflow-y-auto max-w-7xl mx-auto w-full">
          <div className={`${isDarkTheme ? 'dark-text-gray' : ''}`}>
            {children}
          </div>
          
          <footer className={`mt-24 pt-12 border-t-4 ${isDarkTheme ? 'border-[#F5F5F5]' : 'border-maguito-black'} flex flex-col md:flex-row items-center justify-between gap-6 pb-12 ${isDarkTheme ? 'bg-[#121212]' : 'bg-maguito-white'}`}>
            <div className="flex items-center gap-3">
              <img src="https://picsum.photos/40/40" alt="Avatar" className={`w-10 h-10 rounded-full border-2 ${isDarkTheme ? 'border-gray-500' : 'border-maguito-black'}`} />
              <div>
                <p className={`font-bold text-sm ${isDarkTheme ? 'text-[#F5F5F5]' : 'text-maguito-black'} italic`}>Diseño con un toque mágico</p>
                <p className={`text-xs ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'}`}>Maguito Studio - 2025 © Todos los derechos reservados.</p>
              </div>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
};

export default Layout;
