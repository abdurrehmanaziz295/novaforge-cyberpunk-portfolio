
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const [launchSequence, setLaunchSequence] = useState(false);
  const [emergencyMode, setEmergencyMode] = useState(false);

  const handleEmergencyContact = () => {
    setEmergencyMode(true);
    setTimeout(() => setEmergencyMode(false), 3000);
  };

  const handleLaunchSequence = () => {
    setLaunchSequence(true);
    setTimeout(() => setLaunchSequence(false), 5000);
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-t from-purple-900/20 to-black">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            INITIATE CONTACT
          </h2>
          <p className="text-xl text-gray-400 font-mono">
            Ready to hack the matrix together?
          </p>
        </div>

        {/* Emergency Contact Protocol */}
        <div className="bg-black/60 backdrop-blur-sm border border-red-500/30 rounded-lg p-8 mb-8">
          <h3 className="text-2xl font-bold text-red-400 mb-4 font-mono">
            🚨 EMERGENCY CONTACT PROTOCOL
          </h3>
          <p className="text-gray-300 mb-6">
            For mission-critical projects that can't wait for normal business hours.
            Response time: &lt; 30 minutes or your money back.
          </p>
          <Button
            onClick={handleEmergencyContact}
            className={`
              px-8 py-4 text-lg font-bold bg-red-600 hover:bg-red-700 border-2 border-red-400
              transition-all duration-300 ${emergencyMode ? 'animate-pulse scale-110' : ''}
            `}
          >
            {emergencyMode ? '📡 SIGNAL TRANSMITTED...' : '🚀 ACTIVATE EMERGENCY BEACON'}
          </Button>
        </div>

        {/* Regular Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-black/40 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-6 hover:border-cyan-400/60 transition-all">
            <div className="text-4xl mb-4">📧</div>
            <h3 className="text-xl font-bold text-cyan-400 mb-2">ENCRYPTED TRANSMISSION</h3>
            <p className="text-gray-300 mb-4">For classified project discussions</p>
            <div className="font-mono text-cyan-400">dev@novaforge.secure</div>
          </div>

          <div className="bg-black/40 backdrop-blur-sm border border-purple-500/30 rounded-lg p-6 hover:border-purple-400/60 transition-all">
            <div className="text-4xl mb-4">💬</div>
            <h3 className="text-xl font-bold text-purple-400 mb-2">SECURE CHANNEL</h3>
            <p className="text-gray-300 mb-4">Real-time encrypted communication</p>
            <div className="font-mono text-purple-400">Signal: @DevNovaForge</div>
          </div>
        </div>

        {/* Pricing Tiers */}
        <div className="bg-black/60 backdrop-blur-sm border border-green-500/30 rounded-lg p-8 mb-8">
          <h3 className="text-2xl font-bold text-green-400 mb-6 font-mono">
            MISSION PRICING MATRIX
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-gray-600 rounded-lg p-4">
              <h4 className="text-lg font-bold text-gray-400 mb-2">BASIC OPERATIVE</h4>
              <div className="text-2xl font-bold text-green-400 mb-2">$99<span className="text-sm">/hr</span></div>
              <p className="text-xs text-gray-400">You get what you pay for</p>
            </div>
            <div className="border border-cyan-500 rounded-lg p-4 bg-cyan-500/10">
              <h4 className="text-lg font-bold text-cyan-400 mb-2">NOVA SPECIALIST</h4>
              <div className="text-2xl font-bold text-cyan-400 mb-2">$199<span className="text-sm">/hr</span></div>
              <p className="text-xs text-gray-400">Professional grade chaos</p>
            </div>
            <div className="border border-purple-500 rounded-lg p-4">
              <h4 className="text-lg font-bold text-purple-400 mb-2">LEGENDARY</h4>
              <div className="text-2xl font-bold text-purple-400 mb-2">$499<span className="text-sm">/hr</span></div>
              <p className="text-xs text-gray-400">We answer emails with haikus</p>
            </div>
          </div>
        </div>

        {/* Launch Sequence */}
        <div className="space-y-6">
          <div className="text-center">
            <p className="text-gray-400 font-mono mb-4">
              Ready to begin the mission? Initialize launch sequence:
            </p>
            <Button
              onClick={handleLaunchSequence}
              className={`
                px-12 py-6 text-xl font-bold bg-gradient-to-r from-cyan-600 to-purple-600 
                hover:from-cyan-500 hover:to-purple-500 border-2 border-cyan-400
                transition-all duration-300 ${launchSequence ? 'animate-pulse scale-110' : ''}
              `}
            >
              {launchSequence ? '🚀 LAUNCH SEQUENCE INITIATED...' : '🎯 BEGIN MISSION'}
            </Button>
          </div>

          {launchSequence && (
            <div className="bg-black/80 backdrop-blur-sm border border-cyan-500/50 rounded-lg p-6 animate-fade-in">
              <div className="font-mono text-sm space-y-2">
                <div className="text-green-400">✓ Initializing secure connection...</div>
                <div className="text-green-400">✓ Scanning for threats...</div>
                <div className="text-green-400">✓ Loading development arsenal...</div>
                <div className="text-cyan-400">→ Standing by for mission briefing...</div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <p className="text-gray-500 font-mono text-sm">
            DevNovaForge © 2024 | "We're the lovechild of Linus Torvalds' discipline and Tony Stark's ego"
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
