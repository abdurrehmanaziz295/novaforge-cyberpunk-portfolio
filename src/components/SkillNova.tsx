
import { useState } from 'react';

interface Skill {
  name: string;
  confidence: number;
  projects: number;
  funFact: string;
  x: number;
  y: number;
  color: string;
  size: number;
}

const SkillNova = () => {
  const [hoveredSkill, setHoveredSkill] = useState<Skill | null>(null);
  
  const skills: Skill[] = [
    {
      name: 'React',
      confidence: 98,
      projects: 15,
      funFact: 'Can debug while sleepwalking',
      x: 20,
      y: 30,
      color: 'from-cyan-400 to-blue-500',
      size: 'large'
    },
    {
      name: 'TypeScript',
      confidence: 95,
      projects: 12,
      funFact: 'Types faster than I think',
      x: 70,
      y: 25,
      color: 'from-blue-400 to-indigo-500',
      size: 'large'
    },
    {
      name: 'Node.js',
      confidence: 92,
      projects: 18,
      funFact: 'Event loops in my dreams',
      x: 45,
      y: 60,
      color: 'from-green-400 to-emerald-500',
      size: 'large'
    },
    {
      name: 'Python',
      confidence: 88,
      projects: 8,
      funFact: 'Snake charmer certified',
      x: 15,
      y: 70,
      color: 'from-yellow-400 to-orange-500',
      size: 'medium'
    },
    {
      name: 'AWS',
      confidence: 85,
      projects: 10,
      funFact: 'Cloud architect by day',
      x: 80,
      y: 65,
      color: 'from-purple-400 to-pink-500',
      size: 'medium'
    },
    {
      name: 'Docker',
      confidence: 82,
      projects: 14,
      funFact: 'Container whisperer',
      x: 60,
      y: 40,
      color: 'from-teal-400 to-cyan-500',
      size: 'medium'
    },
    {
      name: 'GraphQL',
      confidence: 78,
      projects: 6,
      funFact: 'Query optimization ninja',
      x: 35,
      y: 20,
      color: 'from-pink-400 to-rose-500',
      size: 'small'
    },
    {
      name: 'Rust',
      confidence: 65,
      projects: 3,
      funFact: 'Memory safety evangelist',
      x: 25,
      y: 50,
      color: 'from-orange-400 to-red-500',
      size: 'small'
    }
  ];

  const getSizeClass = (size: string) => {
    switch (size) {
      case 'large': return 'w-8 h-8';
      case 'medium': return 'w-6 h-6';
      case 'small': return 'w-4 h-4';
      default: return 'w-6 h-6';
    }
  };

  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            SKILL NOVA
          </h2>
          <p className="text-xl text-gray-400 font-mono">
            Interactive Galaxy of Tech Mastery
          </p>
        </div>

        <div className="relative">
          {/* Galaxy Container */}
          <div className="relative h-96 md:h-[500px] bg-black/40 backdrop-blur-sm border border-purple-500/30 rounded-2xl overflow-hidden">
            {/* Background stars */}
            <div className="absolute inset-0">
              {[...Array(100)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full opacity-30 animate-pulse"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 3}s`
                  }}
                />
              ))}
            </div>

            {/* Skill Stars */}
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className={`
                  absolute ${getSizeClass(skill.size)} cursor-pointer transform -translate-x-1/2 -translate-y-1/2
                  transition-all duration-300 hover:scale-150 animate-pulse
                `}
                style={{
                  left: `${skill.x}%`,
                  top: `${skill.y}%`,
                  animationDelay: `${index * 0.2}s`
                }}
                onMouseEnter={() => setHoveredSkill(skill)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <div className={`w-full h-full rounded-full bg-gradient-to-br ${skill.color} shadow-lg shadow-current/50`} />
                
                {/* Skill rings */}
                <div className="absolute inset-0 rounded-full border border-current opacity-30 animate-ping" />
              </div>
            ))}

            {/* Connecting lines */}
            <svg className="absolute inset-0 w-full h-full opacity-20">
              {skills.map((skill, i) => (
                skills.slice(i + 1).map((otherSkill, j) => (
                  <line
                    key={`${i}-${j}`}
                    x1={`${skill.x}%`}
                    y1={`${skill.y}%`}
                    x2={`${otherSkill.x}%`}
                    y2={`${otherSkill.y}%`}
                    stroke="url(#gradient)"
                    strokeWidth="0.5"
                    className="animate-pulse"
                  />
                ))
              )).flat()}
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00f5ff" />
                  <stop offset="100%" stopColor="#8b5cf6" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Skill Info Panel */}
          {hoveredSkill && (
            <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm border border-cyan-500/50 rounded-lg p-6 min-w-80 animate-fade-in">
              <h3 className="text-2xl font-bold text-cyan-400 mb-2">{hoveredSkill.name}</h3>
              <div className="space-y-2 font-mono text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Confidence Level:</span>
                  <span className="text-green-400 font-bold">{hoveredSkill.confidence}% (Certified Wizard)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Projects Used:</span>
                  <span className="text-purple-400 font-bold">{hoveredSkill.projects} Production Apps</span>
                </div>
                <div className="mt-3 p-2 bg-gray-900/50 rounded">
                  <span className="text-yellow-400 text-xs">Fun Fact:</span>
                  <p className="text-gray-300 text-sm italic">"{hoveredSkill.funFact}"</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Legend */}
        <div className="mt-8 flex justify-center gap-8 text-sm font-mono">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
            <span className="text-gray-400">Expert (90%+)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-400 to-pink-500" />
            <span className="text-gray-400">Advanced (80%+)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-gradient-to-r from-orange-400 to-red-500" />
            <span className="text-gray-400">Learning (60%+)</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillNova;
