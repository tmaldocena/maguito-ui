
// @ts-nocheck
import React, { useState, useEffect, useRef } from 'react';
import { ColorVariant, Size, ComponentProps } from '../types';
import { 
  Loader2, Check, ChevronDown, Star, Upload, Calendar as CalendarIcon, 
  X, Plus, 
  MoreVertical, ChevronRight, ChevronLeft, Zap,
  Info, AlertCircle, CheckCircle2, XCircle,
  UserCircle, Settings, Share2, Sparkles, Bookmark, Droplets, Layers,
  Sun, Moon, Compass, Home, Mail, Search
} from 'lucide-react';

const cn = (...classes: (string | undefined | boolean)[]) => classes.filter(Boolean).join(' ');

// Type-safe object accessor for dynamic string keys
const getByKey = <T extends Record<string, unknown>>(obj: T, key: string): T[keyof T] => obj[key as keyof T];

const maguitoColors: Record<string, string> = {
  primary: 'var(--maguito-primary)',
  secondary: 'var(--maguito-secondary)',
  accent: 'var(--maguito-accent)',
  info: 'var(--maguito-info)',
  success: 'var(--maguito-success)',
  warning: 'var(--maguito-warning)',
  danger: 'var(--maguito-danger)',
  error: 'var(--maguito-danger)',
  neutral: 'var(--maguito-text)',
  ghost: 'var(--maguito-bg)',
  outline: 'var(--maguito-text)',
  google: '#FFFFFF',
  github: '#2C2C2C',
  discord: '#5865F2',
};

// --- BASE & UTILITY ---

export const Label: React.FC<React.LabelHTMLAttributes<HTMLLabelElement>> = ({ children, className, ...props }) => (
  <label className={cn("text-lg font-black italic uppercase tracking-tight text-maguito-black block mb-1", className)} {...props}>{children}</label>
);

export const Validator: React.FC<{ error?: string; success?: string; className?: string }> = ({ error, success, className }) => (
  <div className={cn("mt-1 text-xs font-black uppercase italic min-h-[1.25rem]", className)}>
    {error && <span className="text-maguito-red">🚫 {error}</span>}
    {success && <span className="text-maguito-green">✨ {success}</span>}
  </div>
);

// --- BUTTON ---
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ColorVariant;
  size?: Size;
  shadow?: boolean;
  icon?: React.ReactNode;
  tooltip?: string;
  shape?: 'rounded' | 'circle';
  loading?: boolean;
  fullWidth?: boolean;
  active?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, variant = 'primary', size = 'md', shadow = true, icon, className, disabled, shape = 'rounded', loading = false, fullWidth = false, active = false, ...props 
}) => {
  const isTrulyDisabled = disabled || loading;
  const baseStyles = "relative inline-flex items-center justify-center gap-2 font-bold transition-all duration-300 border-maguito group overflow-visible";
  const shapeStyles = shape === 'circle' ? "rounded-full p-0 flex-shrink-0" : "rounded-maguito-md";
  const widthStyles = fullWidth ? "w-full flex" : "";
  
  // FIX: Active state matches shadow depth exactly
  const activeStyles = (active || isTrulyDisabled) 
    ? "translate-x-[var(--maguito-shadow-depth)] translate-y-[var(--maguito-shadow-depth)] shadow-none scale-[0.98]" 
    : "active:translate-x-[var(--maguito-shadow-depth)] active:translate-y-[var(--maguito-shadow-depth)] active:shadow-none cursor-pointer";

  const variants: Record<ColorVariant, string> = {
    primary: "bg-maguito-orange text-maguito-black border-maguito-black",
    secondary: "bg-maguito-blue text-maguito-black border-maguito-black",
    accent: "bg-maguito-yellow text-maguito-black border-maguito-black",
    info: "bg-maguito-cyan text-maguito-black border-maguito-black",
    success: "bg-maguito-green text-maguito-black border-maguito-black",
    warning: "bg-maguito-amber text-maguito-black border-maguito-black",
    danger: "bg-maguito-red text-maguito-black border-maguito-black",
    error: "bg-maguito-red text-maguito-black border-maguito-black",
    neutral: "bg-maguito-black text-maguito-white border-maguito-black",
    ghost: "bg-maguito-white text-maguito-black border-maguito-black hover:bg-maguito-black/5",
    outline: "bg-transparent text-maguito-black border-maguito-black hover:bg-maguito-black hover:text-white",
    gradient: "bg-gradient-to-r from-maguito-orange to-maguito-blue text-white border-maguito-black",
    google: "bg-white text-maguito-black border-maguito-black",
    github: "bg-maguito-black text-white border-white",
    discord: "bg-[#5865F2] text-white border-maguito-black",
  };

  const sizes: Record<Size, string> = {
    sm: shape === 'circle' ? "w-10 h-10 text-sm" : "px-4 py-1.5 text-sm",
    md: shape === 'circle' ? "w-12 h-12 text-base" : "px-6 py-2.5 text-base",
    lg: shape === 'circle' ? "w-16 h-16 text-xl" : "px-8 py-4 text-xl"
  };

  const shadowClass = (!shadow || isTrulyDisabled || active) ? "" : "shadow-maguito";

  return (
    <button 
      className={cn(baseStyles, shapeStyles, widthStyles, variants[variant as ColorVariant], sizes[size as Size], activeStyles, shadowClass, className)} 
      disabled={isTrulyDisabled} 
      {...props}
    >
      {loading ? <Loader2 className="animate-spin" size={18} /> : (
        <>
          {icon && <span className="flex-shrink-0">{icon}</span>}
          {children && <span className="uppercase tracking-tight">{children}</span>}
        </>
      )}
    </button>
  );
};

// --- NAVIGATION ---

export const Link: React.FC<{ href?: string; children: React.ReactNode; className?: string }> = ({ href, children, className }) => (
  <a href={href} className={cn("font-black italic underline decoration-[var(--maguito-stroke)] underline-offset-4 decoration-maguito-orange hover:text-maguito-orange hover:decoration-maguito-black transition-all cursor-pointer", className)}>
    {children}
  </a>
);

export const Breadcrumbs: React.FC<{ items: { label: string; href?: string; icon?: React.ReactNode }[] }> = ({ items }) => (
  <nav className="flex items-center flex-wrap gap-2 text-sm font-black uppercase italic tracking-wider">
    {items.map((item, i) => (
      <React.Fragment key={i}>
        {i > 0 && <span className="text-maguito-black/30 font-black">/</span>}
        <button className={cn("hover:text-maguito-orange transition-colors flex items-center gap-1.5", i === items.length - 1 ? "text-maguito-black" : "text-gray-400")}>
          {item.icon}
          {item.label}
        </button>
      </React.Fragment>
    ))}
  </nav>
);

export const Dock: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <div className={cn("bg-maguito-white border-maguito border-maguito-black rounded-maguito-lg shadow-maguito-lg p-2.5 flex items-center gap-2.5 w-max mx-auto", className)}>
    {children}
  </div>
);

export const DockItem: React.FC<{ icon: React.ReactNode; label: string; onClick?: () => void }> = ({ icon, label, onClick }) => (
  <Tooltip text={label} position="top">
    <button onClick={onClick} className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-maguito-md bg-maguito-white hover:bg-maguito-orange hover:-translate-y-3 border-maguito border-maguito-black transition-all active:scale-90 group relative">
      {React.isValidElement(icon) ? React.cloneElement(icon as any, { size: 24, strokeWidth: 3 }) : icon}
    </button>
  </Tooltip>
);

export const Navbar: React.FC<{ brand: React.ReactNode; children?: React.ReactNode; actions?: React.ReactNode }> = ({ brand, children, actions }) => (
  <nav className="w-full bg-maguito-white border-b-maguito border-maguito-black px-6 py-4 flex items-center justify-between sticky top-0 z-[100]">
    <div className="flex items-center gap-10">
      <div className="flex-shrink-0">{brand}</div>
      <div className="hidden md:flex items-center gap-6 font-black uppercase italic text-sm tracking-widest">{children}</div>
    </div>
    <div className="flex items-center gap-4">{actions}</div>
  </nav>
);

export const Pagination: React.FC<{ current: number; total: number; onPageChange: (p: number) => void }> = ({ current, total, onPageChange }) => (
  <div className="flex items-center gap-2">
    <Button size="sm" variant="outline" onClick={() => onPageChange(Math.max(1, current - 1))} disabled={current === 1} className="w-10 h-10 p-0 shadow-none hover:shadow-maguito"><ChevronLeft size={18} strokeWidth={4} /></Button>
    {Array.from({ length: total }).map((_, i) => (
      <Button key={i} size="sm" variant={current === i + 1 ? 'primary' : 'outline'} onClick={() => onPageChange(i + 1)} className="w-10 h-10 p-0 font-black italic shadow-none">{i + 1}</Button>
    ))}
    <Button size="sm" variant="outline" onClick={() => onPageChange(Math.min(total, current + 1))} disabled={current === total} className="w-10 h-10 p-0 shadow-none hover:shadow-maguito"><ChevronRight size={18} strokeWidth={4} /></Button>
  </div>
);

export const Steps: React.FC<{ current: number; steps: { label: string; icon?: React.ReactNode }[] }> = ({ current, steps }) => (
  <div className="flex items-center justify-between w-full relative px-2">
    <div className="absolute top-5 left-0 right-0 h-1 bg-maguito-black/10 -translate-y-1/2 z-0 mx-10" />
    <div className="absolute top-5 left-0 h-1 bg-maguito-black -translate-y-1/2 z-0 mx-10 transition-all duration-500" style={{ width: `${(current / (steps.length - 1)) * 100}%` }} />
    {steps.map((step, i) => {
      const isCompleted = i < current;
      const isActive = i === current;
      return (
        <div key={i} className="relative z-10 flex flex-col items-center gap-2">
          <div className={cn("w-10 h-10 rounded-full border-maguito border-maguito-black flex items-center justify-center transition-all shadow-maguito", isCompleted ? "bg-maguito-green" : isActive ? "bg-maguito-orange scale-110" : "bg-maguito-white")}>
            {isCompleted ? <Check size={20} strokeWidth={4} /> : step.icon || <span className="font-black italic">{i + 1}</span>}
          </div>
          <span className={cn("text-[9px] font-black uppercase italic tracking-widest text-center max-w-[60px]", isActive ? "text-maguito-black" : "text-gray-400")}>{step.label}</span>
        </div>
      );
    })}
  </div>
);

export const Tabs: React.FC<{ active: string; onChange: (id: string) => void; tabs: { id: string; label: string; icon?: React.ReactNode }[] }> = ({ active, onChange, tabs }) => (
  <div className="flex flex-wrap bg-maguito-black/5 border-maguito border-maguito-black rounded-maguito-lg p-1 w-max">
    {tabs.map((tab) => (
      <button key={tab.id} onClick={() => onChange(tab.id)} className={cn("px-6 py-2.5 rounded-maguito-md flex items-center gap-2 font-black uppercase italic text-xs tracking-widest transition-all", active === tab.id ? "bg-maguito-orange text-maguito-black shadow-maguito -translate-y-[var(--maguito-shadow-depth)] -translate-x-[var(--maguito-shadow-depth)]" : "text-gray-500 hover:text-maguito-black")}>
        {tab.icon && React.isValidElement(tab.icon) ? React.cloneElement(tab.icon as any, { size: 16, strokeWidth: 3 }) : tab.icon}
        {tab.label}
      </button>
    ))}
  </div>
);

// --- ACTIONS ---

export const Dropdown: React.FC<{ label: React.ReactNode; children: React.ReactNode; variant?: ColorVariant; className?: string }> = ({ label, children, variant = 'primary', className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClick = (e: MouseEvent) => { if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) setIsOpen(false); };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);
  return (
    <div className={cn("relative inline-block", className)} ref={dropdownRef}>
      <Button variant={variant} onClick={() => setIsOpen(!isOpen)} active={isOpen}>
        {label} <ChevronDown className={cn("transition-transform duration-300", isOpen && "rotate-180")} size={18} />
      </Button>
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 z-[100] min-w-[200px] bg-maguito-white border-maguito border-maguito-black rounded-maguito-md shadow-maguito-lg p-2 flex flex-col gap-1">
          {children}
        </div>
      )}
    </div>
  );
};

export const DropdownItem: React.FC<{ icon?: React.ReactNode; children: React.ReactNode; onClick?: () => void; className?: string }> = ({ icon, children, onClick, className }) => (
  <button onClick={onClick} className={cn("flex items-center gap-3 px-4 py-2.5 rounded-maguito-sm font-black text-xs uppercase italic tracking-wider text-left transition-all hover:bg-maguito-orange hover:text-maguito-black active:scale-95", className)}>
    {icon} {children}
  </button>
);

export const Modal: React.FC<{ isOpen: boolean; onClose: () => void; title: string; children: React.ReactNode }> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-maguito-black/40 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-xl bg-maguito-white border-maguito border-maguito-black rounded-maguito-lg shadow-maguito-lg animate-in zoom-in-90 slide-in-from-bottom-10 duration-300 overflow-hidden">
        <div className="bg-maguito-orange p-6 border-b-maguito border-maguito-black flex justify-between items-center">
          <h2 className="text-2xl font-black uppercase italic tracking-tighter">{title}</h2>
          <button onClick={onClose} className="p-2 bg-maguito-black text-maguito-white rounded-maguito-sm border-2 border-maguito-black hover:bg-maguito-red transition-colors shadow-maguito active:shadow-none active:translate-x-[var(--maguito-shadow-depth)] active:translate-y-[var(--maguito-shadow-depth)]"><X size={20} strokeWidth={3} /></button>
        </div>
        <div className="p-8 md:p-10">{children}</div>
      </div>
    </div>
  );
};

export const FAB: React.FC<{ icon?: React.ReactNode; children?: React.ReactNode; variant?: ColorVariant; onClick?: () => void }> = ({ icon = <Plus />, children, variant = 'primary', onClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="fixed bottom-8 right-8 flex flex-col items-center gap-4 z-[150]">
      {isOpen && children && (<div className="flex flex-col-reverse items-center gap-3 animate-in slide-in-from-bottom-4 fade-in duration-300">{children}</div>)}
      <button onClick={() => { setIsOpen(!isOpen); onClick?.(); }} className={cn("w-16 h-16 rounded-full border-maguito border-maguito-black flex items-center justify-center shadow-maguito-lg transition-all active:scale-90 active:shadow-none active:translate-x-[var(--maguito-shadow-depth)] active:translate-y-[var(--maguito-shadow-depth)]", variant === 'primary' ? "bg-maguito-orange" : "bg-maguito-blue", isOpen && "rotate-45")}>
        {React.isValidElement(icon) ? React.cloneElement(icon as any, { size: 32, strokeWidth: 3 }) : icon}
      </button>
    </div>
  );
};

export const Swap: React.FC<{ active: boolean; onToggle: () => void; childrenOn: React.ReactNode; childrenOff: React.ReactNode }> = ({ active, onToggle, childrenOn, childrenOff }) => (
  <button onClick={onToggle} className="relative w-12 h-12 flex items-center justify-center border-maguito border-maguito-black rounded-maguito-md bg-maguito-white shadow-maguito transition-all active:translate-x-[var(--maguito-shadow-depth)] active:translate-y-[var(--maguito-shadow-depth)] active:shadow-none group">
    <div className={cn("transition-all duration-300", active ? "scale-100 opacity-100 rotate-0" : "scale-0 opacity-0 -rotate-90 absolute")}>{childrenOn}</div>
    <div className={cn("transition-all duration-300", !active ? "scale-100 opacity-100 rotate-0" : "scale-0 opacity-0 rotate-90 absolute")}>{childrenOff}</div>
  </button>
);

// --- CARDS & LAYOUT ---

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'white' | 'primary' | 'interactive';
  padding?: boolean;
  paddingSize?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  shadowColor?: string;
  overflowHidden?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, variant = 'white', padding = true, paddingSize = 'md', shadowColor, className, style, overflowHidden = false, ...props }) => {
  const baseStyles = "border-maguito rounded-maguito-lg transition-all duration-300";
  const variants = { white: "bg-maguito-white", primary: "bg-maguito-orange/5", interactive: "hover:-translate-y-[var(--maguito-shadow-depth)] hover:-translate-x-[var(--maguito-shadow-depth)] transition-transform cursor-pointer bg-maguito-white" };
  const paddingClasses = { none: "p-0", sm: "p-4", md: "p-6", lg: "p-10", xl: "p-16" };
  const resolvedShadowColor = shadowColor && maguitoColors[shadowColor as ColorVariant] ? maguitoColors[shadowColor as ColorVariant] : (shadowColor || 'var(--maguito-text)');
  const shadowStyle = { boxShadow: `var(--maguito-shadow-depth) var(--maguito-shadow-depth) 0px 0px ${resolvedShadowColor}` };
  return (
    <div className={cn(baseStyles, variants[variant], padding ? paddingClasses[paddingSize] : "p-0", overflowHidden && "overflow-hidden", className)} style={{ ...shadowStyle, ...style }} {...props}>
      {children}
    </div>
  );
};

export const Fieldset: React.FC<{ legend: string; children: React.ReactNode; className?: string }> = ({ legend, children, className }) => (
  <fieldset className={cn("border-maguito border-maguito-black rounded-maguito-lg p-6 md:p-8 relative mt-4", className)}>
    <legend className="absolute -top-4 left-6 bg-maguito-yellow px-4 py-1 border-maguito border-maguito-black rounded-maguito-sm font-black italic uppercase text-sm tracking-widest shadow-maguito">
      {legend}
    </legend>
    <div className="space-y-6 pt-4">{children}</div>
  </fieldset>
);

export const Filter: React.FC<{ tags: string[]; selected: string[]; onToggle: (tag: string) => void; label?: string }> = ({ tags, selected, onToggle, label }) => (
  <div className="flex flex-col gap-3">
    {label && <Label>{label}</Label>}
    <div className="flex flex-wrap gap-2">
      {tags.map(tag => { 
        const isSelected = selected.includes(tag); 
        return (
          <button 
            key={tag} 
            onClick={() => onToggle(tag)} 
            className={cn(
              "px-4 py-1.5 border-2 border-maguito-black rounded-full font-black text-xs uppercase italic tracking-wider transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]", 
              isSelected ? "bg-maguito-orange translate-x-[1px] translate-y-[1px] shadow-none" : "bg-maguito-white hover:bg-gray-50"
            )}
          >
            {tag}
          </button>
        ); 
      })}
    </div>
  </div>
);

// --- INPUTS ---

export const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement> & { label?: string; helper?: string; error?: string }> = ({ label, helper, error, className, ...props }) => (
  <div className="flex flex-col gap-1 w-full">{label && <Label>{label}</Label>}<input className={cn("w-full px-4 py-3 bg-maguito-white border-maguito border-maguito-black rounded-maguito-md shadow-maguito focus:outline-none focus:ring-4 focus:ring-maguito-orange/20 transition-all font-bold placeholder:text-gray-400 text-maguito-black", error ? "border-maguito-red" : "focus:border-maguito-orange", className)} {...props} />{helper && !error && <p className="text-xs font-bold text-gray-500 italic px-1">{helper}</p>}<Validator error={error} /></div>
);

export const Textarea: React.FC<React.TextareaHTMLAttributes<HTMLTextAreaElement> & { label?: string; error?: string }> = ({ label, error, className, ...props }) => (
  <div className="flex flex-col gap-1 w-full">{label && <Label>{label}</Label>}<textarea className={cn("w-full px-4 py-3 bg-maguito-white border-maguito border-maguito-black rounded-maguito-md shadow-maguito focus:outline-none focus:ring-4 focus:ring-maguito-orange/20 transition-all font-bold placeholder:text-gray-400 text-maguito-black min-h-[120px]", error ? "border-maguito-red" : "focus:border-maguito-orange", className)} {...props} /><Validator error={error} /></div>
);

export const Checkbox: React.FC<React.InputHTMLAttributes<HTMLInputElement> & { label?: string }> = ({ label, className, ...props }) => (
  <label className="flex items-center gap-3 cursor-pointer group select-none"><div className="relative"><input type="checkbox" className="sr-only" {...props} /><div className={cn("w-7 h-7 border-maguito border-maguito-black rounded-maguito-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all flex items-center justify-center bg-maguito-white", "group-active:translate-x-[1px] group-active:translate-y-[1px] group-active:shadow-none", props.checked ? "bg-maguito-orange" : "bg-maguito-white")}>{props.checked && <Check size={18} strokeWidth={4} className="text-maguito-black" />}</div></div>{label && <span className="font-black italic uppercase text-sm tracking-tight text-maguito-black">{label}</span>}</label>
);

export const Radio: React.FC<React.InputHTMLAttributes<HTMLInputElement> & { label?: string }> = ({ label, className, ...props }) => (
  <label className="flex items-center gap-3 cursor-pointer group select-none"><div className="relative"><input type="radio" className="sr-only" {...props} /><div className={cn("w-7 h-7 border-maguito border-maguito-black rounded-full shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all flex items-center justify-center bg-maguito-white", "group-active:translate-x-[1px] group-active:translate-y-[1px] group-active:shadow-none", props.checked ? "bg-maguito-blue" : "bg-maguito-white")}>{props.checked && <div className="w-2.5 h-2.5 bg-maguito-black rounded-full" />}</div></div>{label && <span className="font-black italic uppercase text-sm tracking-tight text-maguito-black">{label}</span>}</label>
);

export const Toggle: React.FC<React.InputHTMLAttributes<HTMLInputElement> & { label?: string }> = ({ label, ...props }) => (
  <label className="flex items-center gap-3 cursor-pointer group"><div className="relative"><input type="checkbox" className="sr-only" {...props} /><div className={cn("w-14 h-8 border-maguito border-maguito-black rounded-full transition-all shadow-maguito", props.checked ? "bg-maguito-green" : "bg-gray-200")}><div className={cn("absolute top-1 w-4 h-4 border-2 border-maguito-black rounded-full bg-maguito-white transition-all shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]", props.checked ? "left-7" : "left-1.5")} /></div></div>{label && <span className="font-black italic uppercase text-sm tracking-tight text-maguito-black">{label}</span>}</label>
);

export const Select: React.FC<React.SelectHTMLAttributes<HTMLSelectElement> & { label?: string; error?: string }> = ({ label, error, children, className, ...props }) => (
  <div className="flex flex-col gap-1 w-full">{label && <Label>{label}</Label>}<div className="relative"><select className={cn("w-full px-4 py-3 bg-maguito-white border-maguito border-maguito-black rounded-maguito-md shadow-maguito focus:outline-none focus:ring-4 focus:ring-maguito-orange/20 transition-all font-bold text-maguito-black appearance-none cursor-pointer", error ? "border-maguito-red" : "focus:border-maguito-orange", className)} {...props}>{children}</select><div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"><ChevronDown size={20} strokeWidth={3} className="text-maguito-black" /></div></div><Validator error={error} /></div>
);

export const Slider: React.FC<React.InputHTMLAttributes<HTMLInputElement> & { label?: string }> = ({ label, ...props }) => (
  <div className="flex flex-col gap-2 w-full"><div className="flex justify-between items-center">{label && <Label className="mb-0">{label}</Label>}<Badge variant="neutral">{props.value}</Badge></div><input type="range" className="w-full h-4 bg-maguito-white border-maguito border-maguito-black rounded-full appearance-none cursor-pointer accent-maguito-orange shadow-maguito" {...props} /></div>
);

export const Rating: React.FC<{ value: number; max?: number; onChange?: (val: number) => void; label?: string }> = ({ value, max = 5, onChange, label }) => (
  <div className="flex flex-col gap-2">{label && <Label>{label}</Label>}<div className="flex gap-1">{Array.from({ length: max }).map((_, i) => (<button key={i} type="button" onClick={() => onChange?.(i + 1)} className={cn("p-1 transition-transform active:scale-90", i < value ? "text-maguito-yellow scale-110" : "text-gray-300")}><Star size={32} fill={i < value ? "currentColor" : "none"} strokeWidth={3} className="drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]" /></button>))}</div></div>
);

export const FileInput: React.FC<React.InputHTMLAttributes<HTMLInputElement> & { label?: string; error?: string }> = ({ label, error, className, ...props }) => (
  <div className="flex flex-col gap-1 w-full">{label && <Label>{label}</Label>}<label className={cn("w-full flex flex-col items-center justify-center p-8 bg-maguito-white border-maguito border-dashed border-maguito-black rounded-maguito-md shadow-maguito cursor-pointer hover:bg-maguito-orange/5 transition-all group", error && "border-maguito-red")}><Upload size={40} className="text-maguito-black mb-4 group-hover:-translate-y-2 transition-transform" /><span className="font-black italic uppercase text-sm mb-1">Inyectar Ingredientes</span><span className="text-xs font-bold text-gray-500 italic">PDF, JPG, PNG (Max 10MB)</span><input type="file" className="sr-only" {...props} /></label><Validator error={error} /></div>
);

// --- FEEDBACK ---

export const Spinner: React.FC<{ size?: number; variant?: ColorVariant; className?: string }> = ({ size = 24, variant = 'primary', className }) => (
  <div className={cn("animate-spin rounded-full border-4", variant === 'primary' ? "border-maguito-orange border-t-maguito-black" : variant === 'secondary' ? "border-maguito-blue border-t-maguito-black" : "border-gray-200 border-t-maguito-black", className)} style={{ width: size, height: size }} />
);

export const LoadingDots: React.FC<{ variant?: ColorVariant }> = ({ variant = 'primary' }) => {
  const colors = { primary: 'bg-maguito-orange', secondary: 'bg-maguito-blue', accent: 'bg-maguito-yellow', neutral: 'bg-maguito-black' };
  const colorClass = colors[variant as keyof typeof colors] || colors.primary;
  return (<div className="flex gap-1.5 items-center justify-center h-6">{[1,2,3].map(i => <div key={i} className={cn("w-2.5 h-2.5 rounded-full border-2 border-maguito-black animate-bounce", colorClass)} style={{ animationDelay: `${(i-1)*0.15}s` }} />)}</div>);
};

export const Progress: React.FC<{ value: number; max?: number; variant?: ColorVariant; label?: string; showValue?: boolean }> = ({ value, max = 100, variant = 'primary', label, showValue = false }) => {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));
  const variants = { primary: 'bg-maguito-orange', secondary: 'bg-maguito-blue', accent: 'bg-maguito-yellow', success: 'bg-maguito-green', danger: 'bg-maguito-red' };
  const colorClass = variants[variant as keyof typeof variants] || variants.primary;
  return (
    <div className="w-full space-y-2">
      {(label || showValue) && (<div className="flex justify-between items-end px-1">{label && <span className="font-black uppercase italic text-xs tracking-widest">{label}</span>}{showValue && <Badge variant={variant} className="py-0.5 px-2 text-[10px]">{Math.round(percentage)}%</Badge>}</div>)}
      <div className="h-6 w-full bg-maguito-white border-maguito border-maguito-black rounded-full overflow-hidden shadow-maguito relative">
        <div className={cn("h-full transition-all duration-500 ease-out border-r-4 border-maguito-black", colorClass)} style={{ width: `${percentage}%` }} />
      </div>
    </div>
  );
};

export const RadialProgress: React.FC<{ value: number; size?: number; stroke?: number; variant?: ColorVariant }> = ({ value, size = 100, stroke = 12, variant = 'primary' }) => {
  const radius = (size - stroke) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (value / 100) * circumference;
  const variants = { primary: 'text-maguito-orange', secondary: 'text-maguito-blue', accent: 'text-maguito-yellow', success: 'text-maguito-green' };
  const colorClass = variants[variant as keyof typeof variants] || variants.primary;
  return (
    <div className="relative inline-flex items-center justify-center group shrink-0" style={{ width: size, height: size }}>
      <svg className="rotate-[-90deg]" width={size} height={size}>
        <circle className="text-gray-200" stroke="currentColor" strokeWidth={stroke} fill="transparent" r={radius} cx={size/2} cy={size/2} />
        <circle className={cn("transition-all duration-500 ease-out", colorClass)} stroke="currentColor" strokeWidth={stroke} strokeDasharray={circumference} strokeDashoffset={offset} strokeLinecap="round" fill="transparent" r={radius} cx={size/2} cy={size/2} />
      </svg>
      <div className="absolute flex flex-col items-center justify-center"><span className="text-xl font-black italic">{Math.round(value)}%</span></div>
    </div>
  );
};

export const Skeleton: React.FC<{ className?: string; shape?: 'rect' | 'circle' | 'text' }> = ({ className, shape = 'rect' }) => (
  <div className={cn("bg-gray-200 border-2 border-gray-300 animate-pulse", shape === 'circle' ? "rounded-full" : "rounded-maguito-md", shape === 'text' ? "h-3 w-3/4 mb-2" : "", className)} />
);

export const Toast: React.FC<{ message: string; type?: 'success' | 'error' | 'info'; onClose?: () => void }> = ({ message, type = 'info', onClose }) => {
  const variants = { success: { bg: 'bg-maguito-green', icon: <CheckCircle2 size={20} /> }, error: { bg: 'bg-maguito-red', icon: <XCircle size={20} /> }, info: { bg: 'bg-maguito-blue', icon: <Info size={20} /> } };
  const config = variants[type];
  return (
    <div className={cn("flex items-center gap-4 p-4 border-maguito border-maguito-black rounded-maguito-md shadow-maguito-lg animate-in slide-in-from-right-full duration-300", config.bg, "text-maguito-black")}>
      <div className="p-2 bg-maguito-white border-2 border-maguito-black rounded-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">{config.icon}</div>
      <p className="font-black italic uppercase text-xs tracking-tight flex-1">{message}</p>
      {onClose && <button onClick={onClose} className="p-1 hover:bg-black/10 rounded transition-colors"><X size={16} strokeWidth={3} /></button>}
    </div>
  );
};

export const Tooltip: React.FC<{ text: string; children: React.ReactNode; position?: 'top' | 'bottom' | 'left' | 'right' }> = ({ text, children, position = 'top' }) => {
  const positions = { top: "bottom-full left-1/2 -translate-x-1/2 mb-3", bottom: "top-full left-1/2 -translate-x-1/2 mt-3", left: "right-full top-1/2 -translate-y-1/2 mr-3", right: "left-full top-1/2 -translate-y-1/2 ml-3" };
  const arrows = { top: "top-full left-1/2 -translate-x-1/2 -mt-1 border-t-maguito-black", bottom: "bottom-full left-1/2 -translate-x-1/2 -mb-1 border-b-maguito-black", left: "left-full top-1/2 -translate-y-1/2 -ml-1 border-l-maguito-black", right: "right-full top-1/2 -translate-y-1/2 -mr-1 border-r-maguito-black" };
  return (
    <div className="relative group inline-block">
      {children}
      <div className={cn("absolute z-[100] px-3 py-1.5 bg-maguito-black text-maguito-white text-[10px] font-black uppercase tracking-widest italic border-2 border-maguito-black rounded-maguito-sm shadow-[4px_4px_0px_0px_rgba(241,134,82,1)] opacity-0 pointer-events-none group-hover:opacity-100 transition-all duration-200 scale-90 group-hover:scale-100 whitespace-nowrap", positions[position])}>
        {text}
        <div className={cn("absolute border-[6px] border-transparent", arrows[position])} />
      </div>
    </div>
  );
};

export const Badge: React.FC<ComponentProps & { variant?: ColorVariant }> = ({ children, variant = 'primary', className }) => {
  const variants: Record<ColorVariant, string> = { primary: "bg-maguito-orange text-maguito-black", secondary: "bg-maguito-blue text-maguito-black", accent: "bg-maguito-yellow text-maguito-black", info: "bg-maguito-cyan text-maguito-black", success: "bg-maguito-green text-maguito-black", warning: "bg-maguito-amber text-maguito-black", danger: "bg-maguito-red text-maguito-black", error: "bg-maguito-red text-maguito-black", neutral: "bg-maguito-black text-white", ghost: "bg-maguito-white text-maguito-black border-2 border-maguito-black", outline: "bg-transparent text-maguito-black border-2 border-maguito-black", gradient: "bg-gradient-to-r from-maguito-orange to-maguito-blue text-white", google: "bg-white text-maguito-black border border-maguito-black", github: "bg-maguito-black text-white", discord: "bg-[#5865F2] text-white" };
  return <span className={cn("inline-flex items-center px-3 py-1 rounded-full border-2 border-maguito-black font-black text-xs uppercase italic tracking-wider shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]", variants[variant], className)}>{children}</span>;
};

export const Alert: React.FC<{ type?: 'success' | 'warning' | 'error' | 'info'; children: React.ReactNode; className?: string }> = ({ children, type = 'info', className }) => {
  const types = { success: "bg-maguito-green/10 border-maguito-green text-maguito-black", warning: "bg-maguito-amber/10 border-maguito-amber text-maguito-black", error: "bg-maguito-red/10 border-maguito-red text-maguito-black", info: "bg-maguito-cyan/10 border-maguito-cyan text-maguito-black" };
  const icons = { success: "✨", warning: "⚠️", error: "🚫", info: "💡" };
  return <div className={cn("flex items-center gap-4 p-4 border-maguito border-maguito-black rounded-maguito-md shadow-maguito font-bold", types[type], className)}><span className="text-2xl">{icons[type]}</span><div className="flex-1">{children}</div></div>;
};

export const Calendar: React.FC<{ label?: string }> = ({ label }) => {
  const days = Array.from({ length: 31 }).map((_, i) => i + 1);
  return (
    <div className="flex flex-col gap-3">{label && <Label>{label}</Label>}<Card padding={false} className="border-maguito bg-maguito-white overflow-hidden shadow-maguito"><div className="p-4 bg-maguito-black text-maguito-white flex justify-between items-center border-b-maguito border-maguito-black"><button className="font-black hover:text-maguito-orange transition-colors">←</button><span className="font-black uppercase italic tracking-widest">Marzo 2025</span><button className="font-black hover:text-maguito-orange transition-colors">→</button></div><div className="p-4 grid grid-cols-7 gap-2">{['L','M','X','J','V','S','D'].map(d => (<div key={d} className="text-center font-black text-[10px] text-gray-400 mb-2">{d}</div>))}{days.map(d => (<button key={d} className={cn("h-8 flex items-center justify-center font-bold rounded-lg border-2 border-transparent transition-all", d === 12 ? "bg-maguito-orange text-maguito-black border-maguito-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]" : "hover:border-maguito-black hover:bg-gray-100")}>{d}</button>))}</div></Card></div>
  );
};

// --- NEW MISSING COMPONENTS ---

// Accordion / Collapse
export const Accordion: React.FC<{ items: { title: string; content: React.ReactNode; icon?: React.ReactNode }[]; allowMultiple?: boolean }> = ({ items, allowMultiple = false }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [openIndices, setOpenIndices] = useState<number[]>([]);
  const handleToggle = (index: number) => {
    if (allowMultiple) {
      setOpenIndices(prev => prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]);
    } else {
      setOpenIndex(openIndex === index ? null : index);
    }
  };
  return (
    <div className="flex flex-col gap-2">
      {items.map((item, i) => {
        const isOpen = allowMultiple ? openIndices.includes(i) : openIndex === i;
        return (
          <div key={i} className="border-maguito border-maguito-black rounded-maguito-md bg-maguito-white overflow-hidden shadow-maguito">
            <button onClick={() => handleToggle(i)} className="w-full px-4 py-3 flex items-center justify-between bg-maguito-white hover:bg-maguito-orange/10 transition-colors">
              <div className="flex items-center gap-3">
                {item.icon && React.isValidElement(item.icon) ? React.cloneElement(item.icon as any, { size: 20, strokeWidth: 3 }) : null}
                <span className="font-black uppercase italic tracking-tight">{item.title}</span>
              </div>
              <ChevronDown className={cn("transition-transform duration-300", isOpen && "rotate-180")} size={20} strokeWidth={3} />
            </button>
            <div className={cn("transition-all duration-300 overflow-hidden", isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0")}>
              <div className="px-4 py-3 border-t-maguito border-t-maguito-black bg-maguito-bg/50">{item.content}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

// Avatar
export const Avatar: React.FC<{ src?: string; alt?: string; size?: Size; shape?: 'circle' | 'rounded' | 'square'; status?: 'online' | 'offline' | 'busy'; className?: string }> = ({
  src, alt = 'Avatar', size = 'md', shape = 'circle', status, className
}) => {
  const sizes: Record<Size, string> = { sm: 'w-8 h-8', md: 'w-12 h-12', lg: 'w-16 h-16' };
  const shapes = { circle: 'rounded-full', rounded: 'rounded-maguito-md', square: 'rounded-none' };
  const statusColors = { online: 'bg-maguito-green', offline: 'bg-gray-400', busy: 'bg-maguito-red' };
  return (
    <div className={cn("relative inline-block", className)}>
      {src ? (
        <img src={src} alt={alt} className={cn(sizes[size], shapes[shape], "border-maguito border-maguito-black object-cover")} />
      ) : (
        <div className={cn(sizes[size], shapes[shape], "border-maguito border-maguito-black bg-maguito-orange flex items-center justify-center")}>
          <UserCircle size={size === 'sm' ? 16 : size === 'md' ? 24 : 32} strokeWidth={2} />
        </div>
      )}
      {status && (
        <div className={cn("absolute bottom-0 right-0 w-3 h-3 border-2 border-maguito-white rounded-full", statusColors[status], size === 'sm' ? 'w-2 h-2' : size === 'md' ? 'w-3 h-3' : 'w-4 h-4')} />
      )}
    </div>
  );
};

// Divider
export const Divider: React.FC<{ orientation?: 'horizontal' | 'vertical'; label?: string; className?: string }> = ({ orientation = 'horizontal', label, className }) => {
  if (orientation === 'vertical') {
    return <div className={cn("h-auto w-px bg-maguito-black/20 mx-4", className)}>{label && <span className="absolute -translate-x-1/2 -translate-y-1/2 bg-maguito-bg px-2 font-black uppercase italic text-xs">{label}</span>}</div>;
  }
  return (
    <div className={cn("flex items-center gap-4 my-4", className)}>
      <div className="flex-1 h-px bg-maguito-black/20" />
      {label && <span className="px-3 py-1 bg-maguito-bg border-maguito border-maguito-black rounded-full font-black uppercase italic text-xs shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">{label}</span>}
      <div className="flex-1 h-px bg-maguito-black/20" />
    </div>
  );
};

// Stat
export const Stat: React.FC<{ label: string; value: string | number; icon?: React.ReactNode; trend?: 'up' | 'down' | 'neutral'; trendValue?: string; className?: string }> = ({
  label, value, icon, trend, trendValue, className
}) => {
  const trendIcons = { up: <Zap size={16} />, down: <Zap size={16} className="rotate-180" />, neutral: <MoreVertical size={16} /> };
  const trendColors = { up: 'text-maguito-green', down: 'text-maguito-red', neutral: 'text-gray-400' };
  return (
    <Card className={cn("p-4", className)}>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-black uppercase italic tracking-widest text-gray-500 mb-1">{label}</p>
          <p className="text-3xl font-black text-maguito-black">{value}</p>
          {trend && trendValue && (
            <div className={cn("flex items-center gap-1 mt-2 text-xs font-bold", trendColors[trend])}>
              {trendIcons[trend]}
              <span>{trendValue}</span>
            </div>
          )}
        </div>
        {icon && <div className="p-3 bg-maguito-orange/10 rounded-maguito-md border-maguito border-maguito-black">{React.isValidElement(icon) ? React.cloneElement(icon as any, { size: 24, strokeWidth: 3 }) : icon}</div>}
      </div>
    </Card>
  );
};

// Table
export const Table: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <div className="overflow-hidden border-maguito border-maguito-black rounded-maguito-lg shadow-maguito bg-maguito-white">
    <table className={cn("w-full", className)}>{children}</table>
  </div>
);

export const TableHead: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <thead className={cn("bg-maguito-black text-maguito-white", className)}>{children}</thead>
);

export const TableBody: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <tbody className={cn("", className)}>{children}</tbody>
);

export const TableRow: React.FC<{ children: React.ReactNode; hover?: boolean; className?: string }> = ({ children, hover = true, className }) => (
  <tr className={cn("border-b-maguito border-b-maguito-black/20 last:border-b-0", hover && "hover:bg-maguito-orange/5 transition-colors", className)}>{children}</tr>
);

export const TableHeader: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <th className={cn("px-4 py-3 text-left font-black uppercase italic tracking-widest text-xs", className)}>{children}</th>
);

export const TableCell: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <td className={cn("px-4 py-3 font-bold text-sm", className)}>{children}</td>
);

// Timeline
export const Timeline: React.FC<{ items: { title: string; date?: string; description?: string; icon?: React.ReactNode; status?: 'completed' | 'active' | 'pending' }[]; className?: string }> = ({ items, className }) => (
  <div className={cn("flex flex-col gap-0", className)}>
    {items.map((item, i) => (
      <div key={i} className="flex gap-4 relative">
        {i < items.length - 1 && <div className="absolute left-5 top-10 w-0.5 h-full bg-maguito-black/20 -ml-px" />}
        <div className={cn("w-10 h-10 rounded-full border-maguito border-maguito-black flex items-center justify-center shrink-0 shadow-maguito z-10 bg-maguito-white",
          item.status === 'completed' ? 'bg-maguito-green' : item.status === 'active' ? 'bg-maguito-orange' : ''
        )}>
          {item.icon ? React.isValidElement(item.icon) ? React.cloneElement(item.icon as any, { size: 18, strokeWidth: 3 }) : item.icon :
            item.status === 'completed' ? <Check size={18} strokeWidth={4} className="text-maguito-black" /> :
            <span className="font-black text-xs">{i + 1}</span>
          }
        </div>
        <div className="pb-8">
          <div className="flex items-center gap-2 mb-1">
            <h4 className="font-black uppercase italic">{item.title}</h4>
            {item.date && <span className="text-xs font-bold text-gray-400">{item.date}</span>}
          </div>
          {item.description && <p className="text-sm font-bold text-gray-600">{item.description}</p>}
        </div>
      </div>
    ))}
  </div>
);

// Kbd
export const Kbd: React.FC<{ keys: string[]; label?: string; className?: string }> = ({ keys, label, className }) => (
  <div className={cn("flex items-center gap-2", className)}>
    {label && <span className="font-bold text-sm">{label}</span>}
    <div className="flex gap-1">
      {keys.map((key, i) => (
        <kbd key={i} className="px-2 py-1 bg-maguito-white border-maguito border-maguito-black rounded-maguito-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] font-mono text-xs font-bold uppercase">
          {key}
        </kbd>
      ))}
    </div>
  </div>
);

// Join (group buttons/inputs)
export const Join: React.FC<{ children: React.ReactNode; className?: string; orientation?: 'horizontal' | 'vertical' }> = ({ children, className, orientation = 'horizontal' }) => (
  <div className={cn("flex items-stretch", orientation === 'vertical' ? 'flex-col' : 'flex-row', className)}>
    {React.Children.map(children, (child, i) => {
      if (!React.isValidElement(child)) return child;
      const total = React.Children.count(children);
      const isMiddle = i > 0 && i < total - 1;
      const isFirst = i === 0;
      const isLast = i === total - 1;
      return React.cloneElement(child as any, {
        className: cn(
          (child as any).props.className,
          orientation === 'horizontal'
            ? cn(
                isFirst ? 'rounded-l-maguito-md rounded-r-none' : '',
                isLast ? 'rounded-r-maguito-md rounded-l-none' : '',
                isMiddle ? 'rounded-none' : '',
                !isFirst ? 'border-l-0' : '',
                '!flex items-center',
              )
            : cn(
                isFirst ? 'rounded-t-maguito-md rounded-b-none' : '',
                isLast ? 'rounded-b-maguito-md rounded-t-none' : '',
                isMiddle ? 'rounded-none' : '',
                !isFirst ? 'border-t-0' : '',
                '!flex items-center justify-center',
              ),
          'border-maguito border-maguito-black flex-1'
        )
      });
    })}
  </div>
);

// Status indicator
export const Status: React.FC<{ status: 'online' | 'offline' | 'busy' | 'away'; label?: string; className?: string }> = ({ status, label, className }) => {
  const colors = { online: 'bg-maguito-green', offline: 'bg-gray-400', busy: 'bg-maguito-red', away: 'bg-maguito-yellow' };
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className={cn("w-3 h-3 rounded-full border-maguito border-maguito-black shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]", colors[status])} />
      {label && <span className="font-black uppercase italic text-xs">{label}</span>}
    </div>
  );
};

// Countdown
export const Countdown: React.FC<{ seconds: number; onComplete?: () => void; className?: string }> = ({ seconds, onComplete, className }) => {
  const [count, setCount] = useState(seconds);
  useEffect(() => { setCount(seconds); }, [seconds]);
  useEffect(() => {
    if (count <= 0) { onComplete?.(); return; }
    const timer = setTimeout(() => setCount(count - 1), 1000);
    return () => clearTimeout(timer);
  }, [count, onComplete]);
  return (
    <div className={cn("text-center", className)}>
      <span className="text-6xl font-black tabular-nums">{count}</span>
      <p className="font-black uppercase italic text-sm mt-2">segundos</p>
    </div>
  );
};

// Hero
export const Hero: React.FC<{ title: string; subtitle?: string; image?: string; children?: React.ReactNode; className?: string }> = ({ title, subtitle, image, children, className }) => (
  <div className={cn("relative overflow-hidden rounded-maguito-lg border-maguito border-maguito-black shadow-maguito-lg bg-gradient-to-br from-maguito-orange to-maguito-blue", className)}>
    {image && <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover' }} />}
    <div className="relative p-12 md:p-20 text-center text-white">
      <h1 className="text-4xl md:text-6xl font-black mb-4 drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">{title}</h1>
      {subtitle && <p className="text-xl md:text-2xl font-bold mb-8 drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">{subtitle}</p>}
      {children && <div className="flex justify-center gap-4">{children}</div>}
    </div>
  </div>
);

// Drawer
export const Drawer: React.FC<{ sidebar: React.ReactNode; children: React.ReactNode; position?: 'left' | 'right'; open?: boolean; onToggle?: () => void }> = ({
  sidebar, children, position = 'left', open = false, onToggle
}) => {
  return (
    <div className="flex min-h-screen">
      <div className={cn(
        "fixed top-0 h-full w-64 bg-maguito-white border-maguito border-maguito-black shadow-maguito-lg z-50 transition-transform duration-300",
        position === 'left' ? 'left-0' : 'right-0',
        open ? 'translate-x-0' : position === 'left' ? '-translate-x-full' : 'translate-x-full'
      )}>
        <div className="p-4 border-b-maguito border-b-maguito-black flex justify-between items-center">
          <span className="font-black uppercase italic">Menú</span>
          <button onClick={onToggle} className="p-2 hover:bg-maguito-orange/10 rounded-maguito-sm"><X size={20} strokeWidth={3} /></button>
        </div>
        <div className="p-4">{sidebar}</div>
      </div>
      {open && <div className="fixed inset-0 bg-black/40 z-40" onClick={onToggle} />}
      <div className={cn("flex-1 transition-all duration-300", open && position === 'left' ? 'ml-64' : '', open && position === 'right' ? 'mr-64' : '')}>
        {children}
      </div>
    </div>
  );
};

// Stack
export const Stack: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <div className={cn("relative inline-block", className)}>
    {React.Children.map(children, (child, i) => (
      <div className={cn("absolute inset-0 transition-all", i === 0 ? 'relative z-10' : '')} style={{ transform: `translate(${i * 4}px, ${i * 4}px)` }}>
        {child}
      </div>
    ))}
  </div>
);

// Indicator
export const Indicator: React.FC<{ children: React.ReactNode; indicator: React.ReactNode; position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'; className?: string }> = ({
  children, indicator, position = 'top-right', className
}) => {
  const positions = {
    'top-left': 'top-0 left-0 -translate-x-1/4 -translate-y-1/4',
    'top-right': 'top-0 right-0 translate-x-1/4 -translate-y-1/4',
    'bottom-left': 'bottom-0 left-0 -translate-x-1/4 translate-y-1/4',
    'bottom-right': 'bottom-0 right-0 translate-x-1/4 translate-y-1/4',
  };
  return (
    <div className={cn("relative inline-block", className)}>
      {children}
      <div className={cn("absolute z-10", positions[position])}>{indicator}</div>
    </div>
  );
};

// List
export const List: React.FC<{ items: { title: string; description?: string; icon?: React.ReactNode; action?: React.ReactNode }[]; className?: string }> = ({ items, className }) => (
  <div className={cn("flex flex-col border-maguito border-maguito-black rounded-maguito-lg bg-maguito-white shadow-maguito", className)}>
    {items.map((item, i) => (
      <div key={i} className={cn("flex items-center gap-4 p-4", i < items.length - 1 && 'border-b-maguito border-b-maguito-black/20')}>
        {item.icon && <div className="p-2 bg-maguito-orange/10 rounded-maguito-sm">{React.isValidElement(item.icon) ? React.cloneElement(item.icon as any, { size: 20, strokeWidth: 3 }) : item.icon}</div>}
        <div className="flex-1">
          <h4 className="font-black uppercase italic">{item.title}</h4>
          {item.description && <p className="text-sm font-bold text-gray-500">{item.description}</p>}
        </div>
        {item.action && <div>{item.action}</div>}
      </div>
    ))}
  </div>
);

// Chat Bubble
export const ChatBubble: React.FC<{ message: string; sender: 'me' | 'them'; timestamp?: string; avatar?: string; className?: string }> = ({
  message, sender, timestamp, avatar, className
}) => {
  const isMe = sender === 'me';
  return (
    <div className={cn("flex items-end gap-2 mb-4", isMe ? 'flex-row-reverse' : '', className)}>
      {avatar && <Avatar src={avatar} size="sm" className="shrink-0" />}
      <div className={cn("max-w-xs md:max-w-md p-4 rounded-maguito-lg border-maguito border-maguito-black shadow-maguito",
        isMe ? 'bg-maguito-orange' : 'bg-maguito-white'
      )}>
        <p className={cn("font-bold", isMe ? 'text-maguito-black' : 'text-maguito-black')}>{message}</p>
        {timestamp && <p className="text-xs font-bold mt-2 opacity-60">{timestamp}</p>}
      </div>
    </div>
  );
};

// Carousel
export const Carousel: React.FC<{ children: React.ReactNode; className?: string; autoPlay?: boolean; interval?: number }> = ({ children, className, autoPlay = false, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const childrenArray = React.Children.toArray(children);
  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % childrenArray.length);
    }, interval);
    return () => clearInterval(timer);
  }, [autoPlay, interval, childrenArray.length]);
  return (
    <div className={cn("overflow-hidden rounded-maguito-lg border-maguito border-maguito-black shadow-maguito-lg bg-maguito-white", className)}>
      <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {React.Children.map(children, child => (
          <div className="min-w-full">{child}</div>
        ))}
      </div>
      <div className="flex justify-center gap-2 p-4 bg-maguito-bg">
        {childrenArray.map((_, i) => (
          <button key={i} onClick={() => setCurrentIndex(i)} className={cn("w-3 h-3 rounded-full border-maguito border-maguito-black transition-all", i === currentIndex ? 'bg-maguito-orange scale-125' : 'bg-gray-300')} />
        ))}
      </div>
    </div>
  );
};

// Mask (shape cropping)
export const Mask: React.FC<{ children: React.ReactNode; shape?: 'circle' | 'rounded' | 'squircle' | 'hexagon'; className?: string }> = ({
  children, shape = 'circle', className
}) => {
  const shapes = {
    circle: 'rounded-full',
    rounded: 'rounded-maguito-lg',
    squircle: 'rounded-[30%]',
    hexagon: 'clip-path-hexagon',
  };
  return <div className={cn(shapes[shape], "overflow-hidden", className)}>{children}</div>;
};

// Theme Controller
export const ThemeController: React.FC<{ themes: { name: string; colors: { primary: string; secondary: string } }[]; activeTheme: number; onThemeChange: (index: number) => void; className?: string }> = ({
  themes, activeTheme, onThemeChange, className
}) => (
  <div className={cn("flex flex-wrap gap-2", className)}>
    {themes.map((theme, i) => (
      <button
        key={i}
        onClick={() => onThemeChange(i)}
        className={cn(
          "px-4 py-2 rounded-maguito-md border-maguito border-maguito-black shadow-maguito transition-all active:translate-x-[var(--maguito-shadow-depth)] active:translate-y-[var(--maguito-shadow-depth)] active:shadow-none",
          activeTheme === i ? 'scale-110' : 'hover:scale-105'
        )}
        style={{ backgroundColor: theme.colors.primary }}
      >
        <span className="font-black uppercase italic text-xs" style={{ color: theme.colors.secondary }}>{theme.name}</span>
      </button>
    ))}
  </div>
);

// Artboard
export const Artboard: React.FC<{ children: React.ReactNode; device?: 'phone' | 'tablet' | 'desktop'; className?: string }> = ({ children, device = 'phone', className }) => {
  const devices = {
    phone: 'max-w-[375px] aspect-[9/19]',
    tablet: 'max-w-[768px] aspect-[4/3]',
    desktop: 'max-w-[1024px] aspect-[16/10]',
  };
  return (
    <div className={cn("border-maguito border-maguito-black rounded-maguito-lg shadow-maguito-lg bg-maguito-white overflow-hidden", devices[device], className)}>
      {children}
    </div>
  );
};

// Diff (side-by-side comparison)
export const Diff: React.FC<{ before: React.ReactNode; after: React.ReactNode; className?: string }> = ({ before, after, className }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const position = ((x - rect.left) / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, position)));
  };
  return (
    <div ref={containerRef} className={cn("relative overflow-hidden rounded-maguito-lg border-maguito border-maguito-black shadow-maguito-lg", className)} onMouseMove={handleMove} onTouchMove={handleMove}>
      <div className="relative w-full h-full">
        <div className="absolute inset-0">{after}</div>
        <div className="absolute inset-0 overflow-hidden" style={{ width: `${sliderPosition}%` }}>{before}</div>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-maguito-white border-maguito border-maguito-black rounded-full shadow-maguito-lg flex items-center justify-center cursor-ew-resize">
        <ChevronLeft size={20} strokeWidth={3} className="absolute left-1" />
        <ChevronRight size={20} strokeWidth={3} className="absolute right-1" />
      </div>
    </div>
  );
};

// 3D Hover Card
export const Hover3DCard: React.FC<{ children: React.ReactNode; image?: string; title?: string; description?: string; className?: string }> = ({
  children, image, title, description, className
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState({ rotateX: 0, rotateY: 0 });
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTransform({ rotateX: -y * 20, rotateY: x * 20 });
  };
  const handleMouseLeave = () => setTransform({ rotateX: 0, rotateY: 0 });
  return (
    <div className="perspective-1000">
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={cn("transition-transform duration-200 border-maguito border-maguito-black rounded-maguito-lg shadow-maguito-lg bg-maguito-white", className)}
        style={{ transform: `rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg)` }}
      >
        {image && <div className="h-48 bg-gradient-to-br from-maguito-orange to-maguito-blue overflow-hidden rounded-t-maguito-lg">{children}</div>}
        {(title || description) && (
          <div className="p-6">
            {title && <h3 className="text-xl font-black uppercase italic mb-2">{title}</h3>}
            {description && <p className="font-bold text-gray-600">{description}</p>}
          </div>
        )}
      </div>
    </div>
  );
};
