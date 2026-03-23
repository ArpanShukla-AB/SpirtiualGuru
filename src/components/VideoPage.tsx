import React from 'react';

/**
 * VideoPage Component - Enhanced video content with YouTube embeds
 */
export const VideoPage: React.FC = () => {
  const videos = [
    {
      id: '8BYXNtASM5Y',
      title: 'Bhagavad Gita Chapter 1 - The Battlefield of Life',
      description: 'Understanding context and setting where Krishna delivers his divine teachings to Arjuna'
    },
    {
      id: '28sptQICKCk',
      title: 'Krishna\'s Teachings on Karma Yoga',
      description: 'Learn the path of selfless action and performing your duty without attachment to results'
    },
    {
      id: 'PL5A5QJkW7MksDFp4b0JYnV-R-tZTRHURP',
      title: 'Complete Bhagavad Gita Course',
      description: 'Comprehensive study of all 18 chapters with detailed explanations and practical applications'
    },
    {
      id: 'PLOH63aCojox_K7My-NuNQHfP-E1Nn8W9G',
      title: 'Gita for Modern Life',
      description: 'Practical applications of ancient Gita wisdom for contemporary challenges and decisions'
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
    <div className="min-h-screen bg-[#0f172a]">
      {/* Background Grid Pattern */}
      <div className="fixed inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>
      
      {/* Header */}
      <div className="relative z-10 bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 shadow-lg">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-2">🎥 Spiritual Gita Videos</h1>
          <p className="text-blue-100">Learn through visual teachings and deepen your understanding</p>
        </div>
      </div>

      {/* Content Area */}
      <div className="relative z-10 max-w-6xl mx-auto p-6">
        {/* Introduction */}
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl p-6 md:p-10 text-center mb-16">
          <div className="text-6xl mb-4">🎬</div>
          <h2 className="text-3xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Gita Wisdom Video Collection
            </span>
          </h2>
          <p className="text-gray-400 mb-6 text-lg max-w-3xl mx-auto">
            Explore these carefully selected video teachings on Bhagavad Gita. From chapter-by-chapter explanations 
            to practical life applications, these videos help you understand and apply ancient wisdom in modern life.
          </p>
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {videos.map((video, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
            >
              {/* Video Thumbnail/Player */}
              <div className="relative aspect-video bg-gray-800/50">
                <iframe
                  src={getEmbedUrl(video.id)}
                  title={video.title}
                  className="absolute inset-0 w-full h-full"
                  allowFullScreen
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  loading="lazy"
                />
              </div>

              {/* Video Info */}
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="bg-blue-500/20 text-blue-300 text-xs font-semibold px-3 py-1 rounded-full border border-blue-500/30">
                    📹 Video {index + 1}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">
                  {video.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {video.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* How to Add Content Section */}
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl p-6 md:p-10 mb-16">
          <h3 className="text-2xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              📝 How to Add More Content
            </span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-3">1️⃣</div>
              <h4 className="font-bold text-white mb-2">Embed YouTube Videos</h4>
              <p className="text-sm text-gray-400">Use iframe tags to embed YouTube videos with proper IDs</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">2️⃣</div>
              <h4 className="font-bold text-white mb-2">Add Titles & Descriptions</h4>
              <p className="text-sm text-gray-400">Provide clear titles and detailed descriptions for each video</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">3️⃣</div>
              <h4 className="font-bold text-white mb-2">Organize by Topics</h4>
              <p className="text-sm text-gray-400">Group videos by chapters, themes, or difficulty levels</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">4️⃣</div>
              <h4 className="font-bold text-white mb-2">Add Timestamps</h4>
              <p className="text-sm text-gray-400">Include timestamps and notes for important sections</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl p-6 md:p-10 text-center">
          <h3 className="text-2xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              🕉️ Continue Your Spiritual Journey
            </span>
          </h3>
          <p className="mb-6 text-lg text-gray-400">
            Want more personalized guidance? Try our Krishna Mode AI chatbot for answers to your specific life questions.
          </p>
          <div className="flex gap-4 justify-center">
            <button 
              onClick={() => window.location.hash = '#krishna'}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-full hover:shadow-lg transition transform hover:scale-105"
            >
              🧠 Try Krishna Mode
            </button>
            <button 
              onClick={() => window.location.hash = '#allshlokas'}
              className="px-8 py-3 bg-white/10 backdrop-blur-sm text-white font-bold rounded-full border border-white/20 hover:bg-white/20 transition transform hover:scale-105"
            >
              📖 Read All Shlokas
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPage;
