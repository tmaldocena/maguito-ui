
import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import Intro from './pages/Intro';
import { ButtonsDoc, CardsDoc, InputsDoc, FeedbackDoc, ActionsDoc, NavigationDoc, AlertsDoc, LayoutDoc, ContentDoc, InteractiveDoc } from './pages/ComponentsDoc';
import ThemesDoc, { THEMES, ThemePreset } from './pages/ThemesDoc';
import InstallationDoc from './pages/InstallationDoc';
import PublishingDoc from './pages/PublishingDoc';

export type BorderStyle = 'bubbly' | 'sharp';
export type FontStyle = 'branding' | 'serif' | 'mono' | 'jakarta';

const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState('home');
  
  const [activeTheme, setActiveTheme] = useState<ThemePreset>(() => {
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
    
    // Muted text: more visible on dark backgrounds
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

  const renderContent = () => {
    switch (currentPath) {
      case 'home': return <Home onNavigate={setCurrentPath} />;
      case 'intro': return <Intro onNavigate={setCurrentPath} />;
      case 'installation': return <InstallationDoc />;
      case 'publishing': return <PublishingDoc />;
      case 'themes': return (
          <ThemesDoc 
            currentTheme={activeTheme} onThemeChange={setActiveTheme} 
            borderStyle={borderStyle} onBorderStyleChange={setBorderStyle}
            strokeWeight={strokeWeight} onStrokeChange={setStrokeWeight}
            shadowDepth={shadowDepth} onShadowChange={setShadowDepth}
            fontStyle={fontStyle} onFontChange={setFontStyle}
            useGrain={useGrain} onGrainChange={setUseGrain}
          />
      );
      case 'buttons': return <ButtonsDoc />;
      case 'cards': return <CardsDoc />;
      case 'inputs': return <InputsDoc />;
      case 'actions': return <ActionsDoc />;
      case 'navigation': return <NavigationDoc />;
      case 'feedback': return <FeedbackDoc />;
      case 'alerts': return <AlertsDoc />;
      case 'layout': return <LayoutDoc />;
      case 'content': return <ContentDoc />;
      case 'interactive': return <InteractiveDoc />;
      default: return <Home onNavigate={setCurrentPath} />;
    }
  };

  return (
    <Layout 
      activePath={currentPath} onNavigate={setCurrentPath}
      currentTheme={activeTheme} onThemeChange={setActiveTheme}
    >
      {renderContent()}
    </Layout>
  );
};

export default App;
