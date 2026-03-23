/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Wallet, Zap, Shield, Users, ExternalLink, Copy, Check, Menu, X } from 'lucide-react';

// Note: Placeholder for xian-js SDK integration
// import { XianWallet } from 'xian-js'; 

export default function App() {
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');
  const [copied, setCopied] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const CONTRACT_NAME = "con_xoge_token";

  const handleConnectWallet = async () => {
    // Integration point for xian-js
    console.log("Connecting to Xian Wallet...");
    // Mock connection
    setIsWalletConnected(true);
    setWalletAddress("xian_1abc...789xyz");
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(CONTRACT_NAME);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-black font-sans selection:bg-gold selection:text-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center border border-gold/50">
                <span className="text-gold font-bold text-xl">X</span>
              </div>
              <span className="text-2xl font-black tracking-tighter text-gradient-gold">XOGE</span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-sm font-medium hover:text-gold transition-colors">Features</a>
              <a href="#tokenomics" className="text-sm font-medium hover:text-gold transition-colors">Tokenomics</a>
              <button 
                onClick={handleConnectWallet}
                className="flex items-center gap-2 px-6 py-2.5 bg-gold hover:bg-gold-light text-black font-bold rounded-full transition-all active:scale-95 glow-gold"
              >
                <Wallet size={18} />
                {isWalletConnected ? `${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}` : "Connect Xian Wallet"}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gold">
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-black border-b border-gold/10 overflow-hidden"
            >
              <div className="px-4 py-6 flex flex-col gap-4">
                <a href="#features" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Features</a>
                <a href="#tokenomics" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Tokenomics</a>
                <button 
                  onClick={() => { handleConnectWallet(); setIsMenuOpen(false); }}
                  className="flex items-center justify-center gap-2 px-6 py-4 bg-gold text-black font-bold rounded-xl"
                >
                  <Wallet size={20} />
                  Connect Wallet
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/30 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold/20 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-bold tracking-widest uppercase">
              The Next Evolution of Doge
            </div>
            <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter leading-none">
              XOGE - The Speed of <br />
              <span className="text-gradient-gold">Doge on Xian</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-zinc-400 mb-10 leading-relaxed">
              Experience lightning-fast transactions and meme-powered community growth on the Xian blockchain. 
              The speed you need, the doge you love.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto px-10 py-4 bg-gold text-black font-black text-lg rounded-full hover:bg-gold-light transition-all glow-gold">
                BUY XOGE NOW
              </button>
              <button className="w-full sm:w-auto px-10 py-4 bg-white/5 border border-white/10 text-white font-black text-lg rounded-full hover:bg-white/10 transition-all">
                VIEW CHART
              </button>
            </div>
          </motion.div>

          {/* Hero Image / Logo */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="mt-20 relative"
          >
            <div className="absolute inset-0 bg-gold/20 blur-[100px] rounded-full scale-75 animate-pulse" />
            <img 
              src="https://picsum.photos/seed/xoge/800/800" // Replace with actual logo path
              alt="XOGE Logo" 
              className="relative mx-auto w-64 md:w-96 h-auto animate-float drop-shadow-[0_0_50px_rgba(212,175,55,0.4)]"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-zinc-950 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Zap className="text-gold" size={32} />}
              title="Lightning Fast"
              description="Built on the Xian blockchain for near-instant transaction finality. No more waiting for blocks."
            />
            <FeatureCard 
              icon={<Shield className="text-gold" size={32} />}
              title="Secure & Audited"
              description="Smart contract security is our priority. XOGE is built with robust standards to protect the pack."
            />
            <FeatureCard 
              icon={<Users className="text-gold" size={32} />}
              title="Community Driven"
              description="100% community-led project. No VCs, no hidden agendas. Just pure Doge energy."
            />
          </div>
        </div>
      </section>

      {/* Token Info Section */}
      <section id="tokenomics" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-zinc-900/50 border border-gold/20 rounded-3xl p-8 md:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Zap size={200} className="text-gold" />
            </div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-black mb-8 tracking-tight">Token Information</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <p className="text-zinc-400 mb-2 uppercase text-xs font-bold tracking-widest">Contract Address</p>
                  <div className="flex items-center gap-3 p-4 bg-black rounded-xl border border-white/10 group">
                    <code className="text-gold font-mono text-lg break-all">{CONTRACT_NAME}</code>
                    <button 
                      onClick={copyToClipboard}
                      className="p-2 hover:bg-white/10 rounded-lg transition-colors text-zinc-400 hover:text-gold"
                    >
                      {copied ? <Check size={20} /> : <Copy size={20} />}
                    </button>
                  </div>
                  <div className="mt-6 space-y-4">
                    <div className="flex justify-between border-b border-white/5 pb-2">
                      <span className="text-zinc-500">Blockchain</span>
                      <span className="font-bold">Xian Network</span>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-2">
                      <span className="text-zinc-500">Total Supply</span>
                      <span className="font-bold">1,000,000,000 XOGE</span>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-2">
                      <span className="text-zinc-500">Tax</span>
                      <span className="font-bold">0% Buy / 0% Sell</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-center">
                  <div className="p-6 bg-gold/5 rounded-2xl border border-gold/10 italic text-zinc-300">
                    "XOGE isn't just a token; it's a movement. We're bringing the fun of Doge with the serious tech of Xian. Much fast. Very chain. Wow."
                  </div>
                  <div className="mt-8 flex gap-4">
                    <a href="#" className="flex-1 flex items-center justify-center gap-2 py-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all border border-white/10">
                      <ExternalLink size={18} />
                      Explorer
                    </a>
                    <a href="#" className="flex-1 flex items-center justify-center gap-2 py-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all border border-white/10">
                      <Users size={18} />
                      Telegram
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="text-2xl font-black tracking-tighter text-gradient-gold">XOGE</span>
          </div>
          <p className="text-zinc-500 text-sm">
            © 2026 XOGE Community. Built on Xian.org. <br />
            Cryptocurrencies are volatile. Invest only what you can afford to lose.
          </p>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: ReactNode, title: string, description: string }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="p-8 bg-black border border-white/5 rounded-2xl hover:border-gold/30 transition-all"
    >
      <div className="mb-6">{icon}</div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-zinc-400 leading-relaxed">{description}</p>
    </motion.div>
  );
}
