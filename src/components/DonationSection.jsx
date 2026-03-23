import React from 'react';

const DonationSection = () => {
  return (
    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 text-center">
      <div className="mb-4">
        <div className="w-12 h-12 bg-gradient-to-r from-[#1E3A8A] to-[#FF9933] rounded-full flex items-center justify-center mx-auto mb-3">
          <span className="text-2xl">🙏</span>
        </div>
        <h3 className="text-white font-semibold mb-2">
          Support this initiative 🙏
        </h3>
        <p className="text-gray-400 text-sm max-w-xs mx-auto">
          Help us keep spiritual wisdom accessible to everyone
        </p>
      </div>

      <button className="bg-white/10 border border-white/20 text-white py-2 px-6 rounded-lg font-medium hover:bg-white/20 transition-all duration-300">
        Donate
      </button>

      <div className="mt-4 text-xs text-gray-500">
        Your generosity helps millions find peace
      </div>
    </div>
  );
};

export default DonationSection;
