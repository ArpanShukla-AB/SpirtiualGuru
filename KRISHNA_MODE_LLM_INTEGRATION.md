# 🚀 Krishna Mode - LLM Backend Integration Guide

## Overview

Krishna Mode currently works with **simulated responses** (mock data). To make it production-ready with real AI, you need to integrate with an LLM provider.

---

## 🎯 Step 1: Choose Your LLM Provider

### Option A: Claude API (Recommended)

**Why Claude?**
- Best at reasoning and empathy
- Perfect for philosophical guidance
- Excellent instruction-following
- Safer outputs

```bash
# Install Anthropic SDK
npm install @anthropic-ai/sdk
```

**Setup**:
1. Get API key from https://console.anthropic.com/
2. Set environment variable:
   ```bash
   VITE_ANTHROPIC_API_KEY=your_key_here
   ```

---

### Option B: OpenAI API

```bash
npm install openai
```

---

### Option C: Google Gemini

```bash
npm install @google/generative-ai
```

---

## 🔧 Step 2: Create Backend Service

### Create `src/services/krishnaAI.ts`

```typescript
export interface KrishnaResponse {
  teaching: string;
  understanding: string;
  actionSteps: string[];
  reflection: string;
  fullResponse: string;
}

/**
 * Generate Krishna guidance using LLM
 */
export async function generateKrishnaGuidance(
  userInput: string,
  emotion: string,
  shlokaText: string,
  shlokaExplanation: string
): Promise<KrishnaResponse> {
  const apiKey = import.meta.env.VITE_ANTHROPIC_API_KEY;

  if (!apiKey) {
    throw new Error('VITE_ANTHROPIC_API_KEY not set');
  }

  const prompt = `You are Krishna, a wise mentor inspired by the Bhagavad Gita.

A student has shared a problem.

User input: "${userInput}"
Detected emotion: "${emotion}"

Relevant teaching:
Shloka: "${shlokaText}"
Meaning: "${shlokaExplanation}"

Your job:
1. Respond calmly and wisely
2. Use simple language (like explaining to a student)
3. Do NOT sound like a god, but like a wise mentor
4. Give practical advice
5. Keep it short and impactful

Response format - RESPOND IN THIS EXACT FORMAT:

🪔 Teaching:
[Your response]

📖 Understanding:
[Your response]

🧠 Action Steps:
[Step 1]
[Step 2]
[Step 3]

💭 Reflection:
[Your question]

IMPORTANT: Keep each section concise. Total under 200 words.`;

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-3-5-sonnet-20241022', // or claude-3-opus-20240229
        max_tokens: 500,
        messages: [
          {
            role: 'user',
            content: prompt
          }
        ]
      })
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`);
    }

    const data = await response.json();
    const fullResponse = data.content[0].text;

    // Parse structured response
    const parsed = parseStructuredResponse(fullResponse);
    return {
      ...parsed,
      fullResponse
    };
  } catch (error) {
    console.error('Krishna AI Error:', error);
    throw error;
  }
}

/**
 * Parse structured response
 */
function parseStructuredResponse(text: string): Omit<KrishnaResponse, 'fullResponse'> {
  const sections = {
    teaching: extractSection(text, '🪔 Teaching:'),
    understanding: extractSection(text, '📖 Understanding:'),
    actionSteps: extractActionSteps(text),
    reflection: extractSection(text, '💭 Reflection:')
  };

  return sections;
}

function extractSection(text: string, marker: string): string {
  const startIdx = text.indexOf(marker);
  if (startIdx === -1) return '';

  const contentStart = startIdx + marker.length;
  const nextSection = text.indexOf('📖') > startIdx ? text.indexOf('📖') : 
                      text.indexOf('🧠') > startIdx ? text.indexOf('🧠') :
                      text.indexOf('💭') > startIdx ? text.indexOf('💭') :
                      text.length;

  return text.substring(contentStart, nextSection).trim();
}

function extractActionSteps(text: string): string[] {
  const match = text.match(/🧠 Action Steps:(.+?)(?=💭|$)/s);
  if (!match) return [];

  return match[1]
    .split('\n')
    .filter(line => line.trim().match(/^[\d\-\*]/))
    .map(line => line.replace(/^[\d\.\-\*]\s*/, '').trim())
    .filter(Boolean);
}
```

---

## 🔌 Step 3: Update KrishnaMode Component

Update `src/components/KrishnaMode.tsx`:

```typescript
import { generateKrishnaGuidance } from '../services/krishnaAI';

// Inside handleSendMessage function
const generateKrishnaResponse = async (userMessage: string): Promise<string> => {
  const emotion = detectEmotion(userMessage);
  setCurrentEmotion(emotion);
  const shloka = getShlokaForEmotion(emotion);

  if (!shloka) {
    return 'I understand. Let me reflect on the Bhagavad Gita principles...';
  }

  setLoading(true);

  try {
    // Call real LLM instead of mock
    const response = await generateKrishnaGuidance(
      userMessage,
      emotion,
      shloka.sanskrit,
      shloka.explanation
    );
    
    return response.fullResponse;
  } catch (error) {
    console.error('Error:', error);
    return 'I apologize, there was an error. Please try again.';
  } finally {
    setLoading(false);
  }
};
```

---

## 🌐 Step 4: Environment Variables

### Create `.env`

```bash
# Anthropic Claude
VITE_ANTHROPIC_API_KEY=sk-ant-xxxxxxxxxxxxxxxxxxxxx

# OpenAI (if using)
VITE_OPENAI_API_KEY=sk-xxxxxxxxxxxxxxxxxxxx

# Backend API (if you build a backend)
VITE_API_BASE_URL=http://localhost:3000
```

### Update `.env.example` for team sharing

```bash
VITE_ANTHROPIC_API_KEY=your_key_here
VITE_OPENAI_API_KEY=your_key_here
VITE_API_BASE_URL=http://localhost:3000
```

---

## 🎯 Step 5: Error Handling

```typescript
// Add to KrishnaMode.tsx
const [error, setError] = useState<string | null>(null);

// In message handler
try {
  const response = await generateKrishnaResponse(inputValue);
  // ...
} catch (error) {
  const errorMsg = error instanceof Error ? error.message : 'Unknown error';
  setError(errorMsg);
  
  // Show error message
  const errorMessage: Message = {
    id: Date.now().toString(),
    role: 'krishna',
    content: `⚠️ Error: ${errorMsg}\n\nPlease check your API key and try again.`,
    timestamp: new Date()
  };
  setMessages(prev => [...prev, errorMessage]);
}

// In JSX
{error && (
  <div className="p-4 bg-red-100 border-2 border-red-400 rounded-lg text-red-800 mb-4">
    {error}
  </div>
)}
```

---

## 🧪 Testing

### Test with Mock Data (Current)
```bash
# Works now - simulated response
npm run dev
# Type any problem → Gets mock response
```

### Test with Real LLM

1. **Set API Key**
   ```bash
   export VITE_ANTHROPIC_API_KEY="sk-ant-xxx"
   ```

2. **Update krishnaMode.ts to call real API**

3. **Test**
   ```bash
   npm run dev
   # Type: "I failed my exam"
   # Should get real Claude response
   ```

---

## 💰 Cost Estimation (Claude)

| Messages | Cost |
|----------|------|
| 1 | ~$0.01 |
| 100 | ~$1 |
| 10,000 | ~$100 |
| 100,000 | ~$1,000 |

For hackathons: **Free tier usually sufficient**

---

## 🔐 Security Best Practices

### ❌ Never Do This
```javascript
// DON'T hardcode API key
const key = "sk-ant-xxx";

// DON'T commit .env file
// (add to .gitignore)
```

### ✅ Do This
```javascript
// Use environment variables
const key = import.meta.env.VITE_ANTHROPIC_API_KEY;

// Keep .env local only
# In .gitignore
.env
.env.local
```

---

## 🚀 Deployment

### For Vercel

```bash
# 1. Connect your GitHub repo
# 2. Add environment variables in Vercel dashboard
# 3. Redeploy
```

### For Firebase Hosting

```bash
npm install -g firebase-tools
firebase deploy
```

---

## 📊 Advanced: Build Backend Service (Optional)

If you want to reduce client-side API calls:

### Create `backend/api.ts` (Node.js + Express)

```typescript
import Anthropic from '@anthropic-ai/sdk';
import express from 'express';

const app = express();
const client = new Anthropic();

app.post('/api/krishna-guidance', async (req, res) => {
  const { userInput, emotion, shlokaText, explanation } = req.body;

  try {
    const response = await client.messages.create({
      model: 'claude-3-5-sonnet-20241022',
      max_tokens: 500,
      messages: [
        {
          role: 'user',
          content: `Generate Krishna guidance for:\n\nEmotion: ${emotion}\nInput: ${userInput}`
        }
      ]
    });

    res.json({ success: true, response });
  } catch (error) {
    res.status(500).json({ error: 'API call failed' });
  }
});

app.listen(3000, () => console.log('Krishna API running on :3000'));
```

---

## ✅ Verification Checklist

- [ ] API key set in `.env`
- [ ] `.env` added to `.gitignore`
- [ ] krishnaAI.ts service created
- [ ] KrishnaMode.tsx updated to use real API
- [ ] Error handling implemented
- [ ] Test with mock emotion input
- [ ] Check console for API response
- [ ] Verify response parsing works

---

## 🎬 Demo Flow (With Real LLM)

1. Visit: `http://localhost:5176/`
2. Click: `🧠 Krishna Mode`
3. Type: `"I failed my exam and feel useless"`
4. System:
   - Detects emotion: `Failure`
   - Gets shloka: `2.47`
   - Calls Claude API
   - Shows structured response

---

## 🆘 Troubleshooting

### "API key not found"
- Check `.env` file exists
- Restart dev server after adding `.env`
- Verify `VITE_` prefix (required for Vite)

### "API Error: Unauthorized"
- Verify API key is correct
- Check API key is active in Anthropic console
- Ensure no spaces in `.env`

### "Timeout"
- LLM might be slow first time
- Increase timeout: `timeout: 30000`

### "Empty response"
- Check API response format
- Verify prompt structure
- Add logging to debug

---

## 🎓 Learning Resources

- [Anthropic Claude API Docs](https://docs.anthropic.com/)
- [Vite Environment Variables](https://vitejs.dev/guide/env-and-variables.html)
- [TypeScript with Claude](https://github.com/anthropics/python-sdk)

---

## 🏆 Production Checklist

- [ ] Real LLM integrated
- [ ] Error handling complete
- [ ] Rate limiting implemented
- [ ] API key secured
- [ ] Conversations logged (for improvements)
- [ ] Response parsing tested
- [ ] Deployed and live

---

**Your Krishna Mode system is now production-ready!** 🚀
