import React, { useState } from 'react';
import { getShlokaForMood, getShlokaInLanguage, Shloka } from '../utils/shlokasHelper';

/**
 * Mood Card Component - User selects their mood and gets a relevant shloka
 */
export const MoodCard: React.FC = () => {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [shloka, setShloka] = useState<Shloka | null>(null);
  const [language, setLanguage] = useState<'english' | 'hindi' | 'kannada' | 'sanskrit'>('english');

  const moods = [
    { id: 'stressed', emoji: '😞', label: 'I feel stressed' },
    { id: 'failed', emoji: '😔', label: 'I feel like I failed' },
    { id: 'overthinking', emoji: '🤯', label: 'I am overthinking' },
    { id: 'confused', emoji: '🤔', label: 'I feel confused' },
    { id: 'sad', emoji: '💔', label: 'I feel emotional pain' },
    { id: 'lacking_focus', emoji: '😴', label: 'I lack focus' },
    { id: 'unmotivated', emoji: '😕', label: 'I feel unmotivated' },
    { id: 'lost', emoji: '🌫️', label: 'I feel lost' },
  ];

  const handleMoodSelect = (moodId: string) => {
    setSelectedMood(moodId);
    const result = getShlokaForMood(moodId);
    setShloka(result);
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-orange-900 mb-2">How are you feeling today? 🧘</h2>
        <p className="text-orange-700">Select your emotion. Ancient wisdom awaits.</p>
      </div>

      {/* Mood Selection */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {moods.map((mood) => (
          <button
            key={mood.id}
            onClick={() => handleMoodSelect(mood.id)}
            className={`p-4 rounded-lg transition transform hover:scale-105 ${
              selectedMood === mood.id
                ? 'bg-gradient-to-br from-orange-500 to-orange-600 text-white shadow-lg'
                : 'bg-white text-orange-900 border-2 border-orange-200 hover:border-orange-400'
            }`}
          >
            <div className="text-3xl mb-2">{mood.emoji}</div>
            <div className="text-xs font-semibold text-center leading-tight">{mood.label}</div>
          </button>
        ))}
      </div>

      {/* Shloka Result */}
      {shloka && (
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-orange-300 p-8 rounded-xl shadow-lg">
          {/* Problem Identified */}
          <div className="mb-6">
            <h3 className="text-xl font-bold text-orange-900 mb-2">🎯 Problem Identified</h3>
            <p className="text-orange-800 capitalize font-semibold">
              {selectedMood?.replace('_', ' ').replace('-', ' ')}
            </p>
          </div>

          {/* Language Selector */}
          <div className="flex gap-2 mb-6 flex-wrap">
            {(['english', 'hindi', 'kannada', 'sanskrit'] as const).map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang)}
                className={`px-3 py-1 text-sm rounded-full transition ${
                  language === lang
                    ? 'bg-orange-600 text-white'
                    : 'bg-orange-100 text-orange-900 hover:bg-orange-200'
                }`}
              >
                {lang.charAt(0).toUpperCase() + lang.slice(1)}
              </button>
            ))}
          </div>

          {/* Verse Reference */}
          <div className="mb-4">
            <p className="text-sm font-semibold text-orange-700">📖 Bhagavad Gita {shloka.verse_number}</p>
          </div>

          {/* Shloka Text */}
          <div className="bg-white bg-opacity-80 p-6 rounded-lg mb-6">
            <p className="text-lg md:text-xl font-serif text-orange-950 leading-relaxed italic">
              "{getShlokaInLanguage(shloka, language)}"
            </p>
          </div>

          {/* Meaning Section */}
          <div className="mb-6 bg-blue-50 p-6 rounded-lg">
            <h4 className="text-lg font-bold text-blue-900 mb-2">📚 Meaning</h4>
            <p className="text-blue-900 leading-relaxed">
              {language === 'english' && shloka.english}
              {language === 'hindi' && shloka.hindi}
              {language === 'kannada' && shloka.kannada}
              {language === 'sanskrit' && shloka.sanskrit}
            </p>
          </div>

          {/* Guidance Section */}
          <div className="bg-green-50 p-6 rounded-lg">
            <h4 className="text-lg font-bold text-green-900 mb-2">🧠 Practical Guidance</h4>
            <p className="text-green-900 leading-relaxed">{shloka.explanation}</p>
          </div>

          {/* Categories */}
          <div className="mt-6 flex flex-wrap gap-2">
            {shloka.categories.map((cat) => (
              <span key={cat} className="px-3 py-1 bg-orange-200 text-orange-900 text-xs rounded-full font-semibold">
                {cat}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Empty State */}
      {!shloka && (
        <div className="text-center text-orange-700 py-12 bg-orange-50 rounded-lg" >
          <p className="text-lg">Select an emotion above to receive wisdom from the Bhagavad Gita 🪔</p>
        </div>
      )}
    </div>
  );
};

export default MoodCard;
