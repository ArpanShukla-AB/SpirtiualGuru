import React from 'react';

/**
 * VideoPage Component - Enhanced video content with YouTube embeds
 */
export const VideoPage: React.FC = () => {
  const videos = [
    {
      id: '8BYXNtASM5Y',
      title: 'Bhagavad Gita Chapter 1 - The Battlefield of Life',
      description: 'Understanding the context and setting where Krishna delivers his divine teachings to Arjuna'
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
    },
    {
      id: '8BYXNtASM5Y',
      title: 'Understanding Dharma - Your Righteous Duty',
      description: 'Deep dive into the concept of Dharma and how to discover your true purpose in life'
    },
    {
      id: '28sptQICKCk',
      title: 'Overcoming Fear and Anxiety',
      description: 'Krishna\'s practical guidance for dealing with fear, anxiety, and mental peace'
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
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6 shadow-lg">
        <h1 className="text-4xl font-bold text-center mb-2">🎥 Spiritual Gita Videos</h1>
        <p className="text-center text-purple-100">Learn through visual teachings and deepen your understanding</p>
      </div>

      {/* Content Area */}
      <div className="max-w-7xl mx-auto p-6">
        {/* Introduction */}
        <div className="bg-white border-2 border-purple-200 p-8 rounded-2xl text-center mb-8 shadow-lg">
          <div className="text-6xl mb-4">🎬</div>
          <h2 className="text-3xl font-bold text-purple-900 mb-4">Gita Wisdom Video Collection</h2>
          <p className="text-purple-800 mb-6 text-lg max-w-3xl mx-auto">
            Explore these carefully selected video teachings on the Bhagavad Gita. From chapter-by-chapter explanations 
            to practical life applications, these videos help you understand and apply ancient wisdom in modern life.
          </p>
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {videos.map((video, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden border border-purple-100"
            >
              {/* Video Thumbnail/Player */}
              <div className="relative aspect-video">
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
                  <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-3 py-1 rounded-full">
                    📹 Video {index + 1}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  {video.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {video.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* How to Add Content Section */}
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 border-2 border-purple-200 p-8 rounded-2xl mb-8">
          <h3 className="text-2xl font-bold text-purple-900 mb-6">📝 How to Add More Content</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-3">1️⃣</div>
              <h4 className="font-bold text-purple-800 mb-2">Embed YouTube Videos</h4>
              <p className="text-sm text-gray-600">Use iframe tags to embed YouTube videos with proper IDs</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">2️⃣</div>
              <h4 className="font-bold text-purple-800 mb-2">Add Titles & Descriptions</h4>
              <p className="text-sm text-gray-600">Provide clear titles and detailed descriptions for each video</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">3️⃣</div>
              <h4 className="font-bold text-purple-800 mb-2">Organize by Topics</h4>
              <p className="text-sm text-gray-600">Group videos by chapters, themes, or difficulty levels</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">4️⃣</div>
              <h4 className="font-bold text-purple-800 mb-2">Add Timestamps</h4>
              <p className="text-sm text-gray-600">Include timestamps and notes for important sections</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-purple-600 to-blue-600 text-white p-8 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-bold mb-4">🕉️ Continue Your Spiritual Journey</h3>
          <p className="mb-6 text-lg">
            Want more personalized guidance? Try our Krishna Mode AI chatbot for answers to your specific life questions.
          </p>
          <div className="flex gap-4 justify-center">
            <button 
              onClick={() => window.location.hash = '#krishna'}
              className="px-8 py-3 bg-white text-purple-700 font-bold rounded-full hover:bg-purple-50 transition transform hover:scale-105"
            >
              🧠 Try Krishna Mode
            </button>
            <button 
              onClick={() => window.location.hash = '#allshlokas'}
              className="px-8 py-3 bg-purple-500 text-white font-bold rounded-full hover:bg-purple-400 transition transform hover:scale-105"
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
