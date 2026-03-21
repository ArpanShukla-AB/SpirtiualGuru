"""
Parser to convert Gita sholka text to structured JSON format.
This script helps organize the raw sholka data into proper JSON structure.
"""

import json
import re
from pathlib import Path

def parse_sholka_text(raw_text):
    """
    Parse raw sholka text and extract structured data.
    Expected format includes: verse number, Sanskrit, transliteration, translation, meanings
    """
    shlokas = []
    
    # Split by verse numbers (e.g., "3-1", "3-2")
    verse_pattern = r'(\d+-\d+)\n'
    verses = re.split(verse_pattern, raw_text)
    
    # Process pairs of (verse_number, verse_content)
    for i in range(1, len(verses), 2):
        if i + 1 < len(verses):
            verse_num = verses[i]
            content = verses[i + 1]
            
            # Parse content sections
            try:
                # Split by common section headers
                parts = content.split('\n\n')
                
                sholka_dict = {
                    "id": verse_num,
                    "chapter": int(verse_num.split('-')[0]),
                    "verse": int(verse_num.split('-')[1]),
                    "sanskrit": "",
                    "transliteration": "",
                    "translation": "",
                    "word_meanings": ""
                }
                
                # This is a template - you'll need to refine parsing based on actual format
                if len(parts) > 0:
                    sholka_dict["sanskrit"] = parts[0].strip()
                if len(parts) > 1:
                    sholka_dict["translation"] = parts[1].strip()
                
                shlokas.append(sholka_dict)
            except Exception as e:
                print(f"Error parsing verse {verse_num}: {e}")
    
    return shlokas

def load_existing_json(filepath):
    """Load existing JSON file to maintain structure."""
    if Path(filepath).exists():
        with open(filepath, 'r', encoding='utf-8') as f:
            return json.load(f)
    return {"chapters": {}}

def save_to_json(data, filepath):
    """Save data to JSON file."""
    with open(filepath, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    print(f"Data saved to {filepath}")

# Usage example
if __name__ == "__main__":
    json_path = "data/bhagavad_gita_shlokas.json"
    
    # Load existing structure
    gita_data = load_existing_json(json_path)
    
    print("Parser initialized. Load your raw sholka text and use parse_sholka_text() function.")
