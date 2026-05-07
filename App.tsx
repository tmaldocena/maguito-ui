
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Intro from './pages/Intro';
import { ButtonsDoc, CardsDoc, InputsDoc, FeedbackDoc, ActionsDoc, NavigationDoc, AlertsDoc, LayoutDoc, ContentDoc, InteractiveDoc } from './pages/ComponentsDoc';
import ThemesDoc, { THEMES } from './pages/ThemesDoc';
import InstallationDoc from './pages/InstallationDoc';

export type BorderStyle = 'bubbly' | 'sharp';
export type FontStyle = 'branding' | 'serif' | 'mono' | 'jakarta';

const AppContent: React.FC = () => {
  const [activeTheme, setActiveTheme] = useState(() => {
    const saved = localStorage.getItem('maguito-theme');
    if (saved) return THEMES.find(t => t.id === saved) || THEMES[0];
    return THEMES[0];
  });

  const [borderStyle, setBorderStyle] = useState<BorderStyle>(() => 
    (localStorage.getItem('maguito-border-style') as BorderStyle) || 'bubbly'
  );

  const [strokeWeight, setStrokeWeight] = useState<number>(() => 
    Number(localStorage.getItem('maguito-stroke')) || 3
  );

  const [shadowDepth, setShadowDepth] = useState<number>(() => 
    Number(localStorage.getItem('maguito-shadow-depth')) || 6
  );

  const [fontStyle, setFontStyle] = useState<FontStyle>(() => 
    (localStorage.getItem('maguito-font-style') as FontStyle) || 'branding'
  );

  const [useGrain, setUseGrain] = useState<boolean>(() => 
    localStorage.getItem('maguito-grain') === 'true'
  );

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--maguito-primary', activeTheme.primary);
    root.style.setProperty('--maguito-secondary', activeTheme.secondary);
    root.style.setProperty('--maguito-bg', activeTheme.bg);
    root.style.setProperty('--maguito-text', activeTheme.text || '#2C2C2C');
    root.style.setProperty('--maguito-accent', activeTheme.accent || '#FDCB63');
    
    const isDark = activeTheme.bg && activeTheme.bg.startsWith('#0') || activeTheme.bg?.startsWith('#1');
    root.style.setProperty('--maguito-muted', isDark ? '#9CA3AF' : '#6B7280');
    
    if (borderStyle === 'sharp') {
      root.style.setProperty('--maguito-radius-lg', '0px');
      root.style.setProperty('--maguito-radius-md', '0px');
      root.style.setProperty('--maguito-radius-sm', '0px');
    } else {
      root.style.setProperty('--maguito-radius-lg', '40px');
      root.style.setProperty('--maguito-radius-md', '16px');
      root.style.setProperty('--maguito-radius-sm', '8px');
    }

    root.style.setProperty('--maguito-stroke', `${strokeWeight}px`);
    root.style.setProperty('--maguito-shadow-depth', `${shadowDepth}px`);
    
    let bodyFont = "'Plus Jakarta Sans', sans-serif";
    let displayFont = "'Fredoka', sans-serif";
    if (fontStyle === 'serif') displayFont = "'Instrument Serif', serif";
    else if (fontStyle === 'mono') { bodyFont = "'JetBrains Mono', monospace"; displayFont = "'JetBrains Mono', monospace"; }
    else if (fontStyle === 'jakarta') displayFont = "'Plus Jakarta Sans', sans-serif";

    root.style.setProperty('--maguito-font-body', bodyFont);
    root.style.setProperty('--maguito-font-display', displayFont);

    if (useGrain) document.body.classList.add('maguito-grain');
    else document.body.classList.remove('maguito-grain');

    localStorage.setItem('maguito-theme', activeTheme.id);
    localStorage.setItem('maguito-border-style', borderStyle);
    localStorage.setItem('maguito-stroke', strokeWeight.toString());
    localStorage.setItem('maguito-shadow-depth', shadowDepth.toString());
    localStorage.setItem('maguito-font-style', fontStyle);
    localStorage.setItem('maguito-grain', useGrain.toString());
  }, [activeTheme, borderStyle, strokeWeight, shadowDepth, fontStyle, useGrain]);

  return (
    <Layout 
      currentTheme={activeTheme} onThemeChange={setActiveTheme}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/installation" element={<InstallationDoc />} />
        <Route path="/themes" element={
          <ThemesDoc 
            currentTheme={activeTheme} onThemeChange={setActiveTheme} 
            borderStyle={borderStyle} onBorderStyleChange={setBorderStyle}
            strokeWeight={strokeWeight} onStrokeChange={setStrokeWeight}
            shadowDepth={shadowDepth} onShadowChange={setShadowDepth}
            fontStyle={fontStyle} onFontChange={setFontStyle}
            useGrain={useGrain} onGrainChange={setUseGrain}
          />
        } />
        <Route path="/components/buttons" element={<ButtonsDoc />} />
        <Route path="/components/inputs" element={<InputsDoc />} />
        <Route path="/components/actions" element={<ActionsDoc />} />
        <Route path="/components/navigation" element={<NavigationDoc />} />
        <Route path="/components/cards" element={<CardsDoc />} />
        <Route path="/components/feedback" element={<FeedbackDoc />} />
        <Route path="/components/alerts" element={<AlertsDoc />} />
        <Route path="/components/layout" element={<LayoutDoc />} />
        <Route path="/components/content" element={<ContentDoc />} />
        <Route path="/components/interactive" element={<InteractiveDoc />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  );
};

const App: React.FC = () => (
  <BrowserRouter>
    <AppContent />
  </BrowserRouter>
);

export default App;
