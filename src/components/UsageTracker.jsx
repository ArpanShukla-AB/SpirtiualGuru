import React from 'react';
import PremiumBadge from './PremiumBadge';

const UsageTracker = ({ 
  currentUsage = 3, 
  maxUsage = 5, 
  feature = "AI Chat Messages",
  onUpgrade 
}) => {
  const usagePercentage = (currentUsage / maxUsage) * 100;
  const isNearLimit = usagePercentage >= 80;
  const isAtLimit = currentUsage >= maxUsage;

  return (
    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center">
          <svg className="w-4 h-4 text-[#FF9933] mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
          </svg>
          <span className="text-white text-sm font-medium">{feature}</span>
        </div>
        {isNearLimit && !isAtLimit && (
          <span className="text-[#FF9933] text-xs font-medium">
            {maxUsage - currentUsage} left
          </span>
        )}
        {isAtLimit && (
          <PremiumBadge size="sm" text="LIMIT" />
        )}
      </div>

      {/* Progress Bar */}
      <div className="mb-3">
        <div className="flex justify-between text-xs text-gray-400 mb-1">
          <span>Daily Usage</span>
          <span>{currentUsage}/{maxUsage}</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
          <div
            className={`h-full transition-all duration-500 ease-out rounded-full ${
              isAtLimit 
                ? 'bg-red-500' 
                : isNearLimit 
                ? 'bg-[#FF9933]' 
                : 'bg-gradient-to-r from-[#1E3A8A] to-[#FF9933]'
            }`}
            style={{ width: `${Math.min(usagePercentage, 100)}%` }}
          ></div>
        </div>
      </div>

      {/* Status Message */}
      {isAtLimit ? (
        <div className="text-center">
          <p className="text-gray-400 text-sm mb-3">
            You've reached your daily limit
          </p>
          <button
            onClick={onUpgrade}
            className="w-full bg-gradient-to-r from-[#FF9933] to-[#FDE68A] text-gray-900 py-2 px-4 rounded-lg font-medium hover:from-[#E67E25] hover:to-[#F5D547] transition-all duration-300"
          >
            Upgrade Now
          </button>
        </div>
      ) : (
        <div className="text-center">
          <p className="text-gray-400 text-xs">
            {maxUsage - currentUsage} messages remaining today
          </p>
        </div>
      )}
    </div>
  );
};

export default UsageTracker;
