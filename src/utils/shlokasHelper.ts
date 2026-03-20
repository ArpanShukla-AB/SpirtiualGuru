import gitaData from '../../data/bhagavad_gita_shlokas.json';

export interface Shloka {
  verse_number: string;
  sanskrit: string;
  english: string;
  hindi: string;
  kannada: string;
  categories: string[];
  explanation: string;
}

export interface Chapter {
  chapter_number: number;
  chapter_name: string;
  total_shlokas: number;
  categories: string[];
  shlokas: Shloka[];
}

/**
 * Get shloka by verse number (e.g., "2.47")
 */
export const getShlokaByVerse = (verseNumber: string): Shloka | null => {
  for (const chapter of gitaData.chapters) {
    const shloka = chapter.shlokas.find((s) => s.verse_number === verseNumber);
    if (shloka) return shloka;
  }
  return null;
};

/**
 * Get all shlokas by category (e.g., "stress")
 */
export const getShlokastByCategory = (category: string): Shloka[] => {
  const verseNumbers = gitaData.category_mapping[category as keyof typeof gitaData.category_mapping] || [];
  const shlokas: Shloka[] = [];

  for (const verseNumber of verseNumbers) {
    const shloka = getShlokaByVerse(verseNumber);
    if (shloka) shlokas.push(shloka);
  }

  return shlokas;
};

/**
 * Get random shloka from a category
 */
export const getRandomShloka = (category?: string): Shloka | null => {
  let shlokas: Shloka[] = [];

  if (category) {
    shlokas = getShlokastByCategory(category);
  } else {
    // Get all shlokas
    for (const chapter of gitaData.chapters) {
      shlokas.push(...chapter.shlokas);
    }
  }

  if (shlokas.length === 0) return null;
  return shlokas[Math.floor(Math.random() * shlokas.length)];
};

/**
 * Get all chapters
 */
export const getAllChapters = (): Chapter[] => {
  return gitaData.chapters;
};

/**
 * Get chapter by number (1-18)
 */
export const getChapterByNumber = (chapterNumber: number): Chapter | null => {
  return gitaData.chapters.find((c) => c.chapter_number === chapterNumber) || null;
};

/**
 * Get all categories
 */
export const getAllCategories = (): string[] => {
  return Object.keys(gitaData.category_mapping);
};

/**
 * Get category description
 */
export const getCategoryDescription = (category: string): string => {
  return gitaData.category_mapping[category as keyof typeof gitaData.category_mapping] as unknown as string || '';
};

/**
 * Search shlokas by keyword (searches in English and Hindi meanings)
 */
export const searchShlokas = (keyword: string): Shloka[] => {
  const lowerKeyword = keyword.toLowerCase();
  const results: Shloka[] = [];

  for (const chapter of gitaData.chapters) {
    for (const shloka of chapter.shlokas) {
      if (
        shloka.english.toLowerCase().includes(lowerKeyword) ||
        shloka.hindi.toLowerCase().includes(lowerKeyword) ||
        shloka.explanation.toLowerCase().includes(lowerKeyword)
      ) {
        results.push(shloka);
      }
    }
  }

  return results;
};

/**
 * Get shlokas for a mood (emotion)
 */
export const getShlokaForMood = (mood: string): Shloka | null => {
  const moodToCategoryMap: Record<string, string> = {
    'stressed': 'stress',
    'anxious': 'stress',
    'failed': 'failure',
    'failure': 'failure',
    'overthinking': 'overthinking',
    'confused': 'confusion',
    'confused_about_life': 'confusion',
    'sad': 'peace',
    'lacking_focus': 'focus',
    'unfocused': 'focus',
    'unmotivated': 'duty',
    'lost': 'knowledge',
  };

  const category = moodToCategoryMap[mood.toLowerCase()] || Object.keys(moodToCategoryMap)[0];
  return getRandomShloka(category);
};

/**
 * Get multilingual shloka
 */
export const getShlokaInLanguage = (shloka: Shloka, language: 'english' | 'hindi' | 'kannada' | 'sanskrit' = 'english'): string => {
  return shloka[language];
};

/**
 * Get top shlokas by popularity (most referenced)
 */
export const getTopShlokas = (limit: number = 10): Shloka[] => {
  const allShlokas: Shloka[] = [];
  for (const chapter of gitaData.chapters) {
    allShlokas.push(...chapter.shlokas);
  }

  // Sort by number of categories (more categories = more popular)
  return allShlokas.sort((a, b) => b.categories.length - a.categories.length).slice(0, limit);
};

export default {
  getShlokaByVerse,
  getShlokastByCategory,
  getRandomShloka,
  getAllChapters,
  getChapterByNumber,
  getAllCategories,
  getCategoryDescription,
  searchShlokas,
  getShlokaForMood,
  getShlokaInLanguage,
  getTopShlokas,
};
