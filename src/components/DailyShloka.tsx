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
    return <div className="text-center text-white/70">Loading shloka...</div>;
  }

  return (
    <div className="bg-white/10 border border-white/20 p-6 rounded-xl shadow-sm text-left">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold">Today's Reflection 🪔</h3>
        <button
          onClick={() => setShloka(getRandomShloka(category))}
          className="text-sm px-3 py-1 bg-white/15 hover:bg-white/25 rounded-full text-white"
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
                ? 'bg-white/20 text-white border border-white/20'
                : 'bg-white/10 text-white/90 hover:bg-white/15'
            }`}
          >
            {lang.charAt(0).toUpperCase() + lang.slice(1)}
          </button>
        ))}
      </div>

      {/* Verse Number */}
      <p className="text-sm text-white/80 font-semibold mb-2">Bhagavad Gita {shloka.verse_number}</p>

      {/* Shloka Text */}
      <p className="text-lg md:text-xl font-serif text-white/95 mb-4 leading-relaxed italic">
        "{getShlokaInLanguage(shloka, language)}"
      </p>

      {/* Categories */}
      <div className="flex flex-wrap gap-2 mb-4">
        {shloka.categories.map((cat) => (
          <span key={cat} className="px-2 py-1 bg-white/15 text-white/90 text-xs rounded-full">
            {cat}
          </span>
        ))}
      </div>

      {/* Explanation */}
      <div className="bg-white/10 p-3 rounded-md border border-white/10">
        <p className="text-sm text-white/90 leading-relaxed">
          <strong>Meaning: </strong>
          {shloka.explanation}
        </p>
      </div>
    </div>
  );
};

export default DailyShloka;
