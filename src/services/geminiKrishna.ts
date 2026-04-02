import type { Emotion } from '../utils/krishnaMode';
import type { Shloka } from '../utils/shlokasHelper';

export type KrishnaLanguage = 'english' | 'hindi' | 'hinglish';

interface GeminiPart {
  text?: string;
}

interface GeminiCandidate {
  content?: {
    parts?: GeminiPart[];
  };
}

interface GeminiResponse {
  candidates?: GeminiCandidate[];
}

const GEMINI_MODEL = 'gemini-1.5-flash';

const buildPrompt = (
  userInput: string,
  emotion: Emotion,
  language: KrishnaLanguage,
  shlokas: Shloka[]
): string => {
  const shlokaContext = shlokas
    .map((shloka, index) => {
      return [
        `Shloka ${index + 1} (Verse ${shloka.verse_number})`,
        `English: ${shloka.english}`,
        `Hindi: ${shloka.hindi}`,
        `Meaning: ${shloka.explanation}`
      ].join('\n');
    })
    .join('\n\n');

  return `You are Krishna, a calm and practical spiritual mentor inspired by Bhagavad Gita.

Student message: "${userInput}"
Detected emotion: "${emotion}"
Preferred language: "${language}"

Use ONLY the following Bhagavad Gita context as grounding:\n\n${shlokaContext}

Output requirements:
1) Be compassionate, clear, and practical.
2) Keep answer under 220 words.
3) Include exactly these sections in order:
📜 Shloka Insight:
💡 Meaning for You:
🔱 Action Steps:
💭 Reflection:
4) Give 3 numbered action steps.
5) Do not claim supernatural powers, predictions, or absolute certainties.`;
};

/**
 * Generates a Krishna-style grounded response using Google Gemini API.
 */
export async function generateKrishnaWithGemini(
  userInput: string,
  emotion: Emotion,
  language: KrishnaLanguage,
  shlokas: Shloka[]
): Promise<string> {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

  if (!apiKey) {
    throw new Error('Missing VITE_GEMINI_API_KEY. Add it to your .env file.');
  }

  const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${apiKey}`;

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      contents: [
        {
          role: 'user',
          parts: [{ text: buildPrompt(userInput, emotion, language, shlokas) }]
        }
      ],
      generationConfig: {
        temperature: 0.7,
        topP: 0.9,
        maxOutputTokens: 450
      }
    })
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Gemini request failed (${response.status}): ${errorText}`);
  }

  const data = (await response.json()) as GeminiResponse;
  const text = data.candidates?.[0]?.content?.parts?.map((part) => part.text || '').join(' ').trim();

  if (!text) {
    throw new Error('Gemini returned an empty response.');
  }

  return text;
}
