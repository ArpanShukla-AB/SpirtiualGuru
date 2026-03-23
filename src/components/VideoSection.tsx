/**
 * VideoSection Component - Display Gita wisdom videos in responsive grid
 */
export const VideoSection: React.FC = () => {
  const videos = [
    {
      id: '8BYXNtASM5Y',
      title: 'Bhagavad Gita Chapter 1 - The Battlefield of Life',
      description: 'Understanding the context and setting of the Gita'
    },
    {
      id: '28sptQICKCk',
      title: 'Krishna\'s Teachings on Karma Yoga',
      description: 'The path of selfless action and duty'
    },
    {
      id: 'PL5A5QJkW7MksDFp4b0JYnV-R-tZTRHURP',
      title: 'Complete Bhagavad Gita Course',
      description: 'In-depth study of all 18 chapters'
    },
    {
      id: 'PLOH63aCojox_K7My-NuNQHfP-E1Nn8W9G',
      title: 'Gita for Modern Life',
      description: 'Practical applications of Gita wisdom'
    }
  ];

  const getEmbedUrl = (id: string) => {
    if (id.startsWith('PL')) {
      // Playlist URL
      return `https://www.youtube.com/embed/videoseries?list=${id}`;
    }
    // Single video URL
    return `https://www.youtube.com/embed/${id}`;
  };

  return (
    <section className="py-12 px-6 bg-transparent">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              📺 Gita Wisdom Videos
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Deepen your understanding with these carefully selected video teachings on the Bhagavad Gita
          </p>
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map((video, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
            >
              {/* Video Container */}
              <div className="relative aspect-video bg-gray-800/50">
                <iframe
                  src={getEmbedUrl(video.id)}
                  title={video.title}
                  className="absolute inset-0 w-full h-full rounded-t-2xl"
                  allowFullScreen
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  loading="lazy"
                />
              </div>

              {/* Video Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">
                  {video.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {video.description}
                </p>
                
                {/* Play Button Overlay */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center">
                    <div className="w-0 h-0 border-l-[6px] border-l-white border-y-[4px] border-y-transparent ml-0.5"></div>
                  </div>
                </div>
              </div>

              {/* Hover Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Section Footer */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-full">
            <span className="text-2xl">🕉️</span>
            <span className="text-gray-300 font-semibold">More videos coming soon...</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
