https://deploy-preview-2--spritiualgita.netlify.app/
# 🪔 Spiritual Gita - Ancient Wisdom for Modern Minds

> **An AI-powered emotional intelligence platform powered by the Bhagavad Gita**

[![Status](https://img.shields.io/badge/status-Production%20Ready-brightgreen)]()
[![License](https://img.shields.io/badge/license-MIT-blue)]()
[![TypeScript](https://img.shields.io/badge/TypeScript-enabled-blue?logo=typescript)]()

---

## 🎯 Problem We Solve

**Students face unprecedented challenges:**
- 📈 Stress and anxiety at all-time highs
- 😕 Digital distraction and focus issues
- 🤔 Confusion about life direction and career
- 💔 Mental health crises going unaddressed
- 🎓 Pressure to succeed creating burnout

**Existing solutions fall short:**
- Generic meditation apps lack depth
- Mental health resources are expensive
- Wisdom traditions are overlooked
- No personalized emotional guidance at scale

---

## 💡 Our Solution

**Bhagavad Gita + Modern AI = Emotional Intelligence System**

We bridge 2500-year-old wisdom with contemporary mental health science.

**Not a religious app.** Not a meditation app.  
**An emotional intelligence platform** that teaches students:
- How to manage pressure and fear
- How to find focus in chaos
- How to make life decisions with clarity
- How to develop resilience and peace

---

## ✨ Key Features

### 📖 700 Complete Shlokas
- Entire Bhagavad Gita (all 18 chapters)
- Authentic Sanskrit originals
- Multiple translations (English, Hindi, Kannada)
- Psychological explanations for modern context

### 🎭 Mood-Based Guidance
```
"I feel stressed" → Get Shloka 2.47 with practical advice
"I'm overthinking" → Get Shloka 6.25 on meditation
"I failed" → Get Shloka 3.19 on action without attachment
```

### 🔍 Intelligent Search
- Full-text search across all shlokas
- Keyword matching across meanings
- Category-based browsing
- Emotional problem mapping

### 🤖 AI Integration Ready
- Connect any LLM (GPT, Claude, etc.)
- Krishna AI persona for conversational wisdom
- Personalized guidance based on user context
- Psychological insights embedded in responses

### 🌍 Multilingual Support
- **Sanskrit** - Original verses
- **English** - Scholarly translations
- **Hindi** - हिंदी अनुवाद
- **Kannada** - ಕನ್ನಡ ಅನುವಾದ

### 📱 Beautiful, Responsive UI
- Modern design with traditional aesthetics
- Works on mobile, tablet, desktop
- Smooth animations and transitions
- Accessible for all users

---

## 🚀 Quick Start

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/spiritual-gita.git
cd spiritual-gita

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

Visit `http://localhost:5173` 🎉

### Configure Krishna Agent with Gemini API

1. Copy env template and add your Gemini key:

```bash
cp .env.example .env
```

2. Edit `.env`:

```bash
VITE_GEMINI_API_KEY=your_real_gemini_api_key
```

3. Start app:

```bash
npm run dev
```

`KrishnaGPT` now calls Gemini for live responses and falls back to local Gita guidance if the key is missing/invalid.

### Simple Usage Example

```tsx
import { getShlokaForMood } from '@/utils/shlokasHelper';
import { MoodCard } from '@/components';

// Get shloka for specific mood
const shloka = getShlokaForMood('stressed');
console.log(shloka.english); // "You have a right to perform..."

// Use pre-built component
<MoodCard />
```

---

## 📊 What's Included

| Component | Description | Status |
|-----------|-------------|--------|
| **bhagavad_gita_shlokas.json** | Complete 700-shloka database | ✅ |
| **shlokasHelper.ts** | 10+ utility functions | ✅ |
| **DailyShloka.tsx** | Daily reflection component | ✅ |
| **MoodCard.tsx** | Emotional selector | ✅ |
| **ShlokasByCategory.tsx** | Category browser | ✅ |
| **ShlokaSearch.tsx** | Search interface | ✅ |
| **App.tsx** | Full demo application | ✅ |

---

## 📚 Documentation

- **[README_SHLOKAS.md](./README_SHLOKAS.md)** - Complete database documentation
- **[SETUP_GUIDE.md](./SETUP_GUIDE.md)** - Installation & integration guide
- **[HACKATHON_DEMO_GUIDE.md](./HACKATHON_DEMO_GUIDE.md)** - Demo script & talking points

---

## 🎬 Demo Visualization

```
┌─────────────────────────────────────┐
│  SPIRITUAL GITA DASHBOARD           │
├─────────────────────────────────────┤
│  🪔 Welcome, User                    │
│                                     │
│  📖 Today's Reflection              │
│  "You have a right to perform..."   │
│  - Bhagavad Gita 2.47               │
│                                     │
│  [Mood Guide] [Categories] [Search] │
└─────────────────────────────────────┘

MOOD GUIDE FLOW:
"I feel stressed" 😞
        ↓
System retrieves relevant shlokas
        ↓
Shows: Sanskrit → Translation → Meaning → Practical Advice
        ↓
User learns emotional resilience
```

---

## 🧠 Helper Functions

All utilities in `src/utils/shlokasHelper.ts`:

```typescript
// Get shloka by verse number
getShlokaByVerse("2.47")

// Get all shlokas in a category
getShlokastByCategory("stress")

// Get random shloka
getRandomShloka("focus")

// Get wisdom for a mood
getShlokaForMood("stressed")

// Full-text search
searchShlokas("duty")

// Get all chapters
getAllChapters()

// Get shloka in specific language
getShlokaInLanguage(shloka, "hindi")

// And 3 more...
```

---

## 🎓 13 Emotional Categories

| Category | Use Case | Icon |
|----------|----------|------|
| **Stress** | Anxiety & pressure | 😞 |
| **Failure** | Defeat & setbacks | 😔 |
| **Overthinking** | Excessive thoughts | 🤯 |
| **Confusion** | Lack of clarity | 🤔 |
| **Focus** | Concentration issues | 🎯 |
| **Peace** | Inner tranquility | 🧘 |
| **Duty** | Responsibility | ✨ |
| **Action** | Karma & growth | ⚡ |
| **Love-Devotion** | Connection & surrender | 💕 |
| **Meditation** | Mental discipline | 🪔 |
| **Knowledge** | Wisdom & learning | 📚 |
| **Courage** | Inner strength | 💪 |
| **Liberation** | Freedom & realization | 🦋 |

---

## 🏆 Why This Wins

### 🎯 Innovation
- **Novel Approach**: Ancient wisdom + AI (not done before at this scale)
- **Complete Database**: 700 shlokas vs competitors' 20-50
- **Psychological Grounding**: Every teaching linked to modern mental health

### 📊 Scale
- **700 Shlokas**: Complete Bhagavad Gita
- **4 Languages**: Global accessibility
- **13 Categories**: Comprehensive emotional coverage
- **Expandable**: Architecture supports 10,000+ teachings

### 🛠️ Technical Excellence
- **Production-Ready**: Full TypeScript implementation
- **Modular**: Use any component independently
- **Optimized**: Performant search and filtering
- **Scalable**: Database grows without code changes

### 💼 Business Potential
- **Freemium Model**: Basic access free, premium features paid
- **B2B**: School partnerships for mental health programs
- **Global**: 4 languages, culturally respectful approach
- **Sustainable**: Millions of students need mental health support

---

## 🔌 Integration with AI

### Basic LLM Integration

```typescript
import { getShlokaForMood } from '@/utils/shlokasHelper';

async function askKrishna(userMessage: string) {
  // Extract emotion from message
  const emotion = extractEmotion(userMessage);
  
  // Get relevant shloka
  const shloka = getShlokaForMood(emotion);
  
  // Add to LLM context
  const systemPrompt = `
    You are Krishna, an AI guide based on the Bhagavad Gita.
    Relevant shloka: ${shloka.english}
    Meaning: ${shloka.explanation}
    
    Provide emotionally intelligent advice grounded in this teaching.
  `;
  
  // Call LLM
  const response = await openai.createCompletion({
    prompt: userMessage,
    system: systemPrompt
  });
  
  return response;
}
```

---

## 📈 Metrics

```
┌─ DATABASE ─────────────┐
│ Total Shlokas: 700     │
│ Languages: 4           │
│ Categories: 13         │
│ Search Coverage: 100%  │
└────────────────────────┘

┌─ COMPONENTS ───────────┐
│ React Components: 4    │
│ Helper Functions: 10+  │
│ Production Ready: ✅   │
│ TypeScript: ✅         │
└────────────────────────┘

┌─ FEATURES ─────────────┐
│ Daily Shloka: ✅       │
│ Mood Selector: ✅      │
│ Category Browse: ✅    │
│ Full Search: ✅        │
│ Multilingual: ✅       │
│ AI Ready: ✅           │
└────────────────────────┘
```

---

## 🎨 Design

- **Colors**: Saffron/Orange (traditional + modern)
- **Typography**: Serif for sacred, Sans for modern
- **Responsive**: Mobile-first design
- **Accessible**: WCAG compliant

---

## 🔒 Privacy & Ethics

- ✅ No tracking or data collection (unless explicitly opted in)
- ✅ Culturally respectful approach to sacred texts
- ✅ Academic, not religious positioning
- ✅ Open-source foundation

---

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm run build
vercel deploy
```

### GitHub Pages
```bash
npm run build
# Update vite.config with base: '/spiritual-gita/'
```

### Docker
```bash
docker build -t spiritual-gita .
docker run -p 3000:3000 spiritual-gita
```

---

## 📖 For Judges

**Core Innovation:** 2500-year-old emotional intelligence training system powered by AI.

**Unique Positioning:** Not a meditation app. Not a religious app. An emotional intelligence platform.

**Market Size:** 1B+ students globally facing mental health challenges.

**Business Model:** Freemium (basic free, premium features paid) + B2B school partnerships.

**Competitive Advantage:** 
- Deepest knowledge base (700 complete shlokas)
- Best psychological grounding
- Most accessible (4 languages)
- Production-ready (not a prototype)

---

## 🤝 Contributing

Contributions welcome! Areas to expand:
- More languages (Spanish, French, German, etc.)
- Additional wisdom traditions (Yoga Sutras, Upanishads, etc.)
- Enhanced AI persona options
- Mobile app version
- Offline functionality

---

## 📄 License

MIT License - See LICENSE file for details

---

## 👨‍💻 Author

**Arpan Shukla**  
Built for the Hackathon with 💜

---

## 🎯 Get Started

```bash
npm install
npm run dev
```

Then navigate to:
- **Dashboard**: View daily shloka
- **Mood Guide**: Select emotion → Get wisdom
- **Categories**: Browse by topic
- **Search**: Find teachings

---

## 💬 Support

- **Docs**: See the documentation files
- **Issues**: Open a GitHub issue
- **Questions**: Check HACKATHON_DEMO_GUIDE.md for FAQs

---

## 🙏 Acknowledgments

- Bhagavad Gita (Original Sanskrit texts)
- Scholarly translators (Radhakrishnan, Prabhupada, etc.)
- Modern psychology research
- Mental health professionals

---

<div align="center">

### 🪔 Ancient Wisdom for Modern Minds 🪔

**Building emotional resilience, one shloka at a time.**

[🌐 Live Demo](#) | [📖 Full Docs](./README_SHLOKAS.md) | [🚀 Setup Guide](./SETUP_GUIDE.md) | [🎬 Demo Script](./HACKATHON_DEMO_GUIDE.md)

</div>

---

**Status**: ✅ Production-Ready | **Version**: 1.0.0 | **Last Updated**: March 20, 2026
