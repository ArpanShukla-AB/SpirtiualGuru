import { useState, useRef, useEffect } from 'react';
import {
  detectEmotion,
  getShlokaForEmotion,
  emotionToGitaConcept,
  getEmotionEmoji,
  getEmotionColor,
  getShlokasForKrishnaGuidance,
  Emotion
} from '../utils/krishnaMode';
import type { Shloka } from '../utils/shlokasHelper';

interface Message {
  id: string;
  role: 'user' | 'krishna';
  content: string;
  emotion?: Emotion;
  shloka?: Shloka;
  timestamp: Date;
}

interface SuggestionChip {
  text: string;
  emotion: Emotion;
}

/**
 * Krishna Mode Component - AI-powered spiritual guidance system
 */
export const KrishnaMode: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '0',
      role: 'krishna',
      content: 'Namaste 🙏\n\nI am here to listen and guide you with the timeless wisdom of the Bhagavad Gita. Share what\'s troubling your mind, and I will help you find clarity and peace.',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [currentEmotion, setCurrentEmotion] = useState<Emotion | null>(null);

  const suggestionChips: SuggestionChip[] = [
    { text: 'I failed my exam and feel useless', emotion: 'failure' },
    { text: 'I am stressed about my career', emotion: 'stress' },
    { text: 'I cannot focus and always overthink', emotion: 'overthinking' },
    { text: 'I don\'t know what path to take', emotion: 'confusion' },
  ];

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Simulate LLM response (in real app, call backend API)
  const generateKrishnaResponse = async (userMessage: string): Promise<string> => {
    const emotion = detectEmotion(userMessage);
    setCurrentEmotion(emotion);
    const shlokas = getShlokasForKrishnaGuidance(userMessage, emotion, 2);
    const primary = shlokas[0] ?? getShlokaForEmotion(emotion);

    if (!primary) return 'I understand your concern. Let me reflect on this with wisdom from the Bhagavad Gita...';

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 900));

    const toChapterVerse = (verseNumber: string) => {
      const [chapter, verse] = verseNumber.split('.');
      return { chapter: chapter || verseNumber, verse: verse || '' };
    };

    const concept = emotionToGitaConcept[emotion];
    const { chapter, verse } = toChapterVerse(primary.verse_number);

    const support = shlokas[1];
    const supportLine = support
      ? `\n📌 Support (also relevant): Ch.${toChapterVerse(support.verse_number).chapter}, v.${toChapterVerse(support.verse_number).verse} (${support.verse_number})\nMeaning: ${support.explanation}`
      : '';

    return [
      '🪔 Teaching (grounded in the Gita):',
      `Ch.${chapter}, v.${verse} (${primary.verse_number})\n"${primary.english}"\nMeaning: ${primary.explanation}`,
      supportLine,
      '',
      '📖 How this applies to you:',
      `In your situation, the Gita theme of "${concept}" is the guiding point. Use Ch.${chapter}, v.${verse} as your reminder to move from fear to disciplined effort.`,
      '',
      '🧠 Action Steps:',
      `1. Today: pick ONE responsibility and complete it fully—start immediately, release worry about outcome (Ch.${chapter}, v.${verse}).`,
      '2. This week: whenever overthinking/anger/confusion rises, pause for 60 seconds and ask: "What can I control right now in my actions?"',
      '3. Going forward: track one small improvement each day; treat setbacks as feedback, not as your identity.',
      '',
      `💭 Reflection: If you trusted Ch.${chapter}, v.${verse} in your next decision, what exact action would you take today?`
    ].join('\n');
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    setShowSuggestions(false);
    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setLoading(true);

    try {
      const krishnaResponse = await generateKrishnaResponse(inputValue);
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'krishna',
        content: krishnaResponse,
        emotion: currentEmotion || undefined,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error generating response:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSuggestionClick = (text: string) => {
    setInputValue(text);
    setShowSuggestions(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-orange-50 flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-orange-200 p-4 sm:p-5">
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
          <div className="min-w-0">
            <h1 className="text-2xl font-bold leading-tight text-orange-900">🪔 Krishna Mode</h1>
            <p className="text-orange-700 text-sm mt-1">Wisdom-driven guidance system</p>
          </div>

          <div className="hidden sm:block text-xs px-3 py-1 rounded-full bg-orange-100 text-orange-800 border border-orange-200">Gita-grounded</div>
        </div>
      </div>

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto p-4 max-w-4xl w-full mx-auto">
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
            {message.role === 'krishna' && (
              <div className="w-10 h-10 rounded-full bg-orange-600 text-white flex items-center justify-center flex-shrink-0 mr-3 shadow">
                🪔
              </div>
            )}

            <div
              className={`max-w-2xl p-4 rounded-lg ${
                message.role === 'user'
                  ? 'bg-blue-600 text-white rounded-2xl rounded-br-none border border-blue-500/50 shadow-sm'
                  : 'bg-white/80 text-orange-950 border border-orange-200 rounded-2xl rounded-bl-none shadow-sm'
              }`}
            >
              {message.emotion && message.role === 'krishna' && (
                <div className={`mb-3 inline-block px-3 py-1 rounded-full text-sm font-semibold bg-gradient-to-r ${getEmotionColor(message.emotion)} text-white`}>
                  {getEmotionEmoji(message.emotion)} {message.emotion.replace('_', ' ')}
                </div>
              )}
              <p className="whitespace-pre-wrap text-sm md:text-base leading-relaxed">
                {message.content}
              </p>
              <p className="text-xs mt-2 opacity-70">
                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>

            {message.role === 'user' && (
              <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0 ml-3 shadow">
                👤
              </div>
            )}
            </div>
          ))}

          {loading && (
            <div className="flex justify-start">
              <div className="w-10 h-10 rounded-full bg-orange-600 text-white flex items-center justify-center flex-shrink-0 mr-3 shadow">
                🪔
              </div>
              <div className="bg-white/80 text-orange-950 border border-orange-200 p-4 rounded-2xl shadow-sm rounded-bl-none">
                <div className="flex gap-2">
                  <div className="w-2 h-2 bg-orange-600 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-orange-600 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-orange-600 rounded-full animate-bounce"></div>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Suggestions */}
      {showSuggestions && messages.length === 1 && (
        <div className="px-4 py-6 bg-white/80 backdrop-blur border-t border-orange-200">
          <div className="max-w-4xl mx-auto">
            <p className="text-center text-orange-900 font-semibold mb-4">✨ Try asking:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {suggestionChips.map((chip, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSuggestionClick(chip.text)}
                  className="p-3 text-left rounded-xl border border-orange-200 hover:bg-orange-50 hover:border-orange-400 transition text-sm text-orange-900 font-semibold"
                >
                  {getEmotionEmoji(chip.emotion)} {chip.text}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Input Area */}
      <div className="bg-white border-t border-orange-200 p-4 shadow-lg">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-end gap-4">
            <div className="flex gap-2 flex-1">
              <textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Share what's on your mind... (Press Enter to send)"
                className="flex-1 p-3 border-2 border-orange-300 rounded-lg focus:outline-none focus:border-orange-600 resize-none text-sm md:text-base"
                rows={3}
                disabled={loading}
              />
              <button
                onClick={handleSendMessage}
                disabled={loading || !inputValue.trim()}
                aria-label="Send message with Radha-Krishna button"
                className={`relative w-20 h-20 rounded-2xl overflow-hidden border-2 transition ${
                  loading || !inputValue.trim()
                    ? 'border-gray-300 grayscale cursor-not-allowed'
                    : 'border-orange-400 hover:border-orange-600 hover:scale-[1.02]'
                }`}
              >
                <img
                  src="/radha-krishna-real.png"
                  alt="Radha Krishna"
                  className="w-full h-full object-cover"
                />
                <span className="absolute inset-x-0 bottom-0 text-[10px] font-bold text-white bg-black/45 py-0.5">
                  {loading ? '...' : 'Send'}
                </span>
              </button>
            </div>

            {/* Big Radha-Krishna 3D art beside Send button */}
            <div className="hidden md:flex items-center justify-center w-32 h-32 lg:w-36 lg:h-36 rounded-2xl bg-orange-50 border border-orange-200 shadow-sm overflow-hidden">
              <img
                src="/radha-krishna-real.png"
                alt="Radha-Krishna 3D"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            💡 Tip: Be specific about what's troubling you for better guidance
          </p>
        </div>
      </div>
    </div>
  );
};

export default KrishnaMode;
