
import { useState } from 'react';

interface Skill {
  name: string;
  level: number;
  x: number;
  y: number;
  projects: number;
  funFact: string;
  color: string;
}

const SkillNova = () => {
  const [hoveredSkill, setHoveredSkill] = useState<Skill | null>(null);

  const skills: Skill[] = [
    {
      name: 'React',
      level: 98,
      x: 25,
      y: 20,
      projects: 7,
      funFact: 'Can debug while sleepwalking',
      color: '#61DAFB'
    },
    {
      name: 'TypeScript',
      level: 95,
      x: 75,
      y: 15,
      projects: 12,
      funFact: 'Types faster than speaks',
      color: '#3178C6'
    },
    {
      name: 'Node.js',
      level: 92,
      x: 60,
      y: 40,
      projects: 9,
      funFact: 'Dreams in async/await',
      color: '#339933'
    },
    {
      name: 'Python',
      level: 88,
      x: 20,
      y: 60,
      projects: 6,
      funFact: 'Snake charmer certified',
      color: '#3776AB'
    },
    {
      name: 'Docker',
      level: 85,
      x: 80,
      y: 65,
      projects: 8,
      funFact: 'Container whisperer',
      color: '#2496ED'
    },
    {
      name: 'AWS',
      level: 90,
      x: 45,
      y: 75,
      projects: 11,
      funFact: 'Cloud architect by day',
      color: '#FF9900'
    },
    {
      name: 'GraphQL',
      level: 87,
      x: 15,
      y: 35,
      projects: 5,
      funFact: 'Query optimization ninja',
      color: '#E10098'
    },
    {
      name: 'Next.js',
      level: 93,
      x: 85,
      y: 30,
      projects: 10,
      funFact: 'SSR sorcerer',
      color: '#000000'
    }
  ];

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            SKILL NOVA
          </h2>
          <p className="text-xl text-gray-400 font-mono">
            Interactive Tech Galaxy - Hover to Explore
          </p>
        </div>

        <div className="relative bg-black/40 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-8 min-h-[600px]">
          {/* Galaxy Background */}
          <div className="absolute inset-0 overflow-hidden rounded-lg">
            {[...Array(100)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  opacity: Math.random() * 0.7
                }}
              />
            ))}
          </div>

          {/* Skills as Stars */}
          <div className="relative z-10">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                style={{
                  left: `${skill.x}%`,
                  top: `${skill.y}%`
                }}
                onMouseEnter={() => setHoveredSkill(skill)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                {/* Star/Planet */}
                <div
                  className="w-8 h-8 rounded-full border-2 transition-all duration-300 group-hover:scale-150 group-hover:shadow-lg"
                  style={{
                    backgroundColor: skill.color,
                    borderColor: skill.color,
                    boxShadow: `0 0 20px ${skill.color}40`
                  }}
                />
                
                {/* Skill Name */}
                <div className="absolute top-10 left-1/2 transform -translate-x-1/2 text-xs font-mono text-cyan-400 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                  {skill.name}
                </div>

                {/* Orbit Ring */}
                <div
                  className="absolute inset-0 rounded-full border opacity-20 group-hover:opacity-60 transition-opacity animate-spin"
                  style={{
                    width: '60px',
                    height: '60px',
                    marginLeft: '-26px',
                    marginTop: '-26px',
                    borderColor: skill.color,
                    animationDuration: '10s'
                  }}
                />
              </div>
            ))}
          </div>

          {/* Hover Info Panel */}
          {hoveredSkill && (
            <div className="absolute bottom-8 left-8 right-8 bg-black/80 backdrop-blur-sm border border-cyan-500/50 rounded-lg p-6 z-20">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">
                    {hoveredSkill.level}%
                  </div>
                  <div className="text-sm text-gray-400">CONFIDENCE LEVEL</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">
                    {hoveredSkill.projects}
                  </div>
                  <div className="text-sm text-gray-400">PRODUCTION APPS</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-mono text-green-400 mb-2">
                    "{hoveredSkill.funFact}"
                  </div>
                  <div className="text-sm text-gray-400">FUN FACT</div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Legend */}
        <div className="mt-8 text-center text-sm text-gray-400 font-mono">
          <p>🌟 Hover over stars to explore tech mastery levels</p>
          <p className="mt-2">Size = Confidence | Glow = Project Count | Orbit = Years Experience</p>
        </div>
      </div>
    </section>
  );
};

export default SkillNova;
