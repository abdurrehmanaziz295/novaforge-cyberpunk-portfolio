
import { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import SkillNova from '../components/SkillNova';
import LiveStatus from '../components/LiveStatus';
import AntiPortfolio from '../components/AntiPortfolio';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const Index = () => {
  const [konamiCode, setKonamiCode] = useState<string[]>([]);
  const [rageMode, setRageMode] = useState(false);
  
  const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const newCode = [...konamiCode, e.code].slice(-10);
      setKonamiCode(newCode);
      
      if (newCode.join(',') === konamiSequence.join(',')) {
        setRageMode(!rageMode);
        console.log('🔥 DEVELOPER RAGE MODE ACTIVATED! 🔥');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [konamiCode, rageMode]);

  return (
    <div className={`min-h-screen bg-black text-white overflow-x-hidden ${rageMode ? 'retro-mode' : ''}`}>
      {/* Background Effects */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-green-900/20" />
      <div className="fixed inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.02"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30" />
      
      <div className="relative z-10">
        <Hero />
        <SkillNova />
        <LiveStatus />
        <AntiPortfolio />
        <Projects />
        <Contact />
      </div>

      {rageMode && (
        <div className="fixed top-4 right-4 z-50 p-4 bg-red-500 text-white rounded animate-pulse">
          🔥 RAGE MODE ACTIVATED! 🔥
        </div>
      )}
    </div>
  );
};

export default Index;
