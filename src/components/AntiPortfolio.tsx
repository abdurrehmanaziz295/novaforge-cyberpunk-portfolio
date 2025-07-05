
import { useState } from 'react';

interface AntiProject {
  id: string;
  title: string;
  client: string;
  disaster: string;
  lesson: string;
  meme: string;
  tears: number;
  coffeeConsumed: number;
}

const AntiPortfolio = () => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const antiProjects: AntiProject[] = [
    {
      id: 'blockchain-todo',
      title: 'Blockchain-Powered Todo App',
      client: 'CryptoBro Enterprises',
      disaster: 'Client wanted to put a simple todo list on the blockchain. Each task creation cost $50 in gas fees. Users cried. We cried.',
      lesson: 'Not everything needs to be decentralized. Sometimes a sticky note is superior technology.',
      meme: '🤡 "We need this on the blockchain" - Every client in 2021',
      tears: 47,
      coffeeConsumed: 23
    },
    {
      id: 'ai-water',
      title: 'AI-Powered Water Reminder',
      client: 'SillyTech Solutions',
      disaster: 'Built an ML model to predict when users needed water. It trained on weather data, sleep patterns, and moon phases. Predicted everyone needed water on Wednesdays at 3 AM.',
      lesson: 'Sometimes humans can figure out when they\'re thirsty without machine learning.',
      meme: '🤖 "Our AI uses advanced algorithms to tell you to drink water"',
      tears: 12,
      coffeeConsumed: 8
    },
    {
      id: 'social-cats',
      title: 'Social Network for Cats',
      client: 'Whiskers & Co',
      disaster: 'Created profiles for cats. Implemented a matching algorithm for cat friendships. Cats showed zero interest. Humans were obsessed. Pivoted to humans pretending to be cats.',
      lesson: 'Always validate your target audience can actually use your product.',
      meme: '🐱 "My cat definitely needs a LinkedIn profile" - Actual client quote',
      tears: 31,
      coffeeConsumed: 15
    },
    {
      id: 'nft-recipes',
      title: 'NFT Recipe Collection',
      client: 'DigitalKitchen DAO',
      disaster: 'Minted grandmother\'s recipes as NFTs. Spent 3 months arguing about whether "salt to taste" could be stored on-chain. Project died when NFT market crashed.',
      lesson: 'Some things are meant to be shared freely, like grandma\'s secret sauce.',
      meme: '💎 "Right-click save won\'t work on our recipes!" - Famous last words',
      tears: 89,
      coffeeConsumed: 42
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-black to-red-900/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
            ANTI-PORTFOLIO
          </h2>
          <p className="text-xl text-gray-400 font-mono mb-4">
            Projects We REGRET Taking (But Learned From)
          </p>
          <div className="text-sm text-red-400 font-mono">
            ⚠️ WARNING: Contains traces of poor decisions and client tears
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {antiProjects.map((project) => (
            <div
              key={project.id}
              className={`
                bg-black/60 backdrop-blur-sm border-2 rounded-lg p-6 cursor-pointer
                transition-all duration-300 hover:scale-105 hover:border-red-400/60
                ${selectedProject === project.id ? 'border-red-400 scale-105' : 'border-red-500/30'}
              `}
              onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-red-400 mb-1">{project.title}</h3>
                  <div className="text-sm text-gray-400 font-mono">Client: {project.client}</div>
                </div>
                <div className="text-2xl">💀</div>
              </div>

              {/* Disaster Stats */}
              <div className="flex gap-4 mb-4 text-xs font-mono">
                <div className="flex items-center gap-1">
                  <span>😭</span>
                  <span className="text-red-400">{project.tears} tears</span>
                </div>
                <div className="flex items-center gap-1">
                  <span>☕</span>
                  <span className="text-amber-400">{project.coffeeConsumed} cups</span>
                </div>
              </div>

              {selectedProject === project.id && (
                <div className="animate-fade-in space-y-4 border-t border-red-500/30 pt-4">
                  <div>
                    <h4 className="text-red-400 font-bold mb-2">🔥 THE DISASTER:</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">{project.disaster}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-yellow-400 font-bold mb-2">💡 LESSON LEARNED:</h4>
                    <p className="text-gray-300 text-sm leading-relaxed italic">"{project.lesson}"</p>
                  </div>
                  
                  <div className="bg-gray-900/50 rounded p-3">
                    <h4 className="text-purple-400 font-bold mb-2">🎭 MEME-WORTHY QUOTE:</h4>
                    <p className="text-gray-300 text-sm">{project.meme}</p>
                  </div>
                </div>
              )}

              <div className="mt-4 text-center">
                <div className="text-xs text-gray-500 font-mono">
                  {selectedProject === project.id ? 'Click to collapse' : 'Click for full disaster story'}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Hall of Shame Stats */}
        <div className="mt-16 bg-black/80 backdrop-blur-sm border border-red-500/30 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-red-400 mb-6 text-center">HALL OF SHAME STATISTICS</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 font-mono">
            <div className="text-center">
              <div className="text-3xl font-bold text-red-400">{antiProjects.reduce((sum, p) => sum + p.tears, 0)}</div>
              <div className="text-sm text-gray-400">Total Tears Shed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-400">{antiProjects.reduce((sum, p) => sum + p.coffeeConsumed, 0)}</div>
              <div className="text-sm text-gray-400">Coffee Cups Consumed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400">{antiProjects.length}</div>
              <div className="text-sm text-gray-400">Projects That Haunts Us</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400">∞</div>
              <div className="text-sm text-gray-400">Lessons Learned</div>
            </div>
          </div>
        </div>

        {/* Survivor Badge */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600/20 to-orange-600/20 border border-red-500/50 rounded-full px-6 py-3">
            <span className="text-2xl">🏆</span>
            <span className="text-red-400 font-bold font-mono">CERTIFIED DISASTER SURVIVOR</span>
            <span className="text-2xl">🏆</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AntiPortfolio;
