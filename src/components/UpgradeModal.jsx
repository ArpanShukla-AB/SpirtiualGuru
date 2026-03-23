import React from 'react';

const UpgradeModal = ({ isOpen, onClose, onUpgrade }) => {
  if (!isOpen) return null;

  const handleUpgrade = () => {
    // WhatsApp message for Pro Plan
    const message = `🕉️ *Spiritual Gita - Pro Plan Upgrade*\n\n💰 Price: ₹199/month\n\n✨ Features:\n• Unlimited AI Chat\n• Deep Explanations\n• Save Your Insights\n• Multi-language Support\n• Voice Interaction\n• Personalized Guidance\n\n🙏 Thank you for choosing Spiritual Gita!\n\nClick here to upgrade: https://spiritualgita.app/upgrade`;
    
    // Redirect to WhatsApp with pricing details
    window.open(`https://wa.me/918840045634?text=${encodeURIComponent(message)}`, '_blank');
    
    // Also call the original upgrade handler
    onUpgrade('pro');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl transform transition-all duration-300 scale-100 opacity-100">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-r from-[#FF9933] to-[#FDE68A] rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Unlock Full Guidance Experience
          </h2>
          <p className="text-gray-600">
            Get unlimited access to deeper spiritual insights
          </p>
        </div>

        {/* Benefits List */}
        <div className="space-y-3 mb-6">
          {[
            'Unlimited AI Chat',
            'Deep Explanations',
            'Save Your Insights',
            'Multi-language Support',
            'Voice Interaction',
            'Personalized Guidance'
          ].map((benefit, index) => (
            <div key={index} className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700">{benefit}</span>
            </div>
          ))}
        </div>

        {/* Pricing */}
        <div className="bg-gradient-to-r from-blue-50 to-orange-50 rounded-xl p-4 mb-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900">₹199</div>
            <div className="text-gray-600 text-sm">per month</div>
            <div className="text-green-600 text-sm font-medium mt-1">
              Save 20% with yearly billing
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <button
          onClick={handleUpgrade}
          className="w-full bg-gradient-to-r from-[#FF9933] to-[#FDE68A] text-gray-900 py-3 px-6 rounded-xl font-semibold hover:from-[#E67E25] hover:to-[#F5D547] transition-all duration-300 transform hover:scale-105"
        >
          Upgrade to Pro
        </button>

        {/* Trust Text */}
        <div className="text-center mt-4">
          <p className="text-gray-500 text-sm">
            7-day free trial • Cancel anytime • Secure payment
          </p>
        </div>
      </div>
    </div>
  );
};

export default UpgradeModal;
