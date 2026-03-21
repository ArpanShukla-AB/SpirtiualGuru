import json
from pathlib import Path

# Chapter 4 verses data - comprehensive with all 42 shlokas
CHAPTER_4_VERSES = [
    {
        "verse_number": "4.1",
        "sanskrit": "श्रीभगवानुवाच ।\nइमं विवस्वते योगं प्रोक्तवानहमव्ययम् ।\nविवस्वान्मनवे प्राह मनुरिक्ष्वाकवेऽब्रवीत्",
        "english": "The Blessed Lord said: I taught this Imperishable YOGA to Vivasvan; Vivasvan taught it to Manu; Manu taught it to Ikshvaku.",
        "hindi": "श्रीभगवान् ने कहा: मैंने यह अविनाशी योग विवस्वान को सिखाया। विवस्वान् ने मनु को सिखाया। मनु ने इक्ष्वाकु को सिखाया।",
        "kannada": "ಭಗವಂತನು ಹೇಳಿದರು: ನಾನು ಈ ಅವಿನಾಶಿ ಯೋಗವನ್ನು ವಿವಸ್ವನಿಗೆ ಕಲಿಸಿದೆ; ವಿವಸ್ವನ್ ಮನುವಿಗೆ ಕಲಿಸಿದನು; ಮನು ಇಕ್ಷ್ವಾಕುವಿಗೆ ಕಲಿಸಿದನು.",
        "explanation": "Krishna traces the lineage of divine teaching through the ages, establishing the authority and continuity of the knowledge he's about to share.",
        "categories": ["lineage", "teaching", "knowledge", "divine-transmission"]
    },
    {
        "verse_number": "4.2",
        "sanskrit": "एवं परम्पराप्राप्तमिमं राजर्षयो विदुः ।\nस कालेनेह महता योगो नष्टः परन्तप",
        "english": "This knowledge, handed down thus in regular succession, the royal sages knew. This YOGA, by long lapse of time, has been lost here, O Parantapa (burner of the foes).",
        "hindi": "इस तरह परंपरा से प्राप्त इस ज्ञान को राजर्षियों ने जाना। लेकिन समय के महान प्रवाह में यह योग यहां खो गया है, हे परन्तप।",
        "kannada": "ಈ ರೀತಿ ಪರಂಪರೆಯಲ್ಲಿ ಪಾವನೋಕ್ತ ಈ ಜ್ಞಾನವನ್ನು ರಾಜರ್ಷಿಗಳು ತಿಳಿದುಕೊಂಡರು। ದೀರ್ಘಕಾಲದ ವಿನಾಪ್ರವಾಹದಲ್ಲಿ ಈ ಯೋಗವು ಇಲ್ಲಿ ಕಳೆದುಹೋಗಿದೆ, ಓ ಪರಂತಪ।",
        "explanation": "Spiritual knowledge is preserved through unbroken lineages. When these lineages break, sacred wisdom may be lost to subsequent generations.",
        "categories": ["lineage", "transmission", "knowledge", "loss"]
    },
    {
        "verse_number": "4.3",
        "sanskrit": "स एवायं मया तेऽद्य योगः प्रोक्तः पुरातनः ।\nभक्तोऽसि मे सखा चेति रहस्यं ह्येतदुत्तमम्",
        "english": "That same ancient YOGA has been to-day taught to you by Me for you are My devotee and My friend. This is a Supreme secret.",
        "hindi": "वही प्राचीन योग आज मैं आपको सिखा रहा हूँ क्योंकि आप मेरे भक्त और मित्र हैं। यह सर्वोच्च रहस्य है।",
        "kannada": "ಅದೇ ಪ್ರಾಚೀನ ಯೋಗವನ್ನು ನಾನು ಇಂದು ನಿಮಗೆ ಕಲಿಸುತ್ತೇನೆ ಏಕೆಂದರೆ ನೀವು ನನ್ನ ಭಕ್ತ ಮತ್ತು ಸ್ನೆಹಿತ. ಇದು ಅತ್ಯುತ್ತಮ ರಹಸ್ಯವಾಗಿದೆ.",
        "explanation": "Sacred knowledge is shared with those who have developed devotion, friendship with the divine, and readiness to receive the teaching.",
        "categories": ["devotion", "secret", "friendship", "transmission"]
    },
    {
        "verse_number": "4.4",
        "sanskrit": "अर्जुन उवाच ।\nअपरं भवतो जन्म परं जन्म विवस्वतः ।\nकथमेतद्विजानीयां त्वमादौ प्रोक्तवानिति",
        "english": "Arjuna said: Later was Your birth, and prior was the birth of Vivaswan (Sun); how am I to understand that You taught this YOGA in the beginning?",
        "hindi": "अर्जुन बोले: आपका जन्म बाद में हुआ और विवस्वान (सूर्य) का जन्म पहले हुआ; फिर मैं कैसे समझूँ कि आपने प्रारंभ में यह योग सिखाया?",
        "kannada": "ಅರ್ಜುನ ಹೇಳಿದರು: ನಿಮ್ಮ ಜನ್ಮ ನಂತರದಲ್ಲಿದೆ ಮತ್ತು ವಿವಸ್ವನ್ (ಸೂರ್ಯ) ನ ಜನ್ಮ ಹಿಂದಿನದು; ಹಾಗಾದರೆ ನೀವು ಪ್ರಾರಂಭದಲ್ಲಿ ಈ ಯೋಗವನ್ನು ಕಲಿಸಿದ್ದೀರೆ ಎಂದು ನಾನು ಹೇಗೆ ಅರ್ಥ ಮಾಡಿಕೊಳ್ಳುವುದು?",
        "explanation": "Arjuna questions Krishna's claim to have taught ancient knowledge given the apparent difference in their birth times.",
        "categories": ["arjuna-question", "doubt", "time", "birth"]
    },
    {
        "verse_number": "4.5",
        "sanskrit": "श्रीभगवानुवाच ।\nबहूनि मे व्यतीतानि जन्मानि तव चार्जुन ।\nतान्यहं वेद सर्वाणि न त्वं वेत्थ परन्तप",
        "english": "The Blessed Lord said: Many births of Mine have passed as well as yours, O Arjuna; I know them all but you know them not, O Parantapa (scorcher of foes).",
        "hindi": "श्रीभगवान् ने कहा: हे अर्जुन, मेरे और आपके कई जन्म बीत चुके हैं। मैं सब को जानता हूँ लेकिन आप नहीं जानते, हे परन्तप।",
        "kannada": "ಭಗವಂತನು ಹೇಳಿದರು: ಹೇ ಅರ್ಜುನ, ನನ್ನ ಮತ್ತು ನಿಮ್ಮ ಅನೇಕ ಜನ್ಮಗಳು ಕಳೆದುಹೋಗಿವೆ; ನಾನು ಎಲ್ಲವನ್ನೂ ತಿಳಿದಿದ್ದೇನೆ ಆದರೆ ನೀವು ತಿಳಿದಿರುವುದಿಲ್ಲ, ಹೇ ಪರಂತಪ.",
        "explanation": "Krishna reveals his eternal nature transcending individual births, having knowledge of all previous incarnations.",
        "categories": ["divinity", "reincarnation", "knowledge", "eternal-nature"]
    },
    {
        "verse_number": "4.6",
        "sanskrit": "अजोऽपि सन्नव्ययात्मा भूतानामीश्वरोऽपि सन् ।\nप्रकृतिं स्वामधिष्ठाय सम्भवाम्यात्ममायया",
        "english": "Though I am unborn and am of imperishable nature, and though I am the Lord of all beings, yet, ruling over My own Nature, I take birth by My own MAYA.",
        "hindi": "यद्यपि मैं अजन्मा हूँ और अविनाशी हूँ, और यद्यपि मैं सभी प्राणियों का ईश्वर हूँ, तब भी अपनी प्रकृति पर शासन करके मैं अपनी माया से जन्म लेता हूँ।",
        "kannada": "ನಾನು ಜನ್ಮರಹಿತ ಮತ್ತು ಅವಿನಾಶಿ ಸ್ವಭಾವದವನಾಗಿದ್ದರೂ, ಮತ್ತು ಎಲ್ಲ ಜೀವಿಗಳ ಭಗವಂತ ಆಗಿದ್ದರೂ, ಸ್ವಂತ ಪ್ರಕೃತಿಯ ಮೇಲೆ ಆಳ್ವಿಕೆ ಮಾಡಿ, ನಾನು ನನ್ನ ಮಾಯೆಯಿಂದ ಜನ್ಮ ತೆಗೆದುಕೊಳ್ಳುತ್ತೇನೆ.",
        "explanation": "Krishna's birth is not like ordinary birth. It is a conscious descent of the divine, controlled by his own divine power (maya).",
        "categories": ["divinity", "maya", "birth", "incarnation"]
    },
    {
        "verse_number": "4.7",
        "sanskrit": "यदा यदा हि धर्मस्य ग्लानिर्भवति भारत ।\nअभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम्",
        "english": "Whenever there is a decay of righteousness, O Bharata, and a rise of unrighteousness, then I manifest Myself.",
        "hindi": "हे भारत, जब जब धर्म की हानि होती है और अधर्म की वृद्धि होती है, तब तब मैं अपने आप को प्रकट करता हूँ।",
        "kannada": "ಹೇ ಭಾರತ, ಧರ್ಮದ ಹ್ರಾಸ ಉಂಟಾದಾಗ ಮತ್ತು ಅಧರ್ಮದ ಉದಯ ಊಟುದಾಗ, ನಾನು ನನ್ನನ್ನು ಪ್ರಕಟಪಡಿಸುತ್ತೇನೆ.",
        "explanation": "Divine incarnations occur to restore balance when righteousness declines. This affirms the compassionate involvement of the divine in human affairs.",
        "categories": ["divinity", "dharma", "incarnation", "righteousness"]
    },
    {
        "verse_number": "4.8",
        "sanskrit": "परित्राणाय साधूनां विनाशाय च दुष्कृताम् ।\nधर्मसंस्थापनार्थाय सम्भवामि युगे युगे",
        "english": "For the protection of the good, for the destruction of the wicked and for the establishment of rightenousness, I am born in every age.",
        "hindi": "साधुओं की रक्षा के लिए, पापियों के विनाश के लिए और धर्म की स्थापना के लिए, मैं हर युग में जन्म लेता हूँ।",
        "kannada": "ಸಾಧುಗಳ ರಕ್ಷಣೆಗಾಗಿ, ದುಷ್ಟರ ವಿನಾಶಕ್ಕಾಗಿ ಮತ್ತು ಧರ್ಮದ ಸ್ಥಾಪನೆಗಾಗಿ, ನಾನು ಪ್ರತಿ ಯುಗದಲ್ಲಿ ಜನ್ಮ ತೆಗೆದುಕೊಳ್ಳುತ್ತೇನೆ.",
        "explanation": "The divine appears in different forms and ages with a threefold purpose: protecting the virtuous, eliminating the wicked, and restoring the cosmic order.",
        "categories": ["divinity", "protection", "dharma", "incarnation"]
    },
    {
        "verse_number": "4.9",
        "sanskrit": "जन्म कर्म च मे दिव्यमेवं यो वेत्ति तत्त्वतः ।\nत्यक्त्वा देहं पुनर्जन्म नैति मामेति सोऽर्जुन",
        "english": "He who thus knows, in true light, My divine birth and action, having abandoned the body, he is not born again; he comes to Me, O Arjuna.",
        "hindi": "जो इस प्रकार मेरे दिव्य जन्म और कर्म को तत्त्वतः जानता है, शरीर को त्यागकर, पुनः जन्म नहीं लेता; वह मेरे को प्राप्त होता है, हे अर्जुन।",
        "kannada": "ಅವನು ಈ ರೀತಿ ನನ್ನ ದೈವಿಕ ಜನ್ಮ ಮತ್ತು ಕರ್ಮವನ್ನು ಸತ್ಯತೆಗಿಂತ ತಿಳಿದುಕೊಂಡರೆ, ಶರೀರವನ್ನು ತ್ಯಜಿಸಿ, ಹೆಚ್ಚು ಜನ್ಮ ಪಡೆಯುವುದಿಲ್ಲ; ಅವನು ನನ್ನನ್ನು ಪಡೆಯುತ್ತಾನೆ, ಹೇ ಅರ್ಜುನ.",
        "explanation": "Understanding Krishna's true nature—both divine and transcendent—leads to liberation from the cycle of rebirth.",
        "categories": ["liberation", "knowledge", "divinity", "reincarnation"]
    },
    {
        "verse_number": "4.10",
        "sanskrit": "वीतरागभयक्रोधा मन्मया मामुपाश्रिताः ।\nबहवो ज्ञानतपसा पूता मद्भावमागताः",
        "english": "Freed from attachment, fear and anger, absorbed in Me, taking refuge in Me, purified by the Fire-of-Knowledge, many have attained My Being.",
        "hindi": "राग, भय और क्रोध से मुक्त, मुझमें निमग्न, मेरी शरण लेकर, ज्ञान की अग्नि से शुद्ध होकर, बहुत से लोग मेरे आत्मतत्त्व को प्राप्त हुए हैं।",
        "kannada": "ಬಾಧೆ, ಭಯ ಮತ್ತು ಕ್ರೋಧದಿಂದ ಮುಕ್ತರಾದ, ನನ್ನಲ್ಲಿ ಮಗ್ನರಾದ, ನನ್ನ ಶರಣಾಗತರಾದ, ಜ್ಞಾನಾಗ್ನಿಯಿಂದ ಶುದ್ಧರಾದ, ಅನೇಕರು ನನ್ನ ಸ್ವರೂಪವನ್ನು ಪ್ರಾಪ್ತ ಮಾಡಿದ್ದಾರೆ.",
        "explanation": "The path to attaining divine nature involves releasing negative emotions and taking refuge in the divine through devotion and knowledge.",
        "categories": ["devotion", "liberation", "knowledge", "divine-union"]
    },
    {
        "verse_number": "4.11",
        "sanskrit": "ये यथा मां प्रपद्यन्ते तांस्तथैव भजाम्यहम् ।\nमम वर्त्मानुवर्तन्ते मनुष्याः पार्थ सर्वशः",
        "english": "It whatever way men approach Me, even so do I reward them; My path do men tread in all ways, O son of Pritha.",
        "hindi": "जिस जिस प्रकार मनुष्य मेरे पास आते हैं, मैं उन्हें उसी प्रकार पुरस्कृत करता हूँ; हे पार्थ, मनुष्य सब प्रकार से मेरे पथ पर चलते हैं।",
        "kannada": "ಜೈಸೆ ರೀತಿನಲ್ಲಿ ಮನುಷ್ಯರು ನನ್ನೆಡೆಗೆ ಬರುತ್ತಾರೆ, ನಾನು ಅದೇ ರೀತಿನಲ್ಲಿ ಅವರಗೆ ಪ್ರಾಪ್ತಿ ನೀಡುತ್ತೇನೆ; ಹೇ ಪಾರ್ಥ, ಮನುಷ್ಯರು ಸರ್ವ ರೀತಿನಲ್ಲಿ ನನ್ನ ಪಥದಲ್ಲಿ ಚಲಿಸುತ್ತಾರೆ.",
        "explanation": "The divine recognizes and honors all sincere approaches. Different paths and devotions are all respected by the infinite divine.",
        "categories": ["devotion", "paths", "surrender", "divine-grace"]
    },
    {
        "verse_number": "4.12",
        "sanskrit": "काङ्क्षन्तः कर्मणां सिद्धिं यजन्त इह देवताः ।\nक्षिप्रं हि मानुषे लोके सिद्धिर्भवति कर्मजा",
        "english": "They who long for satisfaction from actions in this world, make sacrifices to the gods; because satisfaction is quickly obtained from actions in the world-of-objects.",
        "hindi": "जो इस लोक में कर्मों की सिद्धि की इच्छा करते हैं, वे देवताओं को यज्ञ करते हैं; क्योंकि इस लोक में कर्मों से शीघ्र ही सिद्धि मिलती है।",
        "kannada": "ಈ ಲೋಕದಲ್ಲಿ ಕರ್ಮಗಳ ಸಿದ್ಧಿಯನ್ನು ಬಯಸುವವರು ದೇವತೆಗಳಿಗೆ ಯಜ್ಞ ಮಾಡುತ್ತಾರೆ; ಏಕೆಂದರೆ ಈ ಲೋಕದಲ್ಲಿ ಕರ್ಮದಿಂದ ಶೀಘ್ರವಾಗಿ ಸಿದ್ಧಿ ಪ್ರಾಪ್ತವಾಗುತ್ತದೆ.",
        "explanation": "Those seeking material success through actions make offerings to gods. Material results come quickly from ritualistic actions.",
        "categories": ["ritual", "action", "duality", "results"]
    },
    {
        "verse_number": "4.13",
        "sanskrit": "चातुर्वर्ण्यं मया सृष्टं गुणकर्मविभागशः ।\nतस्य कर्तारमपि मां विद्ध्यकर्तारमव्ययम्",
        "english": "The fourfold-caste has been created by Me according to the differentiation of GUNA and KARMA; though I am the author thereof know Me as non-doer and immutable.",
        "hindi": "चातुर्वर्ण को मैंने गुण और कर्म के भेद से रचा है; यद्यपि मैं इसका रचयिता हूँ, तब भी मुझे अकर्ता और अविनाशी जानो।",
        "kannada": "ನಾನು ಗುಣ ಮತ್ತು ಕರ್ಮದ ವಿಭಾಗದಿಂದ ಚತುರ್ವರ್ಣವನ್ನು ರಚಿಸಿದೆ; ನಾನು ಇದರ ಸೃಷ್ಟಿಕರ್ತನಾಗಿದ್ದರೂ, ನನ್ನನ್ನು ಅಕರ್ತಾ ಮತ್ತು ಅವಿನಾಶಿ ಎಂದು ತಿಳಿದುಕೊಳ್ಳಿ.",
        "explanation": "Social organization based on qualities is divinely ordained, yet the divine remains untouched by the consequences of creation.",
        "categories": ["social-order", "gunas", "karma", "non-action"]
    },
    {
        "verse_number": "4.14",
        "sanskrit": "न मां कर्माणि लिम्पन्ति न मे कर्मफले स्पृहा ।\nइति मां योऽभिजानाति कर्मभिर्न स बध्यते",
        "english": "Actions do not taint Me, nor have I any desire for the fruits-of-actions. He who knows Me thus is not bound by his actions.",
        "hindi": "कर्म मुझे नहीं छूते, न ही मुझे कर्मों के फलों की इच्छा है। जो मुझे इस प्रकार जानता है, वह अपने कर्मों से बँधा नहीं होता।",
        "kannada": "ಕರ್ಮಗಳು ನನ್ನನ್ನು ಸ್ಪರ್ಶಿಸುವುದಿಲ್ಲ, ಮತ್ತು ನನಗೆ ಕರ್ಮಫಲಗಳ ಬಯಕೆ ಇಲ್ಲ. ಆತನು ಈ ರೀತಿ ನನ್ನನ್ನು ತಿಳಿದುಕೊಂಡರೆ, ಅವನು ತನ್ನ ಕರ್ಮಗಳಿಂದ ಬಂಧಗಳ ಗ್ರಸ್ತನಾಗುವುದಿಲ್ಲ.",
        "explanation": "The liberated one understanding divine nature remains free from karmic bondage by not identifying with actions or their fruits.",
        "categories": ["karma", "liberation", "non-action", "detachment"]
    },
    {
        "verse_number": "4.15",
        "sanskrit": "एवं ज्ञात्वा कृतं कर्म पूर्वैरपि मुमुक्षुभिः ।\nकुरु कर्मैव तस्मात्त्वं पूर्वैः पूर्वतरं कृतम्",
        "english": "Having known this, the ancient seekers-after-freedom also performed action; therefore, you too perform action, as did the ancients in the olden times.",
        "hindi": "इस ज्ञान को जानकर, प्राचीन मुक्ति-साधकों ने भी कर्म किए हैं; इसलिए आप भी कर्म करो, जैसे पूर्वकाल में प्राचीन लोगों ने किए थे।",
        "kannada": "ಈ ಜ್ಞಾನವನ್ನು ತಿಳಿದುಕೊಂಡು, ಪ್ರಾಚೀನ ಮುಕ್ತಿ-ಸಾಧಕರು ಕರ್ಮ ಮಾಡಿದ್ದಾರೆ; ಆದ್ದರಿಂದ ನೀವೂ ಕರ್ಮ ಮಾಡಿ, ಪ್ರಾಚೀನರು ಪೂರ್ವಕಾಲದಲ್ಲಿ ಮಾಡಿದಂತೆ.",
        "explanation": "Even enlightened beings performed their duties. Following their example, one should continue to perform actionwhile maintaining inner wisdom.",
        "categories": ["action", "duty", "example", "liberation"]
    },
    {
        "verse_number": "4.16",
        "sanskrit": "किं कर्म किमकर्मेति कवयोऽप्यत्र मोहिताः ।\nतत्ते कर्म प्रवक्ष्यामि यज्ज्ञात्वा मोक्ष्यसेऽशुभात्",
        "english": "What is action? What is inaction? As to this even the wise are deluded. Therefore I shall teach you action (the nature of action and inaction) knowing which you shall be liberated from the evil (of SAMSARA --- the wheel of birth and death).",
        "hindi": "कर्म क्या है? अकर्म क्या है? इस विषय में बुद्धिमान भी भ्रमित हैं। इसलिए मैं आपको कर्म सिखाऊँगा, जिसे जानकर आप बुराई से मुक्त हो जाएँगे।",
        "kannada": "ಕರ್ಮ ಎಂದರೆ ಏನು? ಅಕರ್ಮ ಎಂದರೆ ಏನು? ಈ ಸಂಬಂಧದಲ್ಲಿ ಬುದ್ಧಿಭಾನ ಜನರೂ ತಪ್ಪುತ್ತಿದ್ದಾರೆ. ಆದ್ದರಿಂದ ನಾನು ನಿಮಗೆ ಕರ್ಮವನ್ನು ಕಲಿಸುತ್ತೇನೆ, ಅದನ್ನು ತಿಳಿದುಕೊಂಡು ನೀವು ಸಮ್ಸಾರದಿಂದ ಮುಕ್ತನಾಗುವಿರಿ.",
        "explanation": "Understanding the true nature of action and inaction is subtle even for the wise. Krishna promises to clarify this profound teaching.",
        "categories": ["action", "knowledge", "liberation", "teaching"]
    },
    {
        "verse_number": "4.17",
        "sanskrit": "कर्मणो ह्यपि बोद्धव्यं बोद्धव्यं च विकर्मणः ।\nअकर्मणश्च बोद्धव्यं गहना कर्मणो गतिः",
        "english": "For verily (the true nature) of right action should be known; also (that) of forbidden (or unlawful) action and of inaction; imponderable is the nature (path) of action.",
        "hindi": "क्योंकि सही कर्म का स्वभाव जानना चाहिए; वर्जित कर्म और अकर्म का भी जानना चाहिए; कर्म का मार्ग गहरा और समझना कठिन है।",
        "kannada": "ಏಕೆಂದರೆ ಸರಿಯಾದ ಕರ್ಮದ ಸ್ವಭಾವ ತಿಳಿಯಬೇಕು; ನಿಷೇಧಿತ ಕರ್ಮ ಮತ್ತು ಅಕರ್ಮದ ಸ್ವಭಾವವೂ ತಿಳಿಯಬೇಕು; ಕರ್ಮದ ಮಾರ್ಗವು ಗಹನವಾಗಿದೆ.",
        "explanation": "Understanding the distinction between right action, wrong action, and inaction is profound and requires careful study.",
        "categories": ["action", "dharma", "discrimination", "complexity"]
    },
    {
        "verse_number": "4.18",
        "sanskrit": "कर्मण्यकर्म यः पश्येदकर्मणि च कर्म यः ।\nस बुद्धिमान्मनुष्येषु स युक्तः कृत्स्नकर्मकृत्",
        "english": "He who recognises inaction in action and action in inaction is wise among men; he is a YOGI and a true performer of all actions.",
        "hindi": "जो कर्म में अकर्म देखता है और अकर्म में कर्म देखता है, वही मनुष्यों में बुद्धिमान है; वही योगी है और सभी कर्मों का सच्चा कर्ता है।",
        "kannada": "ಕರ್ಮದಲ್ಲಿ ಅಕರ್ಮವನ್ನು ಮತ್ತು ಅಕರ್ಮದಲ್ಲಿ ಕರ್ಮವನ್ನು ಕಾಣುವ ವ್ಯಕ್ತಿ ಮನುಷ್ಯಗಳಲ್ಲಿ ಬುದ್ಧಿಮಾನ; ಅವನು ಯೋಗಿ ಮತ್ತು ಸಮಸ್ತ ಕರ್ಮಗಳ ನಿಜ ಕರ್ತಾ.",
        "explanation": "The wise person perceives the divine stillness within action and the subtle action within apparent inaction. This is the paradox of enlightened living.",
        "categories": ["yoga", "wisdom", "paradox", "action"]
    },
    {
        "verse_number": "4.19",
        "sanskrit": "यस्य सर्वे समारम्भाः कामसङ्कल्पवर्जिताः ।\nज्ञानाग्निदग्धकर्माणं तमाहुः पण्डितं बुधाः",
        "english": "Whose undertakings are all devoid of desires and purposes, and whose actions have been burnt by the Fire-of-Knowledge, him the wise call a Sage.",
        "hindi": "जिसके सभी कार्य इच्छा और संकल्प से रहित हैं, और जिसके कर्म ज्ञान की अग्नि से जल गए हैं, ज्ञानीजन उसे पण्डित कहते हैं।",
        "kannada": "ಯಾರ ಎಲ್ಲಾ ಕಾರ್ಯಪ್ರಾರಂಭಗಳು ಇಚ್ಛೆ ಮತ್ತು ಸಂಕಲ್ಪದಿಂದ ರಹಿತವಾಗಿದೆ, ಮತ್ತು ಯಾರ ಕರ್ಮಗಳು ಜ್ಞಾನಾಗ್ನಿಯಿಂದ ದಹನವಾಗಿದೆ, ಜ್ಞಾನಿಗಳು ಅವನನ್ನು ಪಂಡಿತ ಎಂದು ಕರೆಯುತ್ತಾರೆ.",
        "explanation": "The true sage is one who performs actions without personal desires or ego attachments, with all karmic tendencies burned away by wisdom.",
        "categories": ["wisdom", "detachment", "knowledge", "sage"]
    },
    {
        "verse_number": "4.20",
        "sanskrit": "त्यक्त्वा कर्मफलासङ्गं नित्यतृप्तो निराश्रयः ।\nकर्मण्यभिप्रवृत्तोऽपि नैव किञ्चित्करोति सः",
        "english": "Having abandoned attachment to the fruits-of-action, ever-content, depending on nothing, he does not do anything, though engaged in actions.",
        "hindi": "कर्मों के फलों से आसक्ति को त्यागकर, सदा संतुष्ट, किसी पर निर्भर न होकर, वह कुछ नहीं करता, यद्यपि कर्मों में संलग्न होता है।",
        "kannada": "ಕರ್ಮಫಲಾಸಕ್ತಿಯನ್ನು ನಿರ್ಲಿಪ್ತವಾಗಿ ತ್ಯಜಿಸಿ, ನಿತ್ಯ ತೃಪ್ತ, ಅವಲಂಬನರಹಿತವಾಗಿ, ಅವನು ಕರ್ಮಗಳಲ್ಲಿ ಪ್ರವೃತ್ತ ಆಗಿದ್ದರೂ ಏನನ್ನೂ ಮಾಡುುವುದಿಲ್ಲ.",
        "explanation": "The enlightened person acts without ego involvement or expectation of results, remaining internally free despite external activity.",
        "categories": ["detachment", "action", "contentment", "liberation"]
    },
    {
        "verse_number": "4.21",
        "sanskrit": "निराशीर्यतचित्तात्मा त्यक्तसर्वपरिग्रहः ।\nशारीरं केवलं कर्म कुर्वन्नाप्नोति किल्बिषम्",
        "english": "Without hope, with the mind and Self controlled, having abandoned all possessions, doing mere bodily action, he incurs no sin.",
        "hindi": "आशा रहित, मन और आत्मा को नियंत्रित करके, सभी संपत्ति को त्यागकर, केवल शारीरिक कर्म करते हुए, वह पाप में नहीं फँसता।",
        "kannada": "ಆಶಾರಹಿತವಾಗಿ, ಮನ ಮತ್ತು ಆತ್ಮವನ್ನು ನಿಯಂತ್ರಿಸಿ, ಎಲ್ಲಾ ಸೋತ್ತೆಯನ್ನು ತ್ಯಾಗ ಮಾಡಿ, ಕೇವಲ ದೈಹಿಕ ಕರ್ಮ ಮಾಡುವುದರಿಂದ, ಅವನು ಪಾಪ ಮುನಿಮೋಡರುವುದಿಲ್ಲ.",
        "explanation": "One who renounces possessions, hopes, and ego while performing necessary duties remains unburdened by karmic consequences.",
        "categories": ["renunciation", "controlled-mind", "sin", "purity"]
    },
    {
        "verse_number": "4.22",
        "sanskrit": "यदृच्छालाभसन्तुष्टो द्वन्द्वातीतो विमत्सरः ।\nसमः सिद्धावसिद्धौ च कृत्वापि न निबध्यते",
        "english": "Content with what comes to him without effort, free from the pairs-of-opposites and envy, even-minded in success and failure, though acting he is not bound.",
        "hindi": "जो बिना प्रयास के मिले उससे संतुष्ट, द्वैत से मुक्त, ईर्ष्या रहित, सफलता और असफलता में समदृष्टि रखते हुए, कर्म करने पर भी बँधा नहीं होता।",
        "kannada": "ಯಾವುದೋ ಪ್ರಯತ್ನವಿಲ್ಲದೆ ಪ್ರಾಪ್ತವಿದ್ದರೆ ತೃಪ್ತ, ದ್ವೈತದಿಂದ ಮುಕ್ತ, ಈರ್ಷ್ಯಾರಹಿತ, ಸಫಲತೆ ಮತ್ತು ವಿಫಲತೆಯಲ್ಲಿ ಸಮದೃಷ್ಟಿ, ಕರ್ಮ ಮಾಡಿದರೂ ಬಂಧಿತನಾಗುವುದಿಲ್ಲ.",
        "explanation": "The wise person remains unmoved by opposites like success/failure, joy/sorrow, and maintains equanimity in all circumstances.",
        "categories": ["equanimity", "detachment", "freedom", "duality"]
    },
    {
        "verse_number": "4.23",
        "sanskrit": "गतसङ्गस्य मुक्तस्य ज्ञानावस्थितचेतसः ।\nयज्ञायाचरतः कर्म समग्रं प्रविलीयते",
        "english": "Of one who is devoid of attachment, who is liberated, whose mind is established in knowledge, who acts for the sake of sacrifice, all his actions are dissolved.",
        "hindi": "जो आसक्ति से रहित, मुक्त, ज्ञान में स्थित मन वाला, यज्ञ के लिए कर्म करता है, उसके सभी कर्म विलीन हो जाते हैं।",
        "kannada": "ಯಾರು ಆಸಕ್ತಿಯಿಂದ ರಹಿತ, ಮುಕ್ತ, ಜ್ಞಾನದಲ್ಲಿ ಸ್ಥಿರ ಮನ, ತ್ಯಾಗಕ್ಕಾಗಿ ಕರ್ಮ ಮಾಡುತ್ತಾರೆ, ಅವರ ಎಲ್ಲಾ ಕರ್ಮಗಳು ವಿಲೀನ ಆಗುತ್ತವೆ.",
        "explanation": "When actions are performed in a spirit of selfless service and sacrifice, they lose their binding power on the soul.",
        "categories": ["sacrifice", "liberation", "spiritual-knowledge", "dissolution"]
    },
    {
        "verse_number": "4.24",
        "sanskrit": "ब्रह्मार्पणं ब्रह्म हविर्ब्रह्माग्नौ ब्रह्मणा हुतम् ।\nब्रह्मैव तेन गन्तव्यं ब्रह्मकर्मसमाधिना",
        "english": "BRAHMAN is the oblation; BRAHMAN is the clarified butter, etc., constituting the offerings; by BRAHMAN is the oblation poured into the fire of BRAHMAN; BRAHMAN verily shall be reached by him who always sees BRAHMAN in all actions.",
        "hindi": "ब्रह्म ही अर्पण है, ब्रह्म ही हवि है, ब्रह्म ही अग्नि है, ब्रह्म ही पूजक है। ब्रह्मकर्मसमाधि में जो सदा ब्रह्म को देखता है, वह ब्रह्म को ही प्राप्त होता है।",
        "kannada": "ಬ್ರಹ್ಮವೇ ನೈವೇದ್ಯ, ಬ್ರಹ್ಮವೇ ಘೃತ, ಬ್ರಹ್ಮವೇ ಅಗ್ನಿ, ಬ್ರಹ್ಮವೇ ಯಾಗ. ಯಾರು ಬ್ರಹ್ಮಕರ್ಮಸಮಾಧಿಯಲ್ಲಿ ಸದಾ ಬ್ರಹ್ಮವನ್ನು ನೋಡುತ್ತಾರೆ, ಅವರು ಬ್ರಹ್ಮನನ್ನೇ ಪಡೆಯುತ್ತಾರೆ.",
        "explanation": "When every aspect of a ritual (or action) is seen as an expression of ultimate reality, the entire action becomes a meditation on the divine.",
        "categories": ["brahman", "sacrifice", "non-duality", "meditation"]
    },
    {
        "verse_number": "4.25",
        "sanskrit": "दैवमेवापरे यज्ञं योगिनः पर्युपासते ।\nब्रह्माग्नावपरे यज्ञं यज्ञेनैवोपजुह्वति",
        "english": "Some YOGIS perform sacrifice to DEVAS alone (DEVA-YAJNA); while others offer sacrifice as sacrifice by the Self in the Fire of BRAHMAN (BRAHMA-YAJNA).",
        "hindi": "कुछ योगी देवताओं को यज्ञ करते हैं, जबकि अन्य ब्रह्मरूप में आत्मा द्वारा आत्मा को ही अर्पित करते हैं।",
        "kannada": "ಕೆಲವು ಯೋಗಿಗಳು ನೈವೇದ್ಯವನ್ನು ದೇವತೆಗಳಿಗೆ ನೈವೇದ್ಯ ಮಾಡುತ್ತಾರೆ; ಇತರರು ಬ್ರಹ್ಮನಲ್ಲಿ ಆತ್ಮನಿರ್ಭರ ನೈವೇದ್ಯ ಮಾಡುತ್ತಾರೆ.",
        "explanation": "There are different forms of sacrifice reflecting different spiritual levels and approaches on the path to realization.",
        "categories": ["sacrifice", "yoga", "devotion", "paths"]
    },
    {
        "verse_number": "4.26",
        "sanskrit": "श्रोत्रादीनीन्द्रियाण्यन्ये संयमाग्निषु जुह्वति ।\nशब्दादीन्विषयानन्य इन्द्रियाग्निषु जुह्वति",
        "english": "Some again offer hearing and other senses as sacrifice in the fires-of-restraint; others offer sound and other objects of sense as sacrifice in the fires-of-the-senses.",
        "hindi": "कुछ लोग श्रवण और अन्य इन्द्रियों को संयम की अग्नि में समर्पित करते हैं; अन्य शब्द और इन्द्रियों के विषयों को इन्द्रियों की अग्नि में समर्पित करते हैं।",
        "kannada": "ಕೆಲವು ಜನರು ಶ್ರವಣ ಮತ್ತು ಇತರ ಇಂದ್ರಿಯಗಳನ್ನು ಸಂಯಮ-ಅಗ್ನಿಯಲ್ಲಿ ಅರ್ಪಿಸುತ್ತಾರೆ; ಇತರರು ಶಬ್ದ ಮತ್ತು ಇತರ ಇಂದ್ರಿಯ-ವಸ್ತುಗಳನ್ನು ಇಂದ್ರಿಯ-ಅಗ್ನಿಯಲ್ಲಿ ಅರ್ಪಿಸುತ್ತಾರೆ.",
        "explanation": "Spiritual practice involves offering the senses and sense-objects to higher consciousness through discipline and restraint.",
        "categories": ["sacrifice", "senses", "restraint", "spiritual-practice"]
    },
    {
        "verse_number": "4.27",
        "sanskrit": "सर्वाणीन्द्रियकर्माणि प्राणकर्माणि चापरे ।\nआत्मसंयमयोगाग्नौ जुह्वति ज्ञानदीपिते",
        "english": "Others again sacrifice all the functions of the senses and the functions of the breath (vital energy) in the fire of the YOGA of self-restraint, kindled by knowledge.",
        "hindi": "अन्य लोग सभी इन्द्रियों के कार्यों और प्राण को आत्मसंयम योग की अग्नि में समर्पित करते हैं, जो ज्ञान से प्रकाशित है।",
        "kannada": "ಇತರ ಜನರು ಎಲ್ಲಾ ಇಂದ್ರಿಯ-ಕಾರ್ಯಗಳು ಮತ್ತು ಪ್ರಾಣವನ್ನು ಆತ್ಮ-ಸಂಯಮ-ಯೋಗ-ಅಗ್ನಿಯಲ್ಲಿ ಅರ್ಪಿಸುತ್ತಾರೆ, ಇದು ಜ್ಞಾನದಿಂದ ಪ್ರಕಾಶಿತವಾಗಿದೆ.",
        "explanation": "Advanced practice involves surrendering all vital functions and sensory activities to the fire of self-conscious spiritual discipline.",
        "categories": ["sacrifice", "yoga", "breath", "knowledge"]
    },
    {
        "verse_number": "4.28",
        "sanskrit": "द्रव्ययज्ञास्तपोयज्ञा योगयज्ञास्तथापरे ।\nस्वाध्यायज्ञानयज्ञाश्च यतयः संशितव्रताः",
        "english": "Others again offer wealth, austerity and YOGA as sacrifice, while the ascetics of self-restraint and rigid vows offer study of scriptures and knowledge as sacrifice.",
        "hindi": "अन्य लोग धन, तपस्या और योग को यज्ञ के रूप में अर्पित करते हैं, जबकि आत्मसंयमी तपस्वी शास्त्र का अध्ययन और ज्ञान को यज्ञ के रूप में अर्पित करते हैं।",
        "kannada": "ಇತರ ಜನರು ಸಂಪತ್ತು, ತಪಸ್ಯೆ ಮತ್ತು ಯೋಗವನ್ನು ಯಜ್ಞ ರೂಪದಲ್ಲಿ ಅರ್ಪಿಸುತ್ತಾರೆ, ಆದರೆ ಆತ್ಮ-ನಿಯಂತ್ರಿತ ತಪಸ್ವಿಗಳು ಶಾಸ್ತ್ರ ಅಧ್ಯಯನ ಮತ್ತು ಜ್ಞಾನವನ್ನು ಯಜ್ಞ ರೂಪದಲ್ಲಿ ಅರ್ಪಿಸುತ್ತಾರೆ.",
        "explanation": "Different forms of spiritual practice—wealth offering, austerities, yoga, and knowledge—all serve as sacrifices on the path to realization.",
        "categories": ["sacrifice", "austerity", "study", "knowledge"]
    },
    {
        "verse_number": "4.29",
        "sanskrit": "अपाने जुह्वति प्राणं प्राणेऽपानं तथापरे ।\nप्राणापानगती रुद्ध्वा प्राणायामपरायणाः",
        "english": "Others offer as sacrifice the out-going breath in the in-coming, and the in-coming in the out-going, restraining the courses of the out-going and in-coming breaths, solely absorbed in the restraint of breath.",
        "hindi": "कुछ लोग बाहर जाने वाले प्राण को अंदर आने वाले प्राण में और अंदर आने वाले को बाहर जाने वाले में समर्पित करते हैं, और प्राणायाम में पूर्ण रूप से संलग्न रहते हैं।",
        "kannada": "ಕೆಲವು ಜನರು ನಿರ್ಗಮನ ಪ್ರಾಣವನ್ನು ಪ್ರವೇಶನ ಪ್ರಾಣದಲ್ಲಿ ಮತ್ತು ಪ್ರವೇಶನವನ್ನು ನಿರ್ಗಮನದಲ್ಲಿ ಅರ್ಪಿಸುತ್ತಾರೆ, ಪ್ರಾಣಾಯಾಮದಲ್ಲಿ ಸಂಪೂರ್ಣವಾಗಿ ನಿಮಗ್ನ ಆಗಿದ್ದಾರೆ.",
        "explanation": "Pranayama practices regulate the vital life force and represent a complete sacrifice of bodily functions to consciousness.",
        "categories": ["pranayama", "breath", "sacrifice", "vital-energy"]
    },
    {
        "verse_number": "4.30",
        "sanskrit": "अपरे नियताहाराः प्राणान्प्राणेषु जुह्वति ।\nसर्वेऽप्येते यज्ञविदो यज्ञक्षपितकल्मषाः",
        "english": "Others, with well-regulated diet, offer vital-airs in the Vital-Air. All these are knowers of sacrifice, whose sins are destroyed by sacrifice.",
        "hindi": "अन्य लोग नियंत्रित भोजन के साथ प्राण को प्राण में समर्पित करते हैं। ये सभी यज्ञ को जानने वाले हैं, जिनके पाप यज्ञ से नष्ट हो गए हैं।",
        "kannada": "ಇತರ ಜನರು ನಿಯಂತ್ರಿತ ಆಹಾರದೊಂದಿಗೆ ಪ್ರಾಣವನ್ನು ಪ್ರಾಣದಲ್ಲಿ ಅರ್ಪಿಸುತ್ತಾರೆ. ಇವರೆಲ್ಲಾ ಯಜ್ಞ-ಜ್ಞಾನಿಗಳು, ಯಜ್ಞದಿಂದ ಪಾಪಮುಕ್ತರಾದವರು.",
        "explanation": "All forms of sacrifice—when performed with proper understanding—purify the performer and destroy accumulated sins.",
        "categories": ["sacrifice", "diet", "regulation", "purification"]
    },
    {
        "verse_number": "4.31",
        "sanskrit": "यज्ञशिष्टामृतभुजो यान्ति ब्रह्म सनातनम् ।\nनायं लोकोऽस्त्ययज्ञस्य कुतोऽन्यः कुरुसत्तम",
        "english": "The eaters of the nectar --- remnant of the sacrifice --- go to the Eternal BRAHMAN. Even this world is not for the non-performer of sacrifice; how then the other (world), O best of the Kurus?",
        "hindi": "यज्ञ के अवशेष को खाने वाले नेक्टर को ब्रह्म को प्राप्त होते हैं। जो यज्ञ नहीं करते, उनके लिए यह लोक भी नहीं है; फिर परलोक कैसे हो सकता है, हे कुरुश्रेष्ठ?",
        "kannada": "ಯೋಗದ ಅವಶೇಷ ನೆಕ್ತರ ಸೇವಿಸುವವರು ಸನಾತನ ಬ್ರಹ್ಮನನ್ನು ಪಡೆಯುತ್ತಾರೆ. ಯಜ್ಞ ಮಾಡದೀರ ಇಹಲೋಕವೂ ಪಡೆಯುವುದಿಲ್ಲ; ಪರಲೋಕವಿದ್ಯಾ? ಹೇ ಕುರುಶ್ರೇಷ್ಠ.",
        "explanation": "Those who perform sacrifice experience both worldly and spiritual benefits. Non-sacrifice brings neither.",
        "categories": ["sacrifice", "brahman", "karma", "consequence"]
    },
    {
        "verse_number": "4.32",
        "sanskrit": "एवं बहुविधा यज्ञा वितता ब्रह्मणो मुखे ।\nकर्मजान्विद्धि तान्सर्वानेवं ज्ञात्वा विमोक्ष्यसे",
        "english": "Thus innumerable sacrifices lie spread out before BRAHMAN --- (literally at the mouth or face of BRAHMAN) --- Know them all as born of action, and thus knowing, you shall be liberated.",
        "hindi": "इस प्रकार अनेक यज्ञ ब्रह्म के सामने फैले हुए हैं। इन सभी को कर्म से जन्मा हुआ जानो, और ऐसा जानकर तुम मुक्त हो जाओगे।",
        "kannada": "ಅನೇಕ ಯೋಗಗಳು ಬ್ರಹ್ಮನ ಮುಂದೆ ವಿಸ್ತೃತವಾಗಿವೆ. ಇವುಗಳೆಲ್ಲವೂ ಕರ್ಮದಿಂದ ಜನ್ಮಿತವೆಂದು ತಿಳಿದುಕೊಳ್ಳಿ, ಮತ್ತು ಅಂತೆ ತಿಳಿದುಕೊಂಡು ನೀವು ವಿಮುಕ್ತರಾಗುವಿರಿ.",
        "explanation": "All forms of sacrifice are manifestations of karma-based actions. Understanding their nature leads to liberation.",
        "categories": ["sacrifice", "karma", "liberation", "action"]
    },
    {
        "verse_number": "4.33",
        "sanskrit": "श्रेयान्द्रव्यमयाद्यज्ञाज्ज्ञानयज्ञः परन्तप ।\nसर्वं कर्माखिलं पार्थ ज्ञाने परिसमाप्यते",
        "english": "Superior is knowledge-sacrifice to Sacrifice-with-objects O Parantapa. All actions in their entirety, O Partha, culminate in Knowledge.",
        "hindi": "हे परन्तप, ज्ञान-यज्ञ द्रव्य-यज्ञ से श्रेष्ठ है। हे पार्थ, सभी कर्म ज्ञान में पूर्ण होते हैं।",
        "kannada": "ಹೇ ಪರಂತಪ, ಜ್ಞಾನ-ಯೋಗ ದ್ರವ್ಯ-ಯೋಗಕ್ಕಿಂತ ಶ್ರೇಷ್ಠ. ಹೇ ಪಾರ್ಥ, ಎಲ್ಲಾ ಕರ್ಮಗಳು ಜ್ಞಾನದಲ್ಲಿ ಪೂರಿತವಾಗುತ್ತವೆ.",
        "explanation": "While all forms of sacrifice are valuable, knowledge is the ultimate sacrifice and the culmination of all action.",
        "categories": ["knowledge", "sacrifice", "wisdom", "action"]
    },
    {
        "verse_number": "4.34",
        "sanskrit": "तद्विद्धि प्रणिपातेन परिप्रश्नेन सेवया ।\nउपदेक्ष्यन्ति ते ज्ञानं ज्ञानिनस्तत्त्वदर्शिनः",
        "english": "Know that by long prostration, by question, and service, the wise who have realised the Truth will instruct you in (that) Knowledge",
        "hindi": "जानो कि प्रणाम, प्रश्न और सेवा के द्वारा, जो ज्ञानी सत्य को देखते हैं, वे तुम्हें ज्ञान सिखाएँगे।",
        "kannada": "ತಿಳಿಯಿರಿ ಅದುಮುಂದೆ, ಪ್ರಶ್ನೆಯಿಂದ ಮತ್ತು ಸೇವೆಯಿಂದ, ಸತ್ಯವನ್ನು ನೋಡಿದ ಜ್ನಾನಿಗಳು ನಿಮಗೆ ಜ್ಞಾನವನ್ನು ಕಲಿಸುತ್ತಾರೆ.",
        "explanation": "Acquiring spiritual knowledge requires approaching enlightened teachers with humility, sincere inquiry, and devoted service.",
        "categories": ["teacher", "humility", "learning", "transmission"]
    },
    {
        "verse_number": "4.35",
        "sanskrit": "यज्ज्ञात्वा न पुनर्मोहमेवं यास्यसि पाण्डव ।\nयेन भूतान्यशेषेण द्रक्ष्यस्यात्मन्यथो मयि",
        "english": "Knowing that, you shall not, O Pandava, again get deluded like this; and by that, you shall see all beings in your Self, and also in Me.",
        "hindi": "उस ज्ञान को जानकर, हे पाण्डव, तुम पुनः इस तरह भ्रमित नहीं होगे; और उससे तुम सभी प्राणियों को अपने आत्मा में और मुझ में देखोगे।",
        "kannada": "ಆ ಜ್ಞಾನವನ್ನು ತಿಳಿದುಕೊಂಡು, ಹೇ ಪಾಂಡವ, ನೀವು ಪುನರಾವೃತ್ತಿ ಈ ರೀತಿ ಭ್ರಮಿತರಾಗುವುದಿಲ್ಲ; ಮತ್ತು ಅದರ ಮೂಲಕ ನೀವು ಎಲ್ಲಾ ಜೀವಿಗಳನ್ನು ನಿಮ್ಮ ಆತ್ಮದಲ್ಲಿ ಮತ್ತು ನನ್ನಲ್ಲಿ ನೋಡುವಿರಿ.",
        "explanation": "With this knowledge, confusion ceases, and one perceives the divine reality pervading all beings and oneself.",
        "categories": ["knowledge", "liberation", "non-duality", "truth"]
    },
    {
        "verse_number": "4.36",
        "sanskrit": "अपि चेदसि पापेभ्यः सर्वेभ्यः पापकृत्तमः ।\nसर्वं ज्ञानप्लवेनैव वृजिनं सन्तरिष्यसि",
        "english": "Even if you are the most sinful of all sinners, yet you shall verily cross all sins by the raft of Knowledge.",
        "hindi": "यदि तुम सभी पापियों में सबसे बड़े पापी भी हो, फिर भी ज्ञान की नौका से सभी पापों को पार कर जाओगे।",
        "kannada": "ನೀವು ಎಲ್ಲಾ ಪಾಪಿಗಳಲ್ಲಿ ದೊಡ್ಡ ಪಾಪಿ ಆಗಿದ್ದರೂ, ಜ್ಞಾನದ ನೌಕೆಯಿಂದ ಎಲ್ಲಾ ಪಾಪಗಳನ್ನು ದಾಟಿ ಹೋಗುವಿರಿ.",
        "explanation": "Knowledge is the greatest purifier. No matter how great one's past transgressions, wisdom can absolve them completely.",
        "categories": ["knowledge", "purification", "sin", "redemption"]
    },
    {
        "verse_number": "4.37",
        "sanskrit": "यथैधांसि समिद्धोऽग्निर्भस्मसात्कुरुतेऽर्जुन ।\nज्ञानाग्निः सर्वकर्माणि भस्मसात्कुरुते तथा",
        "english": "As the blazing fire reduces fuel to ashes, O Arjuna, so does the Fire-of-Knowledge reduce all actions to ashes.",
        "hindi": "जैसे जलती हुई आग ईंधन को राख में बदल देती है, हे अर्जुन, वैसे ही ज्ञान की अग्नि सभी कर्मों को राख में बदल देती है।",
        "kannada": "ಬೆಂಕಿಯು ಇಂಧನವನ್ನು ಸುಟ್ಟು ಭಸ್ಮಗೊಳಿಸಿ ಹಾಕುವುದೆ, ಹೇ ಅರ್ಜುನ, ಜ್ಞಾನಾಗ್ನಿ ಎಲ್ಲಾ ಕರ್ಮಗಳನ್ನು ಭಸ್ಮಗೊಳಿಸಿ ಹಾಕುತ್ತದೆ.",
        "explanation": "Just as fire consumes all combustible material, the fire of knowledge burns away all karmic impressions and traces of past actions.",
        "categories": ["knowledge", "karma", "purification", "transformation"]
    },
    {
        "verse_number": "4.38",
        "sanskrit": "न हि ज्ञानेन सदृशं पवित्रमिह विद्यते ।\nतत्स्वयं योगसंसिद्धः कालेनात्मनि विन्दति",
        "english": "Certainly, there is no purifier in this world like Knowledge. He who is himself perfected in YOGA finds it in the Self in time.",
        "hindi": "निश्चित रूप से, इस दुनिया में ज्ञान जैसा कोई पवित्रकारक नहीं है। जो स्वयं योग में सिद्ध होता है, वह समय में अपने आत्मा में इसे पाता है।",
        "kannada": "ಸೂರಕ್ಷಿತವಾಗಿ, ಈ ಲೋಕದಲ್ಲಿ ಜ್ಞಾನದಂತೆ ಶುದ್ಧಿಕರ ಯಾವದೂ ಇಲ್ಲ. ಯೋಗದಲ್ಲಿ ಸಿದ್ಧರಾದವನು ಕಾಲಿನಲ್ಲಿ ತನ್ನ ಆತ್ಮದಲ್ಲಿ ಅದನ್ನು ಕಾಂಡುತ್ತಾನೆ.",
        "explanation": "Knowledge is the supreme purifier, and one who practices yoga diligently will naturally discover this liberating wisdom within themselves.",
        "categories": ["knowledge", "yoga", "purification", "self-realization"]
    },
    {
        "verse_number": "4.39",
        "sanskrit": "श्रद्धावाँल्लभते ज्ञानं तत्परः संयतेन्द्रियः ।\nज्ञानं लब्ध्वा परां शान्तिमचिरेणाधिगच्छति",
        "english": "The man who is full of faith, who is devoted to It, and who has subdued the senses, obtains (this) Knowledge; and having obtained Knowledge, ere long he goes to the Supreme Peace.",
        "hindi": "श्रद्धा से पूर्ण, इसके लिए समर्पित और इन्द्रियों को नियंत्रित करने वाला व्यक्ति ज्ञान प्राप्त करता है; और ज्ञान प्राप्त करके, शीघ्र ही परम शान्ति को प्राप्त होता है।",
        "kannada": "ಶ್ರದ್ಧೆಯಿಂದ ಪೂಾಾೆದವನು, ಅದಕ್ಕೆ ಸಮರ್ಪಿತನೈದವನು ಮತ್ತು ಇಂದ್ರಿಯಗಳನ್ನು ನಿಯಂತ್ರಿಸಿದವನು ಜ್ಞಾನವನ್ನು ಪ್ರಾಪ್ತ ಮಾಡುತ್ತಾನೆ; ಮತ್ತು ಜ್ಞಾನ ಪ್ರಾಪ್ತ ಮಾಡಿದ ನಂತರ, ಶೀಘ್ರವೇ ಪರಮ ಶಾಂತಿಯನ್ನು ಪ್ರಾಪ್ತ ಮಾಡುತ್ತಾನೆ.",
        "explanation": "Faith, devotion, and sensory discipline are prerequisites for acquiring knowledge, which naturally leads to lasting inner peace.",
        "categories": ["faith", "devotion", "knowledge", "peace"]
    },
    {
        "verse_number": "4.40",
        "sanskrit": "अज्ञश्चाश्रद्दधानश्च संशयात्मा विनश्यति ।\nनायं लोकोऽस्ति न परो न सुखं संशयात्मनः",
        "english": "The ignorant, the faithless, the doubting-self goes to destruction; there is neither this world, nor the other, nor happiness for the doubter.",
        "hindi": "अज्ञानी, श्रद्धा रहित और संदेहशील आत्मा विनाश को प्राप्त होती है; संदेहशील के लिए न यह लोक है, न परलोक, न ही सुख है।",
        "kannada": "ಅಜ್ಞಾನಿ, ಶ್ರದ್ಧಾಹೀನ ಮತ್ತು ಸಂಶಯಾತ್ಮ ವ್ಯಕ್ತಿ ನಾಶವನ್ನು ಪ್ರಾಪ್ತ ಮಾಡುತ್ತಾನೆ; ಸಂಶಯಶೀಲನ ಜೀವನದಲ್ಲಿ ಇಹಲೋಕ, ಪರಲೋಕ ಅಥವಾ ಸುಖವೂ ಇಲ್ಲ.",
        "explanation": "Those who lack knowledge, faith, and certainty are trapped in confusion and experience suffering in both worlds.",
        "categories": ["ignorance", "doubt", "destruction", "suffering"]
    },
    {
        "verse_number": "4.41",
        "sanskrit": "योगसंन्यस्तकर्माणं ज्ञानसञ्छिन्नसंशयम् ।\nआत्मवन्तं न कर्माणि निबध्नन्ति धनञ्जय",
        "english": "He who has renounced actions by YOGA, whose doubts are rent asunder by Knowledge, who is self-possessed, actions do not bind him, O Dhananjaya.",
        "hindi": "जिसने योग द्वारा कर्मों का त्याग किया है, जिसके संदेह ज्ञान से नष्ट हो गए हैं, जो आत्मवान है, कर्म उसे नहीं बाँधते, हे धनंजय।",
        "kannada": "ಯೋಗದಿಂದ ಕರ್ಮಗಳನ್ನು ತ್ಯಜಿಸಿದವನು, ಜ್ಞಾನದಿಂದ ಸಂಶಯಯುಕ್ತನಿಂದ ಮುಕ್ತನಾದವನು, ಆತ್ಮವಿದ್ವಾನು, ಕರ್ಮಗಳು ಅವನನ್ನು ಬಿಂದುವುದಿಲ್ಲ, ಹೇ ಧನಂಜಯ.",
        "explanation": "When one surrenders actions through yoga practice and resolves all doubts through wisdom, karmic bondage is transcended.",
        "categories": ["yoga", "knowledge", "renunciation", "freedom"]
    },
    {
        "verse_number": "4.42",
        "sanskrit": "तस्मादज्ञानसम्भूतं हृत्स्थं ज्ञानासिनात्मनः ।\nछित्त्वैनं संशयं योगमातिष्ठोत्तिष्ठ भारत",
        "english": "Therefore with the sword-of-Knowledge, cut asunder the doubt-of-the-Self, born of ignorance, residing in your heart, and take refuge in YOGA. Arise O Bharata.",
        "hindi": "इसलिए ज्ञान की तलवार से अपने हृदय में रहने वाले अज्ञान से जन्मे संदेह को काट और योग में शरण लो। उठो, हे भारत।",
        "kannada": "ಆದ್ದರಿಂದ ಜ್ಞಾನಾಸಿಯಿಂದ ನಿಮ್ಮ ಹೃದಯದಲ್ಲಿ ವಾಸಮಾಡುವ ಅಜ್ಞಾನದಿಂದ ಜನ್ಮಿತ ಸಂಶಯವನ್ನು ಛಿದ್ರ ಮಾಡಿ ಮತ್ತು ಯೋಗದಿಂದ ಶರಣ ತೆಗೆದುಕೊಳ್ಳಿ. ಎದ್ದೇರಿ, ಹೇ ಭಾರತ.",
        "explanation": "This is Krishna's final exhortation in Chapter 4: use the weapon of knowledge to destroy doubt and embrace the path of yoga with commitment.",
        "categories": ["knowledge", "yoga", "action", "awakening"]
    }
]

# Update JSON file
json_path = Path("data/bhagavad_gita_shlokas.json")

with open(json_path, 'r', encoding='utf-8') as f:
    data = json.load(f)

# Find and update Chapter 4
for chapter in data['chapters']:
    if chapter['chapter_number'] == 4:
        chapter['shlokas'] = CHAPTER_4_VERSES
        chapter['total_shlokas'] = len(CHAPTER_4_VERSES)
        chapter['chapter_summary'] = "This chapter unites the paths of knowledge and action. Krishna reveals how divine wisdom transforms ordinary work into a means of liberation. He declares that he incarnates whenever righteousness declines, affirming that the divine takes form to restore balance. The teaching widens the concept of sacrifice — showing that inner understanding, not ritual, sanctifies life. Knowledge burns away ignorance and turns all action into worship."
        chapter['chapter_summary_detailed'] = "Arjuna, puzzled, asks how Krishna — who appears human — could have taught this wisdom to ancient seers. Krishna reveals that while his body is subject to time, his consciousness is eternal; he manifests age after age to protect the good and destroy evil. He teaches that the wise act without attachment, understanding that the Self is untouched by action. Those deluded by ignorance identify themselves as doers and thus become bound. Krishna describes diverse sacrifices — austerity, charity, study, and meditation — to show that spiritual life has many doors, but all aim at purification and self-knowledge. He concludes by emphasizing that knowledge is the greatest purifier. Just as fire reduces wood to ash, the fire of wisdom consumes all past karma. The seeker must approach the realized teacher with humility and devotion; through such contact, ignorance is dispelled and peace attained."
        break

# Update total count
total_shlokas = 0
for chapter in data['chapters']:
    if 1 <= chapter['chapter_number'] <= 18:
        total_shlokas += len(chapter.get('shlokas', []))

data['metadata']['total_shlokas'] = total_shlokas

# Save updated file
with open(json_path, 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print("✓ Chapter 4 - All 42 shlokas added successfully!")
print(f"\nVerification:")
print("=" * 70)
for chapter in data['chapters']:
    if chapter['chapter_number'] == 4:
        print(f"Chapter 4: {len(chapter['shlokas'])} verses")
        print(f"Verses: 4.1 to 4.{len(chapter['shlokas'])}")
print("=" * 70)
print(f"Total shlokas in database: {total_shlokas}")
print(f"\n✓ Your JSON file is ready! Chapter 4 now has complete 42 verses.")
