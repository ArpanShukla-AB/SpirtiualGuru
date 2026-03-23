import React from 'react';
import PremiumBadge from './PremiumBadge';

const FeatureLockOverlay = ({ 
  isLocked = true, 
  title = "Upgrade to Pro to unlock this feature",
  onUpgrade,
  children 
}) => {
  if (!isLocked) {
    return children;
  }

  return (
    <div className="relative group">
      {/* Blurred/Disabled Content */}
      <div className="relative">
        <div className="blur-sm opacity-60 pointer-events-none">
          {children}
        </div>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20 rounded-2xl flex items-center justify-center">
          <div className="text-center">
            <div className="mb-4">
              <svg className="w-12 h-12 text-[#FF9933] mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-white font-semibold mb-2">{title}</h3>
            <p className="text-gray-300 text-sm mb-4 max-w-xs">
              Get unlimited access to all features and deeper insights
            </p>
            <button
              onClick={onUpgrade}
              className="bg-gradient-to-r from-[#FF9933] to-[#FDE68A] text-gray-900 px-6 py-2 rounded-lg font-semibold hover:from-[#E67E25] hover:to-[#F5D547] transition-all duration-300 transform hover:scale-105"
            >
              Upgrade Now
            </button>
          </div>
        </div>
      </div>

      {/* Premium Badge */}
      <div className="absolute top-4 right-4">
        <PremiumBadge size="sm" />
      </div>
    </div>
  );
};

export default FeatureLockOverlay;
