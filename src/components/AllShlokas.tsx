import { useState } from 'react';
import { getAllChapters } from '../utils/shlokasHelper';

/**
 * All Shlokas Component - Display ALL 700 shlokas in organized view
 */
export const AllShlokas: React.FC = () => {
  const [selectedChapter, setSelectedChapter] = useState<number>(1);
  const [language, setLanguage] = useState<'english' | 'hindi' | 'kannada' | 'sanskrit'>('english');
  const [favorites, setFavorites] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'card' | 'list'>('card');

  const chapters = getAllChapters();
  const currentChapter = chapters.find((c) => c.chapter_number === selectedChapter);
  
  const filteredShlokas = currentChapter?.shlokas.filter((shloka) => {
    if (!searchQuery) return true;
    return (
      shloka.english.toLowerCase().includes(searchQuery.toLowerCase()) ||
      shloka.hindi.toLowerCase().includes(searchQuery.toLowerCase()) ||
      shloka.explanation.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }) || [];

  const toggleFavorite = (verseNumber: string) => {
    setFavorites((prev) =>
      prev.includes(verseNumber)
        ? prev.filter((v) => v !== verseNumber)
        : [...prev, verseNumber]
    );
  };

  const getChapterColor = (chapterNum: number) => {
    const colors = [
      'from-red-400 to-red-600',
      'from-orange-400 to-orange-600',
      'from-yellow-400 to-yellow-600',
      'from-green-400 to-green-600',
      'from-blue-400 to-blue-600',
      'from-purple-400 to-purple-600',
      'from-pink-400 to-pink-600',
      'from-indigo-400 to-indigo-600',
      'from-cyan-400 to-cyan-600'
    ];
    return colors[(chapterNum - 1) % colors.length];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-50 to-white">
      {/* Epic Header */}
      <div className="bg-gradient-to-r from-orange-700 via-orange-600 to-orange-500 text-white p-6 shadow-2xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-black mb-2 text-center">📖 Complete Bhagavad Gita</h1>
          <p className="text-center text-orange-100 mb-6">Explore all 700 shlokas across 18 chapters</p>
          
          {/* Language Selector */}
          <div className="flex gap-2 flex-wrap justify-center mb-6">
            {(['english', 'hindi', 'kannada', 'sanskrit'] as const).map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang)}
                className={`px-6 py-3 rounded-lg transition font-bold transform hover:scale-105 ${
                  language === lang
                    ? 'bg-white text-orange-700 shadow-lg'
                    : 'bg-orange-500 hover:bg-orange-400 text-white'
                }`}
              >
                {lang === 'english' && '🇬🇧 English'}
                {lang === 'hindi' && '🇮🇳 हिंदी'}
                {lang === 'kannada' && '🇮🇳 ಕನ್ನಡ'}
                {lang === 'sanskrit' && '📜 Sanskrit'}
              </button>
            ))}
          </div>

          {/* Search & View Toggle */}
          <div className="flex gap-4 flex-col md:flex-row">
            <input
              type="text"
              placeholder="🔍 Search shlokas by keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 px-6 py-3 rounded-lg text-orange-900 focus:outline-none focus:ring-2 focus:ring-white font-semibold"
            />
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode('card')}
                className={`px-6 py-3 rounded-lg font-bold transition ${
                  viewMode === 'card'
                    ? 'bg-white text-orange-700'
                    : 'bg-orange-500 text-white hover:bg-orange-400'
                }`}
              >
                📇 Cards
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`px-6 py-3 rounded-lg font-bold transition ${
                  viewMode === 'list'
                    ? 'bg-white text-orange-700'
                    : 'bg-orange-500 text-white hover:bg-orange-400'
                }`}
              >
                📋 List
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-4 md:p-6">
        {/* Chapter Statistics */}
        <div className="mb-8 bg-white p-6 rounded-xl shadow-lg border-2 border-orange-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-4xl font-black text-orange-600">700</div>
              <div className="text-sm font-semibold text-gray-600">Total Shlokas</div>
            </div>
            <div>
              <div className="text-4xl font-black text-blue-600">18</div>
              <div className="text-sm font-semibold text-gray-600">Chapters</div>
            </div>
            <div>
              <div className="text-4xl font-black text-purple-600">{favorites.length}</div>
              <div className="text-sm font-semibold text-gray-600">Saved ❤️</div>
            </div>
            <div>
              <div className="text-4xl font-black text-pink-600">{filteredShlokas.length}</div>
              <div className="text-sm font-semibold text-gray-600">This Chapter</div>
            </div>
          </div>
        </div>

        {/* Chapter Navigation */}
        <div className="mb-10">
          <h2 className="text-3xl font-black text-orange-900 mb-6 flex items-center gap-2">
            <span>📚 Select Chapter</span>
            <span className="text-lg font-semibold text-orange-600">({chapters.length} chapters)</span>
          </h2>
          <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-9 gap-3">
            {chapters.map((chapter) => (
              <button
                key={chapter.chapter_number}
                onClick={() => {
                  setSelectedChapter(chapter.chapter_number);
                  setSearchQuery('');
                }}
                className={`p-4 rounded-xl transition transform hover:scale-110 font-bold text-sm md:text-base shadow-md ${
                  selectedChapter === chapter.chapter_number
                    ? `bg-gradient-to-br ${getChapterColor(chapter.chapter_number)} text-white shadow-xl scale-105`
                    : 'bg-white text-orange-900 border-2 border-orange-200 hover:border-orange-400'
                }`}
              >
                <div className="font-black text-lg md:text-xl">{chapter.chapter_number}</div>
                <div className="text-xs mt-1">{chapter.total_shlokas}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Chapter Info Card */}
        {currentChapter && (
          <div className={`bg-gradient-to-r ${getChapterColor(currentChapter.chapter_number)} text-white p-8 rounded-2xl mb-10 shadow-xl`}>
            <h3 className="text-4xl font-black mb-2">
              Chapter {currentChapter.chapter_number}
            </h3>
            <h4 className="text-2xl font-bold text-white text-opacity-90 mb-4">
              {currentChapter.chapter_name}
            </h4>
            <div className="grid grid-cols-3 gap-6 mb-6">
              <div>
                <div className="text-2xl font-black">{currentChapter.total_shlokas}</div>
                <div className="text-sm text-white text-opacity-90">Shlokas</div>
              </div>
              <div>
                <div className="text-2xl font-black">{currentChapter.categories.length}</div>
                <div className="text-sm text-white text-opacity-90">Categories</div>
              </div>
              <div>
                <div className="text-2xl font-black">{searchQuery ? filteredShlokas.length : 'All'}</div>
                <div className="text-sm text-white text-opacity-90">Visible</div>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              {currentChapter.categories.map((cat) => (
                <span key={cat} className="px-4 py-2 bg-white bg-opacity-20 text-white text-sm rounded-full font-semibold border border-white border-opacity-30">
                  {cat}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Shlokas Display */}
        {filteredShlokas.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border-2 border-orange-200">
            <div className="text-6xl mb-4">🔍</div>
            <p className="text-orange-700 text-xl font-bold">No shlokas found</p>
            <p className="text-orange-600 text-sm mt-2">Try different search words</p>
          </div>
        ) : (
          <div className={viewMode === 'card' ? 'grid grid-cols-1 md:grid-cols-2 gap-6' : 'space-y-6'}>
            {filteredShlokas.map((shloka, idx) => (
              <div
                key={shloka.verse_number}
                className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 border-t-4 border-orange-500 overflow-hidden ${
                  viewMode === 'list' ? 'md:flex' : ''
                }`}
              >
                {/* Header */}
                <div className="p-6 flex-1">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <div className="text-sm font-semibold text-orange-600 mb-1">
                        📖 Bhagavad Gita {shloka.verse_number}
                      </div>
                      <h4 className="text-2xl font-black text-orange-900">
                        Shloka #{idx + 1}
                      </h4>
                    </div>
                    <button
                      onClick={() => toggleFavorite(shloka.verse_number)}
                      className={`text-4xl transition transform hover:scale-125 ${
                        favorites.includes(shloka.verse_number) ? '❤️' : '🤍'
                      }`}
                      title="Save to favorites"
                    />
                  </div>

                  {/* Shloka Text */}
                  <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-5 rounded-xl mb-4 border-l-4 border-orange-400">
                    <p className="text-base md:text-lg font-semibold text-orange-950 leading-relaxed italic">
                      {language === 'english' && `"${shloka.english}"`}
                      {language === 'hindi' && `"${shloka.hindi}"`}
                      {language === 'kannada' && `"${shloka.kannada}"`}
                      {language === 'sanskrit' && `"${shloka.sanskrit}"`}
                    </p>
                  </div>

                  {/* Explanation */}
                  <div className="bg-blue-50 p-4 rounded-lg mb-4 border-l-4 border-blue-400">
                    <p className="text-xs font-bold text-blue-900 mb-2">💡 KEY INSIGHT:</p>
                    <p className="text-sm text-blue-900 leading-relaxed line-clamp-3">{shloka.explanation}</p>
                  </div>

                  {/* Categories */}
                  <div className="flex flex-wrap gap-2">
                    {shloka.categories.map((cat) => (
                      <span
                        key={cat}
                        className="px-3 py-1 bg-gradient-to-r from-orange-200 to-amber-200 text-orange-900 text-xs rounded-full font-bold"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Footer Stats */}
        <div className="mt-16 bg-gradient-to-r from-orange-100 via-amber-100 to-orange-100 p-8 rounded-2xl text-center border-2 border-orange-300 shadow-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
            <div>
              <div className="text-3xl font-black text-orange-700">{filteredShlokas.length}</div>
              <div className="text-sm font-semibold text-orange-600">Shlokas Shown</div>
            </div>
            <div>
              <div className="text-3xl font-black text-orange-700">{currentChapter?.total_shlokas || 0}</div>
              <div className="text-sm font-semibold text-orange-600">In Chapter</div>
            </div>
            <div>
              <div className="text-3xl font-black text-red-600">{favorites.length}</div>
              <div className="text-sm font-semibold text-orange-600">Saved ❤️</div>
            </div>
            <div>
              <div className="text-3xl font-black text-orange-700">
                {Math.round((filteredShlokas.length / 700) * 100)}%
              </div>
              <div className="text-sm font-semibold text-orange-600">Of All Shlokas</div>
            </div>
          </div>
          <div className="w-full h-3 bg-orange-300 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-orange-600 to-red-600 transition-all duration-500"
              style={{ width: `${Math.round((filteredShlokas.length / 700) * 100)}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllShlokas;
