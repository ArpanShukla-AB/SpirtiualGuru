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
    <div className="bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">✨ Unique Features</h2>
          <p className="text-slate-700 text-lg">Discover what makes Spiritual Gita different</p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {features.map((feature, index) => (
            <button
              key={index}
              onClick={() => setActiveFeature(index)}
              className={`p-6 rounded-lg transition transform hover:scale-105 cursor-pointer ${
                activeFeature === index
                  ? `bg-gradient-to-br ${feature.color} text-white shadow-lg`
                  : 'bg-white text-slate-900 shadow-md hover:shadow-lg'
              }`}
            >
              <div className="text-4xl mb-3">{feature.icon}</div>
              <h3 className="font-bold text-lg">{feature.title}</h3>
            </button>
          ))}
        </div>

        {/* Active Feature Details */}
        <div className={`bg-gradient-to-br ${features[activeFeature].color} text-white rounded-2xl p-8 shadow-2xl`}>
          <div className="text-6xl mb-4">{features[activeFeature].icon}</div>
          <h3 className="text-3xl font-bold mb-4">{features[activeFeature].title}</h3>
          <p className="text-xl leading-relaxed">{features[activeFeature].description}</p>
          <button className="mt-6 bg-white text-current px-6 py-2 rounded-lg font-bold hover:bg-opacity-90 transition">
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
