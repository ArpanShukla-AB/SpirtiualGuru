import { useState } from 'react';
import { getShlokastByCategory, getAllCategories, getCategoryDescription } from '../utils/shlokasHelper';

/**
 * Component to display shlokas filtered by category
 */
export const ShlokasByCategory: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('stress');
  const [language, setLanguage] = useState<'english' | 'hindi' | 'kannada' | 'sanskrit'>('english');

  const categories = getAllCategories();
  const shlokas = getShlokastByCategory(selectedCategory);
  const categoryDescription = getCategoryDescription(selectedCategory);

  const getEmoji = (category: string): string => {
    const emojiMap: Record<string, string> = {
      stress: '😞',
      failure: '😔',
      overthinking: '🤯',
      confusion: '🤔',
      focus: '🎯',
      peace: '🧘',
      duty: '✨',
      action: '⚡',
      'love-devotion': '💕',
      meditation: '🪔',
      knowledge: '📚',
      courage: '💪',
      liberation: '🦋',
    };
    return emojiMap[category] || '📖';
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      {/* Category Selection */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-orange-900 mb-4">What are you going through? 🌟</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`p-4 rounded-lg transition transform hover:scale-105 ${
                selectedCategory === category
                  ? 'bg-orange-600 text-white shadow-lg'
                  : 'bg-orange-100 text-orange-900 hover:bg-orange-200'
              }`}
            >
              <div className="text-2xl mb-2">{getEmoji(category)}</div>
              <div className="text-sm font-semibold capitalize text-center">{category.replace('-', ' ')}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Category Description */}
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-md mb-6">
        <p className="text-blue-900">{categoryDescription}</p>
      </div>

      {/* Language Selector */}
      <div className="flex gap-2 mb-6">
        {(['english', 'hindi', 'kannada', 'sanskrit'] as const).map((lang) => (
          <button
            key={lang}
            onClick={() => setLanguage(lang)}
            className={`px-4 py-2 rounded-full transition ${
              language === lang
                ? 'bg-orange-600 text-white'
                : 'bg-orange-100 text-orange-900 hover:bg-orange-200'
            }`}
          >
            {lang.charAt(0).toUpperCase() + lang.slice(1)}
          </button>
        ))}
      </div>

      {/* Shlokas Display */}
      <div className="space-y-6">
        {shlokas.length === 0 ? (
          <div className="text-center text-gray-500 py-8">
            <p>No shlokas found for this category.</p>
          </div>
        ) : (
          shlokas.map((shloka) => (
            <div
              key={shloka.verse_number}
              className="bg-white border-l-4 border-orange-500 p-6 rounded-lg shadow-md hover:shadow-lg transition"
            >
              {/* Verse Number and Title */}
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-bold text-orange-900">
                  Bhagavad Gita {shloka.verse_number}
                </h3>
              </div>

              {/* Shloka Text */}
              <p className="text-md md:text-lg font-serif text-orange-950 mb-4 leading-relaxed italic p-4 bg-orange-50 rounded">
                "{shloka[language]}"
              </p>

              {/* Translation Note */}
              {language !== 'sanskrit' && (
                <p className="text-sm text-gray-600 mb-4 italic">
                  {language === 'english' ? '(English Translation)' : ''}
                  {language === 'hindi' ? '(हिंदी अनुवाद)' : ''}
                  {language === 'kannada' ? '(ಕನ್ನಡ ಅನುವಾದ)' : ''}
                </p>
              )}

              {/* Explanation */}
              <div className="bg-yellow-50 p-4 rounded-md mb-4">
                <p className="text-sm text-yellow-900 font-semibold mb-2">💡 Key Insight:</p>
                <p className="text-sm text-yellow-900 leading-relaxed">{shloka.explanation}</p>
              </div>

              {/* Categories Tags */}
              <div className="flex flex-wrap gap-2">
                {shloka.categories.map((cat) => (
                  <span
                    key={cat}
                    className="px-3 py-1 bg-orange-200 text-orange-900 text-xs rounded-full font-semibold"
                  >
                    {cat}
                  </span>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ShlokasByCategory;
