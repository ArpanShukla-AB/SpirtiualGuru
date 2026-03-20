import React, { useState, useEffect } from 'react';
import { Emotion, getEmotionEmoji, getEmotionColor } from '../utils/krishnaMode';

interface AdvancedFeature {
  id: string;
  title: string;
  icon: string;
  description: string;
  isActive: boolean;
}

interface AdvancedKrishnaModeProps {
  currentEmotion: Emotion | null;
  onFeatureActivate: (featureId: string) => void;
}

/**
 * Advanced Features for Krishna Mode
 * Includes: Voice Input, Focus Mode, Emotion Visualization, Deep Dive, etc.
 */
export const AdvancedKrishnaFeatures: React.FC<AdvancedKrishnaModeProps> = ({
  currentEmotion,
  onFeatureActivate
}) => {
  const [features, setFeatures] = useState<AdvancedFeature[]>([
    {
      id: 'voice-input',
      title: 'Voice Input',
      icon: '🎤',
      description: 'Speak instead of typing',
      isActive: false
    },
    {
      id: 'focus-mode',
      title: 'Focus Mode',
      icon: '🧘',
      description: '2-minute meditation session',
      isActive: false
    },
    {
      id: 'deep-dive',
      title: 'Deep Dive',
      icon: '📚',
      description: 'Explore shloka in detail',
      isActive: false
    },
    {
      id: 'save-wisdom',
      title: 'Save Wisdom',
      icon: '💾',
      description: 'Save this guidance for later',
      isActive: false
    }
  ]);

  const [isListening, setIsListening] = useState(false);
  const [focusTimeLeft, setFocusTimeLeft] = useState(120);

  // Voice input handler
  const handleVoiceInput = async () => {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      alert('Speech recognition not supported in this browser');
      return;
    }

    const SpeechRecognition = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition;
    const recognition = new SpeechRecognition();

    recognition.onstart = () => setIsListening(true);
    recognition.onend = () => setIsListening(false);
    recognition.onresult = (event: any) => {
      const transcript = Array.from(event.results)
        .map((result: any) => result[0].transcript)
        .join('');
      console.log('Transcript:', transcript);
      // Parent component handles input
    };

    recognition.start();
  };

  // Focus mode timer effect
  useEffect(() => {
    let timer: ReturnType<typeof setInterval>;
    const focusFeature = features.find(f => f.id === 'focus-mode');

    if (focusFeature?.isActive && focusTimeLeft > 0) {
      timer = setInterval(() => {
        setFocusTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (focusTimeLeft === 0 && focusFeature?.isActive) {
      // Focus session complete
      setFeatures(prev =>
        prev.map(f => f.id === 'focus-mode' ? { ...f, isActive: false } : f)
      );
      setFocusTimeLeft(120);
    }

    return () => clearInterval(timer);
  }, [focusTimeLeft, features]);

  const toggleFeature = (featureId: string) => {
    setFeatures(prev =>
      prev.map(f => f.id === featureId ? { ...f, isActive: !f.isActive } : f)
    );
    onFeatureActivate(featureId);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="space-y-4">
      {/* Emotion Intensity Visualization */}
      {currentEmotion && (
        <div className="bg-gradient-to-r from-orange-100 to-amber-100 p-4 rounded-lg border-2 border-orange-300">
          <div className="flex items-center justify-between mb-2">
            <span className="font-semibold text-orange-900">
              {getEmotionEmoji(currentEmotion)} Detected: {currentEmotion.replace('_', ' ').toUpperCase()}
            </span>
            <span className="text-xs bg-white px-3 py-1 rounded-full text-orange-700 font-bold">
              Emotional State
            </span>
          </div>
          <div className="w-full h-2 bg-orange-200 rounded-full overflow-hidden">
            <div
              className={`h-full bg-gradient-to-r ${getEmotionColor(currentEmotion)} transition-all duration-500`}
              style={{ width: '75%' }}
            ></div>
          </div>
        </div>
      )}

      {/* Features Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {features.map(feature => (
          <button
            key={feature.id}
            onClick={() => toggleFeature(feature.id)}
            className={`p-3 rounded-lg font-semibold text-sm transition ${
              feature.isActive
                ? 'bg-orange-600 text-white shadow-lg scale-105'
                : 'bg-white text-orange-600 border-2 border-orange-300 hover:bg-orange-50'
            }`}
          >
            <div className="text-2xl mb-1">{feature.icon}</div>
            <div className="text-xs">{feature.title}</div>
          </button>
        ))}
      </div>

      {/* Focus Mode Active */}
      {features.find(f => f.id === 'focus-mode')?.isActive && (
        <div className="bg-gradient-to-br from-purple-500 via-purple-600 to-indigo-600 text-white p-6 rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4">🧘 Meditation Session</h3>
          <div className="text-6xl font-bold mb-4 font-mono">
            {formatTime(focusTimeLeft)}
          </div>
          <p className="text-purple-100 mb-4">
            Take 3 deep breaths. Focus on the shloka you received.
          </p>
          <button
            onClick={() => toggleFeature('focus-mode')}
            className="bg-white text-purple-600 px-6 py-2 rounded-lg font-bold hover:bg-purple-50 transition"
          >
            End Session
          </button>
        </div>
      )}

      {/* Voice Input */}
      {features.find(f => f.id === 'voice-input')?.isActive && (
        <div className="bg-red-50 p-4 rounded-lg border-2 border-red-300">
          <button
            onClick={handleVoiceInput}
            className={`w-full py-3 rounded-lg font-bold transition ${
              isListening
                ? 'bg-red-600 text-white animate-pulse'
                : 'bg-red-500 hover:bg-red-600 text-white'
            }`}
          >
            {isListening ? '🎤 Listening...' : '🎤 Start Speaking'}
          </button>
          <p className="text-xs text-red-600 mt-2">
            {isListening
              ? 'Speak now. I\'m listening...'
              : 'Click to start voice input'}
          </p>
        </div>
      )}

      {/* Save Wisdom Feature */}
      {features.find(f => f.id === 'save-wisdom')?.isActive && (
        <div className="bg-blue-50 p-4 rounded-lg border-2 border-blue-300">
          <div className="flex items-center gap-2">
            <span className="text-2xl">💾</span>
            <div>
              <h4 className="font-bold text-blue-900">Wisdom Saved!</h4>
              <p className="text-xs text-blue-700">
                This guidance is now in your personal wisdom library
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Deep Dive Feature */}
      {features.find(f => f.id === 'deep-dive')?.isActive && (
        <div className="bg-amber-50 p-4 rounded-lg border-2 border-amber-300">
          <h4 className="font-bold text-amber-900 mb-2">📚 Deep Dive Into This Shloka</h4>
          <button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-2 rounded-lg font-bold transition">
            Explore Full Context
          </button>
          <p className="text-xs text-amber-700 mt-2">
            Learn about: Historical context, Sanskrit meaning, Philosophical significance
          </p>
        </div>
      )}
    </div>
  );
};

export default AdvancedKrishnaFeatures;
