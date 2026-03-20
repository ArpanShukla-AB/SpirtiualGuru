import { useState } from 'react';
import DailyShloka from './components/DailyShloka';
import MoodCard from './components/MoodCard';
import ShlokasByCategory from './components/ShlokasByCategory';
import ShlokaSearch from './components/ShlokaSearch';
import AllShlokas from './components/AllShlokas';
import VideoPage from './components/VideoPage';
import DailyChallenge from './components/DailyChallenge';
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-50 to-amber-50">
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
            <section className="bg-gradient-to-b from-orange-700 via-orange-600 to-orange-500 text-white py-24 px-4 relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl"></div>
              </div>
              <div className="max-w-6xl mx-auto text-center relative z-10">
                <div className="mb-6 inline-block">
                  <span className="bg-orange-400 text-white px-6 py-2 rounded-full text-sm font-bold">✨ 2000+ Years of Wisdom</span>
                </div>
                <h1 className="text-6xl md:text-7xl font-black mb-6 leading-tight">
                  Bhagavad Gita for Modern Life
                </h1>
                <p className="text-xl md:text-2xl text-orange-100 mb-4 max-w-3xl mx-auto">
                  Transform your stress into clarity. Your confusion into direction. Your fear into courage.
                </p>
                <p className="text-lg text-orange-100 mb-8 max-w-2xl mx-auto">
                  Access 700+ authentic shlokas with AI-powered guidance to solve real problems in your life.
                </p>
                <div className="flex gap-4 justify-center flex-wrap mb-8">
                  <button
                    onClick={() => setCurrentView('krishna')}
                    className="px-10 py-4 bg-white text-orange-700 font-bold rounded-xl hover:shadow-2xl transition text-lg transform hover:scale-105"
                  >
                    🧠 Try Krishna Mode
                  </button>
                  <button
                    onClick={() => setCurrentView('allshlokas')}
                    className="px-10 py-4 bg-orange-400 text-white font-bold rounded-xl hover:shadow-2xl transition text-lg transform hover:scale-105"
                  >
                    📖 Explore 700 Shlokas
                  </button>
                </div>
              </div>
            </section>

            {/* Main Container */}
            <div className="max-w-6xl mx-auto px-4 md:px-8">
              {/* Daily Shloka Section */}
              <section className="py-8">
                <h2 className="text-4xl font-black text-orange-900 mb-8 text-center">📅 Today's Wisdom</h2>
                <DailyShloka />
              </section>

              {/* Daily Challenge Section */}
              <section className="py-8">
                <h2 className="text-4xl font-black text-orange-900 mb-8 text-center">🎯 Daily Challenge</h2>
                <DailyChallenge />
              </section>

              {/* How It Works Section */}
              <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl px-8 mb-16">
                <h2 className="text-4xl font-black text-center text-gray-900 mb-12">🎯 How It Works</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  {[
                    { step: '1', title: 'Share Your Feeling', icon: '💭', desc: 'Tell us what\'s troubling you' },
                    { step: '2', title: 'AI Detects Emotion', icon: '🤖', desc: 'System analyzes your emotional state' },
                    { step: '3', title: 'Get Gita Wisdom', icon: '📖', desc: 'Receive relevant shloka & principle' },
                    { step: '4', title: 'Take Action', icon: '🚀', desc: 'Get practical steps for today' }
                  ].map((item, i) => (
                    <div key={i} className="text-center">
                      <div className="text-5xl mb-4">{item.icon}</div>
                      <div className="text-3xl font-bold text-blue-600 mb-2">{item.step}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-700">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Main Features Grid */}
              <section className="mb-16">
                <h2 className="text-4xl font-black text-orange-900 mb-8 text-center">✨ Explore Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div
                    onClick={() => setCurrentView('krishna')}
                    className="bg-gradient-to-br from-orange-600 to-orange-700 text-white p-8 rounded-2xl hover:shadow-2xl transition transform hover:scale-105 cursor-pointer border-4 border-orange-300 shadow-lg"
                  >
                    <div className="text-6xl mb-4">🧠</div>
                    <h3 className="text-2xl font-bold mb-2">🪔 Krishna Mode</h3>
                    <p className="text-orange-100 font-semibold mb-4">AI-powered wisdom guidance with emotion detection</p>
                    <span className="text-sm bg-orange-500 px-3 py-1 rounded-full">Featured</span>
                  </div>

                  <div
                    onClick={() => setCurrentView('mood')}
                    className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-8 rounded-2xl hover:shadow-2xl transition transform hover:scale-105 cursor-pointer"
                  >
                    <div className="text-6xl mb-4">😊</div>
                    <h3 className="text-2xl font-bold mb-2">Mood-Based Guidance</h3>
                    <p className="text-blue-100">Select your emotion and get personalized wisdom instantly</p>
                  </div>

                  <div
                    onClick={() => setCurrentView('search')}
                    className="bg-gradient-to-br from-green-500 to-green-600 text-white p-8 rounded-2xl hover:shadow-2xl transition transform hover:scale-105 cursor-pointer"
                  >
                    <div className="text-6xl mb-4">🔍</div>
                    <h3 className="text-2xl font-bold mb-2">Search Shlokas</h3>
                    <p className="text-green-100">Find wisdom by keyword across all 700 teachings</p>
                  </div>

                  <div
                    onClick={() => setCurrentView('category')}
                    className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-8 rounded-2xl hover:shadow-2xl transition transform hover:scale-105 cursor-pointer"
                  >
                    <div className="text-6xl mb-4">📚</div>
                    <h3 className="text-2xl font-bold mb-2">Browse Categories</h3>
                    <p className="text-purple-100">Explore 13 life topics and find relevant teachings</p>
                  </div>

                  <div
                    onClick={() => setCurrentView('allshlokas')}
                    className="bg-gradient-to-br from-pink-500 to-pink-600 text-white p-8 rounded-2xl hover:shadow-2xl transition transform hover:scale-105 cursor-pointer"
                  >
                    <div className="text-6xl mb-4">📖</div>
                    <h3 className="text-2xl font-bold mb-2">Complete Gita (700)</h3>
                    <p className="text-pink-100">Access all shlokas organized by chapter</p>
                  </div>

                  <div
                    onClick={() => setCurrentView('video')}
                    className="bg-gradient-to-br from-red-500 to-red-600 text-white p-8 rounded-2xl hover:shadow-2xl transition transform hover:scale-105 cursor-pointer"
                  >
                    <div className="text-6xl mb-4">🎥</div>
                    <h3 className="text-2xl font-bold mb-2">Video Teachings</h3>
                    <p className="text-red-100">Learn through visual and multimedia content</p>
                  </div>
                </div>
              </section>

              {/* Stats Section */}
              <section className="mb-16">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl shadow-xl p-8 border-2 border-orange-200">
                  {[
                    { icon: '📖', count: '700', label: 'Complete Shlokas', desc: 'All chapters 1-18' },
                    { icon: '🌍', count: '4', label: 'Languages', desc: 'Sanskrit, English, Hindi, Kannada' },
                    { icon: '🎯', count: '13', label: 'Life Categories', desc: 'From stress to purpose' },
                    { icon: '⚡', count: '∞', label: 'Wisdom', desc: 'Timeless teachings' }
                  ].map((stat, i) => (
                    <div key={i} className="text-center">
                      <div className="text-5xl mb-2">{stat.icon}</div>
                      <div className="text-4xl font-black text-orange-700 mb-1">{stat.count}</div>
                      <div className="text-lg font-bold text-orange-900">{stat.label}</div>
                      <p className="text-sm text-orange-700 mt-1">{stat.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Why Choose Us Section */}
              <section className="mb-16 py-12">
                <h2 className="text-4xl font-black text-orange-900 mb-12 text-center">💡 Why Choose Spiritual Gita?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                    { icon: '🤝', title: 'AI-Powered Guidance', desc: 'Krishna Mode detects your emotions and provides structured wisdom specific to YOUR problem' },
                    { icon: '📚', title: '700+ Authentic Shlokas', desc: 'Complete Bhagavad Gita with accurate translations in 4 languages' },
                    { icon: '💡', title: 'Actionable Steps', desc: 'Every response includes 2-3 concrete actions you can take TODAY' },
                    { icon: '🧘', title: 'Meditation & Focus', desc: 'Built-in 2-minute focus mode to practice mindfulness' },
                    { icon: '🌍', title: 'Multilingual', desc: 'Access wisdom in Sanskrit, English, Hindi, and Kannada' },
                    { icon: '⭐', title: '13 Life Categories', desc: 'From stress and failure to motivation and self-doubt' }
                  ].map((feature, i) => (
                    <div key={i} className="flex gap-6 p-6 bg-white rounded-xl border-2 border-orange-100 hover:border-orange-400 transition hover:shadow-lg">
                      <div className="text-5xl flex-shrink-0">{feature.icon}</div>
                      <div>
                        <h3 className="text-xl font-bold text-orange-900 mb-2">{feature.title}</h3>
                        <p className="text-gray-700">{feature.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Call-to-Action Section */}
              <section className="mb-16 bg-gradient-to-r from-orange-600 to-orange-700 text-white rounded-2xl p-12 text-center">
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

              {/* Trust Section */}
              <section className="mb-16 py-12">
                <h2 className="text-3xl font-black text-orange-900 mb-8 text-center">🙏 Trusted By Seekers Worldwide</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    { quote: 'Krishna Mode helped me find peace when I failed my exam. Life-changing!', author: 'Arjun, Student', emoji: '😊' },
                    { quote: 'The structured guidance format makes Gita teachings so practical and actionable.', author: 'Priya, Professional', emoji: '💼' },
                    { quote: 'Having 700 shlokas at my fingertips with AI guidance is like having a personal mentor.', author: 'Raj, Entrepreneur', emoji: '🚀' }
                  ].map((testimonial, i) => (
                    <div key={i} className="bg-gradient-to-br from-orange-50 to-amber-50 p-8 rounded-xl border-2 border-orange-200">
                      <div className="text-4xl mb-4">{testimonial.emoji}</div>
                      <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
                      <p className="font-bold text-orange-900">— {testimonial.author}</p>
                    </div>
                  ))}
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
