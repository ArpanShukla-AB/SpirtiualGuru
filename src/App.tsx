import { useState } from 'react';
import DailyShloka from './components/DailyShloka';
import MoodCard from './components/MoodCard';
import ShlokasByCategory from './components/ShlokasByCategory';
import ShlokaSearch from './components/ShlokaSearch';
import AllShlokas from './components/AllShlokas';
import VideoPage from './components/VideoPage';
import FeaturesShowcase from './components/FeaturesShowcase';
import KrishnaMode from './components/KrishnaMode';

type View = 'dashboard' | 'mood' | 'category' | 'search' | 'allshlokas' | 'video' | 'features' | 'krishna';

/**
 * Main App Component - Improved UI with all features integrated
 */
function App() {
  const [currentView, setCurrentView] = useState<View>('dashboard');
  const [userName] = useState('Arpan');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    <div className="min-h-screen bg-orange-50">
      {/* Modern Navigation Header */}
      <header className="bg-gradient-to-r from-orange-700 via-orange-600 to-orange-500 text-white shadow-2xl sticky top-0 z-50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 py-3">
          {/* Top Row */}
          <div className="flex justify-between items-center mb-4">
            {/* Logo */}
            <div className="flex items-center gap-3 group cursor-pointer" onClick={() => setCurrentView('dashboard')}>
              <div className="text-4xl drop-shadow-lg group-hover:scale-110 transition">🪔</div>
              <div>
                <h1 className="text-2xl font-black">Spiritual Gita</h1>
                <p className="text-orange-100 text-xs">Ancient Wisdom for Modern Minds</p>
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
                      ? 'bg-white text-orange-700 shadow-lg'
                      : 'bg-orange-600 hover:bg-orange-500 text-white'
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
            <div className="hidden md:block text-sm font-semibold bg-orange-600 px-3 py-2 rounded-lg">
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
                      ? 'bg-white text-orange-700'
                      : 'bg-orange-600 hover:bg-orange-500 text-white'
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
      <main className="min-h-[calc(100vh-200px)]">
        {/* Dashboard View */}
        {currentView === 'dashboard' && (
          <div>
            {/* Epic Hero Section */}
            <section className="bg-gradient-to-b from-orange-700 via-orange-600 to-orange-500 text-white py-12 md:py-16 px-4 relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl"></div>
              </div>
              <div className="max-w-6xl mx-auto text-center relative z-10">
                <div className="mb-4 inline-block">
                  <span className="bg-orange-400 text-white px-5 py-1.5 rounded-full text-xs md:text-sm font-black">✨ 2000+ Years of Wisdom</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 md:mb-6 leading-tight">
                  Bhagavad Gita for Modern Life
                </h1>
                <p className="text-base md:text-lg lg:text-xl text-orange-100 mb-2 md:mb-3 max-w-3xl mx-auto font-bold">
                  Transform your stress into clarity. Your confusion into direction. Your fear into courage.
                </p>
                <p className="text-sm md:text-base text-orange-100 mb-6 md:mb-8 max-w-2xl mx-auto font-semibold">
                  Access 700+ authentic shlokas with AI-powered guidance to solve real problems in your life.
                </p>
                <div className="flex gap-2 md:gap-4 justify-center flex-wrap mb-6 md:mb-8">
                  <button
                    onClick={() => setCurrentView('krishna')}
                    className="px-6 md:px-10 py-2 md:py-3 bg-white text-orange-700 font-black rounded-lg md:rounded-xl hover:shadow-2xl transition text-sm md:text-base transform hover:scale-105"
                  >
                    🧠 Try Krishna Mode
                  </button>
                  <button
                    onClick={() => setCurrentView('allshlokas')}
                    className="px-6 md:px-10 py-2 md:py-3 bg-orange-400 text-white font-black rounded-lg md:rounded-xl hover:shadow-2xl transition text-sm md:text-base transform hover:scale-105"
                  >
                    📖 Explore 700 Shlokas
                  </button>
                </div>
              </div>
            </section>

            {/* Main Container */}
            <div className="max-w-6xl mx-auto px-4 md:px-8">
              {/* Daily Shloka Section */}
              <section className="mt-4 md:mt-6 mb-10 md:mb-12 bg-gradient-to-r from-orange-600 to-orange-700 text-white rounded-xl md:rounded-2xl pt-8 md:pt-12 pb-8 md:pb-10 px-4 md:px-8 lg:px-12 text-center">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-black mb-4 md:mb-6 lg:mb-8">📅 Today's Wisdom</h2>
                <DailyShloka />
              </section>

              {/* How It Works Section */}
              <section className="mb-10 md:mb-12 bg-gradient-to-r from-orange-600 to-orange-700 text-white rounded-xl md:rounded-2xl p-6 md:p-8 lg:p-12 text-center">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-black mb-6 md:mb-8 lg:mb-10">🎯 How It Works</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6">
                  {[
                    { step: '1', title: 'Share Your Feeling', icon: '💭', desc: 'Tell us what\'s troubling you' },
                    { step: '2', title: 'AI Detects Emotion', icon: '🤖', desc: 'System analyzes your emotional state' },
                    { step: '3', title: 'Get Gita Wisdom', icon: '📖', desc: 'Receive relevant shloka & principle' },
                    { step: '4', title: 'Take Action', icon: '🚀', desc: 'Get practical steps for today' }
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="text-center bg-white/10 rounded-lg md:rounded-xl border border-white/20 p-4 md:p-6 hover:bg-white/15 transition shadow-sm h-full flex flex-col justify-between"
                    >
                      <div>
                        <div className="text-3xl md:text-4xl lg:text-5xl mb-2 md:mb-3">{item.icon}</div>
                        <div className="text-2xl md:text-3xl font-black mb-1 md:mb-2">{item.step}</div>
                        <h3 className="text-sm md:text-base lg:text-lg font-black mb-1 md:mb-2">{item.title}</h3>
                      </div>
                      <p className="text-xs md:text-sm text-white/90 font-semibold">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Main Features Grid */}
              <section className="mb-10 md:mb-12 bg-gradient-to-r from-orange-600 to-orange-700 text-white rounded-xl md:rounded-2xl p-6 md:p-8 lg:p-12 text-center">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-black mb-4 md:mb-6 lg:mb-8">✨ Explore Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6">
                  <div
                    onClick={() => setCurrentView('krishna')}
                    className="bg-white/10 p-8 rounded-xl border border-white/20 hover:bg-white/15 transition transform hover:scale-[1.02] cursor-pointer shadow-sm h-full flex flex-col justify-between"
                  >
                    <div className="text-6xl mb-4">🧠</div>
                    <h3 className="text-2xl font-bold mb-2">🪔 Krishna Mode</h3>
                    <p className="font-semibold text-white/90 mb-4">AI-powered wisdom guidance with emotion detection</p>
                    <span className="text-sm bg-white/15 px-3 py-1 rounded-full text-white/90">Featured</span>
                  </div>

                  <div
                    onClick={() => setCurrentView('mood')}
                    className="bg-white/10 p-8 rounded-xl border border-white/20 hover:bg-white/15 transition transform hover:scale-[1.02] cursor-pointer shadow-sm h-full flex flex-col justify-between"
                  >
                    <div className="text-6xl mb-4">😊</div>
                    <h3 className="text-2xl font-bold mb-2">Mood-Based Guidance</h3>
                    <p className="text-white/90">Select your emotion and get personalized wisdom instantly</p>
                  </div>

                  <div
                    onClick={() => setCurrentView('search')}
                    className="bg-white/10 p-8 rounded-xl border border-white/20 hover:bg-white/15 transition transform hover:scale-[1.02] cursor-pointer shadow-sm h-full flex flex-col justify-between"
                  >
                    <div className="text-6xl mb-4">🔍</div>
                    <h3 className="text-2xl font-bold mb-2">Search Shlokas</h3>
                    <p className="text-white/90">Find wisdom by keyword across all 700 teachings</p>
                  </div>

                  <div
                    onClick={() => setCurrentView('category')}
                    className="bg-white/10 p-8 rounded-xl border border-white/20 hover:bg-white/15 transition transform hover:scale-[1.02] cursor-pointer shadow-sm h-full flex flex-col justify-between"
                  >
                    <div className="text-6xl mb-4">📚</div>
                    <h3 className="text-2xl font-bold mb-2">Browse Categories</h3>
                    <p className="text-white/90">Explore 13 life topics and find relevant teachings</p>
                  </div>

                  <div
                    onClick={() => setCurrentView('allshlokas')}
                    className="bg-white/10 p-8 rounded-xl border border-white/20 hover:bg-white/15 transition transform hover:scale-[1.02] cursor-pointer shadow-sm h-full flex flex-col justify-between"
                  >
                    <div className="text-6xl mb-4">📖</div>
                    <h3 className="text-2xl font-bold mb-2">Complete Gita (700)</h3>
                    <p className="text-white/90">Access all shlokas organized by chapter</p>
                  </div>

                  <div
                    onClick={() => setCurrentView('video')}
                    className="bg-white/10 p-8 rounded-xl border border-white/20 hover:bg-white/15 transition transform hover:scale-[1.02] cursor-pointer shadow-sm h-full flex flex-col justify-between"
                  >
                    <div className="text-6xl mb-4">🎥</div>
                    <h3 className="text-2xl font-bold mb-2">Video Teachings</h3>
                    <p className="text-white/90">Learn through visual and multimedia content</p>
                  </div>
                </div>
              </section>

              {/* Stats Section */}
              <section className="mb-16 bg-gradient-to-r from-orange-600 to-orange-700 text-white rounded-2xl p-12 text-center">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { icon: '📖', count: '700', label: 'Complete Shlokas', desc: 'All chapters 1-18' },
                    { icon: '🌍', count: '4', label: 'Languages', desc: 'Sanskrit, English, Hindi, Kannada' },
                    { icon: '🎯', count: '13', label: 'Life Categories', desc: 'From stress to purpose' },
                    { icon: '⚡', count: '∞', label: 'Wisdom', desc: 'Timeless teachings' }
                  ].map((stat, i) => (
                    <div
                      key={i}
                      className="text-center bg-white/10 rounded-xl border border-white/20 p-6 shadow-sm h-full flex flex-col justify-between"
                    >
                      <div>
                        <div className="text-5xl mb-2">{stat.icon}</div>
                        <div className="text-4xl font-black mb-1">{stat.count}</div>
                        <div className="text-lg font-bold">{stat.label}</div>
                      </div>
                      <p className="text-sm text-white/90 mt-1">{stat.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Why Choose Us Section */}
              <section className="mb-16 bg-gradient-to-r from-orange-600 to-orange-700 text-white rounded-2xl p-12 text-center">
                <h2 className="text-4xl font-black mb-12">💡 Why Choose Spiritual Gita?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                  {[
                    { icon: '🤝', title: 'AI-Powered Guidance', desc: 'Krishna Mode detects your emotions and provides structured wisdom specific to YOUR problem' },
                    { icon: '📚', title: '700+ Authentic Shlokas', desc: 'Complete Bhagavad Gita with accurate translations in 4 languages' },
                    { icon: '💡', title: 'Actionable Steps', desc: 'Every response includes 2-3 concrete actions you can take TODAY' },
                    { icon: '🧘', title: 'Meditation & Focus', desc: 'Built-in 2-minute focus mode to practice mindfulness' },
                    { icon: '🌍', title: 'Multilingual', desc: 'Access wisdom in Sanskrit, English, Hindi, and Kannada' },
                    { icon: '⭐', title: '13 Life Categories', desc: 'From stress and failure to motivation and self-doubt' }
                  ].map((feature, i) => (
                    <div
                      key={i}
                      className="flex flex-col h-full bg-white/10 rounded-xl border border-white/20 p-6 hover:bg-white/15 transition"
                    >
                      <div className="flex items-start gap-6">
                        <div className="text-5xl flex-shrink-0">{feature.icon}</div>
                        <div className="text-left">
                          <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                          <p className="text-white/90">{feature.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Call-to-Action Section */}
              <section className="mb-12 bg-gradient-to-r from-orange-600 to-orange-700 text-white rounded-2xl p-12 text-center">
                <h2 className="text-4xl font-black mb-4">Ready to Find Your Clarity?</h2>
                <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
                  Start with Krishna Mode for AI-powered guidance, or explore shlokas by your current mood. Thousands of seekers have found peace through these timeless teachings.
                </p>
                <div className="flex gap-4 justify-center flex-wrap">
                  <button
                    onClick={() => setCurrentView('krishna')}
                    className="px-10 py-4 bg-white text-orange-700 font-bold rounded-xl hover:shadow-2xl transition text-lg"
                  >
                    🧠 Start Krishna Mode
                  </button>
                  <button
                    onClick={() => setCurrentView('mood')}
                    className="px-10 py-4 bg-orange-400 text-white font-bold rounded-xl hover:shadow-2xl transition text-lg"
                  >
                    😊 Choose by Mood
                  </button>
                </div>
              </section>
            </div>
          </div>
        )}

        {/* Krishna Mode View */}
        {currentView === 'krishna' && <KrishnaMode />}

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
      <footer className="bg-gradient-to-r from-orange-900 via-orange-800 to-orange-900 text-white py-12 mt-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* About */}
            <div>
              <h3 className="text-xl font-bold mb-4">🪔 Spiritual Gita</h3>
              <p className="text-orange-100 text-sm">
                Ancient wisdom for modern minds. Transform your life with timeless teachings.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-orange-100">
                <li><button onClick={() => setCurrentView('mood')} className="hover:text-white">Mood Guide</button></li>
                <li><button onClick={() => setCurrentView('allshlokas')} className="hover:text-white">All Shlokas</button></li>
                <li><button onClick={() => setCurrentView('search')} className="hover:text-white">Search</button></li>
                <li><button onClick={() => setCurrentView('features')} className="hover:text-white">Features</button></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-orange-100">
                <li><a href="#" className="hover:text-white">Documentation</a></li>
                <li><a href="#" className="hover:text-white">FAQ</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="font-bold mb-4">Daily Shloka</h4>
              <p className="text-sm text-orange-100 mb-3">Get a shloka delivered daily</p>
              <button className="w-full bg-white text-orange-900 font-bold py-2 rounded-lg hover:bg-orange-100 transition">
                Subscribe
              </button>
            </div>
          </div>

          <hr className="border-orange-700 mb-6" />

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-orange-200">
            <p>© 2026 Spiritual Gita. All wisdom is eternal. 🙏</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-white">Privacy</a>
              <a href="#" className="hover:text-white">Terms</a>
              <a href="#" className="hover:text-white">Disclaimer</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
