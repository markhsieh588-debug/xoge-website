/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Wallet, Zap, Shield, Users, ExternalLink, Copy, Check, Menu, X, Rocket } from 'lucide-react';

// Pre-reserved location for xian-js SDK integration
// import { XianWallet } from 'xian-js'; 

export default function App() {
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');
  const [copied, setCopied] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const CONTRACT_NAME = "con_xoge_token";

  const handleConnectWallet = async () => {
    // Integration point for xian-js
    // 1. Check if wallet extension exists
    // 2. Request account access
    // 3. Set wallet address in state
    console.log("Connecting to Xian Wallet...");
    
    // Mocking connection for UI demonstration
    setIsWalletConnected(true);
    setWalletAddress("xian_1abc...789xyz");
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(CONTRACT_NAME);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-meme-yellow-light text-meme-black font-sans selection:bg-meme-yellow">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white border-b-4 border-meme-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-meme-yellow border-4 border-meme-black rounded-full flex items-center justify-center overflow-hidden">
                <span className="text-2xl font-black italic">X</span>
              </div>
              <span className="text-3xl font-black tracking-tighter uppercase italic">XOGE</span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-10">
              <a href="#features" className="text-lg font-black uppercase hover:text-meme-yellow transition-all drop-shadow-[2px_2px_0px_rgba(0,0,0,1)] text-white">Features</a>
              <a href="#tokenomics" className="text-lg font-black uppercase hover:text-meme-yellow transition-all drop-shadow-[2px_2px_0px_rgba(0,0,0,1)] text-white">Tokenomics</a>
              <button 
                onClick={handleConnectWallet}
                className="brutalist-button flex items-center gap-2"
              >
                <Wallet size={20} strokeWidth={3} />
                <span className="font-black">
                  {isWalletConnected ? `${walletAddress.slice(0, 6)}...` : "Connect Xian Wallet"}
                </span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 border-2 border-meme-black bg-meme-yellow">
                {isMenuOpen ? <X size={32} strokeWidth={3} /> : <Menu size={32} strokeWidth={3} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden bg-meme-yellow border-b-4 border-meme-black overflow-hidden"
            >
              <div className="px-4 py-8 flex flex-col gap-6 items-center">
                <a href="#features" onClick={() => setIsMenuOpen(false)} className="text-2xl font-black uppercase">Features</a>
                <a href="#tokenomics" onClick={() => setIsMenuOpen(false)} className="text-2xl font-black uppercase">Tokenomics</a>
                <button 
                  onClick={() => { handleConnectWallet(); setIsMenuOpen(false); }}
                  className="brutalist-button w-full flex justify-center items-center gap-3"
                >
                  <Wallet size={24} strokeWidth={3} />
                  Connect Wallet
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-52 md:pb-40 overflow-hidden bg-meme-yellow">
        {/* Dynamic Background Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #000 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              <div className="inline-block px-6 py-2 mb-8 bg-white border-4 border-meme-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <span className="font-black uppercase tracking-widest text-sm">The Fastest Doge in the Universe</span>
              </div>
              <h1 className="text-6xl md:text-8xl font-black mb-8 leading-[0.9] uppercase italic">
                XOGE - <br />
                The <span className="bg-white px-4 inline-block transform -rotate-2 border-4 border-meme-black">Speed</span> <br />
                Of Doge
              </h1>
              <p className="text-xl md:text-2xl font-bold mb-12 max-w-xl mx-auto lg:mx-0 leading-tight">
                Built on the Xian network. Fast transactions. Secure assets. Much community power. Very blockchain technology.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
                <button className="brutalist-button text-xl px-12 py-5 bg-white scale-110">
                  GET XOGE NOW
                </button>
                <button className="flex items-center gap-2 font-black uppercase text-lg group">
                  <span className="border-b-4 border-meme-black group-hover:border-white transition-all">View Chart</span>
                  <Rocket className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </button>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-10 bg-meme-black opacity-5 rounded-full blur-3xl animate-pulse"></div>
              
              {/* Custom SVG Mascot drawn based on user's logo */}
              <div className="relative mx-auto w-full max-w-[340px] aspect-square animate-meme-float">
                <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-[8px_8px_0px_rgba(0,0,0,1)]">
                  {/* Yellow Background Circle */}
                  <circle cx="100" cy="100" r="95" fill="#FFE24B" stroke="black" strokeWidth="6" />
                  
                  {/* Dog Body/Face */}
                  <path d="M50,180 Q50,60 100,60 Q150,60 150,180" fill="white" stroke="black" strokeWidth="4" />
                  
                  {/* Ears */}
                  <ellipse cx="60" cy="80" rx="25" ry="20" fill="black" transform="rotate(-15, 60, 80)" />
                  <ellipse cx="140" cy="80" rx="25" ry="20" fill="black" transform="rotate(15, 140, 80)" />
                  
                  {/* Eyes */}
                  <circle cx="80" cy="110" r="22" fill="white" stroke="black" strokeWidth="3" />
                  <circle cx="120" cy="110" r="22" fill="white" stroke="black" strokeWidth="3" />
                  <circle cx="85" cy="112" r="8" fill="black" />
                  <circle cx="115" cy="112" r="8" fill="black" />
                  
                  {/* Nose */}
                  <ellipse cx="100" cy="135" rx="10" ry="7" fill="black" />
                  
                  {/* Mouth and Tongue */}
                  <path d="M85,150 Q100,165 115,150" fill="none" stroke="black" strokeWidth="3" />
                  <path d="M92,158 Q100,175 108,158 Z" fill="#FF6B6B" stroke="black" strokeWidth="2" />
                </svg>
              </div>

              {/* Floating stickers for meme element */}
              <div className="absolute -top-10 -right-10 bg-white border-4 border-meme-black p-4 rotate-12 font-black uppercase text-xl brutalist-card z-20">
                🚀 MOON!
              </div>
              <div className="absolute -bottom-5 -left-10 bg-meme-yellow border-4 border-meme-black p-4 -rotate-12 font-black uppercase text-xl brutalist-card z-20">
                FAST AF!
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 bg-white border-y-8 border-meme-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-black uppercase italic mb-4">Why XOGE?</h2>
            <p className="text-xl font-bold">The most powerful meme token on Xian chain.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <FeatureCard 
              icon={<Zap className="text-meme-black" size={48} strokeWidth={3} />}
              title="Lightning Speed"
              description="Xian network allows XOGE to settle transactions faster than you can say 'Much Wow'."
              bgColor="bg-meme-yellow"
            />
            <FeatureCard 
              icon={<Shield className="text-meme-black" size={48} strokeWidth={3} />}
              title="Locked Security"
              description="Pure smart contract logic ensures your XOGE remains safe from any bad actors."
              bgColor="bg-white"
            />
            <FeatureCard 
              icon={<Users className="text-meme-black" size={48} strokeWidth={3} />}
              title="Community Driven"
              description="Owned by the people, for the people. No VCs. No hidden mints. Just pure community."
              bgColor="bg-meme-yellow"
            />
          </div>
        </div>
      </section>

      {/* Token Info Section */}
      <section id="tokenomics" className="py-32 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="brutalist-card p-10 md:p-16 relative">
            <div className="absolute -top-10 -right-10 bg-meme-yellow border-4 border-meme-black p-6 rounded-full w-24 h-24 flex items-center justify-center font-black">
              100%
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black mb-10 tracking-tight uppercase italic underline decoration-meme-yellow decoration-8">Token Info</h2>
            
            <div className="space-y-12">
              <div>
                <p className="text-sm font-black uppercase mb-4 tracking-widest opacity-60">Contract Address</p>
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <div className="flex-1 w-full p-4 bg-meme-yellow-light border-4 border-meme-black font-mono text-xl font-bold break-all">
                    {CONTRACT_NAME}
                  </div>
                  <button 
                    onClick={copyToClipboard}
                    className="brutalist-button p-4 min-w-[120px] flex items-center justify-center gap-2"
                  >
                    {copied ? <Check size={24} strokeWidth={3} /> : <Copy size={24} strokeWidth={3} />}
                    <span className="font-black uppercase">{copied ? "Copied" : "Copy"}</span>
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                <div className="space-y-6">
                  <div className="flex justify-between items-center border-b-4 border-meme-black pb-2">
                    <span className="font-black uppercase italic">Network</span>
                    <span className="font-black">Xian</span>
                  </div>
                  <div className="flex justify-between items-center border-b-4 border-meme-black pb-2">
                    <span className="font-black uppercase italic">Liquidity</span>
                    <span className="font-black text-green-600">LOCKED</span>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex justify-between items-center border-b-4 border-meme-black pb-2">
                    <span className="font-black uppercase italic">Tax</span>
                    <span className="font-black">0% / 0%</span>
                  </div>
                  <div className="flex justify-between items-center border-b-4 border-meme-black pb-2">
                    <span className="font-black uppercase italic">Ownership</span>
                    <span className="font-black">RENOUNCED</span>
                  </div>
                </div>
              </div>
              
              <div className="pt-6">
                <a href="#" className="brutalist-button w-full block text-center flex items-center justify-center gap-3">
                  <ExternalLink size={24} strokeWidth={3} />
                  View on Explorer
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-meme-black text-white border-t-8 border-meme-black">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-10">
            <div className="w-10 h-10 bg-meme-yellow border-2 border-white rounded-full flex items-center justify-center">
               <span className="text-meme-black font-black italic">X</span>
            </div>
            <span className="text-4xl font-black italic tracking-tighter uppercase">XOGE</span>
          </div>
          <div className="flex flex-wrap justify-center gap-8 mb-10">
            <a href="#" className="font-bold hover:text-meme-yellow transition-all">Twitter</a>
            <a href="#" className="font-bold hover:text-meme-yellow transition-all">Telegram</a>
            <a href="#" className="font-bold hover:text-meme-yellow transition-all">Discord</a>
            <a href="#" className="font-bold hover:text-meme-yellow transition-all">GitHub</a>
          </div>
          <p className="text-zinc-500 font-bold max-w-xl mx-auto leading-relaxed">
            © 2026 XOGE DAO. Much Community. No Financial Advice. Always Do Your Own Research.
          </p>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description, bgColor }: { icon: ReactNode, title: string, description: string, bgColor: string }) {
  return (
    <motion.div 
      whileHover={{ scale: 1.05 }}
      className={`brutalist-card p-10 ${bgColor}`}
    >
      <div className="mb-8">{icon}</div>
      <h3 className="text-3xl font-black uppercase italic mb-6">{title}</h3>
      <p className="text-lg font-bold leading-tight">{description}</p>
    </motion.div>
  );
}
