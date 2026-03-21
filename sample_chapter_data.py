"""
SAMPLE DATA ENTRY TEMPLATE
For integrating Bhagavad Gita verses into your JSON database

Copy this template and fill in your verse data for each chapter.
Then use the integrate_chapters.py script to add them to your main JSON.
"""

# CHAPTER 3 - KARMA YOGA (43 shlokas)
# https://en.wikipedia.org/wiki/Bhagavad_Gita#Chapter_3

CHAPTER_3 = [
    {
        'verse_number': '3.1',
        'sanskrit': 'अर्जुन उवाच ।\nज्यायसी चेत्कर्मणस्ते मता बुद्धिर्जनार्दन ।\nतत्किं कर्मणि घोरे मां नियोजयसि केशव',
        'english': 'Arjuna said: If it be thought by you that knowledge is superior to action, O Janardana, why then, O Kashava, do you engage me in this terrible action?',
        'hindi': 'अर्जुन बोले: हे जनार्दन! यदि आप ज्ञान को कर्म से श्रेष्ठ मानते हैं, तो फिर आप मुझे इस भयानक कर्म में क्यों लगा रहे हैं?',
        'kannada': '',
        'explanation': 'Arjuna questions Krishna about why knowledge cannot replace action.',
        'categories': ['confusion', 'knowledge', 'action']
    },
    {
        'verse_number': '3.2',
        'sanskrit': 'व्यामिश्रेणेव वाक्येन बुद्धिं मोहयसीव मे ।\nतदेकं वद निश्चित्य येन श्रेयोऽहमाप्नुयाम्',
        'english': 'With this apparently perplexing speech you confuse, as it were, my understanding; therefore, tell me that one way by which I for certain may attain the Highest.',
        'hindi': 'आप अपनी इस संमिश्र वाणी से मेरी बुद्धि को मोहित कर रहे हैं। कृपया मुझे एक निश्चित मार्ग बताइए जिससे मैं कल्याण प्राप्त कर सकूँ।',
        'kannada': '',
        'explanation': 'Arjuna requests Krishna to clarify which path is truly beneficial.',
        'categories': ['request', 'knowledge', 'clarity']
    },
    # Continue with shlokas 3.3 through 3.43...
    # Total: 43 shlokas
]

# CHAPTER 4 - JÑĀNA-KARMA-SANNYĀSA YOGA (42 shlokas)
CHAPTER_4 = [
    {
        'verse_number': '4.1',
        'sanskrit': 'श्रीभगवानुवाच ।\nइमं विवस्वते योगं प्रोक्तवानहमव्ययम् ।\nविवस्वान्मनवे प्राह मनुरिक्ष्वाकवेऽब्रवीत्',
        'english': 'The Blessed Lord said: I taught this Imperishable YOGA to Vivasvan; Vivasvan taught it to Manu; Manu taught it to Ikshvaku.',
        'hindi': 'श्रीभगवान बोले: मैंने इस अविनाशी योग को विवस्वान को सिखाया; विवस्वान ने मनु को सिखाया; मनु ने इक्ष्वाकु को सिखाया।',
        'kannada': '',
        'explanation': 'Krishna traces the lineage of divine teaching through ages.',
        'categories': ['wisdom', 'lineage', 'teaching']
    },
    # Continue with shlokas 4.2 through 4.42...
    # Total: 42 shlokas
]

# CHAPTER 5 - SANNYĀSA YOGA (29 shlokas)
CHAPTER_5 = [
    {
        'verse_number': '5.1',
        'sanskrit': 'अर्जुन उवाच ।\nसन्न्यासं कर्मणां कृष्ण पुनर्योगं च शंससि ।\nयच्छ्रेय एतयोरेकं तन्मे ब्रूहि सुनिश्चितम्',
        'english': 'Arjuna said: O Krishna, you praise the renunciation of actions and also their performance. Tell me with certainty which one of the two is superior.',
        'hindi': 'अर्जुन बोले: हे कृष्ण! आप कर्मों का त्याग और कर्म दोनों की प्रशंसा करते हैं। कृपया मुझे बताइए कि इन दोनों में कौन सा श्रेष्ठ है?',
        'kannada': '',
        'explanation': 'Arjuna seeks clarification between renunciation and action.',
        'categories': ['renunciation', 'action', 'comparison']
    },
    # Continue with shlokas 5.2 through 5.29...
    # Total: 29 shlokas
]

# CHAPTER 6 - DHYANA YOGA (47 shlokas)
CHAPTER_6 = [
    {
        'verse_number': '6.1',
        'sanskrit': 'श्रीभगवानुवाच ।\nअनाश्रितः कर्मफलं कार्यं कर्म करोति यः ।\nस सन्न्यासी च योगी च न निरग्निः न चाक्रियः',
        'english': 'The Blessed Lord said: He who performs his bounden duty, without depending on the fruits of his actions, he is the renouncer and the yogi, not the man who avoids the sacred fire and action.',
        'hindi': 'श्रीभगवान बोले: जो व्यक्ति फलों की चिंता किए बिना अपना कर्तव्य करता है, वह ही सच्चा संन्यासी और योगी है।',
        'kannada': '',
        'explanation': 'True renunciation means detachment while performing duty.',
        'categories': ['yoga', 'detachment', 'duty']
    },
    # Continue with shlokas 6.2 through 6.47...
    # Total: 47 shlokas
]

# CHAPTER 7 - JÑĀNA-VIJÑĀNA YOGA (30 shlokas)
CHAPTER_7 = [
    {
        'verse_number': '7.1',
        'sanskrit': 'श्रीभगवानुवाच ।\nमय्यासक्तमनाः पार्थ योगं युञ्जन्मदाश्रयः ।\nअसंशयं समग्रं मां यथा ज्ञास्यसि तच्छ्रृणु',
        'english': 'The Blessed Lord said: O Partha, now hear how, with mind fixed on Me, practicing Yoga and taking refuge in Me, you shall know Me fully and beyond doubt.',
        'hindi': 'श्रीभगवान बोले: हे पार्थ! अब सुनो कि कैसे अपना मन मुझ पर लगाकर और मेरी शरण लेकर तुम मुझे पूर्ण रूप से जान सकोगे।',
        'kannada': '',
        'explanation': 'Krishna offers the path to complete knowledge through devotion and meditation.',
        'categories': ['knowledge', 'devotion', 'meditation']
    },
    # Continue with shlokas 7.2 through 7.30...
    # Total: 30 shlokas
]

# CHAPTER 8 - AKSHARA-BRAHMA YOGA (28 shlokas)
CHAPTER_8 = [
    {
        'verse_number': '8.1',
        'sanskrit': 'अर्जुन उवाच ।\nकिं तद्ब्रह्म किमध्यात्मं किं कर्म पुरुषोत्तम ।\nअधिभूतं च किं प्रोक्तमधिदैवं किमुच्यते',
        'english': 'Arjuna said: What is that Brahman? What is Adhyatman? What is Karma, O Purushottama? What is Adhibhuta and what is declared to be Adhidaiva?',
        'hindi': 'अर्जुन बोले: हे पुरुषोत्तम! ब्रह्म क्या है? अध्यात्म क्या है? कर्म क्या है? अधिभूत क्या है और अधिदैव किसे कहते हैं?',
        'kannada': '',
        'explanation': 'Arjuna asks about the nature of ultimate reality and various levels of existence.',
        'categories': ['brahman', 'metaphysics', 'questioning']
    },
    # Continue with shlokas 8.2 through 8.28...
    # Total: 28 shlokas
]

# CHAPTER 9 - RĀJA-GUHYA YOGA (34 shlokas)
CHAPTER_9 = [
    {
        'verse_number': '9.1',
        'sanskrit': 'श्रीभगवानुवाच ।\nइदं तु ते गुह्यतमं प्रवक्ष्याम्यनसूयवे ।\nज्ञानं विज्ञानसहितं यज्ज्ञात्वा मोक्ष्यसेऽशुभात्',
        'english': 'The Blessed Lord said: But because you are not envious, I shall reveal to you this most secret knowledge combined with realization, knowing which you shall be liberated from the evil of existence.',
        'hindi': 'श्रीभगवान बोले: चूंकि तुम ईर्ष्या रहित हो, मैं तुम्हें यह परमोत्तम रहस्य बताता हूँ, जिसे जानकर तुम सांसारिक बंधन से मुक्त हो जाओगे।',
        'kannada': '',
        'explanation': 'Krishna reveals the supreme secret of divine knowledge and devotion.',
        'categories': ['secret', 'knowledge', 'liberation']
    },
    # Continue with shlokas 9.2 through 9.34...
    # Total: 34 shlokas
]

# CHAPTER 10 - VIBHŪTI YOGA (42 shlokas)
CHAPTER_10 = [
    {
        'verse_number': '10.1',
        'sanskrit': 'श्रीभगवानुवाच ।\nभूय एव महाबाहो श्रृणु मे परमं वचः ।\nयत्तेऽहं प्रियमाणाय वक्ष्यामि हितकाम्यया',
        'english': 'The Blessed Lord said: Hear again, O mighty-armed, My Supreme Word. Out of compassion for you, I shall impart this supreme wisdom.',
        'hindi': 'श्रीभगवान बोले: हे महाबाहु! फिर से सुनो मेरी परम वाणी। तुम्हारे कल्याण के लिए मैं यह ज्ञान कहता हूँ।',
        'kannada': '',
        'explanation': 'Krishna offers to reveal his divine manifestations and glory.',
        'categories': ['divinity', 'manifestation', 'glory']
    },
    # Continue with shlokas 10.2 through 10.42...
    # Total: 42 shlokas
]


# USAGE EXAMPLE:
# ==============

if __name__ == "__main__":
    from integrate_chapters import GitaIntegrator
    
    integrator = GitaIntegrator()
    
    # Prepare all chapters
    integration_data = {
        3: CHAPTER_3,
        4: CHAPTER_4,
        5: CHAPTER_5,
        6: CHAPTER_6,
        7: CHAPTER_7,
        8: CHAPTER_8,
        9: CHAPTER_9,
        10: CHAPTER_10,
    }
    
    # Run integration
    success = integrator.integrate(integration_data)
    
    if success:
        print("\n✓ Integration complete! All chapters 3-10 have been added.")
    else:
        print("\n✗ Integration failed. Check the output above for details.")


# NEXT STEPS:
# ===========
# 1. Fill in the complete Sanskrit text for each verse
# 2. Add complete English translations
# 3. Add Hindi and Kannada translations where available
# 4. Add relevant explanations
# 5. Categorize each verse with appropriate tags
# 6. Run this file as a Python script to integrate all chapters
