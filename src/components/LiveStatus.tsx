
import { useState, useEffect } from 'react';
import { Headphones, Music } from 'lucide-react';

const LiveStatus = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [coffeeCount, setCoffeeCount] = useState(7);
  const [stressLevel, setStressLevel] = useState(73);
  const [currentSong, setCurrentSong] = useState("Cyberpunk 2077 OST - The Rebel Path");
  const [vsCodeTheme, setVsCodeTheme] = useState("Synthwave '84");

  const songs = [
    "Cyberpunk 2077 OST - The Rebel Path",
    "TRON Legacy - Derezzed",
    "Blade Runner 2049 - Mesa",
    "The Matrix - Clubbed to Death",
    "Ghost in the Shell - Making of Cyborg"
  ];

  const themes = [
    "Synthwave '84",
    "Noctis Azureus",
    "Cyberpunk",
    "Dark+ (default dark)",
    "One Dark Pro"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
      
      // Simulate real-time changes
      if (Math.random() < 0.1) {
        setCoffeeCount(prev => Math.max(0, prev + (Math.random() > 0.7 ? 1 : -1)));
      }
      
      if (Math.random() < 0.05) {
        setStressLevel(prev => Math.max(10, Math.min(100, prev + (Math.random() - 0.5) * 20)));
      }
      
      if (Math.random() < 0.02) {
        setCurrentSong(songs[Math.floor(Math.random() * songs.length)]);
      }
      
      if (Math.random() < 0.01) {
        setVsCodeTheme(themes[Math.floor(Math.random() * themes.length)]);
      }
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  const getStressColor = (level: number) => {
    if (level < 30) return 'text-green-400 border-green-500';
    if (level < 70) return 'text-yellow-400 border-yellow-500';
    return 'text-red-400 border-red-500';
  };

  const getStressStatus = (level: number) => {
    if (level < 30) return 'Zen Mode';
    if (level < 50) return 'Normal Mode';
    if (level < 70) return 'Crunch Time';
    return 'DEFCON 1';
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-red-400 to-yellow-400 bg-clip-text text-transparent">
            LIVE WAR ROOM
          </h2>
          <p className="text-xl text-gray-400 font-mono">
            Real-time Developer Status Monitor
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Coffee Counter */}
          <div className="bg-black/40 backdrop-blur-sm border border-amber-500/30 rounded-lg p-6 hover:border-amber-400/60 transition-all group">
            <div className="flex items-center justify-between mb-4">
              <div className="text-4xl">☕</div>
              <div className="text-right">
                <div className="text-3xl font-bold text-amber-400">{coffeeCount}</div>
                <div className="text-xs text-gray-400">CUPS TODAY</div>
              </div>
            </div>
            <div className="text-sm text-gray-300 font-mono">
              Status: {coffeeCount > 5 ? 'HYPER CAFFEINATED' : coffeeCount > 2 ? 'NORMAL LEVELS' : 'CRITICALLY LOW'}
            </div>
            <div className="mt-2 w-full bg-gray-700 rounded-full h-2">
              <div 
                className="bg-amber-400 h-2 rounded-full transition-all duration-500"
                style={{ width: `${Math.min(100, (coffeeCount / 10) * 100)}%` }}
              />
            </div>
          </div>

          {/* Current Music */}
          <div className="bg-black/40 backdrop-blur-sm border border-purple-500/30 rounded-lg p-6 hover:border-purple-400/60 transition-all group">
            <div className="flex items-center justify-between mb-4">
              <Headphones className="text-purple-400 w-8 h-8" />
              <Music className="text-purple-400 w-6 h-6 animate-pulse" />
            </div>
            <div className="text-sm text-purple-400 font-bold mb-1">NOW PLAYING</div>
            <div className="text-xs text-gray-300 font-mono leading-tight">
              {currentSong}
            </div>
            <div className="mt-3 flex items-center gap-2">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="w-1 bg-purple-400 animate-pulse rounded-full"
                    style={{
                      height: `${Math.random() * 20 + 10}px`,
                      animationDelay: `${i * 0.1}s`
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* VS Code Theme */}
          <div className="bg-black/40 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-6 hover:border-cyan-400/60 transition-all group">
            <div className="flex items-center justify-between mb-4">
              <div className="text-4xl">💻</div>
              <div className="text-right">
                <div className="text-sm text-cyan-400 font-bold">ACTIVE THEME</div>
              </div>
            </div>
            <div className="text-sm text-gray-300 font-mono mb-2">
              {vsCodeTheme}
            </div>
            <div className="flex gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
              <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
            </div>
          </div>

          {/* Stress Level */}
          <div className={`bg-black/40 backdrop-blur-sm border rounded-lg p-6 hover:border-opacity-60 transition-all group ${getStressColor(stressLevel)}`}>
            <div className="flex items-center justify-between mb-4">
              <div className="text-4xl">🧠</div>
              <div className="text-right">
                <div className={`text-3xl font-bold ${getStressColor(stressLevel)}`}>{stressLevel}%</div>
                <div className="text-xs text-gray-400">STRESS LEVEL</div>
              </div>
            </div>
            <div className="text-sm font-mono mb-2">
              {getStressStatus(stressLevel)}
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div 
                className={`h-2 rounded-full transition-all duration-500 ${
                  stressLevel < 30 ? 'bg-green-400' : 
                  stressLevel < 70 ? 'bg-yellow-400' : 'bg-red-400'
                }`}
                style={{ width: `${stressLevel}%` }}
              />
            </div>
          </div>
        </div>

        {/* System Status */}
        <div className="mt-8 bg-black/60 backdrop-blur-sm border border-green-500/30 rounded-lg p-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 font-mono text-sm">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                <span className="text-green-400">SYSTEM STATUS: OPERATIONAL</span>
              </div>
              <div className="text-gray-400">|</div>
              <div className="text-cyan-400">
                UPTIME: {Math.floor((currentTime.getTime() - new Date('2024-01-01').getTime()) / (1000 * 60 * 60 * 24))} DAYS
              </div>
            </div>
            <div className="text-gray-400">
              LAST SYNC: {currentTime.toLocaleTimeString()}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveStatus;
