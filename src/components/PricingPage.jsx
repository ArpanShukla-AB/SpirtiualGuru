import React, { useState } from 'react';
import PricingCard from './PricingCard';

const PricingPage = ({ onUpgrade }) => {
  const [isYearly, setIsYearly] = useState(false);

  const handleUpgrade = (plan) => {
    // Get pricing details
    const pricingDetails = {
      free: { name: 'Free Plan', price: '₹0' },
      pro: { name: 'Pro Plan', price: isYearly ? '₹1,990/year' : '₹199/month' },
      mentor: { name: 'Mentor Plan', price: isYearly ? '₹4,990/year' : '₹499/month' }
    };

    const details = pricingDetails[plan];
    const message = `🕉️ *Spiritual Gita - Pricing Details*\n\n📋 Plan: ${details.name}\n💰 Price: ${details.price}\n\n✨ Features:\n${plan === 'pro' ? '• Unlimited AI Chat\n• Advanced Explanations\n• Save Insights\n• Multi-language Support\n• Voice Interaction' : plan === 'mentor' ? '• Everything in Pro\n• Personalized Daily Guidance\n• Weekly Reflection Summary\n• Mood Tracking Insights' : '• Basic Shloka Access\n• Limited AI Chat (5/day)\n• Mood-based Suggestions\n• Daily Shloka'}\n\n🙏 Thank you for choosing Spiritual Gita!\n\nClick here to upgrade: https://spiritualgita.app/upgrade`;
    
    // Redirect to WhatsApp with pricing details
    window.open(`https://wa.me/918840045634?text=${encodeURIComponent(message)}`, '_blank');
    
    // Also call the original upgrade handler
    onUpgrade(plan);
  };

  return (
    <div className="min-h-screen bg-[#0f172a] py-16 px-4">
      {/* Background Grid Pattern */}
      <div className="fixed inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-[#1E3A8A] to-[#FF9933] bg-clip-text text-transparent">
            Choose Your Spiritual Journey
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
            Unlock deeper insights and personalized guidance with our premium features
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-white/5 backdrop-blur-md border border-white/10 rounded-full p-1 shadow-md">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                !isYearly
                  ? 'bg-gradient-to-r from-[#1E3A8A] to-blue-600 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                isYearly
                  ? 'bg-gradient-to-r from-[#1E3A8A] to-blue-600 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Yearly
              <span className="ml-1 text-xs bg-[#FF9933] text-white px-2 py-0.5 rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <PricingCard
            plan="free"
            isHighlighted={false}
            isYearly={isYearly}
            onUpgrade={handleUpgrade}
          />
          <PricingCard
            plan="pro"
            isHighlighted={true}
            isYearly={isYearly}
            onUpgrade={handleUpgrade}
          />
          <PricingCard
            plan="mentor"
            isHighlighted={false}
            isYearly={isYearly}
            onUpgrade={handleUpgrade}
          />
        </div>

        {/* Trust Indicators */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-8 text-gray-400">
            <div className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">7-day free trial</span>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">Secure payment</span>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
