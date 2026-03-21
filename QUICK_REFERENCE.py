#!/usr/bin/env python3
"""
QUICK REFERENCE CARD - Bhagavad Gita Integration
Copy and paste this template to add a single chapter's verses.
"""

# =============================================================================
# MINIMAL WORKING EXAMPLE - Copy this and fill in your data
# =============================================================================

from integrate_chapters import GitaIntegrator

# Step 1: Prepare one chapter of verses
MY_CHAPTER_DATA = [
    {
        'verse_number': '3.1',
        'sanskrit': '[INSERT SANSKRIT TEXT HERE]',
        'english': '[INSERT ENGLISH TRANSLATION]',
        'hindi': '[INSERT HINDI TRANSLATION]',
        'kannada': '[INSERT KANNADA TRANSLATION]',
        'explanation': '[Brief 1-2 sentence explanation]',
        'categories': ['category1', 'category2']
    },
    # Copy the block above and repeat for each verse
    # Make sure verse_number goes: 3.1, 3.2, 3.3, ... 3.43
]

# Step 2: Create integrator
integrator = GitaIntegrator()

# Step 3: Add to JSON and save
success = integrator.integrate({
    3: MY_CHAPTER_DATA  # Chapter 3
})

# Step 4: Check result
if success:
    print("✓ Chapter added successfully!")
else:
    print("✗ Something went wrong. Check output above.")

# =============================================================================
# TEMPLATE - Paste and repeat for each verse
# =============================================================================

"""
{
    'verse_number': 'X.Y',  # Replace X with chapter, Y with verse number
    'sanskrit': 'Sanskrit text here',
    'english': 'English translation here',
    'hindi': 'Hindi translation here',
    'kannada': 'Kannada translation here',
    'explanation': 'One or two sentence explanation of the verse',
    'categories': ['tag1', 'tag2', 'tag3']  # Use relevant categories
}
"""

# =============================================================================
# CATEGORIES REFERENCE - Use these tags
# =============================================================================

AVAILABLE_CATEGORIES = {
    'action': 'Related to action/karma',
    'attachment': 'About attachment and desire',
    'awareness': 'Consciousness and awareness',
    'brahman': 'The ultimate reality',
    'courage': 'Bravery and confidence',
    'dedication': 'Focus and commitment',
    'delusion': 'Ignorance and confusion',
    'desire': 'Wants and longing',
    'determination': 'Resolve and willpower',
    'detachment': 'Non-attachment',
    'devotion': 'Bhakti, love for divine',
    'dharma': 'Duty and righteousness',
    'discipline': 'Self-control',
    'divine': 'Divinity and god-nature',
    'duty': 'Obligation and responsibility',
    'equanimity': 'Balance and steadiness',
    'eternity': 'Timelessness',
    'faith': 'Belief and trust',
    'fear': 'Anxiety and worry',
    'focus': 'Concentration',
    'forgiveness': 'Mercy',
    'glory': 'Manifestations of power',
    'goal': 'Objective and aim',
    'grace': 'Divine favor',
    'greed': 'Excessive desire',
    'growth': 'Development and progress',
    'guidance': 'Teaching and instruction',
    'guilt': 'Remorse',
    'happiness': 'Joy and bliss',
    'honor': 'Respect and dignity',
    'hope': 'Optimism',
    'immortality': 'Beyond death',
    'immutability': 'Unchanging nature',
    'insight': 'Deep understanding',
    'joy': 'Happiness and pleasure',
    'karma': 'Action and consequence',
    'knowledge': 'Wisdom and understanding',
    'learning': 'Study and education',
    'liberation': 'Freedom and moksha',
    'light': 'Illumination',
    'love': 'Affection and care',
    'meditation': 'Contemplation',
    'mercy': 'Compassion',
    'mind': 'Thoughts and intellect',
    'morality': 'Ethics and virtue',
    'mystery': 'The unknown',
    'nature': 'Prakriti and material world',
    'non-action': 'Inaction',
    'non-violence': 'Ahimsa',
    'oneness': 'Unity',
    'patience': 'Forbearance',
    'peace': 'Tranquility',
    'perfection': 'Completeness',
    'perseverance': 'Persistence',
    'philosophy': 'Intellectual understanding',
    'power': 'Strength and ability',
    'practice': 'Regular discipline',
    'prayer': 'Communication with divine',
    'purification': 'Cleansing',
    'purpose': 'Meaning and aim',
    'realization': 'Spiritual awakening',
    'renunciation': 'Giving up',
    'respect': 'Honor and reverence',
    'sacrifice': 'Offering and surrender',
    'self': 'The atman/soul',
    'selflessness': 'Serving others',
    'senses': 'Perception organs',
    'serenity': 'Calmness',
    'service': 'Selfless work',
    'shame': 'Embarrassment',
    'sin': 'Wrongdoing',
    'sloth': 'Laziness',
    'soul': 'The eternal self',
    'speech': 'Words and language',
    'spiritual': 'Related to spirit',
    'strength': 'Power and vigor',
    'surrender': 'Letting go',
    'supreme': 'Highest',
    'teaching': 'Instruction',
    'thought': 'Mental activity',
    'transcendence': 'Going beyond',
    'transformation': 'Change',
    'truth': 'Reality',
    'union': 'Yoga',
    'universe': 'Cosmos',
    'virtue': 'Good qualities',
    'war': 'Battle',
    'weakness': 'Lack of strength',
    'wealth': 'Prosperity',
    'wisdom': 'Deep knowledge',
    'witness': 'Observer',
    'world': 'Material realm',
    'worship': 'Adoration',
    'yoga': 'Union/practice',
    'yoga-of-action': 'Karma yoga',
    'yoga-of-knowledge': 'Jnana yoga',
    'yoga-of-meditation': 'Dhyana yoga',
}

# =============================================================================
# CHAPTER SUMMARIES - Reference for categorizing verses
# =============================================================================

CHAPTER_INFO = {
    3: {
        'name': 'Karma Yoga',
        'verses': 43,
        'themes': ['action', 'duty', 'karma', 'obligation'],
        'summary': 'The yoga of selfless action without attachment to results.'
    },
    4: {
        'name': 'Jñāna-Karma-Sannyāsa Yoga',
        'verses': 42,
        'themes': ['knowledge', 'wisdom', 'divine-teaching'],
        'summary': 'Divine wisdom and the lineage of spiritual knowledge.'
    },
    5: {
        'name': 'Sannyāsa Yoga',
        'verses': 29,
        'themes': ['renunciation', 'detachment', 'sannyasa'],
        'summary': 'The yoga of renunciation and achieving freedom through wisdom.'
    },
    6: {
        'name': 'Dhyana Yoga',
        'verses': 47,
        'themes': ['meditation', 'focus', 'discipline', 'concentration'],
        'summary': 'Meditation and the disciplines required for spiritual mastery.'
    },
    7: {
        'name': 'Jñāna-Vijñāna Yoga',
        'verses': 30,
        'themes': ['knowledge', 'divinity', 'wisdom', 'worship'],
        'summary': 'Knowledge of the divine and various forms of worship.'
    },
    8: {
        'name': 'Akshara-Brahma Yoga',
        'verses': 28,
        'themes': ['brahman', 'eternity', 'death', 'liberation'],
        'summary': 'The eternal absolute and paths to liberation.'
    },
    9: {
        'name': 'Rāja-Guhya Yoga',
        'verses': 34,
        'themes': ['secret-knowledge', 'devotion', 'faith'],
        'summary': 'The royal secret of devotion and surrender to the divine.'
    },
    10: {
        'name': 'Vibhūti Yoga',
        'verses': 42,
        'themes': ['divinity', 'manifestation', 'glory'],
        'summary': 'Divine manifestations and the infinite glory of God.'
    },
}

# =============================================================================
# VALIDATION CHECKLIST - Before running integration
# =============================================================================

VALIDATION_CHECKLIST = """
For each verse, verify:

✓ Verse number format correct (e.g., "3.1", "3.2")
✓ Sanskrit text is complete (Devanagari script)
✓ English translation is present
✓ All required quotes are escaped
✓ Categories use lowercase and hyphens
✓ No special characters breaking JSON
✓ Explanation is 1-2 sentences max
✓ No duplicate verse numbers
✓ Chapter verses are sequential

Common mistakes to avoid:
✗ Verse number format: "3-1" (should be "3.1")
✗ Missing quotes: verse_number: 3.1 (should be quoted)
✗ Unescaped text: 'Can't' (should be 'Can\\'t')
✗ Wrong categories: ['Knowledge', 'Action'] (should be lowercase)
✗ Trailing comma: {...}, (causes JSON error)
"""

# =============================================================================
# ONE-LINER INTEGRATION - If you already have your data
# =============================================================================

"""
# If you have all chapters ready in a dict:
integrator = GitaIntegrator()
integrator.integrate({
    3: chapter_3_verses,
    4: chapter_4_verses,
    5: chapter_5_verses,
    # ... etc
})
"""

# =============================================================================
# MANUAL JSON MERGE - Alternative approach
# =============================================================================

"""
If you prefer not to use Python:

1. Export your verses to JSON format matching the template
2. Open chapters_3_to_10_template.json
3. Fill in the "shlokas" array for each chapter
4. Manually merge with data/bhagavad_gita_shlokas.json
5. Validate the merged JSON using a JSON validator

This is more work but gives you full control.
"""

# =============================================================================
# DEBUG MODE - If integration fails
# =============================================================================

"""
Add this to see detailed error messages:

import traceback

try:
    success = integrator.integrate(data)
except Exception as e:
    print(f"Error: {e}")
    traceback.print_exc()

Common errors:
- FileNotFoundError: Check your file paths
- JSON decode error: Invalid JSON syntax, missing quotes
- KeyError: Missing required field in verse dict
"""

# =============================================================================
# PERFORMANCE NOTES
# =============================================================================

"""
For large updates:
- Adding all chapters 3-10: ~2-3 seconds
- Validation of 414 verses: ~1 second
- Total time: < 5 seconds per integration

If much slower:
- Check disk I/O performance
- Verify JSON file isn't corrupted
- Try smaller updates (one chapter at a time)
"""

print(__doc__)
