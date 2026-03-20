import gitaData from '../../data/bhagavad_gita_shlokas.json';
import { Shloka, searchShlokas } from './shlokasHelper';

/**
 * Emotion Detection System
 * Maps user input to emotional categories
 */

export type Emotion = 'stress' | 'failure' | 'overthinking' | 'confusion' | 'low_confidence' | 'anxiety' | 'motivation';

const emotionKeywords: Record<Emotion, string[]> = {
  stress: ['stress', 'pressure', 'overwhelm', 'anxious', 'panic', 'tension', 'worried', 'afraid'],
  failure: ['fail', 'failed', 'useless', 'defeat', 'loss', 'unsuccessful', 'broken', 'hopeless'],
  overthinking: ['overthink', 'worried', 'anxious', 'think too much', 'racing mind', 'can\'t stop thinking'],
  confusion: ['confused', 'lost', 'uncertain', 'don\'t know', 'unclear', 'direction', 'path'],
  low_confidence: ['confidence', 'not good enough', 'doubt', 'self', 'weak', 'capable', 'believe'],
  anxiety: ['anxiety', 'nervous', 'panic', 'afraid', 'scared', 'fear'],
  motivation: ['motivation', 'unmotivated', 'lazy', 'tired', 'energy', 'drive']
};

/**
 * Detect emotion from user input
 */
export const detectEmotion = (input: string): Emotion => {
  const lowerInput = input.toLowerCase();
  
  for (const [emotion, keywords] of Object.entries(emotionKeywords)) {
    for (const keyword of keywords) {
      if (lowerInput.includes(keyword)) {
        return emotion as Emotion;
      }
    }
  }
  
  return 'stress'; // default
};

/**
 * Map emotion to Gita concept
 */
export const emotionToGitaConcept: Record<Emotion, string> = {
  stress: 'Detachment from Results (Karma Yoga)',
  failure: 'Equanimity in All Circumstances (Samatva)',
  overthinking: 'Focus on Action (Karmayoga)',
  confusion: 'Finding Your Duty (Dharma)',
  low_confidence: 'Inner Strength & Self-Belief',
  anxiety: 'Surrender & Faith (Bhakti)',
  motivation: 'Purpose & Duty (Svadharma)'
};

/**
 * Get relevant shloka for emotion
 */
export const getShlokaForEmotion = (emotion: Emotion): Shloka | null => {
  const emotionToShlokas: Record<Emotion, string[]> = {
    stress: ['2.47', '2.56', '6.25'],
    failure: ['2.47', '3.8', '6.5'],
    overthinking: ['2.62', '6.25', '6.31'],
    confusion: ['1.1', '3.19'],
    low_confidence: ['16.1', '6.5'],
    anxiety: ['2.56', '12.6'],
    motivation: ['3.8', '3.19']
  };

  const verseNumbers = emotionToShlokas[emotion];
  const verses = verseNumbers.map(v => {
    for (const chapter of gitaData.chapters) {
      const shloka = chapter.shlokas.find(s => s.verse_number === v);
      if (shloka) return shloka;
    }
    return null;
  }).filter(Boolean);

  if (verses.length === 0) return null;

  // Keep deterministic selection by default (better UX consistency).
  return verses[0] as Shloka;
};

/**
 * Tokenize and remove common stopwords to score relevance.
 */
const tokenizeQuery = (input: string): string[] => {
  const stopwords = new Set([
    'the',
    'and',
    'or',
    'to',
    'of',
    'a',
    'an',
    'in',
    'on',
    'for',
    'with',
    'is',
    'are',
    'am',
    'be',
    'i',
    'you',
    'my',
    'me',
    'we',
    'they',
    'it',
    'this',
    'that',
    'at',
    'as',
    'but',
    'so',
    'from',
    'into',
    'without',
    'about',
    'why',
    'how',
    'when',
    'what',
    'where',
    'who',
  ]);

  return input
    .toLowerCase()
    .replace(/[^a-z0-9\s.]/g, ' ')
    .split(/\s+/)
    .map((t) => t.trim())
    .filter((t) => t.length > 2 && !stopwords.has(t));
};

const scoreShloka = (shloka: Shloka, tokens: string[]): number => {
  const haystack = `${shloka.english} ${shloka.hindi} ${shloka.explanation} ${shloka.sanskrit}`.toLowerCase();
  let score = 0;
  for (const token of tokens) {
    const occurrences = haystack.split(token).length - 1;
    score += occurrences;
  }
  return score;
};

/**
 * Get top shlokas grounded in the user's text + detected emotion.
 */
export const getShlokasForKrishnaGuidance = (
  userInput: string,
  emotion: Emotion,
  limit: number = 2
): Shloka[] => {
  const tokens = tokenizeQuery(userInput);

  // 1) Keyword / query grounded search
  const keywordResults = searchShlokas(userInput);
  const rankedByQuery = keywordResults
    .map((s) => ({ s, score: scoreShloka(s, tokens) }))
    .sort((a, b) => b.score - a.score)
    .map((x) => x.s);

  // 2) Emotion grounded fallback (deterministic)
  const emotionShloka = getShlokaForEmotion(emotion);

  // 3) Merge + dedupe by verse number
  const merged: Shloka[] = [];
  const seen = new Set<string>();

  const pushUnique = (s?: Shloka | null) => {
    if (!s) return;
    if (seen.has(s.verse_number)) return;
    seen.add(s.verse_number);
    merged.push(s);
  };

  // Prefer query-ranked shlokas first
  for (const s of rankedByQuery) {
    pushUnique(s);
    if (merged.length >= limit) break;
  }

  // Ensure emotion shloka is included for better emotional resonance
  pushUnique(emotionShloka);

  return merged.slice(0, limit);
};

/**
 * Get emotional sentiment score (0-100)
 * Used for visualization
 */
export const getEmotionalIntensity = (input: string): number => {
  const intensityWords = ['very', 'extremely', 'really', 'so', 'absolutely', 'totally', 'completely'];
  const count = intensityWords.filter(word => input.toLowerCase().includes(word)).length;
  return Math.min(count * 20 + 30, 100);
};

/**
 * Get emoji for emotion
 */
export const getEmotionEmoji = (emotion: Emotion): string => {
  const emojis: Record<Emotion, string> = {
    stress: '😰',
    failure: '😔',
    overthinking: '🤯',
    confusion: '🤔',
    low_confidence: '😕',
    anxiety: '😟',
    motivation: '😴'
  };
  return emojis[emotion];
};

/**
 * Get color for emotion
 */
export const getEmotionColor = (emotion: Emotion): string => {
  const colors: Record<Emotion, string> = {
    stress: 'from-red-500 to-red-600',
    failure: 'from-blue-500 to-blue-600',
    overthinking: 'from-purple-500 to-purple-600',
    confusion: 'from-yellow-500 to-yellow-600',
    low_confidence: 'from-orange-500 to-orange-600',
    anxiety: 'from-pink-500 to-pink-600',
    motivation: 'from-indigo-500 to-indigo-600'
  };
  return colors[emotion];
};

/**
 * Generate actionable advice prompt
 */
export const generateAdvisoryPrompt = (userInput: string, shloka: Shloka): string => {
  return `You are Krishna, a wise mentor inspired by the Bhagavad Gita. A student trusts you with this problem:

"${userInput}"

The core teaching that aligns with this challenge is:
📖 Bhagavad Gita ${shloka.verse_number}
"${shloka.english}"

Meaning: ${shloka.explanation}

Your response should:
1. Be calm, compassionate, and wise (like a mentor, not a god)
2. Use simple language that a student can understand
3. Directly address their problem
4. Give them 2-3 concrete actions they can take TODAY
5. End with a reflection question that makes them think

FORMAT YOUR RESPONSE EXACTLY LIKE THIS:

🪔 Teaching:
(1 paragraph - explain the shloka concept in simple words)

📖 Understanding:
(1 paragraph - how this applies to their specific situation)

🧠 Action Steps:
(Numbered list of 2-3 specific things to do today)

💭 Reflection:
(1 powerful question to help them think deeper)

Keep it under 200 words total. Be direct and impactful.`;
};

export default {
  detectEmotion,
  getShlokaForEmotion,
  emotionToGitaConcept,
  getEmotionalIntensity,
  getEmotionEmoji,
  getEmotionColor,
  generateAdvisoryPrompt,
  getShlokasForKrishnaGuidance
};
