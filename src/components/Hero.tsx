
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Monitor, Laptop } from 'lucide-react';

const Hero = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [typedText, setTypedText] = useState('');
  const [isLaunching, setIsLaunching] = useState(false);
  
  const fullText = "Welcome to DevNovaForge – Last Updated: ";
  
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    let i = 0;
    const typeText = () => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1));
        i++;
        setTimeout(typeText, 100);
      }
    };
    typeText();
  }, []);

  const handleEmergencyClick = () => {
    setIsLaunching(true);
    setTimeout(() => setIsLaunching(false), 3000);
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/10 to-purple-900/20">
        <div className="absolute inset-0 opacity-20">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="text-center z-10 max-w-6xl mx-auto px-6">
        {/* Command Line Header */}
        <div className="mb-8 p-4 bg-black/60 backdrop-blur-sm border border-green-500/30 rounded-lg font-mono text-sm">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-green-400 ml-2">nasa-hacker@devnovaforge:~$</span>
          </div>
          <div className="text-green-400">
            {typedText}
            <span className="text-cyan-400 font-bold">
              {currentTime.toLocaleString()} (We Never Sleep)
            </span>
            <span className="animate-pulse">_</span>
          </div>
        </div>

        {/* Main Title */}
        <h1 className="text-7xl md:text-9xl font-black mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-green-400 bg-clip-text text-transparent">
          DEV<span className="text-white">NOVA</span>FORGE
        </h1>
        
        <div className="text-xl md:text-2xl text-gray-300 mb-4 font-mono">
          &gt; Full-Stack Architect & Digital Sorcerer
        </div>
        
        <div className="text-lg text-cyan-400 mb-8 font-mono">
          Status: [ONLINE] | Threat Level: MINIMAL | Coffee: CRITICAL
        </div>

        {/* Stats Display */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 max-w-4xl mx-auto">
          <div className="bg-black/40 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-6 hover:border-cyan-400/60 transition-all">
            <div className="text-3xl font-bold text-cyan-400">98%</div>
            <div className="text-sm text-gray-400">SYSTEM EFFICIENCY</div>
          </div>
          <div className="bg-black/40 backdrop-blur-sm border border-purple-500/30 rounded-lg p-6 hover:border-purple-400/60 transition-all">
            <div className="text-3xl font-bold text-purple-400">47</div>
            <div className="text-sm text-gray-400">PROJECTS DEPLOYED</div>
          </div>
          <div className="bg-black/40 backdrop-blur-sm border border-green-500/30 rounded-lg p-6 hover:border-green-400/60 transition-all">
            <div className="text-3xl font-bold text-green-400">∞</div>
            <div className="text-sm text-gray-400">BUGS TERMINATED</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button
            onClick={handleEmergencyClick}
            className={`
              px-8 py-4 text-lg font-bold bg-red-600 hover:bg-red-700 border-2 border-red-400
              transform transition-all duration-300 hover:scale-105 relative overflow-hidden
              ${isLaunching ? 'animate-pulse' : ''}
            `}
          >
            {isLaunching ? (
              <span className="flex items-center gap-2">
                🚀 LAUNCHING... <Monitor className="animate-spin" />
              </span>
            ) : (
              <>Emergency Project? CTRL+ALT+DEL Here</>
            )}
            {isLaunching && (
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 opacity-30 animate-pulse"></div>
            )}
          </Button>
          
          <Button
            variant="outline"
            className="px-8 py-4 text-lg border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300"
          >
            <Laptop className="mr-2" />
            View Arsenal
          </Button>
        </div>

        {/* Scrolling Code Background */}
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-10 text-xs font-mono text-green-400 overflow-hidden w-64 h-96">
          <div className="animate-scroll-up space-y-1">
            <div>const hackNASA = () => {"{"}</div>
            <div>  console.log('Access granted');</div>
            <div>  return deployToMars();</div>
            <div>{"}"}</div>
            <div>// TODO: Take over the world</div>
            <div>if (coffee.level < 50) {"{"}</div>
            <div>  developer.efficiency = 0;</div>
            <div>{"}"}</div>
            <div>function breakInternet() {"{"}</div>
            <div>  while(true) {"{"}</div>
            <div>    createAwesomeStuff();</div>
            <div>  {"}"}</div>
            <div>{"}"}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
