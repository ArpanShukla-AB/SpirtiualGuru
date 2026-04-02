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
import PricingPage from './components/PricingPage.jsx';
import UsageTracker from './components/UsageTracker.jsx';
import UpgradeModal from './components/UpgradeModal.jsx';

type View =
  | 'dashboard'
  | 'mood'
  | 'category'
  | 'search'
  | 'allshlokas'
  | 'video'
  | 'features'
  | 'krishna'
  | 'pricing';

const navItems: { id: View; label: string; icon: string }[] = [
  { id: 'dashboard', label: 'Home', icon: '🏠' },
  { id: 'krishna', label: 'Krishna AI', icon: '🧠' },
  { id: 'mood', label: 'Mood Guide', icon: '😊' },
  { id: 'category', label: 'Topics', icon: '📚' },
  { id: 'allshlokas', label: 'Shlokas', icon: '📖' },
  { id: 'search', label: 'Search', icon: '🔎' },
  { id: 'video', label: 'Videos', icon: '🎬' },
  { id: 'features', label: 'Features', icon: '✨' },
  { id: 'pricing', label: 'Pricing', icon: '💎' }
];

function App() {
  const [currentView, setCurrentView] = useState<View>('dashboard');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userPlan, setUserPlan] = useState<'free' | 'pro' | 'mentor'>('free');
  const [chatUsage] = useState(3);
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);

  const handleChapterSelect = (chapterNumber: number) => {
    sessionStorage.setItem('selectedChapter', chapterNumber.toString());
    setCurrentView('allshlokas');
  };

  const handleUpgrade = (plan: 'free' | 'pro' | 'mentor') => {
    setUserPlan(plan);
    setShowUpgradeModal(false);
  };

  const dashboardCards = [
    {
      title: 'Talk to Krishna AI',
      description: 'Get practical spiritual guidance for stress, purpose, and daily life.',
      cta: 'Start Chat',
      view: 'krishna' as View,
      accent: 'from-blue-500 to-indigo-500'
    },
    {
      title: 'Explore 700 Shlokas',
      description: 'Browse chapter-wise teachings with translation and modern explanation.',
      cta: 'Open Library',
      view: 'allshlokas' as View,
      accent: 'from-emerald-500 to-cyan-500'
    },
    {
      title: 'Mood-to-Wisdom',
      description: 'Transform overthinking and anxiety into calm action with Gita insights.',
      cta: 'Use Mood Guide',
      view: 'mood' as View,
      accent: 'from-purple-500 to-pink-500'
    }
  ];

  const renderCurrentView = () => {
    if (currentView === 'krishna') return <KrishnaGPT />;
    if (currentView === 'mood') return <MoodCard />;
    if (currentView === 'category') return <ShlokasByCategory />;
    if (currentView === 'search') return <ShlokaSearch />;
    if (currentView === 'allshlokas') return <AllShlokas />;
    if (currentView === 'video') return <VideoPage />;
    if (currentView === 'features') return <FeaturesShowcase />;
    if (currentView === 'pricing') return <PricingPage onUpgrade={handleUpgrade} />;

    return (
      <>
        <section className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/5 p-8 md:p-12 mb-8">
          <div className="absolute -top-28 -left-20 h-72 w-72 rounded-full bg-indigo-500/30 blur-3xl" />
          <div className="absolute -bottom-32 -right-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />

          <div className="relative z-10 max-w-4xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-indigo-300/30 bg-indigo-500/20 px-3 py-1 text-xs font-semibold tracking-wide text-indigo-100">
              <span>🕉️</span> Ancient Wisdom × Modern AI
            </p>
            <h1 className="mt-4 text-4xl md:text-6xl font-black leading-tight text-white">
              A modern Gita experience for <span className="text-cyan-300">today&apos;s builders</span>
            </h1>
            <p className="mt-5 max-w-2xl text-sm md:text-lg text-slate-300 leading-relaxed">
              Clean UI, fast navigation, and actionable guidance from Bhagavad Gita—designed like a modern product,
              not a textbook.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button
                onClick={() => setCurrentView('krishna')}
                className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100 transition"
              >
                Start Krishna AI
              </button>
              <button
                onClick={() => setCurrentView('search')}
                className="rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white hover:bg-white/20 transition"
              >
                Search Shlokas
              </button>
            </div>
          </div>
        </section>

        {userPlan === 'free' && (
          <section className="mb-8">
            <UsageTracker
              currentUsage={chatUsage}
              maxUsage={5}
              feature="Krishna AI Messages"
              onUpgrade={() => setShowUpgradeModal(true)}
            />
          </section>
        )}

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">
          {dashboardCards.map((card) => (
            <button
              key={card.title}
              onClick={() => setCurrentView(card.view)}
              className="group rounded-2xl border border-white/10 bg-slate-900/70 p-6 text-left hover:-translate-y-1 hover:border-white/30 transition"
            >
              <div className={`mb-4 h-1.5 w-16 rounded-full bg-gradient-to-r ${card.accent}`} />
              <h3 className="text-xl font-semibold text-white">{card.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{card.description}</p>
              <p className="mt-4 text-sm font-semibold text-cyan-300">{card.cta} →</p>
            </button>
          ))}
        </section>

        <section className="grid grid-cols-1 xl:grid-cols-5 gap-6 mb-8">
          <div className="xl:col-span-3 rounded-2xl border border-white/10 bg-slate-900/60 p-6">
            <h2 className="mb-4 text-2xl font-bold text-white">Today&apos;s Wisdom</h2>
            <DailyShloka />
          </div>
          <div className="xl:col-span-2 rounded-2xl border border-white/10 bg-slate-900/60 p-6">
            <h2 className="mb-4 text-2xl font-bold text-white">Video Wisdom</h2>
            <VideoSection />
          </div>
        </section>

        <section className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
          <ChaptersGrid onChapterSelect={handleChapterSelect} />
        </section>
      </>
    );
  };

  return (
    <div className="min-h-screen bg-[#050816] text-white">
      <div className="fixed inset-0 pointer-events-none bg-grid-pattern opacity-20" />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050816]/85 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4 py-4">
          <div className="flex items-center justify-between gap-3">
            <button onClick={() => setCurrentView('dashboard')} className="flex items-center gap-3">
              <span className="text-3xl">🪔</span>
              <div className="text-left">
                <p className="text-lg font-bold">Spiritual Gita</p>
                <p className="text-xs text-slate-400">Modern UI • Ancient insight</p>
              </div>
            </button>

            <div className="hidden lg:flex items-center gap-2 flex-wrap justify-end">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentView(item.id)}
                  className={`rounded-full px-3 py-2 text-xs font-semibold transition ${
                    currentView === item.id
                      ? 'bg-white text-slate-900'
                      : 'bg-white/10 text-slate-200 hover:bg-white/20'
                  }`}
                >
                  {item.icon} {item.label}
                </button>
              ))}
            </div>

            <button
              className="lg:hidden rounded-lg border border-white/20 bg-white/10 p-2"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label="Toggle navigation"
            >
              ☰
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="mt-3 grid grid-cols-2 gap-2 lg:hidden">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentView(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`rounded-xl px-3 py-2 text-left text-xs font-semibold transition ${
                    currentView === item.id
                      ? 'bg-white text-slate-900'
                      : 'bg-white/10 text-slate-200'
                  }`}
                >
                  {item.icon} {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </header>

      <main className="relative z-10 mx-auto max-w-7xl px-4 py-6">{renderCurrentView()}</main>

      <footer className="border-t border-white/10 px-4 py-8 text-center text-sm text-slate-400">
        © 2026 Spiritual Gita • Built for modern seekers and developers.
      </footer>

      <UpgradeModal isOpen={showUpgradeModal} onClose={() => setShowUpgradeModal(false)} onUpgrade={handleUpgrade} />
    </div>
  );
}

export default App;
