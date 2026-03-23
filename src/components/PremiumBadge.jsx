import React from 'react';

const PremiumBadge = ({ size = 'sm', text = 'PRO' }) => {
  const sizeClasses = {
    sm: 'text-xs px-2 py-1',
    md: 'text-sm px-3 py-1.5',
    lg: 'text-base px-4 py-2'
  };

  return (
    <span
      className={`
        inline-flex items-center justify-center
        bg-gradient-to-r from-[#FF9933] to-[#FDE68A] 
        text-gray-900 font-bold
        rounded-full
        shadow-sm
        ${sizeClasses[size]}
        transition-all duration-300
        hover:shadow-md hover:scale-105
      `}
    >
      {text}
    </span>
  );
};

export default PremiumBadge;
