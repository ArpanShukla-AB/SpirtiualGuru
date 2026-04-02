import { getAllChapters } from '../utils/shlokasHelper';

interface ChaptersGridProps {
  onChapterSelect: (chapterNumber: number) => void;
}

/**
 * ChaptersGrid Component - Display 18 chapters in a grid layout
 */
export const ChaptersGrid: React.FC<ChaptersGridProps> = ({ onChapterSelect }) => {
  const chapters = getAllChapters();

  const getChapterIcon = (chapterNum: number) => {
    const icons = [
      '🎭', '📖', '🔥', '🎯', '⚔️', '🧘', '🌟', '🏛️', '👑',
      '💫', '🌊', '🌸', '🕉️', '🌿', '🔮', '🦋', '🌅', '🕊️'
    ];
    return icons[(chapterNum - 1) % icons.length];
  };

  return (
    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl p-6 md:p-8">
      <div className="text-center mb-6 md:mb-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-3">
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
            📚 All 18 Chapters
          </span>
        </h2>
        <p className="text-gray-400 text-sm md:text-base font-semibold">
          Click any chapter to explore all shlokas
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
        {chapters.map((chapter) => (
          <button
            key={chapter.chapter_number}
            onClick={() => onChapterSelect(chapter.chapter_number)}
            className="group relative bg-gray-900 border border-gray-700 p-4 md:p-5 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:border-gray-600"
          >
            {/* Chapter Number */}
            <div className="absolute top-2 right-2 bg-blue-500/20 backdrop-blur-sm rounded-full w-8 h-8 flex items-center justify-center text-xs md:text-sm font-bold text-blue-300 border border-blue-500/30">
              {chapter.chapter_number}
            </div>

            {/* Icon */}
            <div className="text-3xl md:text-4xl mb-2 md:mb-3 group-hover:scale-110 transition-transform">
              {getChapterIcon(chapter.chapter_number)}
            </div>

            {/* Chapter Name */}
            <h3 className="text-sm md:text-base font-bold leading-tight mb-1 text-white">
              {chapter.chapter_name.length > 20 
                ? chapter.chapter_name.substring(0, 20) + '...' 
                : chapter.chapter_name}
            </h3>

            {/* Shloka Count */}
            <div className="text-xs md:text-sm font-semibold text-gray-400 bg-gray-800 rounded-full px-2 py-1 inline-block border border-gray-700">
              {chapter.total_shlokas} shlokas
            </div>

            {/* Hover Effect Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
          </button>
        ))}
      </div>

      {/* Quick Stats */}
      <div className="mt-6 md:mt-8 grid grid-cols-3 gap-4 text-center">
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-3 md:p-4">
          <div className="text-2xl md:text-3xl font-bold text-white">18</div>
          <div className="text-xs md:text-sm font-semibold text-gray-400">Chapters</div>
        </div>
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-3 md:p-4">
          <div className="text-2xl md:text-3xl font-bold text-white">700</div>
          <div className="text-xs md:text-sm font-semibold text-gray-400">Total Shlokas</div>
        </div>
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-3 md:p-4">
          <div className="text-2xl md:text-3xl font-bold text-white">∞</div>
          <div className="text-xs md:text-sm font-semibold text-gray-400">Wisdom</div>
        </div>
      </div>
    </div>
  );
};

export default ChaptersGrid;
