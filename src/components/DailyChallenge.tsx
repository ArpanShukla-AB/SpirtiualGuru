import React, { useState, useEffect } from 'react';
import { getRandomShloka, Shloka } from '../utils/shlokasHelper';

/**
 * Daily Challenge Component - New unique feature
 */
export const DailyChallenge: React.FC = () => {
  const [shloka, setShloka] = useState<Shloka | null>(null);
  const [completed, setCompleted] = useState(false);
  const [streak, setStreak] = useState(7);
  const [reflection, setReflection] = useState('');

  useEffect(() => {
    setShloka(getRandomShloka());
  }, []);

  const handleComplete = () => {
    setCompleted(true);
    setStreak(streak + 1);
  };

  if (!shloka) return null;

  return (
    <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg shadow-lg p-6 border-2 border-amber-200">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-2xl font-bold text-orange-900">🔥 Today's Spiritual Challenge</h3>
        <div className="text-3xl">{streak} day streak!</div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-orange-200 rounded-full h-3 mb-6">
        <div
          className="bg-orange-600 h-3 rounded-full transition-all duration-300"
          style={{ width: `${Math.min(completed ? 100 : 30, 100)}%` }}
        ></div>
      </div>

      {/* Shloka Content */}
      <div className="bg-white p-4 rounded-lg mb-6 border-l-4 border-orange-500">
        <p className="text-lg font-serif italic text-orange-950 mb-4">
          "{shloka.english}"
        </p>
        <p className="text-sm text-orange-800 font-semibold mb-2">Today's Focus:</p>
        <p className="text-orange-900">{shloka.explanation}</p>
      </div>

      {/* Reflection Input */}
      <div className="mb-6">
        <label className="block text-orange-900 font-semibold mb-2">
          ✍️ Write your reflection:
        </label>
        <textarea
          value={reflection}
          onChange={(e) => setReflection(e.target.value)}
          placeholder="How will you apply this teaching today?"
          className="w-full p-3 border-2 border-orange-200 rounded-lg focus:outline-none focus:border-orange-600"
          rows={3}
        />
      </div>

      {/* Action Button */}
      <button
        onClick={handleComplete}
        disabled={completed}
        className={`w-full py-3 rounded-lg font-bold text-lg transition ${
          completed
            ? 'bg-green-600 text-white cursor-not-allowed'
            : 'bg-orange-600 hover:bg-orange-700 text-white'
        }`}
      >
        {completed ? '✅ Completed Today!' : '✓ Mark as Complete'}
      </button>

      {/* Motivational Message */}
      {completed && (
        <div className="mt-4 p-4 bg-green-50 border-l-4 border-green-600 rounded">
          <p className="text-green-900 font-semibold">🎉 Great job! Stay committed to your spiritual practice.</p>
        </div>
      )}
    </div>
  );
};

export default DailyChallenge;
