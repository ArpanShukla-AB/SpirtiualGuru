import React, { useState } from 'react';

/**
 * Features Component - Showcase unique features
 */
export const FeaturesShowcase: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: '🎯',
      title: 'AI-Powered Matching',
      description: 'Our AI analyzes your emotions and matches them with the most relevant shlokas from 700 teachings.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: '❤️',
      title: 'Save Favorites',
      description: 'Bookmark your favorite shlokas and create a personal wisdom collection for daily reference.',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: '🌍',
      title: 'Multilingual Support',
      description: 'Access teachings in Sanskrit, English, Hindi, and Kannada for a deeper connection to your roots.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: '📊',
      title: 'Progress Tracking',
      description: 'Monitor your spiritual journey with streak counters, completion rates, and personal challenges.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: '💭',
      title: 'Daily Reflections',
      description: 'Write personal notes and reflections on each shloka to deepen your understanding and practice.',
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      icon: '🔔',
      title: 'Daily Notifications',
      description: 'Get a new shloka delivered to your home screen every morning to start your day with wisdom.',
      color: 'from-pink-500 to-pink-600'
    }
  ];

  return (
    <div className="bg-[#0f172a] py-12 px-4">
      {/* Background Grid Pattern */}
      <div className="fixed inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              ✨ Unique Features
            </span>
          </h2>
          <p className="text-gray-400 text-lg">Discover what makes Spiritual Gita different</p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {features.map((feature, index) => (
            <button
              key={index}
              onClick={() => setActiveFeature(index)}
              className={`p-6 rounded-lg transition transform hover:scale-105 cursor-pointer ${
                activeFeature === index
                  ? `bg-white/10 border border-white/20 text-white shadow-lg backdrop-blur-sm`
                  : 'bg-white/5 border border-white/10 text-white shadow-md hover:shadow-lg hover:bg-white/10 backdrop-blur-sm'
              }`}
            >
              <div className="text-4xl mb-3">{feature.icon}</div>
              <h3 className="font-bold text-lg">{feature.title}</h3>
            </button>
          ))}
        </div>

        {/* Active Feature Details */}
        <div className="bg-white/5 backdrop-blur-md border border-white/10 text-white rounded-2xl p-8 shadow-2xl">
          <div className="text-6xl mb-4">{features[activeFeature].icon}</div>
          <h3 className="text-3xl font-bold mb-4">{features[activeFeature].title}</h3>
          <p className="text-xl leading-relaxed text-gray-300">{features[activeFeature].description}</p>
          <button className="mt-6 bg-white/10 border border-white/20 text-white px-6 py-2 rounded-lg font-bold hover:bg-white/20 transition">
            Learn More →
          </button>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {[
            { icon: '📖', count: '700', label: 'Shlokas' },
            { icon: '🌍', count: '4', label: 'Languages' },
            { icon: '🎯', count: '13', label: 'Categories' },
            { icon: '✨', count: '∞', label: 'Wisdom' }
          ].map((stat, i) => (
            <div key={i} className="bg-white rounded-lg p-4 text-center shadow-md">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-slate-900">{stat.count}</div>
              <div className="text-slate-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesShowcase;
