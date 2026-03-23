import React, { useState, useEffect } from 'react';
import PricingPage from './components/PricingPage';
import PremiumBadge from './components/PremiumBadge';
import FeatureLockOverlay from './components/FeatureLockOverlay';
import UpgradeModal from './components/UpgradeModal';
import UsageTracker from './components/UsageTracker';
import DonationSection from './components/DonationSection';

const GitaMindApp = () => {
  // Mock user state
  const [userPlan, setUserPlan] = useState('free'); // 'free', 'pro', 'mentor'
  const [chatUsage, setChatUsage] = useState(3);
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);
  const [currentView, setCurrentView] = useState('dashboard');

  // Mock chat limit logic
  const maxMessages = userPlan === 'free' ? 5 : userPlan === 'pro' ? Infinity : Infinity;
  const canChat = chatUsage < maxMessages;

  const handleUpgrade = (plan) => {
    setUserPlan(plan);
    setShowUpgradeModal(false);
    // Reset usage for demo
    if (plan !== 'free') {
      setChatUsage(0);
    }
  };

  const handleSendMessage = () => {
    if (canChat) {
      setChatUsage(chatUsage + 1);
    }
  };

  // Sample components demonstration
  return (
    <div className="min-h-screen bg-[#0f172a]">
      {/* Background Grid Pattern */}
      <div className="fixed inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>

      {/* Navigation */}
      <nav className="relative z-10 bg-white/5 backdrop-blur-md border-b border-white/10 sticky top-0">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <span className="text-2xl mr-3">🧘</span>
              <h1 className="text-xl font-bold text-white">GitaMind</h1>
              {userPlan !== 'free' && <PremiumBadge size="sm" className="ml-2" />}
            </div>
            
            <div className="flex gap-4">
              <button
                onClick={() => setCurrentView('dashboard')}
                className={`px-4 py-2 rounded-lg transition ${
                  currentView === 'dashboard'
                    ? 'bg-white/10 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Dashboard
              </button>
              <button
                onClick={() => setCurrentView('pricing')}
                className={`px-4 py-2 rounded-lg transition ${
                  currentView === 'pricing'
                    ? 'bg-white/10 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Pricing
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10">
        {currentView === 'dashboard' && (
          <div className="max-w-6xl mx-auto px-4 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              
              {/* Usage Tracker */}
              <div>
                <UsageTracker
                  currentUsage={chatUsage}
                  maxUsage={maxMessages}
                  feature="AI Chat Messages"
                  onUpgrade={() => setShowUpgradeModal(true)}
                />
              </div>

              {/* Premium Features Demo */}
              <div>
                <FeatureLockOverlay
                  isLocked={userPlan === 'free'}
                  onUpgrade={() => setShowUpgradeModal(true)}
                >
                  <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6">
                    <h3 className="text-white font-semibold mb-3 flex items-center">
                      Advanced Explanations
                      {userPlan !== 'free' && <PremiumBadge size="sm" className="ml-2" />}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Get deeper insights into shloka meanings with AI-powered analysis
                    </p>
                  </div>
                </FeatureLockOverlay>
              </div>

              {/* Voice Feature Demo */}
              <div>
                <FeatureLockOverlay
                  isLocked={userPlan === 'free'}
                  onUpgrade={() => setShowUpgradeModal(true)}
                >
                  <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6">
                    <h3 className="text-white font-semibold mb-3 flex items-center">
                      Voice Interaction
                      {userPlan !== 'free' && <PremiumBadge size="sm" className="ml-2" />}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">
                      Talk to Krishna using voice commands
                    </p>
                    <button className="w-full bg-[#1E3A8A] text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition">
                      🎤 Start Voice Chat
                    </button>
                  </div>
                </FeatureLockOverlay>
              </div>

              {/* Chat Demo */}
              <div className="lg:col-span-3">
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6">
                  <h3 className="text-white font-semibold mb-4">AI Spiritual Guidance</h3>
                  
                  {/* Chat Messages */}
                  <div className="space-y-3 mb-4 max-h-64 overflow-y-auto">
                    <div className="bg-gray-800 rounded-lg p-3 max-w-md">
                      <p className="text-white text-sm">🦚 Krishna: How can I help you find peace today?</p>
                    </div>
                    <div className="bg-blue-600/20 border border-blue-500/30 rounded-lg p-3 max-w-md ml-auto">
                      <p className="text-white text-sm">I'm feeling anxious about my future...</p>
                    </div>
                  </div>

                  {/* Input Area */}
                  <div className="flex gap-3">
                    <input
                      type="text"
                      placeholder="Ask Krishna anything..."
                      className="flex-1 bg-gray-800 border border-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-[#FF9933]"
                      disabled={!canChat}
                    />
                    <button
                      onClick={handleSendMessage}
                      disabled={!canChat}
                      className={`px-6 py-3 rounded-lg font-medium transition ${
                        canChat
                          ? 'bg-[#FF9933] text-white hover:bg-[#E67E25]'
                          : 'bg-gray-700 text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      Send
                    </button>
                  </div>

                  {!canChat && (
                    <div className="mt-3 text-center">
                      <p className="text-[#FF9933] text-sm mb-2">
                        You've reached your daily limit
                      </p>
                      <button
                        onClick={() => setShowUpgradeModal(true)}
                        className="bg-gradient-to-r from-[#FF9933] to-[#FDE68A] text-gray-900 px-4 py-2 rounded-lg font-medium hover:from-[#E67E25] hover:to-[#F5D547]"
                      >
                        Upgrade Now
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Donation Section */}
              <div className="lg:col-span-3">
                <DonationSection />
              </div>
            </div>
          </div>
        )}

        {currentView === 'pricing' && (
          <PricingPage onUpgrade={handleUpgrade} />
        )}
      </div>

      {/* Upgrade Modal */}
      <UpgradeModal
        isOpen={showUpgradeModal}
        onClose={() => setShowUpgradeModal(false)}
        onUpgrade={handleUpgrade}
      />
    </div>
  );
};

export default GitaMindApp;
