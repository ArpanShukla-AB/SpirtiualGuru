#!/usr/bin/env python3
"""
Integration script for adding Bhagavad Gita chapters 3-10 to the main JSON file.

This script helps you:
1. Parse verse data from formatted text
2. Convert to proper JSON structure matching your existing schema
3. Merge into your main bhagavad_gita_shlokas.json file
4. Validate the integrity of the final JSON
"""

import json
import os
from pathlib import Path
from typing import Dict, List, Any
import re

class GitaIntegrator:
    """Handles integration of Gita shlokas into the main JSON file."""
    
    def __init__(self, base_path: str = "/Users/arpanshukla/Desktop/OS/Spiritual Gita"):
        self.base_path = Path(base_path)
        self.data_dir = self.base_path / "data"
        self.main_json_path = self.data_dir / "bhagavad_gita_shlokas.json"
        self.template_path = self.base_path / "chapters_3_to_10_template.json"
        
    def load_main_json(self) -> Dict[str, Any]:
        """Load the existing Gita JSON file."""
        if not self.main_json_path.exists():
            raise FileNotFoundError(f"Main JSON file not found: {self.main_json_path}")
        
        with open(self.main_json_path, 'r', encoding='utf-8') as f:
            return json.load(f)
    
    def load_template(self) -> Dict[str, Any]:
        """Load the chapter template."""
        if not self.template_path.exists():
            raise FileNotFoundError(f"Template file not found: {self.template_path}")
        
        with open(self.template_path, 'r', encoding='utf-8') as f:
            return json.load(f)
    
    def create_shloka_entry(self, 
                           verse_number: str,
                           sanskrit: str,
                           english: str,
                           hindi: str = "",
                           kannada: str = "",
                           explanation: str = "",
                           categories: List[str] = None) -> Dict[str, Any]:
        """Create a shloka entry matching the existing schema."""
        return {
            "verse_number": verse_number,
            "sanskrit": sanskrit,
            "english": english,
            "hindi": hindi,
            "kannada": kannada,
            "explanation": explanation,
            "categories": categories or []
        }
    
    def parse_verse_from_text(self, verse_text: str) -> Dict[str, str]:
        """
        Parse a formatted verse text block.
        
        Expected format:
        Verse X.Y
        Sanskrit: ...
        Transliteration: ...
        English: ...
        Hindi: ...
        Kannada: ...
        Explanation: ...
        Categories: ...
        """
        result = {
            'verse_number': '',
            'sanskrit': '',
            'english': '',
            'hindi': '',
            'kannada': '',
            'explanation': '',
            'categories': []
        }
        
        lines = verse_text.strip().split('\n')
        
        for line in lines:
            if line.startswith('Verse '):
                result['verse_number'] = line.replace('Verse ', '').strip()
            elif line.startswith('Sanskrit:'):
                result['sanskrit'] = line.replace('Sanskrit:', '').strip()
            elif line.startswith('English:'):
                result['english'] = line.replace('English:', '').strip()
            elif line.startswith('Hindi:'):
                result['hindi'] = line.replace('Hindi:', '').strip()
            elif line.startswith('Kannada:'):
                result['kannada'] = line.replace('Kannada:', '').strip()
            elif line.startswith('Explanation:'):
                result['explanation'] = line.replace('Explanation:', '').strip()
            elif line.startswith('Categories:'):
                cats = line.replace('Categories:', '').strip()
                result['categories'] = [c.strip() for c in cats.split(',')]
        
        return result
    
    def add_chapter_shlokas(self, 
                           data: Dict[str, Any],
                           chapter_num: int,
                           shlokas: List[Dict[str, str]]) -> Dict[str, Any]:
        """Add shlokas to a specific chapter."""
        if 'chapters' not in data:
            data['chapters'] = []
        
        # Find or create chapter
        chapter = None
        for ch in data['chapters']:
            if ch.get('chapter_number') == chapter_num:
                chapter = ch
                break
        
        if chapter is None:
            # Create new chapter if it doesn't exist
            chapter = {
                'chapter_number': chapter_num,
                'chapter_name': '',
                'total_shlokas': len(shlokas),
                'categories': [],
                'chapter_summary': '',
                'shlokas': []
            }
            data['chapters'].append(chapter)
        
        # Add shlokas
        for shloka in shlokas:
            if shloka['verse_number']:
                entry = self.create_shloka_entry(
                    verse_number=shloka['verse_number'],
                    sanskrit=shloka['sanskrit'],
                    english=shloka['english'],
                    hindi=shloka.get('hindi', ''),
                    kannada=shloka.get('kannada', ''),
                    explanation=shloka.get('explanation', ''),
                    categories=shloka.get('categories', [])
                )
                chapter['shlokas'].append(entry)
        
        # Update total_shlokas count
        chapter['total_shlokas'] = len(chapter['shlokas'])
        
        return data
    
    def update_metadata(self, data: Dict[str, Any]) -> Dict[str, Any]:
        """Update metadata after adding new chapters."""
        if 'metadata' in data:
            # Recalculate total shlokas
            total = sum(ch.get('total_shlokas', 0) for ch in data.get('chapters', []))
            data['metadata']['total_shlokas'] = total
            
            # Update chapter count
            data['metadata']['total_chapters'] = len(data.get('chapters', []))
        
        return data
    
    def save_json(self, data: Dict[str, Any], output_path: Path = None) -> str:
        """Save JSON data to file."""
        if output_path is None:
            output_path = self.main_json_path
        
        with open(output_path, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=2)
        
        return str(output_path)
    
    def validate_json(self, data: Dict[str, Any]) -> Dict[str, Any]:
        """Validate the JSON structure."""
        issues = []
        
        # Check metadata
        if 'metadata' not in data:
            issues.append("Missing 'metadata' key")
        
        # Check chapters
        if 'chapters' not in data or not isinstance(data['chapters'], list):
            issues.append("'chapters' must be a list")
        
        for ch in data.get('chapters', []):
            if 'chapter_number' not in ch:
                issues.append(f"Chapter missing 'chapter_number'")
            if 'shlokas' not in ch:
                issues.append(f"Chapter {ch.get('chapter_number')} missing 'shlokas'")
            
            for shloka in ch.get('shlokas', []):
                if 'verse_number' not in shloka:
                    issues.append(f"Shloka missing 'verse_number' in chapter {ch.get('chapter_number')}")
                elif not shloka.get('sanskrit'):
                    issues.append(f"Shloka {shloka.get('verse_number')} missing Sanskrit text")
                elif not shloka.get('english'):
                    issues.append(f"Shloka {shloka.get('verse_number')} missing English translation")
        
        return {
            'valid': len(issues) == 0,
            'issues': issues,
            'total_chapters': len(data.get('chapters', [])),
            'total_shlokas': sum(len(ch.get('shlokas', [])) for ch in data.get('chapters', []))
        }
    
    def integrate(self, shlokas_by_chapter: Dict[int, List[Dict[str, str]]]) -> bool:
        """
        Main integration method.
        
        Args:
            shlokas_by_chapter: Dict mapping chapter numbers to list of shloka dicts
        
        Returns:
            True if successful, False otherwise
        """
        try:
            # Load main JSON
            data = self.load_main_json()
            print(f"✓ Loaded main JSON with {len(data.get('chapters', []))} chapters")
            
            # Add each chapter
            for chapter_num, shlokas in shlokas_by_chapter.items():
                self.add_chapter_shlokas(data, chapter_num, shlokas)
                print(f"✓ Added {len(shlokas)} shlokas to Chapter {chapter_num}")
            
            # Update metadata
            data = self.update_metadata(data)
            print(f"✓ Updated metadata")
            
            # Validate
            validation = self.validate_json(data)
            print(f"\n✓ Validation Results:")
            print(f"  - Total chapters: {validation['total_chapters']}")
            print(f"  - Total shlokas: {validation['total_shlokas']}")
            if validation['issues']:
                print(f"  - Issues found: {len(validation['issues'])}")
                for issue in validation['issues'][:5]:  # Show first 5 issues
                    print(f"    • {issue}")
            
            # Save
            if validation['valid']:
                self.save_json(data)
                print(f"\n✓ Successfully saved to {self.main_json_path}")
                return True
            else:
                print(f"\n✗ Validation failed with {len(validation['issues'])} issues")
                return False
        
        except Exception as e:
            print(f"✗ Error during integration: {e}")
            return False


def usage_example():
    """Show example of how to use the integrator."""
    
    integrator = GitaIntegrator()
    
    # Example: Adding sample shlokas for Chapter 3
    chapter_3_shlokas = [
        {
            'verse_number': '3.1',
            'sanskrit': 'अर्जुन उवाच ।\nज्यायसी चेत्कर्मणस्ते मता बुद्धिर्जनार्दन ।',
            'english': 'Arjuna said: If knowledge be superior to action, O Janardana, why then dost thou engage me in this terrible action?',
            'hindi': 'अर्जुन बोले: यदि ज्ञान कर्म से श्रेष्ठ है, तो फिर आप मुझे इस भयानक युद्ध में क्यों लगा रहे हैं?',
            'kannada': '',
            'explanation': 'Arjuna questions Krishna about why he should fight if knowledge is superior.',
            'categories': ['confusion', 'knowledge', 'action']
        },
        # Add more shlokas...
    ]
    
    # Create integration data
    integration_data = {
        3: chapter_3_shlokas
    }
    
    # Run integration
    success = integrator.integrate(integration_data)
    return success


if __name__ == "__main__":
    print("Bhagavad Gita Chapter Integration Tool")
    print("=" * 50)
    print("\nThis script integrates chapters 3-10 into your main JSON file.")
    print("\nUsage in your code:")
    print("""
    integrator = GitaIntegrator()
    
    shlokas_by_chapter = {
        3: [shloka_dicts...],
        4: [shloka_dicts...],
        # ... etc
    }
    
    integrator.integrate(shlokas_by_chapter)
    """)
    print("\nOR use parse_verse_from_text() to parse formatted verse data.")
