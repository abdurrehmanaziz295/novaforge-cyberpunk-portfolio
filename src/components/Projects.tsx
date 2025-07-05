
import { useState } from 'react';
import { Button } from '@/components/ui/button';

interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  status: 'DEPLOYED' | 'CLASSIFIED' | 'TERMINATED';
  threat: 'MINIMAL' | 'MODERATE' | 'MAXIMUM';
  lines: number;
  sleepLost: number;
}

const Projects = () => {
  const [filter, setFilter] = useState<'ALL' | 'DEPLOYED' | 'CLASSIFIED' | 'TERMINATED'>('ALL');

  const projects: Project[] = [
    {
      id: 'project-1',
      title: 'E-Commerce Death Star',
      description: 'Full-stack e-commerce platform that can handle Black Friday traffic without breaking. Features real-time inventory, AI recommendations, and a checkout so smooth it\'s illegal in 3 states.',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'AWS'],
      status: 'DEPLOYED',
      threat: 'MINIMAL',
      lines: 47329,
      sleepLost: 23
    },
    {
      id: 'project-2',
      title: 'Neural Network Mind Reader',
      description: 'ML-powered analytics dashboard that predicts user behavior better than users know themselves. Slightly concerning, completely legal.',
      tech: ['Python', 'TensorFlow', 'React', 'FastAPI'],
      status: 'CLASSIFIED',
      threat: 'MODERATE',
      lines: 31847,
      sleepLost: 67
    },
    {
      id: 'project-3',
      title: 'Cryptocurrency Mining Rig',
      description: 'Built a crypto mining operation in my garage. Made $3.50 profit after electricity costs. Market crashed the next day.',
      tech: ['Tears', 'Regret', 'Expensive Hardware'],
      status: 'TERMINATED',
      threat: 'MAXIMUM',
      lines: 0,
      sleepLost: 156
    },
    {
      id: 'project-4',
      title: 'Social Media Sentiment Analyzer',
      description: 'Real-time sentiment analysis of social media posts. Can detect drama before it trends. Currently monitoring this portfolio for roasts.',
      tech: ['Python', 'Twitter API', 'Docker', 'MongoDB'],
      status: 'DEPLOYED',
      threat: 'MODERATE',
      lines: 28394,
      sleepLost: 34
    }
  ];

  const filteredProjects = filter === 'ALL' ? projects : projects.filter(p => p.status === filter);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'DEPLOYED': return 'text-green-400 border-green-500';
      case 'CLASSIFIED': return 'text-yellow-400 border-yellow-500';
      case 'TERMINATED': return 'text-red-400 border-red-500';
      default: return 'text-gray-400 border-gray-500';
    }
  };

  const getThreatColor = (threat: string) => {
    switch (threat) {
      case 'MINIMAL': return 'text-green-400';
      case 'MODERATE': return 'text-yellow-400';
      case 'MAXIMUM': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
            PROJECT ARCHIVES
          </h2>
          <p className="text-xl text-gray-400 font-mono">
            Classified Mission Reports & Battle Scars
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['ALL', 'DEPLOYED', 'CLASSIFIED', 'TERMINATED'].map((status) => (
            <Button
              key={status}
              onClick={() => setFilter(status as any)}
              variant={filter === status ? "default" : "outline"}
              className={`
                font-mono transition-all duration-300
                ${filter === status 
                  ? 'bg-cyan-600 border-cyan-500 text-white' 
                  : 'border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10'
                }
              `}
            >
              {status}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-black/60 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-6 hover:border-cyan-400/60 transition-all duration-300 group"
            >
              {/* Project Header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-cyan-400 mb-2">{project.title}</h3>
                  <div className="flex items-center gap-4 text-xs font-mono">
                    <span className={`px-2 py-1 border rounded ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                    <span className={`${getThreatColor(project.threat)}`}>
                      THREAT: {project.threat}
                    </span>
                  </div>
                </div>
                <div className="text-3xl opacity-60 group-hover:scale-110 transition-transform">
                  {project.status === 'DEPLOYED' ? '🚀' : 
                   project.status === 'CLASSIFIED' ? '🔒' : '💀'}
                </div>
              </div>

              {/* Project Description */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="mb-6">
                <div className="text-sm text-purple-400 font-bold mb-2">TECH ARSENAL:</div>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-purple-500/20 border border-purple-500/30 rounded text-xs font-mono text-purple-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Stats */}
              <div className="grid grid-cols-2 gap-4 text-xs font-mono">
                <div className="text-center p-2 bg-gray-900/50 rounded">
                  <div className="text-lg font-bold text-green-400">{project.lines.toLocaleString()}</div>
                  <div className="text-gray-400">LINES OF CODE</div>
                </div>
                <div className="text-center p-2 bg-gray-900/50 rounded">
                  <div className="text-lg font-bold text-red-400">{project.sleepLost}</div>
                  <div className="text-gray-400">HOURS OF SLEEP LOST</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 flex gap-3">
                {project.status === 'DEPLOYED' && (
                  <Button size="sm" className="bg-green-600 hover:bg-green-700 text-xs font-mono">
                    LAUNCH DEMO
                  </Button>
                )}
                {project.status === 'CLASSIFIED' && (
                  <Button size="sm" variant="outline" className="border-yellow-500 text-yellow-400 text-xs font-mono">
                    REQUEST ACCESS
                  </Button>
                )}
                {project.status === 'TERMINATED' && (
                  <Button size="sm" variant="outline" className="border-red-500 text-red-400 text-xs font-mono">
                    VIEW POST-MORTEM
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Achievement Section */}
        <div className="mt-16 bg-gradient-to-r from-purple-900/20 to-cyan-900/20 border border-cyan-500/30 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-cyan-400 mb-6 text-center font-mono">
            ACHIEVEMENT UNLOCKED
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center font-mono">
            <div>
              <div className="text-4xl mb-2">🏆</div>
              <div className="text-lg font-bold text-gold-400">CODE WARRIOR</div>
              <div className="text-sm text-gray-400">Survived 47 production deployments</div>
            </div>
            <div>
              <div className="text-4xl mb-2">⚡</div>
              <div className="text-lg font-bold text-cyan-400">SPEED DEMON</div>
              <div className="text-sm text-gray-400">Sub-second API response times</div>
            </div>
            <div>
              <div className="text-4xl mb-2">🧠</div>
              <div className="text-lg font-bold text-purple-400">PROBLEM SOLVER</div>
              <div className="text-sm text-gray-400">Zero unsolved Stack Overflow questions</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
