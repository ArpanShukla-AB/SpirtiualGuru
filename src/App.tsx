import { useState } from 'react';
import DailyShloka from './components/DailyShloka';
import MoodCard from './components/MoodCard';
import ShlokasByCategory from './components/ShlokasByCategory';
import ShlokaSearch from './components/ShlokaSearch';
import AllShlokas from './components/AllShlokas';
import VideoPage from './components/VideoPage';
import FeaturesShowcase from './components/FeaturesShowcase';
import KrishnaGPT from './components/KrishnaGPT';
import ChaptersGrid from './components/ChaptersGrid';
import VideoSection from './components/VideoSection';

type View = 'dashboard' | 'mood' | 'category' | 'search' | 'allshlokas' | 'video' | 'features' | 'krishna';

/**
 * Main App Component - Improved UI with all features integrated
 */
function App() {
  const [currentView, setCurrentView] = useState<View>('dashboard');
  const [userName] = useState('Arpan');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleChapterSelect = (chapterNumber: number) => {
    setCurrentView('allshlokas');
    // Store the selected chapter in sessionStorage for AllShlokas component to use
    sessionStorage.setItem('selectedChapter', chapterNumber.toString());
  };

  const navItems = [
    { id: 'dashboard', label: 'Home', emoji: '🏠' },
    { id: 'krishna', label: 'Krishna Mode', emoji: '🧠' },
    { id: 'mood', label: 'Mood', emoji: '😊' },
    { id: 'category', label: 'Topics', emoji: '📚' },
    { id: 'allshlokas', label: 'All Shlokas', emoji: '📖' },
    { id: 'search', label: 'Search', emoji: '🔍' },
    { id: 'video', label: 'Videos', emoji: '🎥' },
    { id: 'features', label: 'Features', emoji: '✨' },
  ];

  return (
    <div className="min-h-screen bg-[#0f172a]">
      {/* Modern Navigation Header */}
      <header className="bg-[#0f172a]/80 backdrop-blur-md border-b border-white/10 text-white shadow-2xl sticky top-0 z-50">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-3">
          {/* Top Row */}
          <div className="flex justify-between items-center mb-4">
            {/* Logo */}
            <div className="flex items-center gap-3 group cursor-pointer" onClick={() => setCurrentView('dashboard')}>
              <div className="text-4xl drop-shadow-lg group-hover:scale-110 transition">🪔</div>
              <div>
                <h1 className="text-2xl font-black">Spiritual Gita</h1>
                <p className="text-gray-400 text-xs">Ancient Wisdom for Modern Minds</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex gap-2">
              {navItems.map((nav) => (
                <button
                  key={nav.id}
                  onClick={() => {
                    setCurrentView(nav.id as View);
                    setMobileMenuOpen(false);
                  }}
                  className={`px-4 py-2 rounded-lg transition transform hover:scale-105 font-semibold text-sm ${
                    currentView === nav.id
                      ? 'bg-white/10 border border-white/20 text-white shadow-lg'
                      : 'bg-white/5 border border-white/10 hover:bg-white/10 text-white'
                  }`}
                >
                  {nav.emoji} {nav.label}
                </button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-2xl"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              ☰
            </button>

            {/* Greeting */}
            <div className="hidden md:block text-sm font-semibold bg-white/5 border border-white/10 px-3 py-2 rounded-lg">
              Namaste, {userName} 🙏
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="lg:hidden grid grid-cols-4 gap-2">
              {navItems.map((nav) => (
                <button
                  key={nav.id}
                  onClick={() => {
                    setCurrentView(nav.id as View);
                    setMobileMenuOpen(false);
                  }}
                  className={`p-2 rounded-lg transition text-center text-sm ${
                    currentView === nav.id
                      ? 'bg-white/10 border border-white/20 text-white'
                      : 'bg-white/5 border border-white/10 hover:bg-white/10 text-white'
                  }`}
                >
                  <div className="text-lg">{nav.emoji}</div>
                  <div className="text-xs">{nav.label}</div>
                </button>
              ))}
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="min-h-screen bg-[#0f172a]">
        {/* Dashboard View */}
        {currentView === 'dashboard' && (
          <div>
            {/* Background Grid Pattern */}
            <div className="fixed inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>
            
            {/* Modern Hero Section */}
            <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
              {/* Floating Elements */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl opacity-10"></div>
                <div className="absolute top-30 right-20 w-96 h-96 bg-indigo-500 rounded-full blur-3xl opacity-5"></div>
                <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-purple-500 rounded-full blur-3xl opacity-8"></div>
              </div>
              
              {/* Hero Content */}
              <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
                <div className="mb-8">
                  <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-sm font-medium rounded-full shadow-lg">🕉️ Ancient Wisdom</span>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                    Bhagavad Gita
                  </span>
                  <span className="block text-2xl md:text-3xl font-light text-gray-400 mt-2">Spiritual Guidance for Modern Life</span>
                </h1>
                <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto font-light leading-relaxed">
                  Discover timeless wisdom through AI-powered guidance. Transform stress into clarity, confusion into purpose, and fear into courage.
                </p>
                
                {/* ChatGPT-style Input */}
                <div className="max-w-2xl mx-auto mb-8">
                  <div className="bg-gray-800 border border-gray-700 rounded-full p-2 flex items-center gap-2 shadow-2xl">
                    <input
                      type="text"
                      placeholder="Ask Krishna about life, stress, or purpose..."
                      className="flex-1 bg-transparent text-white placeholder-gray-400 px-4 py-2 outline-none"
                    />
                    <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                      🚀 Start Chat
                    </button>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <button
                    onClick={() => setCurrentView('krishna')}
                    className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-lg"
                  >
                    <span className="flex items-center gap-2">
                      <span>🧠</span>
                      <span>Start Spiritual Journey</span>
                    </span>
                  </button>
                  <button
                    onClick={() => setCurrentView('allshlokas')}
                    className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-medium rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 text-lg"
                  >
                    <span className="flex items-center gap-2">
                      <span>📖</span>
                      <span>Explore All Shlokas</span>
                    </span>
                  </button>
                </div>
              </div>
            </section>

            {/* Main Content Area */}
            <div className="max-w-6xl mx-auto px-6 py-12 relative z-10">
              {/* Daily Wisdom */}
              <section className="mb-16">
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl p-6 md:p-10">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold mb-4">
                      <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                        Today's Wisdom
                      </span>
                    </h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
                  </div>
                  <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                    <DailyShloka />
                  </div>
                </div>
              </section>

              {/* All Chapters */}
              <section className="mb-16">
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl p-6 md:p-10">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold mb-4">
                      <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                        All 18 Chapters
                      </span>
                    </h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
                  </div>
                  <ChaptersGrid onChapterSelect={handleChapterSelect} />
                </div>
              </section>

              {/* Spiritual Journey */}
              <section className="mb-16">
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl p-6 md:p-10">
                  <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">
                      <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                        Begin Your Spiritual Journey
                      </span>
                    </h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                      {
                        icon: '🧠',
                        title: 'Krishna Mode',
                        description: 'AI-powered spiritual guidance with emotion detection',
                        color: 'from-blue-500 to-indigo-600',
                        view: 'krishna'
                      },
                      {
                        icon: '😊',
                        title: 'Mood Guidance',
                        description: 'Find wisdom based on your emotional state',
                        color: 'from-purple-500 to-pink-500',
                        view: 'mood'
                      },
                      {
                        icon: '🔍',
                        title: 'Search Shlokas',
                        description: 'Explore 700+ teachings by keywords',
                        color: 'from-emerald-500 to-teal-500',
                        view: 'search'
                      },
                      {
                        icon: '📚',
                        title: 'Life Topics',
                        description: 'Browse wisdom organized by categories',
                        color: 'from-orange-500 to-red-500',
                        view: 'category'
                      },
                      {
                        icon: '📖',
                        title: 'All Shlokas',
                        description: 'Complete Bhagavad Gita with 700 verses',
                        color: 'from-cyan-500 to-blue-500',
                        view: 'allshlokas'
                      },
                      {
                        icon: '🎥',
                        title: 'Video Teachings',
                        description: 'Learn through visual spiritual content',
                        color: 'from-indigo-500 to-purple-500',
                        view: 'video'
                      }
                    ].map((feature, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentView(feature.view as View)}
                        className="group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 text-left transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-gray-700 hover:border-gray-600 shadow-lg"
                      >
                        <div className="flex items-start gap-4">
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-xl text-white shadow-lg`}>
                            {feature.icon}
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-medium text-white mb-2">{feature.title}</h3>
                            <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                          </div>
                        </div>
                        <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`}></div>
                      </button>
                    ))}
                  </div>
                </div>
              </section>
              {/* Video Wisdom */}
              <section className="mb-16">
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl p-6 md:p-10">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold mb-4">
                      <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                        Wisdom Through Video
                      </span>
                    </h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
                  </div>
                  <VideoSection />
                </div>
              </section>
            </div>
          </div>
        )}

        {/* Krishna Mode View */}
        {currentView === 'krishna' && <KrishnaGPT />}

        {/* Mood Guide View */}
        {currentView === 'mood' && <MoodCard />}

        {/* Categories View */}
        {currentView === 'category' && <ShlokasByCategory />}

        {/* Search View */}
        {currentView === 'search' && <ShlokaSearch />}

        {/* All Shlokas View */}
        {currentView === 'allshlokas' && <AllShlokas />}

        {/* Video View */}
        {currentView === 'video' && <VideoPage />}

        {/* Features View */}
        {currentView === 'features' && <FeaturesShowcase />}
      </main>

      {/* Premium Footer */}
      <footer className="relative bg-[#0f172a] text-white py-12 mt-12 border-t border-white/10">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* About */}
            <div>
              <h3 className="text-xl font-bold mb-4">🪔 Spiritual Gita</h3>
              <p className="text-gray-400 text-sm">
                Ancient wisdom for modern minds. Transform your life with timeless teachings.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><button onClick={() => setCurrentView('mood')} className="hover:text-white transition">Mood Guide</button></li>
                <li><button onClick={() => setCurrentView('allshlokas')} className="hover:text-white transition">All Shlokas</button></li>
                <li><button onClick={() => setCurrentView('search')} className="hover:text-white transition">Search</button></li>
                <li><button onClick={() => setCurrentView('features')} className="hover:text-white transition">Features</button></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="font-bold mb-4">Daily Shloka</h4>
              <p className="text-sm text-gray-400 mb-3">Get a shloka delivered daily</p>
              <button className="w-full bg-white/10 border border-white/20 text-white font-bold py-2 rounded-lg hover:bg-white/20 transition">
                Subscribe
              </button>
            </div>
          </div>

          <hr className="border-white/10 mb-6" />

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>© 2026 Spiritual Gita. All wisdom is eternal. 🙏</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition">Privacy</a>
              <a href="#" className="hover:text-white transition">Terms</a>
              <a href="#" className="hover:text-white transition">Disclaimer</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
