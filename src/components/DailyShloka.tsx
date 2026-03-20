import { useState, useEffect } from 'react';
import { getRandomShloka, getShlokaInLanguage } from '../utils/shlokasHelper';
import type { Shloka } from '../utils/shlokasHelper';

interface DailyShlokaProps {
  category?: string;
}

/**
 * Component to display a daily shloka
 */
export const DailyShloka: React.FC<DailyShlokaProps> = ({ category }) => {
  const [shloka, setShloka] = useState<Shloka | null>(null);
  const [language, setLanguage] = useState<'english' | 'hindi' | 'kannada' | 'sanskrit'>('english');

  useEffect(() => {
    const randomShloka = getRandomShloka(category);
    setShloka(randomShloka);
  }, [category]);

  if (!shloka) {
    return <div className="text-center text-gray-500">Loading shloka...</div>;
  }

  return (
    <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-orange-500 p-6 rounded-lg shadow-md">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold text-orange-900">Today's Reflection 🪔</h3>
        <button
          onClick={() => setShloka(getRandomShloka(category))}
          className="text-sm px-3 py-1 bg-orange-200 hover:bg-orange-300 rounded-full text-orange-900"
        >
          Next Shloka
        </button>
      </div>

      {/* Language Selector */}
      <div className="flex gap-2 mb-4">
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

      {/* Verse Number */}
      <p className="text-sm text-orange-700 font-semibold mb-2">Bhagavad Gita {shloka.verse_number}</p>

      {/* Shloka Text */}
      <p className="text-lg md:text-xl font-serif text-orange-950 mb-4 leading-relaxed italic">
        "{getShlokaInLanguage(shloka, language)}"
      </p>

      {/* Categories */}
      <div className="flex flex-wrap gap-2 mb-4">
        {shloka.categories.map((cat) => (
          <span key={cat} className="px-2 py-1 bg-orange-200 text-orange-900 text-xs rounded-full">
            {cat}
          </span>
        ))}
      </div>

      {/* Explanation */}
      <div className="bg-white bg-opacity-70 p-3 rounded-md">
        <p className="text-sm text-orange-900 leading-relaxed">
          <strong>Meaning: </strong>
          {shloka.explanation}
        </p>
      </div>
    </div>
  );
};

export default DailyShloka;
