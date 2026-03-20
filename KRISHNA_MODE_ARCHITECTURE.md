# 📐 Krishna Mode - Technical Architecture Reference

## 🏗️ System Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                        USER INTERFACE                            │
│  (React Component: KrishnaMode.tsx)                              │
│                                                                   │
│  ┌──────────────┐              ┌────────────────────┐           │
│  │  Chat Input  │──Message────▶│  Message Display   │           │
│  │  (textarea)  │              │  (User + Krishna)  │           │
│  └──────────────┘              └────────────────────┘           │
│                                                                   │
│  ┌──────────────────────────────┐   ┌─────────────────┐        │
│  │  Suggestion Chips            │   │ Advanced Features│        │
│  │  (Prefilled prompts)         │   │ (Voice, Focus)  │        │
│  └──────────────────────────────┘   └─────────────────┘        │
└─────────────────────────────────────────────────────────────────┘
                                 │
                                 ▼
┌─────────────────────────────────────────────────────────────────┐
│                      EMOTION DETECTION                           │
│  (Functions: krishnaMode.ts)                                     │
│                                                                   │
│  detectEmotion(userInput: string) → Emotion                      │
│  ├─ Pattern matching against emotion keywords                    │
│  ├─ Returns: stress | failure | overthinking | etc              │
│  └─ Default: "stress"                                            │
└─────────────────────────────────────────────────────────────────┘
                                 │
                                 ▼
┌─────────────────────────────────────────────────────────────────┐
│                      CONCEPT MAPPING                             │
│  (Data: krishnaMode.ts - emotionToGitaConcept object)           │
│                                                                   │
│  Emotion → Gita Concept                                          │
│  ├─ stress → Karma Yoga (Detachment)                            │
│  ├─ failure → Samatva (Equanimity)                              │
│  ├─ overthinking → Karmayoga (Focus on Action)                  │
│  └─ confusion → Dharma (Duty)                                   │
└─────────────────────────────────────────────────────────────────┘
                                 │\n                                 ▼
┌─────────────────────────────────────────────────────────────────┐
│                    SHLOKA RETRIEVAL                              │\n│  (Function: getShlokaForEmotion)                                 │
│                                                                   │
│  ┌──────────────────────────────────┐                           │
│  │  Database: bhagavad_gita_shlokas │                           │
│  │                                  │                           │
│  │  ├─ Chapter 1-18                 │                           │
│  │  ├─ 700+ Shlokas total           │                           │
│  │  ├─ 4 Languages (Sanskrit, En,   │                           │
│  │  │  Hindi, Kannada)              │                           │
│  │  ├─ 13 Categories                │                           │
│  │  └─ Full explanations             │                           │
│  └──────────────────────────────────┘                           │
│                                                                   │
│  Query: emotion → array of potential shlokas                     │
│  Return: random shloka from array                                │
└─────────────────────────────────────────────────────────────────┘
                                 │
                                 ▼
┌─────────────────────────────────────────────────────────────────┐
│                    LLM PROMPT GENERATION                          │
│  (Function: generateAdvisoryPrompt)                              │
│                                                                   │
│  Combines:                                                        │
│  ├─ User input                                                   │
│  ├─ Detected emotion                                             │
│  ├─ Selected shloka (Sanskrit + meaning)                         │
│  └─ System prompt (Be wise mentor, give actions, etc)            │
│                                                                   │
│  Output: Structured prompt for LLM                               │
└─────────────────────────────────────────────────────────────────┘
                                 │
                                 ▼
┌─────────────────────────────────────────────────────────────────┐
│                    LLM API CALL                                  │
│  (Currently: Mock response)                                      │
│  (Production: Claude/GPT/Gemini via API)                         │
│                                                                   │
│  Endpoint: /api/generate-guidance (mocked)                       │
│  Request:                                                        │
│  ├─ prompt: [generated above]                                   │
│  ├─ temperature: 0.7 (balanced creativity)                      │
│  └─ max_tokens: 500                                             │
│                                                                   │
│  Response: Raw AI-generated text                                 │
└─────────────────────────────────────────────────────────────────┘
                                 │
                                 ▼
┌─────────────────────────────────────────────────────────────────┐
│                 RESPONSE STRUCTURING                              │
│  (Function: parseStructuredResponse)                             │
│                                                                   │
│  Raw response → Extract sections:                                │
│  ├─ 🪔 Teaching                                                  │
│  ├─ 📖 Understanding                                             │
│  ├─ 🧠 Action Steps (parsed into array)                          │
│  └─ 💭 Reflection                                                │
│                                                                   │
│  Return: Structured KrishnaResponse object                       │
└─────────────────────────────────────────────────────────────────┘
                                 │
                                 ▼
┌─────────────────────────────────────────────────────────────────┐
│                    MESSAGE RENDERING                              │
│  (Component: KrishnaMode.tsx - message mapping)                  │
│                                                                   │
│  ├─ Add emotion badge                                            │
│  ├─ Format with emojis                                           │
│  ├─ Apply CSS styling                                            │
│  ├─ Show timestamp                                               │
│  └─ Trigger animation                                            │
│                                                                   │
│  Result: Beautiful chat message in UI                            │
└─────────────────────────────────────────────────────────────────┘
                                 │
                                 ▼
┌─────────────────────────────────────────────────────────────────┐
│                   USER SEES FINAL OUTPUT                          │
│  ┌────────────────────────────────────────────────────────────┐ │
│  │ 😔 Failure  [Emotion Badge]                              │ │
│  │                                                            │ │
│  │ 🪔 Teaching:                                              │ │
│  │ The Bhagavad Gita teaches us about detachment...         │ │
│  │                                                            │ │
│  │ 📖 Understanding:                                         │ │
│  │ Your exam failure is temporary...                         │ │
│  │                                                            │ │
│  │ 🧠 Action Steps:                                          │ │
│  │ 1. Review what you learned                                │ │
│  │ 2. Create study plan for next attempt                     │ │
│  │ 3. Focus on process, not results                          │ │
│  │                                                            │ │
│  │ 💭 Reflection:                                            │ │
│  │ What if you measured success by effort?                   │ │
│  └────────────────────────────────────────────────────────────┘ │
│                                                                   │
│  User can then:                                                  │
│  ├─ Click \"💾 Save Wisdom\"                                    │
│  ├─ Click \"🧘 Focus Mode\" (2-min meditation)                 │
│  ├─ Click \"📚 Deep Dive\" (more details)                      │
│  └─ Type next message (multi-turn)                              │
└─────────────────────────────────────────────────────────────────┘
```

---

## 📁 File Structure

```
src/
├── components/
│   ├── KrishnaMode.tsx ───────────── Main chat UI
│   │   ├─ Message rendering
│   │   ├─ Input handling
│   │   ├─ Suggestion chips
│   │   └─ Loading states
│   │
│   ├── AdvancedKrishnaFeatures.tsx ─ Advanced features
│   │   ├─ Voice input (🎤)
│   │   ├─ Focus mode (🧘)
│   │   ├─ Emotion visualization
│   │   ├─ Save wisdom (💾)
│   │   └─ Deep dive (📚)
│   │
│   └── index.ts ─────────────────── Exports
│
├── utils/
│   ├── krishnaMode.ts ───────────── Core logic
│   │   ├─ detectEmotion()
│   │   ├─ getShlokaForEmotion()
│   │   ├─ emotionToGitaConcept
│   │   ├─ getEmotionalIntensity()
│   │   ├─ generateAdvisoryPrompt()
│   │   └─ emoji/color helpers
│   │
│   └── shlokasHelper.ts ────────── Database helpers
│       └─ getShlokaFromDatabase()
│
├── data/
│   └── bhagavad_gita_shlokas.json ─ Complete database
│       ├─ 700 shlokas
│       ├─ 18 chapters
│       ├─ 4 languages
│       └─ 13 categories
│
├── services/
│   └── krishnaAI.ts ───────────── (Future) LLM integration
│       └─ generateKrishnaGuidance()
│
└── App.tsx ────────────────────── Main app + routing
    ├─ Navigation setup
    ├─ Krishna Mode route
    └─ View switching
```

---

## 🔄 Data Flow Process

### Step 1: User Input
```typescript
userInput: "I failed my exam and feel useless"
```

### Step 2: Emotion Detection
```typescript
emotion = detectEmotion("I failed my exam and feel useless")
// Pattern match: "failed" → emotion = "failure"
```

### Step 3: Concept Mapping
```typescript
concept = emotionToGitaConcept["failure"]
// concept = "Equanimity in All Circumstances (Samatva)"
```

### Step 4: Shloka Retrieval
```typescript
shloka = getShlokaForEmotion("failure")
// Returns: {
//   verse_number: "2.47",
//   sanskrit: "कर्मण्येवाधिकारस्ते...",
//   english: "You have a right to perform your prescribed duty...",
//   explanation: "The teaching emphasizes..."
// }
```

### Step 5: Prompt Generation
```typescript
prompt = generateAdvisoryPrompt(userInput, emotion, shloka)
// Creates detailed prompt for LLM with all context
```

### Step 6: LLM Call (Mocked currently)
```typescript
response = await generateKrishnaResponse(prompt)
// Calls mock API (would call Claude/GPT in production)
```

### Step 7: Response Parsing
```typescript
parsed = parseStructuredResponse(response)
// Extracts sections and formats
// {
//   teaching: "...",
//   understanding: "...",
//   actionSteps: ["...", "...", "..."],
//   reflection: "..."
// }
```

### Step 8: Message Creation
```typescript
message = {
  id: timestamp,
  role: "krishna",
  content: parsed.fullResponse,
  emotion: "failure",
  timestamp: new Date()
}
```

### Step 9: UI Rendering
```typescript
// Message appears in chat with:
// - Emotion badge (😔 Failure)
// - 4 formatted sections
// - Timestamp
// - Advanced feature buttons
```

---

## 🎯 Key Functions Reference

### Emotion Detection
```typescript
detectEmotion(input: string): Emotion
// Input: "I failed my exam"
// Output: "failure"
// Time: <1ms
```

### Shloka Retrieval
```typescript
getShlokaForEmotion(emotion: Emotion): Shloka | null
// Input: "failure"
// Output: Random shloka from failure category
// Time: <5ms
```

### Prompt Generation
```typescript
generateAdvisoryPrompt(
  userInput: string,
  emotion: Emotion,
  shloka: Shloka
): string
// Input: User message, emotion, shloka
// Output: Full prompt for LLM
// Time: <1ms
```

### Response Generation (Mocked)
```typescript
async generateKrishnaResponse(userMessage: string): Promise<string>
// Input: User message
// Output: Structured response
// Time: 1.5s (simulated delay)
```

---

## 🧠 Type Definitions

```typescript
// Emotion type
type Emotion = 'stress' | 'failure' | 'overthinking' | 
               'confusion' | 'low_confidence' | 'anxiety' | 'motivation'

// Shloka type (from database)
type Shloka = {
  id: string
  chapter: number
  verse_number: string
  sanskrit: string
  english: string
  hindi: string
  kannada: string
  meaning: string
  explanation: string
  category: string
  category_description: string
}

// Message type
type Message = {
  id: string
  role: 'user' | 'krishna'
  content: string
  emotion?: Emotion
  shloka?: Shloka
  timestamp: Date
}

// Response type (after parsing)
type KrishnaResponse = {
  teaching: string
  understanding: string
  actionSteps: string[]
  reflection: string
  fullResponse: string
}
```

---

## 🚀 Component Props

### KrishnaMode
```typescript
// No props required (self-contained)
<KrishnaMode />
```

### AdvancedKrishnaFeatures
```typescript
interface AdvancedKrishnaModeProps {
  currentEmotion: Emotion | null
  onFeatureActivate: (featureId: string) => void
}

<AdvancedKrishnaFeatures
  currentEmotion={emotion}
  onFeatureActivate={handleFeature}
/>
```

---

## 📊 Performance Characteristics

| Operation | Time | Notes |
|-----------|------|-------|
| Emotion detection | <1ms | Keyword matching |
| Shloka retrieval | <5ms | Direct lookup |
| Prompt generation | <1ms | String building |
| Mock LLM response | 1500ms | Simulated delay |
| Response parsing | <10ms | String parsing |
| UI render | <50ms | React re-render |
| **Total E2E** | **~1.6s** | Acceptable for user |

---

## 🔐 Security Considerations

- ✅ No API keys exposed in code
- ✅ Environment variables used
- ✅ Input sanitization needed for production
- ✅ Rate limiting recommended
- ✅ CORS handling for backend

---

## 📈 Scalability Path

**Current State**:
- Client-side emoji detection
- Mocked LLM response
- Local state management

**Production Ready**:
- Backend API for NLP
- Real LLM integration (Claude/GPT)
- Database for conversation history
- User authentication
- Analytics tracking

---

## 🎓 Integration Points

### Current
- React component in App.tsx ✅
- CSS styling via Tailwind ✅
- Database access via helpers ✅

### Future
- Backend API endpoint
- Authentication system
- Analytics/logging
- Caching layer
- WebSocket for real-time

---

## 🧪 Testing Strategy

```typescript
// Unit Tests (Example)
describe('Krishna Mode', () => {
  it('detects failure emotion', () => {
    expect(detectEmotion("I failed")).toBe("failure")
  })
  
  it('retrieves shloka for emotion', () => {
    const shloka = getShlokaForEmotion("failure")
    expect(shloka?.chapter).toBe(2)
  })
})

// Integration Tests
describe('Full flow', () => {
  it('generates structured response', async () => {
    const response = await generateKrishnaResponse("I failed")
    expect(response).toContain("🪔 Teaching:")
  })
})
```

---

**This architecture makes Krishna Mode both elegant and scalable.** 🏗️✨
