import React from 'react';

/**
 * Video Component - Placeholder for video content
 */
export const VideoPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-500 text-white p-6 shadow-lg">
        <h1 className="text-4xl font-bold text-center mb-2">🎥 Spiritual Gita Videos</h1>
        <p className="text-center text-purple-100">Learn through visual teachings</p>
      </div>

      {/* Content Area */}
      <div className="max-w-6xl mx-auto p-6">
        {/* Info Box */}
        <div className="bg-purple-50 border-2 border-purple-300 p-8 rounded-lg text-center mb-8">
          <div className="text-6xl mb-4">🎬</div>
          <h2 className="text-2xl font-bold text-purple-900 mb-4">Video Content Coming Soon</h2>
          <p className="text-purple-800 mb-6 text-lg">
            Add your video content here. You can embed YouTube videos, create tutorials, and share spiritual teachings.
          </p>
          
          {/* Placeholder Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition overflow-hidden border-2 border-dashed border-purple-300"
              >
                <div className="bg-gradient-to-br from-purple-200 to-purple-100 h-40 flex items-center justify-center">
                  <div className="text-4xl">▶️</div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-purple-900 mb-2">Video Slot {i}</h3>
                  <p className="text-sm text-purple-700">Add your content here</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Instructions */}
        <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-purple-600">
          <h3 className="text-xl font-bold text-purple-900 mb-4">📝 How to Add Content</h3>
          <ol className="space-y-3 text-purple-800">
            <li className="flex gap-3">
              <span className="font-bold text-purple-600">1.</span>
              <span>Embed YouTube videos using iframe tags</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-purple-600">2.</span>
              <span>Add video titles and descriptions</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-purple-600">3.</span>
              <span>Organize videos by chapter or topic</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-purple-600">4.</span>
              <span>Add timestamps and notes for each video</span>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default VideoPage;
