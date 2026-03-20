import { useState } from 'react';
import { searchShlokas, getShlokaInLanguage } from '../utils/shlokasHelper';
import type { Shloka } from '../utils/shlokasHelper';

/**
 * Search Component - Search for shlokas by keyword
 */
export const ShlokaSearch: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [results, setResults] = useState<Shloka[]>([]);
  const [language, setLanguage] = useState<'english' | 'hindi' | 'kannada' | 'sanskrit'>('english');
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    setHasSearched(true);

    if (query.trim().length > 2) {
      const foundShlokas = searchShlokas(query);
      setResults(foundShlokas);
    } else {
      setResults([]);
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto p-6">
      {/* Search Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-orange-900 mb-4">🔍 Search Shlokas</h2>
        <p className="text-orange-700 mb-4">Search by keywords or concepts in English or Hindi</p>

        {/* Search Input */}
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="e.g., stress, duty, action, karma, mind, peace..."
          className="w-full px-6 py-3 text-lg border-2 border-orange-300 rounded-lg focus:outline-none focus:border-orange-600 bg-white"
        />
      </div>

      {/* Language Selector */}
      <div className="flex gap-2 mb-6 flex-wrap">
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

      {/* Results Summary */}
      {hasSearched && (
        <div className="mb-6">
          {results.length > 0 ? (
            <p className="text-lg font-semibold text-orange-900">
              Found {results.length} shloka{results.length !== 1 ? 's' : ''} 📖
            </p>
          ) : searchQuery.trim().length > 2 ? (
            <p className="text-lg text-orange-700">No shlokas found. Try different keywords.</p>
          ) : (
            <p className="text-lg text-orange-700">Enter keywords (minimum 3 characters) to search</p>
          )}
        </div>
      )}

      {/* Results */}
      <div className="space-y-6">
        {results.map((shloka) => (
          <div
            key={shloka.verse_number}
            className="bg-white border-l-4 border-orange-500 p-6 rounded-lg shadow-md hover:shadow-lg transition"
          >
            {/* Verse Number */}
            <h3 className="text-lg font-bold text-orange-900 mb-3">
              Bhagavad Gita {shloka.verse_number}
            </h3>

            {/* Shloka Text */}
            <p className="text-md md:text-lg font-serif text-orange-950 mb-4 leading-relaxed italic p-4 bg-orange-50 rounded">
              "{getShlokaInLanguage(shloka, language)}"
            </p>

            {/* Explanation */}
            <div className="bg-yellow-50 p-4 rounded-md mb-4">
              <p className="text-sm text-yellow-900 font-semibold mb-2">💡 Meaning:</p>
              <p className="text-sm text-yellow-900 leading-relaxed">{shloka.explanation}</p>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {shloka.categories.map((cat: string) => (
                <span
                  key={cat}
                  className="px-3 py-1 bg-orange-200 text-orange-900 text-xs rounded-full font-semibold"
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShlokaSearch;
