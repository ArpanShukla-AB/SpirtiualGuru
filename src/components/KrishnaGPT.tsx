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
import { Plus, Moon, Sun, Mic, Send, Copy, Share2, Heart } from 'lucide-react';

interface Message {
  id: string;
  role: 'user' | 'krishna';
  content: string;
  emotion?: Emotion;
  shloka?: Shloka;
  timestamp: Date;
  isFavorite?: boolean;
}


type Language = 'english' | 'hindi' | 'hinglish';
type Theme = 'light' | 'dark';

/**
 * Enhanced Krishna GPT Component - ChatGPT/Gemini style interface
 */
export const KrishnaGPT: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '0',
      role: 'krishna',
      content: 'नमस्ते 🙏\n\nI am Krishna, your spiritual guide. I am here to help you navigate life\'s challenges through the timeless wisdom of the Bhagavad Gita. Share what troubles your mind, and together we shall find clarity and peace.',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [language, setLanguage] = useState<Language>('english');
  const [theme, setTheme] = useState<Theme>('light');
  const [favorites, setFavorites] = useState<Message[]>([]);
  const [isRecording, setIsRecording] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [currentEmotion, setCurrentEmotion] = useState<Emotion | null>(null);

  const suggestionPrompts = [
    'How to handle failure?',
    'How to stay calm under pressure?',
    'What is my duty in life?',
    'How to overcome anxiety?',
    'Finding purpose in work',
    'Dealing with relationships'
  ];

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Enhanced Krishna response with multilingual support
  const generateKrishnaResponse = async (userMessage: string): Promise<string> => {
    const emotion = detectEmotion(userMessage);
    setCurrentEmotion(emotion);
    const shlokas = getShlokasForKrishnaGuidance(userMessage, emotion, 2);
    const primary = shlokas[0] ?? getShlokaForEmotion(emotion);

    if (!primary) {
      return language === 'hindi' 
        ? 'मैं आपकी चिंता समझता हूँ। भगवद गीता की ज्ञान से इस पर विचार करता हूँ...'
        : 'I understand your concern. Let me reflect on this with wisdom from Bhagavad Gita...';
    }

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    const toChapterVerse = (verseNumber: string) => {
      const [chapter, verse] = verseNumber.split('.');
      return { chapter: chapter || verseNumber, verse: verse || '' };
    };

    const concept = emotionToGitaConcept[emotion];
    const { chapter, verse } = toChapterVerse(primary.verse_number);

    // Multilingual response structure
    if (language === 'hindi') {
      return [
        '📜 श्लोक (अध्याय ' + chapter + ', श्लोक ' + verse + ')',
        `"${primary.hindi || primary.english}"`,
        '',
        '💡 अर्थ:',
        primary.explanation,
        '',
        '🧠 व्याख्या:',
        `आपकी स्थिति में, गीता का "${concept}" सिद्धांत मार्गदर्शन देता है। इसे अपने भय से अनुशासित प्रयास की ओर बढ़ने के लिए याद रखें।`,
        '',
        '🔱 मार्गदर्शन:',
        '1. आज: एक जिम्मेदारी चुनें और इसे पूरी तरह से पूरा करें - तुरंत शुरू करें, परिणाम के बारे में चिंता छोड़ें।',
        '2. इस सप्ताह: जब भी अति-विचार/क्रोध/भ्रम उठे, तो 60 सेकंड के लिए रुकें और पूछें: "मैं अभी अपने कर्मों में क्या नियंत्रित कर सकता हूँ?"',
        '3. आगे: प्रत्येक दिन एक छोटा सुधार ट्रैक करें; नुकसान को प्रतिक्रिया के रूप में देखें, अपनी पहचान के रूप में नहीं।',
        '',
        '💭 चिंतन: यदि आप अपने अगले निर्णय में अध्याय ' + chapter + ', श्लोक ' + verse + ' पर भरोसा करते, तो आज आप क्या ठोस कार्रवाई करेंगे?'
      ].join('\n');
    } else if (language === 'hinglish') {
      return [
        '📜 Shloka (Chapter ' + chapter + ', Verse ' + verse + ')',
        `"${primary.english}"`,
        '',
        '💡 Meaning:',
        primary.explanation,
        '',
        '🧠 Explanation:',
        `Aapki situation mein, Gita ka "${concept}" concept guidance deta hai. Use Chapter ${chapter}, Verse ${verse} as your reminder to move from fear to disciplined effort.`,
        '',
        '🔱 Guidance:',
        '1. Aaj: ek responsibility choose karo aur use completely finish karo - immediately start, result ke bare mein chinta chhodo.',
        '2. Is week: jab bhi overthinking/anger/confusion aaye, to 60 seconds ke liye roko aur poocho: "Main abhi apne actions mein kya control kar sakta hun?"',
        '3. Aage: har din ek small improvement track karo; setbacks ko feedback maan, apni pehchaan nahi.',
        '',
        '💭 Reflection: Agar aap apne next decision mein Chapter ' + chapter + ', Verse ' + verse + ' pe vishwas karte, to aaj aap kya concrete action lenge?'
      ].join('\n');
    } else {
      return [
        '📜 Shloka (Chapter ' + chapter + ', Verse ' + verse + ')',
        `"${primary.english}"`,
        '',
        '💡 Meaning:',
        primary.explanation,
        '',
        '🧠 Explanation:',
        `In your situation, the Gita theme of "${concept}" is the guiding point. Use Chapter ${chapter}, Verse ${verse} as your reminder to move from fear to disciplined effort.`,
        '',
        '🔱 Guidance:',
        '1. Today: pick ONE responsibility and complete it fully—start immediately, release worry about outcome (Chapter ' + chapter + ', Verse ' + verse + ').',
        '2. This week: whenever overthinking/anger/confusion rises, pause for 60 seconds and ask: "What can I control right now in my actions?"',
        '3. Going forward: track one small improvement each day; treat setbacks as feedback, not as your identity.',
        '',
        '💭 Reflection: If you trusted Chapter ' + chapter + ', Verse ' + verse + ' in your next decision, what exact action would you take today?'
      ].join('\n');
    }
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

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const toggleFavorite = (message: Message) => {
    if (message.isFavorite) {
      setFavorites(prev => prev.filter(fav => fav.id !== message.id));
      setMessages(prev => prev.map(msg => 
        msg.id === message.id ? { ...msg, isFavorite: false } : msg
      ));
    } else {
      setFavorites(prev => [...prev, { ...message, isFavorite: true }]);
      setMessages(prev => prev.map(msg => 
        msg.id === message.id ? { ...msg, isFavorite: true } : msg
      ));
    }
  };

  const copyMessage = (content: string) => {
    navigator.clipboard.writeText(content);
  };

  const shareMessage = (content: string) => {
    if (navigator.share) {
      navigator.share({
        title: 'Krishna GPT Wisdom',
        text: content
      });
    }
  };

  const startNewChat = () => {
    setMessages([{
      id: '0',
      role: 'krishna',
      content: language === 'hindi' 
        ? 'नमस्ते 🙏\n\nमैं कृष्ण हूँ, आपका आध्यात्मिक मार्गदर्शक। अपनी चिंताएँ मुझसे साझा करें।'
        : 'नमस्ते 🙏\n\nI am Krishna, your spiritual guide. I am here to help you navigate life\'s challenges through the timeless wisdom of the Bhagavad Gita.',
      timestamp: new Date()
    }]);
    setShowSuggestions(true);
  };

  const themeClasses = theme === 'dark' 
    ? 'bg-gray-900 text-white border-gray-700'
    : 'bg-white text-gray-900 border-gray-200';

  const messageThemeClasses = theme === 'dark'
    ? 'bg-gray-800 text-white border-gray-600'
    : 'bg-gray-50 text-gray-900 border-gray-200';

  return (
    <div className="min-h-screen flex bg-[#0f172a]">
      {/* Background Grid Pattern */}
      <div className="fixed inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>
      
      {/* Sidebar */}
      <div className="relative z-10 w-64 bg-white/5 backdrop-blur-md border border-white/10 flex flex-col">
        {/* Sidebar Header */}
        <div className="p-4 border-b">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-xl font-bold flex items-center gap-2">
              🦚 Krishna GPT
            </h1>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition"
              aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
            >
              {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </button>
          </div>
          
          {/* Language Toggle */}
          <div className="flex gap-1 p-1 bg-gray-100 dark:bg-gray-700 rounded-lg">
            {(['english', 'hindi', 'hinglish'] as Language[]).map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang)}
                className={`flex-1 px-2 py-1 rounded text-sm font-medium transition ${
                  language === lang
                    ? 'bg-blue-500 text-white'
                    : 'hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
                aria-label={`Switch to ${lang}`}
              >
                {lang === 'english' ? 'EN' : lang === 'hindi' ? 'हि' : 'HI'}
              </button>
            ))}
          </div>
        </div>

        {/* New Chat Button */}
        <div className="p-4">
          <button
            onClick={startNewChat}
            className="w-full flex items-center gap-2 p-3 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition"
            aria-label="Start new chat"
          >
            <Plus className="w-4 h-4" />
            New Chat
          </button>
        </div>

        {/* Chat History */}
        <div className="flex-1 overflow-y-auto p-4">
          <h3 className="text-sm font-semibold mb-3 opacity-70">Recent Chats</h3>
          <div className="space-y-2">
            <div className="text-xs opacity-50">No recent chats</div>
          </div>
        </div>

        {/* Favorites */}
        <div className="p-4 border-t">
          <h3 className="text-sm font-semibold mb-3 opacity-70">Favorite Messages</h3>
          <div className="space-y-2">
            {favorites.slice(0, 3).map((fav) => (
              <button
                key={fav.id}
                className="w-full text-left p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition text-xs"
                aria-label={`View favorite: ${fav.content.substring(0, 30)}...`}
              >
                💜 {fav.content.substring(0, 50)}...
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="relative z-10 flex-1 flex flex-col">
        {/* Top Bar */}
        <div className="bg-white/5 backdrop-blur-md border border-white/10 p-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-white">Spiritual Guidance</h2>
              <p className="text-sm text-gray-400">Powered by Bhagavad Gita</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 bg-green-500/20 text-green-300 border border-green-500/30 rounded-full text-xs font-medium">
                🕉️ Gita-based
              </span>
            </div>
          </div>
        </div>

        {/* Messages Container */}
        <div className="flex-1 overflow-y-auto p-4">
          <div className="max-w-4xl mx-auto space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {message.role === 'krishna' && (
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white flex items-center justify-center flex-shrink-0 mr-3 shadow-lg">
                    🦚
                  </div>
                )}

                <div
                  className={`max-w-2xl p-4 rounded-2xl ${
                    message.role === 'user'
                      ? 'bg-blue-600/20 border border-blue-500/30 text-white rounded-br-none shadow-lg'
                      : 'bg-gray-800 border border-gray-700 text-white rounded-bl-none shadow-lg'
                  }`}
                >
                  {message.emotion && message.role === 'krishna' && (
                    <div className={`mb-3 inline-block px-3 py-1 rounded-full text-sm font-semibold bg-gradient-to-r ${getEmotionColor(message.emotion)} text-white`}>
                      {getEmotionEmoji(message.emotion)} {message.emotion.replace('_', ' ')}
                    </div>
                  )}
                  
                  <div className="whitespace-pre-wrap text-sm md:text-base leading-relaxed">
                    {message.content}
                  </div>
                  
                  <div className="flex items-center justify-between mt-3 pt-2 border-t border-gray-700">
                    <span className="text-xs text-gray-400">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                    
                    {message.role === 'krishna' && (
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => toggleFavorite(message)}
                          className="p-1 rounded hover:bg-gray-700 transition"
                          aria-label={message.isFavorite ? 'Remove from favorites' : 'Add to favorites'}
                        >
                          <Heart className={`w-3 h-3 ${message.isFavorite ? 'fill-red-500 text-red-500' : ''}`} />
                        </button>
                        <button
                          onClick={() => copyMessage(message.content)}
                          className="p-1 rounded hover:bg-gray-700 transition"
                          aria-label="Copy message"
                        >
                          <Copy className="w-3 h-3" />
                        </button>
                        <button
                          onClick={() => shareMessage(message.content)}
                          className="p-1 rounded hover:bg-gray-700 transition"
                          aria-label="Share message"
                        >
                          <Share2 className="w-3 h-3" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                {message.role === 'user' && (
                  <div className="w-8 h-8 rounded-full bg-gray-400 text-white flex items-center justify-center flex-shrink-0 ml-3 shadow-lg">
                    👤
                  </div>
                )}
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white flex items-center justify-center flex-shrink-0 mr-3 shadow-lg">
                  🦚
                </div>
                <div className={`${messageThemeClasses} p-4 rounded-2xl rounded-bl-none shadow-lg border`}>
                  <div className="flex gap-2 items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce animation-delay-100"></div>
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce animation-delay-200"></div>
                    <span className="ml-2 text-sm opacity-70">Krishna is thinking...</span>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Suggestions */}
        {showSuggestions && messages.length === 1 && (
          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-4">
            <div className="max-w-4xl mx-auto">
              <p className="text-center font-semibold mb-4 text-white">✨ {language === 'hindi' ? 'पूछें:' : 'Ask Krishna:'}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {suggestionPrompts.map((prompt, idx) => (
                  <button
                    key={idx}
                    onClick={() => setInputValue(prompt)}
                    className="p-3 text-left rounded-xl border border-gray-700 bg-gray-800/50 hover:bg-gray-700 transition text-sm text-gray-300"
                    aria-label={`Use prompt: ${prompt}`}
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Input Area */}
        <div className="bg-white/5 backdrop-blur-md border border-white/10 p-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-end gap-3">
              <button
                className={`p-3 rounded-lg transition ${
                  isRecording 
                    ? 'bg-red-500 text-white' 
                    : 'hover:bg-gray-700'
                }`}
                onClick={() => setIsRecording(!isRecording)}
                aria-label={isRecording ? 'Stop recording' : 'Start voice recording'}
              >
                <Mic className="w-5 h-5" />
              </button>
              
              <div className="flex-1">
                <textarea
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder={language === 'hindi' ? 'कृष्ण से कुछ भी पूछें...' : 'Ask Krishna anything about life...'}
                  className="w-full p-3 rounded-lg border border-gray-700 bg-gray-800 text-white placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  rows={3}
                  disabled={loading}
                />
              </div>
              
              <button
                onClick={handleSendMessage}
                disabled={loading || !inputValue.trim()}
                className={`p-3 rounded-lg transition flex items-center gap-2 ${
                  loading || !inputValue.trim()
                    ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                <Send className="w-5 h-5" />
                {loading ? '...' : (language === 'hindi' ? 'भेजें' : 'Send')}
              </button>
            </div>
            
            <p className="text-xs text-gray-400 mt-2 text-center">
              💡 {language === 'hindi' ? 'टिप: बेहतर मार्गदर्शन के लिए अपनी समस्या के बारे में विशिष्ट हों' : 'Tip: Be specific about what\'s troubling you for better guidance'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KrishnaGPT;
